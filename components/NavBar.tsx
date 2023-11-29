'use client';

import { usePathname, useRouter } from 'next/navigation';

const buttonData = [
  { id: 1, name: '/', title: '홈' },
  { id: 2, name: '/reservation', title: '예매하기' },
  { id: 3, name: '/setlist', title: '셋리스트' },
];

const NavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const onClickEachButton = (e: any) => {
    if (e.target.name === '/') {
      router.push('/');
    } else if (e.target.name === '/reservation') {
      router.push('/reservation');
    } else if (e.target.name === '/setlist') {
      router.push('/setlist');
    }
  };

  return (
    <nav className='navbar flex w-full h-15 p-4 fixed bottom-0 justify-between bg-black/40 text-base'>
      {buttonData.map(button => {
        return (
          <button
            key={button.id}
            name={button.name}
            className={`w-full ${pathname === button.name ? 'text-white' : 'text-gray-400'}`}
            onClick={onClickEachButton}
          >
            {button.title}
          </button>
        );
      })}
    </nav>
  );
};

export default NavBar;
