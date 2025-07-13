import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();


function serialize<T>(obj: T): T {
  return JSON.parse(
    JSON.stringify(obj, (_, value) =>
      typeof value === "bigint" ? Number(value) : value
    )
  );
}


type Params = { params: { slug: string } };

export async function GET(_: Request, { params }: Params) {
  try {
    const artikel = await prisma.artikel.findFirst({
      where: { slug: params.slug },
    });

    if (!artikel) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(serialize(artikel));
  } catch (error) {
    console.error("Artikel error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
