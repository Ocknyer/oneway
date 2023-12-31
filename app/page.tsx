/* eslint-disable react/no-unescaped-entities */
'use client';

import NaverMap from '@/components/NaverMap';
import useCopyClipboard from '@/hooks/useCopyClipboard';
import { useVh } from '@/hooks/useVh';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [mounted, setMounted] = useState<boolean>(false);
  const vh = useVh();
  const { copyToClipboard } = useCopyClipboard();

  const [scroll1, setScroll1] = useState('flex');
  const [scroll2, setScroll2] = useState('flex');

  useEffect(() => {
    setMounted(true);
    sessionStorage.setItem('isBooked', 'false');
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 150) {
      setScroll1('flex scroll-bottom');
    } else if (window.scrollY < 150) {
      setScroll1('flex');
    }
  };

  const handleScroll2 = () => {
    if (window.scrollY >= 1000) {
      setScroll2('flex scroll-bottom');
    } else if (window.scrollY < 1000) {
      setScroll2('flex');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll2);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll2);
    };
  }, []);

  const onClickToReservation = () => {
    router.push('reservation');
  };

  return (
    mounted && (
      <main className='flex min-h-screen flex-col items-center justify-center p-9'>
        <section className='w-full flex flex-col items-center text-white relative' style={{ height: `${100 * vh}px` }}>
          <div className='flex flex-col gap-y-3 items-center absolute top-20 w-full'>
            <h2 className='text-xl drop-shadow-2xl'>밴드 파수꾼 연말공연</h2>
            <h1 className='text-3xl drop-shadow-xl'>'편도'</h1>
            <h2 className='text-xl drop-shadow-2xl'>ONE WAY</h2>
          </div>
          <div className='flex flex-col absolute top-60 gap-2 text-xs text-center'>
            <p>시간이 무척 빠른 것 같은 오늘입니다.</p>
            <p>여러분의 한 해가 너무 힘들지 않으셨길,</p>
            <p>다가오는 내년은 보다 편안하시길</p>
            <p>그렇게 행복하시길 바라겠습니다.</p>
            <p className='mt-2'>- 파수꾼 드림 -</p>
          </div>
          <div className={`${scroll1} flex-col items-center gap-2 absolute bottom-44 opacity-40`}>
            <p className='text-sm'>아래로 스크롤</p>
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

        <section className='flex flex-col items-center gap-y-3 relative' style={{ height: `${100 * vh}px` }}>
          {/* <section className='h-full flex flex-col items-center gap-y-3 mb-96 relative'> */}
          <p className='text-xl font-bold'>티켓</p>
          <p className='text-lg'>예매: 10,000₩ / 현매: 12,000₩</p>
          <p className='text-xs'>
            &#8251; 하나은행{' '}
            <button className='underline' onClick={() => copyToClipboard('하나은행 31201168414007')}>
              312-0116-8414-007
            </button>{' '}
            김대운
          </p>
          <p className='text-xs'>&#8251; 조기 매진 시 현매는 불가능합니다.</p>
          <p className='text-xs mb-5'>&#8251; 1인 3매까지 구매하실 수 있습니다.</p>
          <p className='text-xl font-bold'>수용인원</p>
          <p className='text-lg mb-3'>60명 / 전석 스탠딩</p>
          <p className='text-xl'>문의</p>
          <p className='text-lg mb-3'>010-3364-0633 김대운</p>
          <button onClick={onClickToReservation} className='border-solid border p-3 lg:w-56 md:w-48 w-36'>
            예매하기
          </button>
          <div className={`${scroll2} flex-col items-center gap-2 mt-8 opacity-40`}>
            <p className='text-sm'>일시/장소</p>
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

        <section
          className='flex flex-col items-center justify-center gap-y-3 text-center'
          style={{ height: `${100 * vh}px` }}
        >
          {/* <section className='h-full flex flex-col items-center gap-y-3 mb-48 text-center'> */}
          <p className='text-xl font-bold'>일시</p>
          <p className='text-lg mb-6'>
            2023.12.30.토요일
            <br />
            18:30 - 20:30
          </p>
          <p className='text-xl font-bold'>장소</p>
          <p className='text-lg'>신촌 201P</p>
          <NaverMap />
          <p className='text-sm'>서울 서대문구 창천동 52-56 지하2층</p>
          <a
            className='openApp text-sm border-solid border py-1 px-2'
            href='nmap://place?id=1207333493&appname=com.example.oneway'
          >
            네이버 지도에서 열기
          </a>
        </section>
      </main>
    )
  );
}
