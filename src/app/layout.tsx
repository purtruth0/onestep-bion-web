import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OneStep Bion | AI 배아 선별 솔루션",
  description: "AI와 타임랩스로 완성하는 프리미엄 배아 선별",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
