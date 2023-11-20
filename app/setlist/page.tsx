import React, { useEffect, useState } from 'react';

const SetList = () => {
  //   const [mounted, setMounted] = useState<boolean>(false);

  //   useEffect(() => {
  //     setMounted(true);
  //   }, []);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section className='mt-3'>
        <div className='mt-3'>
          <h1>셋리스트</h1>
          <h2>쏜애플</h2>
          <p>청색증</p>
          <p>로마네스크</p>
          <p>아가미</p>
          <p>할시온</p>
          <p>파리의왕</p>
          <p>게와수돗물</p>
          <p>살</p>
          <p>아지랑이</p>
          <p>은하</p>
          <p>멸종</p>
        </div>
        <div className='mt-3'>
          <h2>실리카겔</h2>
          <p>Realize</p>
          <p>Tik Tak Tok</p>
          <p>No Pain</p>
        </div>
        <div className='mt-3'>
          <h2>파수꾼</h2>
          <p>산호초</p>
          <p>흩날리는 벚꽃처럼</p>
          <p>부화</p>
          <p>편도</p>
        </div>
      </section>
    </main>
  );
};

export default SetList;
