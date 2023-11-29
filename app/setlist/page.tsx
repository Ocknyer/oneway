import React, { useEffect, useState } from 'react';

const SetList = () => {
  //   const [mounted, setMounted] = useState<boolean>(false);

  //   useEffect(() => {
  //     setMounted(true);
  //   }, []);

  return (
    <main className='flex h-full flex-col items-center p-6 relative'>
      <div className='absolute top-10 pb-32'>
        <section className='mt-8 text-center'>
          <h1 className='text-2xl font-bold mb-4'>1부</h1>
          <div className='flex flex-col gap-5'>
            <p>쏜애플 - 청색증</p>
            <p>쏜애플 - 로마네스크</p>
            <p>파수꾼 - 산호초</p>
            <p>(coming soon)</p>
            <p>쏜애플 - 아가미</p>
            <p>쏜애플 - 할시온</p>
            <p>쏜애플 - 살</p>
            <p>쏜애플 - 아지랑이</p>
            <p>쏜애플 - 은하</p>
          </div>
        </section>

        <section className='mt-12 text-center'>
          <h2 className='text-2xl font-bold mb-4'>2부</h2>
          <div className='flex flex-col gap-5'>
            <p>(coming soon)</p>
            <p>쏜애플 - 파리의왕</p>
            <p>쏜애플 - 게와수돗물</p>
            <p>실리카겔 - Realize</p>
            <p>실리카겔 - Tik Tak Tok</p>
            <p>실리카겔 - No Pain</p>
            <p>쏜애플 - 멸종</p>
            <p>파수꾼 - 편도</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SetList;
