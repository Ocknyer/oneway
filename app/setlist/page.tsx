import React, { useEffect, useState } from 'react';

const SetList = () => {
  //   const [mounted, setMounted] = useState<boolean>(false);

  //   useEffect(() => {
  //     setMounted(true);
  //   }, []);

  return (
    <main className='flex min-h-screen flex-col items-center p-6 relative'>
      <div className='absolute top-20'>
        <section className='text-center'>
          <h1 className='text-xl mb-2'>1부</h1>
          <p className='text-base'>쏜애플 - 청색증</p>
          <p className='text-base'>쏜애플 - 로마네스크</p>
          <p className='text-base'>파수꾼 - 산호초</p>
          <p className='text-base'>(coming soon)</p>
          <p className='text-base'>쏜애플 - 아가미</p>
          <p className='text-base'>쏜애플 - 할시온</p>
          <p className='text-base'>쏜애플 - 살</p>
          <p className='text-base'>쏜애플 - 아지랑이</p>
          <p className='text-base'>쏜애플 - 은하</p>
        </section>

        <section className='mt-8 text-center'>
          <h2 className='text-xl mb-2'>2부</h2>
          <p className='text-base'>(coming soon)</p>
          <p className='text-base'>쏜애플 - 파리의왕</p>
          <p className='text-base'>쏜애플 - 게와수돗물</p>
          <p className='text-base'>실리카겔 - Realize</p>
          <p className='text-base'>실리카겔 - Tik Tak Tok</p>
          <p className='text-base'>실리카겔 - No Pain</p>
          <p className='text-base'>쏜애플 - 멸종</p>
          <p className='text-base'>파수꾼 - 편도</p>
        </section>
      </div>
    </main>
  );
};

export default SetList;
