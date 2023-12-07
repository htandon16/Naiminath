import PdfViewer from "./page";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <script
            async
            src="../../node_modules/flowbite/dist/flowbite.min.js"
          ></script>
          <div className="w-full min-h-screen overflow-hidden">
              <PdfViewer/>
          </div>
        </body>
      </html>
    );
  }