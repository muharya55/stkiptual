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
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { nama, nim, jurusan, pesan } = body;

    if (!nama || !nim || !jurusan || !pesan) {
      return NextResponse.json({ message: "Semua field wajib diisi." }, { status: 400 });
    }

    const data = await prisma.contact.create({
      data: {
        nama,
        nim,
        jurusan,
        pesan,
      },
    });

    return NextResponse.json(serialize({ message: "Berhasil disimpan", data , status: 201}));

  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json({ message: "Terjadi kesalahan server." }, { status: 500 });
  }
}
