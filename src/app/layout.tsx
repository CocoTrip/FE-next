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
      <body className={NOTO_SANS_KR.className}>
        <div className="grid mobile:grid-cols-mobile-4 mobile:gap-mobile tablet:grid-cols-tablet-8 tablet:gap-tablet desktop:grid-cols-desktop-12 desktop:gap-desktop">
          {children}
        </div>
      </body>
    </html>
  );
}
