import { NextResponse } from "next/server";
import { getChapterQuestions } from "@/data/chapters";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const chapterStr = searchParams.get("chapter");

  if (!chapterStr) {
    return NextResponse.json({ error: "Chapter parameter is required" }, { status: 400 });
  }

  const chapterId = parseInt(chapterStr);
  const questions = getChapterQuestions(chapterId);

  return NextResponse.json({ questions });
}
