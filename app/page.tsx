/* eslint-disable react/no-unescaped-entities */
'use client';

import NaverMap from '@/components/NaverMap';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        </section>
        <section className='mt-3'>
          <div className='mt-3'>
            <h1>셋리스트</h1>
            <h2>쏜애플</h2>
            <p>멸종</p>
            <p>할시온</p>
            <p>살</p>
            <p>파리의왕</p>
            <p>게와수돗물</p>
            <p>아지랑이</p>
            <p>은하</p>
            <p>로마네스크</p>
          </div>
          <div className='mt-3'>
            <h2>실리카겔</h2>
            <p>머큐리얼</p>
            <p>노페인</p>
            <p>틱택톡</p>
            <p>realize</p>
          </div>
          <div className='mt-3'>
            <h2>파수꾼</h2>
            <p>산호초</p>
            <p>흩날리는 벚꽃처럼</p>
            <p>괜찮아</p>
            <p>문득 불안해지는 것들에 대하여</p>
            <p>편도</p>
          </div>
        </section>
      </main>
    )
  );
}
