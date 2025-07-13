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
    const galeri = await prisma.galeri.findMany({
       select: {
        gambar: true,
        deskripsi: true, 
      },
      orderBy: { id: 'asc' },
    });

    return NextResponse.json(serialize(galeri));
  } catch (error) {
    console.error('Error fetching galeri:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
