'use client';

import LyricModal from '@/components/LyricModal';
import { useState } from 'react';

export type LyricsType = { songName: string; lyric: string };

const lyrics: LyricsType[] = [
  {
    songName: '산호초',
    lyric:
      '모두가 꿈을 꿔가는 걸 아니까\n조금은, 조금은\n느려도 되지 않을까?\n\n사랑한단 건 무거운 걸 아니까\n조금은, 조금은\n내려도 되지 않을까?\n\n한걸음 물러나서 보면\n모두들 빠르진 않은 걸.\n누군갈 사랑한다는 건\n나만의 몫은 아닌 걸.\n조금 더 가벼워진 맘이 필요해\n\n한 편의 소설 같은\n나만이 써내렸던\n오직 나 하나만 읽을 수 있었던 날\n내 후회들로 채웠던 날\n익숙함에 진심을 잊었던 날\n너와 나의 바다에 다다라서\n내 사라진 기억을 슬피 위로해\n\n그대로란 건 혼자인 걸 아니까\n조금은, 조금은\n떠나도 되지 않을까?\n\n한걸음 물러나서 보면\n그만큼 크지도 않은 걸\n누군갈 사랑한다는 건\n나만의 몫이 됐는 걸\n조금 더 가벼워진 맘이 필요해\n\n한 편의 소설 같은\n나만이 써내렸던\n오직 나 하나만 읽을 수 있었던 날\n내 후회들로 채웠던 날\n익숙함에 진심을 잊었던 날\n너와 나의 바다에 다다라서\n내 사라진 기억을 슬피 위로해\n',
  },
  {
    songName: '마우스(가제)',
    lyric:
      '도망쳐 도착한 이 곳에는\n어디도 낙원은 없고\n또 다시 너를 찾았네\n\n내일은 괜찮아질 거라는\n덧없는 믿음 아래서\n또 다시 너를 찾았네\n\n마지막이었을\n누군가의 곁을\n지나 올때 우린\n아무런 기억이 없네\n\n도망쳐 도착한 이 곳에는\n어디도 낙원은 없고\n또 다시 너를 찾았네\n\n내일은 괜찮아질 거라는\n덧없는 믿음 아래서\n또 다시 너를 찾았네\n\n더는 여기 햇빛이 들지 않아\n그림잔 볼 수 없어\n조각 조각 네 몸을\n꿀꺽 꿀꺽 너를 삼켜도\n\n결국 아무 말도\n그 어떤 흔적도\n남겨내지 못한채 나를 지우니\n아무래도\n나는 그만 귀신이 되어버렸네\n\n평범함에 가린\n고장난 날들은\n보통의 하루로\n너울을 만들지 못해\n\n도망쳐 도착한 이 곳에는\n어디도 낙원은 없고\n또 다시 너를 찾았네\n\n내일은 괜찮아질 거라는\n덧없는 믿음 아래서\n또 다시 너를 찾았네\n\n더는 여기 햇빛이 들지 않아\n그림잔 볼 수 없어\n조각 조각 네 몸을\n꿀꺽 꿀꺽 너를 삼켜도\n\n아무 말도\n어떤 흔적도\n없이 아아\n\n아무래도\n나는 그만 귀신이 되어버렸네',
  },
  {
    songName: '그렇게, 그대로',
    lyric:
      '지나온 날들이\n아직 반짝이더라도\n그렇게 두자\n\n다가올 많은 나날들이\n아름답지 않더라도\n그런 날이 되겠지\n\n돌아가지는 마\n흘러온 시간 속에 그대로 있자\n우리 기억들은\n흐르는 시간 속에 그대로 두자\n\n만났던 이들이\n비록 작아지더라도\n그렇게 두자\n\n작아진 만큼 많은 것을\n담아 낼 수 있는 나는\n좀 더 자란 거겠지\n\n돌아가지는 마\n흘러온 시간 속에 그대로 있자\n우리 기억들은\n흐르는 시간 속에 그대로 두자\n\n돌아가지 않아\n아름다운 날에 너와 있을래\n내일 우리들이\n수많은 하루속에 빛나게 해줘',
  },
  {
    songName: '편도',
    lyric:
      '내가 닿을 수 없는 곳에\n내가 걸을 수 없는 길에\n네가 서 있을 때\n\n나는 멀리 보이는 너를\n마치 내 곁에서 살아있는 것처럼\n느끼곤 했었어\n\n이제 도망쳐 눈을 감고\n기억 한편에 나를 남겨\n지금 이곳에 돌아오기 위해\n\n나 너에게 가고 있어\n너에게 가는 이 길들이\n조금 짧았으면 해\n\n나 너에게 가고 있어\n그곳의 널 만난다면\n내가 약속한 날을 네게 다 줄게\n\n애써 떼를 쓰진 않을게\n너는 그곳에서 그대로만 있어줘\n길을 볼 수 있게\n\n이제 도망쳐 눈을 감고\n기억 한편에 나를 남겨\n지금 이곳에 돌아오기 위해\n\n나 너에게 가고 있어\n너에게 가는 이 길들이\n조금 짧았으면 해\n\n나 너에게 가고 있어\n그곳의 널 만난다면\n내가 약속한 날을 네게 다 줄게\n\n너의 시간에서 사는 내\n기억 속에서\n다시 너를 찾은 것 같아\n\n같은 꿈을 꾸던 어제와\n이 순간을 함께할 오늘이\n우리라는 내일이 되길 바랄게\n\n나 너에게 가고 있어\n조금 더 어른이 된다면\n그땐 네게 말할게\n\n나 그 기억을 가지고 갈게\n이 순간을 잊지 않을게\n널 만나길 간절히 바래\n',
  },
];

const SetList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [songName, setSongName] = useState<string | null>(null);

  const onClickOpenLyricModal = (songName?: string) => {
    setIsOpen((prev) => !prev);
    songName && setSongName(songName);
  };

  const selectedSong: LyricsType[] = lyrics.filter((item) => item.songName === songName);

  console.log(selectedSong);

  return (
    <main className='flex h-full flex-col items-center p-6 relative'>
      <div className='absolute top-10 pb-32'>
        <section className='mt-8 text-center'>
          <h1 className='text-2xl font-bold mb-4'>1부</h1>
          <div className='flex flex-col gap-5'>
            <p>쏜애플 - 청색증</p>
            <p>쏜애플 - 로마네스크</p>
            <p>쏜애플 - 할시온</p>
            <p>쏜애플 - 아가미</p>
            <div className='flex gap-3 justify-center' onClick={() => onClickOpenLyricModal('산호초')}>
              <p>파수꾼 - 산호초</p>
              <button className='lyric-btn w-10 border rounded-full text-xs'>가사</button>
            </div>
            <div className='flex gap-3 justify-center' onClick={() => onClickOpenLyricModal('마우스(가제)')}>
              <p>파수꾼 - 마우스(가제)</p>
              <button className='lyric-btn w-10 border rounded-full text-xs'>가사</button>
            </div>
            <p>쏜애플 - 아지랑이</p>
            <p>쏜애플 - 살</p>
            <p>실리카겔 - Tik Tak Tok</p>
          </div>
        </section>

        <section className='mt-12 text-center'>
          <h2 className='text-2xl font-bold mb-4'>2부</h2>
          <div className='flex flex-col gap-5'>
            <p>쏜애플 - 은하</p>
            <p>쏜애플 - 파리의 왕</p>
            <p>쏜애플 - 게와 수돗물</p>
            <p>실리카겔 - Realize</p>
            <p>실리카겔 - No Pain</p>
            <p>쏜애플 - 멸종</p>
            <div className='flex gap-3 justify-center' onClick={() => onClickOpenLyricModal('그렇게, 그대로')}>
              <p>파수꾼 - 그렇게, 그대로</p>
              <button className='lyric-btn w-10 border rounded-full text-xs'>가사</button>
            </div>
            <div className='flex gap-3 justify-center' onClick={() => onClickOpenLyricModal('편도')}>
              <p>파수꾼 - 편도</p>
              <button className='lyric-btn w-10 border rounded-full text-xs'>가사</button>
            </div>
          </div>
        </section>
      </div>
      {isOpen && <LyricModal onClickOpenLyricModal={onClickOpenLyricModal} lyrics={selectedSong[0]} />}
    </main>
  );
};

export default SetList;
