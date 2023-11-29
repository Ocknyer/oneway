import { Input } from '@/app/reservation/page';
import useCopyClipboard from '@/hooks/useCopyClipboard';
import React from 'react';

const CompleteSection = () => {
  const json = typeof window !== 'undefined' ? sessionStorage.getItem('inputs') : null;
  const inputs = json && JSON.parse(json);
  const { copyToClipboard } = useCopyClipboard();

  const totalPrice = (+inputs?.count * 10000).toLocaleString();

  return (
    <section className='flex flex-col items-center gap-4 text-center mb-16 break-keep'>
      <h1 className='text-lg'>작성이 완료되었습니다.</h1>
      <p className='leading-7 mt-2'>
        아래 계좌번호로 <span className='text-orange-400 font-bold'>{totalPrice}원</span>({inputs?.count}매)을
        <br />
        입금해 주시면 예매가 완료됩니다.
        <br />
        입금 확인 후 예매 확정 문자가 발송됩니다.
        <br />
        감사합니다.
      </p>
      <p className='leading-7 mt-2'>
        폼 작성 후 <span className='text-orange-400 font-bold'>24시간 이내</span>에
        <br />
        입금이 확인되지 않을 시 <br />
        예매는 <span className='text-orange-400 font-bold'>자동으로 취소</span>됩니다.
      </p>
      <p className='leading-7 mt-2'>
        입금자 성함은 <span className='text-orange-400 font-bold'>예매자 성함</span>과
        <br />
        <span className='text-orange-400 font-bold'>똑같이</span> 입력해주시기 바랍니다.
      </p>
      <p className='leading-7 mt-2 font-bold bg-black/60 px-2'>
        하나은행{' '}
        <button onClick={() => copyToClipboard('하나은행 31201168414007')} className='underline decoration-solid'>
          312-0116-8414-007
        </button>
        <br />
        예금주: 김대운
      </p>
    </section>
  );
};

export default CompleteSection;
