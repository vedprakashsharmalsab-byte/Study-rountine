import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

interface VaultFileMeta {
  filename: string;
  relativePath: string;
  subject: string;
  sizeBytes: number;
  lastModified: string;
  title: string;
  snippet: string;
}

function scanVaultDirectory(dir: string, baseDir: string): VaultFileMeta[] {
  let results: VaultFileMeta[] = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(baseDir, fullPath).replace(/\\/g, "/");

    if (entry.isDirectory()) {
      results = results.concat(scanVaultDirectory(fullPath, baseDir));
    } else if (entry.isFile() && !entry.name.startsWith(".")) {
      try {
        const stats = fs.statSync(fullPath);
        let title = entry.name;
        let snippet = "";
        let subject = "General / Inbox";

        if (relPath.includes("maths")) subject = "Mathematics";
        else if (relPath.includes("science")) subject = "Science";
        else if (relPath.includes("social-science")) subject = "Social Science";
        else if (relPath.includes("topper-notes")) subject = "Topper Strategies";

        if (entry.name.endsWith(".md") || entry.name.endsWith(".txt") || entry.name.endsWith(".json")) {
          const content = fs.readFileSync(fullPath, "utf-8");
          const firstLine = content.split("\n").find(l => l.trim().length > 0) || "";
          if (firstLine.startsWith("#")) {
            title = firstLine.replace(/^[#\s]+/, "").trim();
          }
          snippet = content.slice(0, 200).replace(/[\r\n]+/g, " ");
        }

        results.push({
          filename: entry.name,
          relativePath: relPath,
          subject,
          sizeBytes: stats.size,
          lastModified: stats.mtime.toISOString(),
          title,
          snippet
        });
      } catch (e) {
        console.error(`Error reading ${fullPath}:`, e);
      }
    }
  }

  return results;
}

export async function GET(request: NextRequest) {
  try {
    const vaultPath = path.join(process.cwd(), "training-materials-vault");
    const files = scanVaultDirectory(vaultPath, vaultPath);

    const { searchParams } = new URL(request.url);
    const readFile = searchParams.get("file");

    if (readFile) {
      const sanitized = path.normalize(readFile).replace(/^(\.\.[\/\\])+/, "");
      const targetFilePath = path.join(vaultPath, sanitized);
      if (fs.existsSync(targetFilePath) && fs.statSync(targetFilePath).isFile()) {
        const content = fs.readFileSync(targetFilePath, "utf-8");
        return NextResponse.json({
          success: true,
          relativePath: sanitized,
          content
        });
      }
      return NextResponse.json({ success: false, error: "File not found" }, { status: 404 });
    }

    const totalSize = files.reduce((acc, f) => acc + f.sizeBytes, 0);

    return NextResponse.json({
      success: true,
      vaultDirectory: "training-materials-vault",
      totalFiles: files.length,
      totalSizeBytes: totalSize,
      files
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to scan vault" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { filename, content, folder = "inbox-new-files" } = body;

    if (!filename || !content) {
      return NextResponse.json(
        { success: false, error: "Filename and content are required" },
        { status: 400 }
      );
    }

    const safeFolder = folder.replace(/[^a-zA-Z0-9_\-\/]/g, "");
    const safeFilename = path.basename(filename).replace(/[^a-zA-Z0-9_\-\.]/g, "_");
    
    const vaultPath = path.join(process.cwd(), "training-materials-vault", safeFolder);
    if (!fs.existsSync(vaultPath)) {
      fs.mkdirSync(vaultPath, { recursive: true });
    }

    const targetFile = path.join(vaultPath, safeFilename);
    fs.writeFileSync(targetFile, content, "utf-8");

    return NextResponse.json({
      success: true,
      message: `File saved successfully to training-materials-vault/${safeFolder}/${safeFilename}`,
      path: `training-materials-vault/${safeFolder}/${safeFilename}`
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to save material" },
      { status: 500 }
    );
  }
}
