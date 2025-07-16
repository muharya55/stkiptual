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
    const prodi = await prisma.jurusan.findMany({
       select: {
        nama: true, 
        ukt1: true,
        ukt2: true,
        ukt3: true,
        ukt4: true,
        ukt5: true,
        ukt6: true,
        ukt7: true,
        ukt8: true,
        fakultas: {
          select: {
            nama: true,
            singkatan: true,
            program: true,
          },
        },
      },
      orderBy: { id: 'asc' },
    });

    return NextResponse.json(serialize(prodi));
  } catch (error) { 
    console.error("Artikel error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
