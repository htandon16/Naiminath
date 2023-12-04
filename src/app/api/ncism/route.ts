import { headers } from "next/headers";
import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function GET(request:NextRequest) {

  
  //const directoryPath = `src/app/blogfiles`;
  const directoryPath = path.join(process.cwd(), 'src/app/blogfiles');
  console.log("Current working directory:", directoryPath);

  if (!fs.existsSync(directoryPath)) {
    return new Response(`Directory not found`, { status: 404 });
  }
  const files = fs.readdirSync(directoryPath);

  // Create a list of file names
  const fileList = files.map((file) => {
    const filePath = `${directoryPath}/${file}`;
    const fileContent = fs.readFileSync(filePath, "utf-8");

    return {
      fileName: file,
      filePath: filePath,
      content: fileContent,
    };
  });

  console.log("readFIles==", JSON.stringify(fileList));
  return new Response(JSON.stringify(fileList), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const directoryPath = `src/app/blogfiles`;
  console.log("directoryPath", directoryPath);

  const fileName = `dynamicFile_${Date.now()}.html`;
  const filePath = `${directoryPath}/${fileName}`; // Adjusted file path
  console.log("HTML string has been written to the file:", filePath);

  // Make sure the directory exists before writing the file
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  fs.writeFileSync(filePath, body.content, "utf-8");

  console.log("HTML string has been written to the file:", filePath);

  return new NextResponse(body);
}
