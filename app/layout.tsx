/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-before-interactive-script-outside-document */
'use client';

import './globals.css';
import NavBar from '@/components/NavBar';
import { useVh } from '@/hooks/useVh';
import { usePathname } from 'next/navigation';
import { Nanum_Myeongjo } from 'next/font/google';

const nanumMyeongjo = Nanum_Myeongjo({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const vh = useVh();
  const pathname = usePathname();

  return (
    <html lang='ko' className={nanumMyeongjo.className}>
      <head>
        <title>밴드 파수꾼 연말공연 '편도'</title>
        <meta property='og:description' content='밴드 파수꾼 연말공연 홍보/예매 홈페이지' />
        <meta property='og:image' content='<generated>' />
        <meta property='og:image:type' content='<generated>' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <script
          defer
          type='text/javascript'
          src='https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=aejuu1jw3l'
        />
      </head>
      <body
        style={{
          height: `${100 * vh}px`,
          position: 'relative',
          overflow: pathname === '/reservation' ? 'hidden' : 'scroll',
        }}
      >
        {children}
        <div className='bg-container'></div>
        <NavBar />
      </body>
    </html>
  );
}
