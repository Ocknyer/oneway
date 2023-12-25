import React from 'react';

interface ModalProps {
  onClickOpenLyricModal: (songName?: string) => void;
  lyrics: { songName: string; lyric: string };
}

const LyricModal = ({ onClickOpenLyricModal, lyrics }: ModalProps) => {
  return (
    <div className='lyric-modal w-72 h-4/5 rounded-2xl fixed p-8 pt-10 mb-10 overflow-scroll text-center'>
      <button className='absolute top-2 right-2' onClick={() => onClickOpenLyricModal()}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path stroke-linecap='round' stroke-linejoin='round' d='M6 18 18 6M6 6l12 12' />
        </svg>
      </button>
      <div>
        <p className='text-center whitespace-pre text-sm'>파수꾼 - {lyrics.songName}</p>
        <br />
        <p className='text-center whitespace-pre text-sm leading-6'>{lyrics.lyric}</p>
      </div>
      <button className='lyric-btn w-12 h-6 border rounded-full text-xs mt-8' onClick={() => onClickOpenLyricModal()}>
        닫기
      </button>
    </div>
  );
};

export default LyricModal;
