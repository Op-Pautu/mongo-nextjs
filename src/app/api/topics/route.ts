import dbConnect from "@/lib/mongodb";
import { Topic } from "@/models/Topic";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { title, description } = await req.json();

  await dbConnect();
  await Topic.create({
    title,
    description,
  });

  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

export async function GET() {
  await dbConnect();
  const topics = await Topic.find();

  return NextResponse.json({ topics });
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");

  await dbConnect();

  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" });
}
