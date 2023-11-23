'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const buttonData = [
  { id: 1, name: 'home', title: '홈' },
  { id: 2, name: 'reserve', title: '예매하기' },
  { id: 3, name: 'setlist', title: '셋리스트' },
];

const NavBar = () => {
  const router = useRouter();

  const onClickEachButton = (e: any) => {
    if (e.target.name === 'home') {
      router.push('/');
    } else if (e.target.name === 'reserve') {
      router.push('/reservation');
    } else if (e.target.name === 'setlist') {
      router.push('/setlist');
    }
  };
  return (
    <nav className='flex w-full h-16 p-4 fixed bottom-0 justify-between bg-transparent border-t border-solid border-black'>
      {buttonData.map(button => {
        return (
          <button key={button.id} name={button.name} className='w-full' onClick={onClickEachButton}>
            {button.title}
          </button>
        );
      })}
    </nav>
  );
};

export default NavBar;
