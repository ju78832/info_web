import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const {
    name,
    selfRating,
    achievements,
    challenges,
    goals,
    feedback,
    dreamTeam,
    improvement,
    date,
  } = await req.json();

  try {
    const formData = await prisma.formdata.create({
      data: {
        name,
        selfRating,
        achievements,
        challenges,
        goals,
        feedback,
        dreamTeam,
        improvement,
        date,
      },
    });
    return NextResponse.json(formData);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
