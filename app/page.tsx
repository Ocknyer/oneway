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
        <section className='w-full flex flex-col items-center h-screen text-white relative'>
          <div className='flex flex-col gap-y-3 items-center absolute top-28 w-full'>
            <h2 className='text-xl drop-shadow-2xl'>밴드 파수꾼 연말공연</h2>
            <h1 className='text-3xl drop-shadow-xl'>'편도'</h1>
            <h2 className='text-xl drop-shadow-2xl'>ONE WAY</h2>
          </div>
          <div className='flex flex-col items-center gap-2 absolute bottom-32'>
            <p className='text-sm'>scroll</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5'
              />
            </svg>
          </div>
        </section>
        <section className='h-full flex flex-col items-center gap-y-3 mb-96'>
          <p className='text-xl font-bold'>티켓</p>
          <p className='text-lg'>예매: 10,000₩ / 현매: 12,000₩</p>
          <p className='text-xs'>&#8251; 조기 매진 시 현매는 불가능합니다.</p>
          <p className='text-xs mb-5'>&#8251; 1인 3매까지 구매하실 수 있습니다.</p>
          <p className='text-xl font-bold'>수용인원</p>
          <p className='text-lg mb-3'>60명 / 전석 스탠딩</p>
          <button
            onClick={onClickToReservation}
            className='border-solid border p-3 lg:w-56 md:w-48 w-36'
          >
            예매하기
          </button>
        </section>
        <section className='h-full flex flex-col items-center gap-y-3 mb-48'>
          <p className='text-xl font-bold'>일시</p>
          <p className='text-lg mb-5'>2023.12.30.토요일 18:30 - 20:30</p>
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
