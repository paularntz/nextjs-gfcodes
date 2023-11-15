import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";

export async function GET(request) {
    const sstr = request.nextUrl.searchParams.get("sstr");
    await connectMongoDB()
    const topics = await Topic.find({address: { $regex: '.*' + sstr + '.*' } })
    return NextResponse.json({topics})
}