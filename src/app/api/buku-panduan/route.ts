import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function serialize<T>(obj: T): T {
  return JSON.parse(
    JSON.stringify(obj, (_, value) =>
      typeof value === "bigint" ? Number(value) : value
    )
  );
}

export async function GET() {
  try {
    const galeri = await prisma.buku_panduan.findMany({
       select: {
        nama: true,
        tahun: true, 
        nama_file: true, 
      },
      orderBy: { id: 'asc' },
    });

    return NextResponse.json(serialize(galeri));
  } catch (error) { 
    console.error("Artikel error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
