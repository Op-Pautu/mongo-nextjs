import dbConnect from "@/lib/mongodb";
import { Topic } from "@/models/Topic";
import { NextRequest, NextResponse } from "next/server";

interface IParams {
  params: {
    id: string;
  };
}

export async function PUT(req: NextRequest, { params }: IParams) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await req.json();
  await dbConnect();

  await Topic.findByIdAndUpdate(id, { title, description });

  return NextResponse.json({ message: "Topic updated" }, { status: 200 });
}

export async function GET(req: NextRequest, { params }: IParams) {
  const { id } = params;

  await dbConnect();

  const topic = await Topic.findOne({ _id: id });

  return NextResponse.json({ topic }, { status: 200 });
}
