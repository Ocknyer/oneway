import React from 'react';

const CompleteSection = () => {
  return (
    <section className='flex flex-col items-center gap-4 text-center mb-16'>
      <h1>작성이 완료되었습니다.</h1>
      <p>
        아래 계좌번호로 10,000원을 입금해 주시면 <br />
        입금 확인 후 예매가 완료 됩니다. <br />
        예매 확인 문자는 추후 발송됩니다.
      </p>
      <p>하나은행 312-0116-8414-007 예금주: 김대운</p>
    </section>
  );
};

export default CompleteSection;
