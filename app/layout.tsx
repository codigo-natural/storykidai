import type { Metadata } from "next";
import { Creepster, Fredoka } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { Header } from "./_components/Header";

/*const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
*/
const MyAppFont = Creepster({ subsets: ['latin'], weight: '400' })
export const secondFont = Fredoka({ subsets: ['hebrew'], weight: '600' })


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${MyAppFont.className} bg-halloweenbg`}
      >
        <Provider>
          {/* Header */}
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
