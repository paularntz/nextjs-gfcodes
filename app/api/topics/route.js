import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";


export async function POST(request) {
    const {address, firstName, lastName, description, violation} = await request.json()
    await connectMongoDB()
    await Topic.create({address, firstName, lastName, description, violation})
    return NextResponse.json({message: "Created"}, {status: 201})
}

export async function GET() {
    await connectMongoDB()
    const topics = await Topic.find()
    return NextResponse.json({topics})
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message: "Deleted" }, {status: 200})
}

