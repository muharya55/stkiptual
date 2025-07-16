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
    const prodi = await prisma.kalender_akademik.findMany({
       select: {
        kegiatan: true, 
        tanggal: true,
        semester: true, 
      },
      orderBy: { id: 'asc' },
      where: { is_active: "1" },
    });

    return NextResponse.json(serialize(prodi));
  } catch (error) { 
    console.error("Artikel error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
