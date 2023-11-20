/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-before-interactive-script-outside-document */
'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import { useVh } from '@/hooks/useVh';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const vh = useVh();

  return (
    <html lang='ko'>
      <head>
        <title>밴드파수꾼 단독공연 '편도'</title>
        <meta property='og:description' content='밴드 파수꾼 단독공연 홍보 및 예매 페이지입니다.' />
        {/* <meta property='og:image' content='/public/imgs/og_image.png' /> */}
        {/* <meta property='og:image:width' content='1200' /> */}
        {/* <meta property='og:image:height' content='630' /> */}
        <script
          async
          type='text/javascript'
          src='https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=aejuu1jw3l'
        />
      </head>
      <body className={inter.className} style={{ height: `${100 * vh}px`, position: 'relative' }}>
        {children}
        <NavBar />
      </body>
    </html>
  );
}
