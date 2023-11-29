import { Input } from '@/app/reservation/page';
import React from 'react';

const CompleteSection = () => {
  const json = typeof window !== 'undefined' ? sessionStorage.getItem('inputs') : null;
  const inputs = json && JSON.parse(json);
  console.log(inputs);

  const totalPrice = (+inputs?.count * 10000).toLocaleString();

  return (
    <section className='flex flex-col items-center gap-4 text-center mb-16 break-keep'>
      <h1 className='text-lg'>작성이 완료되었습니다.</h1>
      <p className='leading-7 mt-2'>
        아래 계좌번호로 {totalPrice}원을
        <br />
        입금해 주시면 예매가 완료됩니다.
        <br />
        입금 확인 후 예매 확정 문자가 발송됩니다.
      </p>
      <p className='leading-7 mt-2'>
        입금자 성함은 예매자 성함과
        <br />
        똑같이 입력해주시기 바랍니다.
      </p>
      <p className='leading-7 mt-2 font-bold'>
        하나은행 312-0116-8414-007
        <br />
        예금주: 김대운
      </p>
    </section>
  );
};

export default CompleteSection;
