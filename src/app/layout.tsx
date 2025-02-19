import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from '@/components/NavBar';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "数字科学网 - 创新源于分享",
  description: "创新源于分享",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh_CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col items-center`}
      >
        <header className="flex w-full justify-center bg-blue-50 p-2"> 
          <NavBar />
        </header>

        <main className="w-full max-w-[1258px]  p-2">
          {children}
        </main>
        
        <footer className="w-full py-4 border-t border-gray-200 mt-auto">
          <div className="text-center text-xs text-stone-400">
            Copyright &copy; 2025 数字科学网 版权所有.
          </div>
        </footer>
      </body>
    </html>
  );
}
