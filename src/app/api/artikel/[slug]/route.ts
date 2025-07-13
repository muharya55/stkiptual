import { prisma } from 'lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
 
function serialize<T>(obj: T): T {
  return JSON.parse(
    JSON.stringify(obj, (_, value) =>
      typeof value === 'bigint' ? Number(value) : value
    )
  );
}

export async function GET(
  request: NextRequest,
  context: { params: { slug: string } }
) {
  try {
    const artikel = await prisma.artikel.findFirst({
      where: { slug: context.params.slug },
    });

    if (!artikel) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json(serialize(artikel));
  } catch (error) {
    console.error('Artikel error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
