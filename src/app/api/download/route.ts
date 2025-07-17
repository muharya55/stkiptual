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

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '6');
  const skip = (page - 1) * limit;

  try {
    const [total, data] = await Promise.all([
      prisma.download.count(),
      prisma.download.findMany({
        skip,
        take: limit,
        orderBy: { tanggal_upload: 'desc' },
      }),
    ]);

    const withExtras = data.map(item => ({
      ...item,
      url: `/storage/downloads/${item.nama_file}`,
      icon: getFileIcon(item.ekstensi),
    }));

    return NextResponse.json(
      serialize({
        data: withExtras,
        meta: {
          total,
          currentPage: page,
          lastPage: Math.ceil(total / limit),
        },
      })
    );
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

function getFileIcon(ext: string): string {
  switch (ext.toLowerCase()) {
    case 'pdf': return '/images/logo/logopdf.svg';
    case 'doc':
    case 'docx': return '/images/logo/logodokumen.svg';
    case 'xls':
    case 'xlsx': return '/images/logo/logopdf.svg';
    case 'jpg':
    case 'jpeg':
    case 'png': return '/images/logo/logodokumen.svg';
    default: return '/images/logo/logodokumen.svg';
  }
}
