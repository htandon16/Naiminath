import { headers } from "next/headers";
import fs from "fs";

async function GET(request: Request) {
  console.log("fs=======", fs);
  return new Response("Hello, Next.js!", {
    status: 200,
  });
}

export default GET;
