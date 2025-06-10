import { connectDB } from "@/lib/mongodb";
import { Message } from "@/models/message";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try {
        const {name,email,message} = await req.json();
        await connectDB();
        await Message.create({name,email,message});
        return NextResponse.json({message:'Message sent successfully'}, {status:200});
    } catch (error) {
        return NextResponse.json({ error: `Failed to send message. ${error}` }, { status: 500 });
    }
}