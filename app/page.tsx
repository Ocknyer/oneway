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
      <main className='flex min-h-screen flex-col items-center justify-center p-10'>
        <section className='flex flex-col items-center gap-y-3 h-screen text-white mt-52'>
          <h2 className='text-xl drop-shadow-2xl'>밴드파수꾼 연말공연</h2>
          <h1 className='text-3xl drop-shadow-xl'>'편도'</h1>
          <h2 className='text-xl drop-shadow-2xl'>ONE WAY</h2>
        </section>
        <section className='h-full flex flex-col items-center gap-y-3 mb-96'>
          <p className='text-xl font-bold'>티켓</p>
          <p className='text-lg mb-5'>예매: 10,000₩ / 현매: 12,000₩</p>
          <p className='text-xl font-bold'>수용인원</p>
          <p className='text-lg mb-3'>60명 / 전석 스탠딩</p>
          <button
            onClick={onClickToReservation}
            className='border-solid border p-3 lg:w-56 md:w-48 w-36'
          >
            예매하기
          </button>
        </section>
        <section className='h-full flex flex-col items-center gap-y-3 mb-40'>
          <p className='text-xl font-bold'>일시</p>
          <p className='text-lg mb-5'>2023.12.30.토요일 19:00 ~ 21:00</p>
          <p className='text-xl font-bold'>장소</p>
          <p className='text-lg'>신촌 201P</p>
          <NaverMap />
          <p className='text-sm'>서울 서대문구 창천동 52-56 지하2층</p>
          <a
            className='openApp text-sm border-solid border py-1 px-2'
            // href='nmap://search?query=%201p+%ec%8b%a0%ec%b4%8c&appname=com.example.myapp'
            href='nmap://place?id=1207333493&appname=com.example.oneway'
          >
            네이버 지도에서 열기
          </a>
        </section>
      </main>
    )
  );
}
