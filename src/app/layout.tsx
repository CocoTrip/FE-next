import React from 'react';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';

const NOTO_SANS_KR = Noto_Sans_KR({
  preload: true,
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={NOTO_SANS_KR.className}>{children}</body>
    </html>
  );
}
