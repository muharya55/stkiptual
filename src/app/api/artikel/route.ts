import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

function serialize(obj: any): any {
  return JSON.parse(
    JSON.stringify(obj, (_, value) =>
      typeof value === "bigint" ? Number(value) : value
    )
  );
}
const prisma = new PrismaClient();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const kategori = searchParams.get("kategori") || "";
  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "6", 10);
  const offset = (page - 1) * limit;
  const whereCondition: any = {};

  if (kategori) {
    whereCondition.kategori = { equals: kategori };
  }

  if (search) {
    whereCondition.OR = [
      { judul: { contains: search } },
      { content: { contains: search } },
    ];
  }

  const [data, total] = await Promise.all([
    prisma.artikel.findMany({
      where: whereCondition,
      orderBy: { id: "desc" },
      skip: offset,
      take: limit,
      select: {
        judul: true,
        slug: true,
        kategori: true,
        thumbnail: true,
        created_at: true,
      },
    }),
    prisma.artikel.count({ where: whereCondition }),
  ]);

  return NextResponse.json(
    serialize({
      data,
      meta: {
        total,
        page,
        lastPage: Math.ceil(Number(total) / limit),
      },
    })
  );
}
