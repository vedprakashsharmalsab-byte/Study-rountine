import { NextResponse } from "next/server";
import { getChapterQuestions } from "@/data/chapters";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const chapterStr = searchParams.get("chapter");
  const subject = searchParams.get("subject") || "math";

  if (!chapterStr) {
    return NextResponse.json({ error: "Chapter parameter is required" }, { status: 400 });
  }

  const chapterId = parseInt(chapterStr);
  const questions = getChapterQuestions(chapterId, subject);

  return NextResponse.json({ questions, subject, chapterId });
}
