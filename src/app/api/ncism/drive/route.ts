import { existsSync } from "fs";
// pages/api/googleDrive.js

import fs from "fs";
import path from "path";
import process from "process";
import { authenticate } from "@google-cloud/local-auth";
import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

const SCOPES = ["https://www.googleapis.com/auth/drive"];

const TOKEN_PATH = path.join(process.cwd(), "src", "token.json");
const CREDENTIALS_PATH = path.join(process.cwd(), "src", "credentials.json");

const API_KEY = "AIzaSyCYBae_0O2BuXaG6oiDAouK0ZHO5vlM27Y";
const folderId = "146Am-MP_RV0TbS44jjSWTsPYZImzk6hq";

//const apiUrl = `https://www.googleapis.com/drive/v3/files?q=${folderId}+in+parents&key=${apiKey}`;

// export async function GET(req: NextRequest, resp: NextApiResponse) {
//   try {
//     const drive = google.drive({ version: "v3", auth: apiKey });
//     const res = await drive.files.list();
//     const files = res.data.files;
//     if (files?.length === 0) {
//       console.log("No files found.");
//       return;
//     }

//     console.log("Files:");
//     files?.map((file) => {
//       console.log(`${file.name} (${file.id})`);
//     });
//     if (!res.status) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }
//     const data = await res.data;
//     console.log(data);
//     resp.status(200).json({ message: "API executed successfully." });
//   } catch (error: any) {
//     console.log("Error fetching data:", error.message);
//     throw error; // Rethrow the error to handle it elsewhere if needed
//   }
// }

// console.log("CREDENTIALS_PATH", CREDENTIALS_PATH);

// // Check if 'credentials.json' exists
// if (!fs.existsSync(CREDENTIALS_PATH)) {
//   console.error(`Error: 'credentials.json' not found at ${CREDENTIALS_PATH}`);
//   process.exit(1);
// }

async function loadSavedCredentialsIfExist() {
  try {
    const content: any = await fs.readFileSync(TOKEN_PATH,'utf8');
    const credentials = JSON.parse(content);
    return google.auth.fromJSON(credentials);
  } catch (err) {
    return null;
  }
}

async function saveCredentials(client: any) {
  const content: any = await fs.readFileSync(CREDENTIALS_PATH,'utf8');
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: "authorized_user",
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFileSync(TOKEN_PATH, payload);
}

async function authorize() {
  try {
    let client: any = await loadSavedCredentialsIfExist();

    if (client) {
      return client;
    }

    console.log("authorize====1");
    client = await authenticate({
      scopes: SCOPES,
      keyfilePath: CREDENTIALS_PATH,

    });
    console.log("authorize====2");
    if (client.credentials) {
      await saveCredentials(client);
    }
    return client;
  } catch (error:any) {
    console.error("error===", error.stack);
  }
}

async function listFiles(authClient: any) {
  const drive = google.drive({ version: "v3", auth: API_KEY });
    const res = await drive.files.list({
    pageSize: 10,
    fields: "nextPageToken, files(id, name)",
  });
  const files = res.data.files;
  if (files?.length === 0) {
    console.log("No files found.");
    return;
  }

  console.log("Files:");
  files?.map((file) => {
    console.log(`${file.name} (${file.id})`);
  });
}

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    const authClient = await authorize();
    await listFiles(authClient);

    res.status(200).json({ message: "API executed successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
