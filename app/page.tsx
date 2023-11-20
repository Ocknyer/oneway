/* eslint-disable react/no-unescaped-entities */
'use client';

import NaverMap from '@/components/NaverMap';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    sessionStorage.setItem('isBooked', 'false');
  }, []);

  const onClickToReservation = () => {
    router.push('reservation');
  };

  return (
    mounted && (
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <section>
          <h1>밴드파수꾼 단독공연 '편도'</h1>
          <p>일시</p>
          <p>2023.12.30.토요일 19:00 ~ 21:00</p>
          <p>장소</p>
          <p>신촌 201p</p>
          <p>서울 서대문구 창천동 52-56 지하2층</p>
          <NaverMap />
          <a className='openApp' href='nmap://search?query=%201p&appname=com.example.myapp'>
            네이버 지도에서 열기
          </a>
          <p>티켓</p>
          <p>예매: 10,000₩ / 현매: 12,000₩</p>
          <p>수용인원</p>
          <p>60명 / 전석 스탠딩</p>
          <button className='bg-white' onClick={onClickToReservation}>
            예매하기
          </button>
        </section>
      </main>
    )
  );
}
