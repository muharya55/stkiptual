import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();


function serialize<T>(obj: T): T {
  return JSON.parse(
    JSON.stringify(obj, (_, value) =>
      typeof value === "bigint" ? Number(value) : value
    )
  );
}

type Params = { params: { slug: string } }

export async function GET( request: NextRequest,
  context: {
    params: Record<string, string>; // ✅ atau gunakan jenis generic
  }) {
  try {
    const slug = context.params.slug;

    const artikel = await prisma.artikel.findFirst({
      where: { slug: slug },
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
