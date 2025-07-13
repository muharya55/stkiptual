import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function serialize(obj: any): any {
  return JSON.parse(
    JSON.stringify(obj, (_, value) =>
      typeof value === "bigint" ? Number(value) : value
    )
  );
}
export async function GET() {
  try {
    const struktur = await prisma.struktur_organisasi.findMany({
       select: {
        nama: true,
        jabatan: true, 
        gambar: true, 
        kategori: true, 
      },
      orderBy: { id: 'asc' },
    });

    return NextResponse.json(serialize(struktur));
  } catch (error) {
    console.error('Error fetching galeri:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
