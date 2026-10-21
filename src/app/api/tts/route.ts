import { NextRequest, NextResponse } from "next/server";
import { MsEdgeTTS, OUTPUT_FORMAT } from "msedge-tts";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text, voice = "en-IN-NeerjaExpressiveNeural", rate = 1.0, pitch = 0 } = body;

    if (!text || typeof text !== "string") {
      return NextResponse.json({ error: "Missing text parameter" }, { status: 400 });
    }

    // Sanitize text length per request (limit to ~3000 chars for fast response)
    const truncatedText = text.slice(0, 3000).trim();

    const tts = new MsEdgeTTS();
    // Default to Studio MP3 format (24kHz 96kbps mono - ultra clear, compact file size)
    await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);

    // Calculate rate & pitch options
    let rateOption: string | undefined = undefined;
    if (rate !== 1.0) {
      const pct = Math.round((rate - 1.0) * 100);
      rateOption = pct >= 0 ? `+${pct}%` : `${pct}%`;
    }

    let pitchOption: string | undefined = undefined;
    if (pitch !== 0) {
      pitchOption = pitch >= 0 ? `+${pitch}Hz` : `${pitch}Hz`;
    }

    const { audioStream } = tts.toStream(truncatedText, {
      rate: rateOption,
      pitch: pitchOption,
      volume: "+25%", // Slightly boosted for loud, clear, confident teacher presence!
    });

    // Collect chunks into a single audio buffer
    const chunks: Buffer[] = [];
    await new Promise<void>((resolve, reject) => {
      audioStream.on("data", (chunk: Buffer) => {
        chunks.push(chunk);
      });
      audioStream.on("end", () => resolve());
      audioStream.on("close", () => resolve());
      audioStream.on("error", (err: Error) => reject(err));
    });

    const fullBuffer = Buffer.concat(chunks);

    if (fullBuffer.length === 0) {
      return NextResponse.json(
        { error: "Empty audio buffer, fallback to client speech" },
        { status: 503 }
      );
    }

    return new NextResponse(fullBuffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": fullBuffer.length.toString(),
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch (error: any) {
    console.warn("API TTS Fallback:", error?.message);
    return NextResponse.json(
      { error: error?.message || "Failed to generate speech audio" },
      { status: 503 }
    );
  }
}
