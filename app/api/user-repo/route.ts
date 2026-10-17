import { db, repositories } from "@/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    const { repoId, userId, name, full_name, private_, html_url, description, updated_at, language, default_branch, owner } = await req.json()

    //@ts-ignore
    const result = await db.insert(repositories).values({
        repoId,
        userId,
        name,
        full_name: full_name,
        private: private_ ? 1 : 0,
        html_url: html_url,
        description,
        language,
        default_branch,
        owner
    }).returning()
    return NextResponse.json(result[0])
}


export async function GET(req:NextRequest) {
    const {searchParams} = new URL(req.url)

    const userId = searchParams.get("userId")

    //@ts-ignore
    const result = await db.select().from(repositories).where(eq(repositories.userId, userId??0))

    return NextResponse.json(result)
}