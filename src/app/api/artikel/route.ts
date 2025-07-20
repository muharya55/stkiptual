import { PrismaClient,Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

function serialize<T>(obj: T): T {
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
  // const search = searchParams.get("q") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "6", 10);
  const offset = (page - 1) * limit;
  const whereCondition: Prisma.artikelWhereInput = {};
  const selectCondition: Prisma.artikelSelect = {
        judul: true,
        slug: true,
        kategori: true,
        image: true,
        created_at: true
  };

  if (kategori && kategori !='all') {
    whereCondition.kategori = { equals: kategori };
  }
  if (kategori && kategori =='all') {
    selectCondition.content =  true;
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
      select: selectCondition,
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
