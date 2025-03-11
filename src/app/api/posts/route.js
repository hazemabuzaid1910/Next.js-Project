import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async(request) => {
    try {
        console.log("🟢 Connecting to MongoDB...");
        await connect();
        console.log("✅ Connected to MongoDB");

        console.log("🟢 Fetching posts...");
        const posts = await Post.find();
        console.log("✅ Posts fetched:", posts);

        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        console.error("❌ Error fetching posts:", error.message);
        return NextResponse.json({ message: "Internal Server Error", error: error.message }, { status: 500 });
    }
};