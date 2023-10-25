import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "밴드파수꾼 단독공연 '편도'",
  description: '밴드 파수꾼 단독공연 홍보 및 예매 페이지입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
      <Script
        type='text/javascript'
        // strategy='beforeInteractive'
        src='https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=aejuu1jw3l'
      ></Script>
    </html>
  );
}
