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

 
    const utilities = await prisma.utilities.findFirst({
      select: {
        data: true, 
      },
      where: {slug},
    });

    if (!utilities) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(serialize(utilities));
  } catch (error) {
    console.error("utilities error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
