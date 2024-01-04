import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { GlobalContextProvider } from "./context/store";
import BannerHeader from "./(components)/BannerHeader";
import Footer from "./(components)/footer";
import { ImportantLink } from "./(components)/ImportantLink";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "NAMC",
    template: "%s | NAMC",
  },
  description: "NAMC website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full min-h-screen overflow-hidden">
          <GlobalContextProvider>
            <BannerHeader />
            {children}
            <Footer />
          <ImportantLink/>
          </GlobalContextProvider>
        </div>
      </body>
    </html>
  );
}
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {/* <script
//           //async
//           //src="../../node_modules/flowbite/dist/flowbite.min.js"
//         ></script> */}
//         <div className="w-full min-h-screen overflow-hidden">
//           <GlobalContextProvider>
//             <BannerHeader />
//             {children}
//             <Footer />
//           </GlobalContextProvider>
//         </div>
//       </body>
//     </html>
//   );
// };
