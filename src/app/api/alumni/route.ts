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
    const alumni = await prisma.alumni.findMany({
      orderBy: { id: 'asc' },
      select: {
        nama: true,
        jabatan: true,
        gambar: true,
        motivasi: true 
      },
    });

    return NextResponse.json(serialize(alumni));
  } catch (error) {
    console.error("Artikel error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
