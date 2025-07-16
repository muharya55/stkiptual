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

// type Params = { params: { slug: string } }

export async function GET(  request: NextRequest,
  { params }: { params: Promise<Record<string, string>> }
) {
  try {
    const { slug } = await params;

 
    const biro = await prisma.biro.findFirst({
      select: {
        nama: true,
        nama_pimpinan: true, 
        slug: true, 
        gambar_pimpinan: true, 
        content: true, 
        email_pimpinan: true
      },
      where: {slug},
    });

    if (!biro) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(serialize(biro));
  } catch (error) {
    console.error("biro error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
