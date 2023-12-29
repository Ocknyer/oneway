/* eslint-disable react/no-unescaped-entities */
'use client';

import CompleteSection from '@/components/CompleteSection';
import fireStore from '../../firebase/firestore';
import { getDocs, addDoc, collection, query, orderBy } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useVh } from '@/hooks/useVh';

export type Input = {
  name: string;
  count: string;
  phone_number: string;
};

const styles = {
  inputBox: 'flex flex-col lg:w-96 md:w-80 w-full',
  input: 'p-2 border-solid border mt-2 text-black text-sm',
};

const Reservation = () => {
  const vh = useVh();
  const [time, setTime] = useState(new Date());
  const [dataList, setDataList] = useState<any>([]);
  // const [mounted, setMounted] = useState<boolean>(false);

  const json = typeof window !== 'undefined' ? sessionStorage.getItem('isBooked') : null;
  const isBooked = json && JSON.parse(json);

  const [isAgree, setIsAgree] = useState(false);
  const [inputs, setInputs] = useState<Input>({
    name: '',
    count: '',
    phone_number: '',
  });

  const isFilled = inputs.name !== '' && inputs.count !== '' && inputs.phone_number.length >= 13 && isAgree;

  const { name, count, phone_number } = inputs;

  const handleData = (e: any) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setInputs({ ...inputs, [name]: value });
    }

    if (name === 'phone_number') {
      const regex = /^[0-9\b -]{0,13}$/;
      if (regex.test(e.target.value)) {
        setInputs({ ...inputs, phone_number: e.target.value });
      }
    }

    if (name === 'count') {
      const regex = 60 - restTicket >= 3 ? /^[1-3]{0,1}$/ : 60 - restTicket === 2 ? /^[1-2]{0,1}$/ : /^[1]{0,1}$/;
      if (regex.test(e.target.value)) {
        setInputs({ ...inputs, count: e.target.value });
      }
    }
  };

  useEffect(() => {
    if (inputs.phone_number.length === 10) {
      setInputs({
        ...inputs,
        phone_number: inputs.phone_number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'),
      });
    }
    if (inputs.phone_number.length === 13) {
      setInputs({
        ...inputs,
        phone_number: inputs.phone_number.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs.phone_number]);

  // 예약자 명단 가져오기
  const getReserveList = async () => {
    const q = query(collection(fireStore, 'booker'), orderBy('createdAt'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setDataList((prev: any) => [...prev, { ...doc.data(), id: doc.id }]);
    });
  };

  const reservedList = dataList.filter((obj: any, idx: number) => {
    const test = dataList.findIndex((obj2: any) => obj2.id === obj.id);
    return test === idx;
  });

  const restTicket = reservedList.reduce((acc: number, cur: any) => (acc += +cur?.count), 0);

  useEffect(() => {
    getReserveList();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 10000);

    return () => {
      clearInterval(interval);
    };
  });

  // 예매내역 확인
  const checkIsBooked = (inputs: Input) => {
    // const checkName = reservedList.filter((item: any) => item.name === inputs.name);
    const checkPhoneNumber = reservedList.filter((item: any) => item.phone_number === inputs.phone_number);

    return checkPhoneNumber.length > 0 ? true : false;
  };

  // form 제출
  const onClickReserve = async (e: any) => {
    e.preventDefault();

    if (checkIsBooked(inputs)) {
      alert(
        '입력하신 휴대전화번호로 기존 예매 정보가 존재합니다.\n\n추가 예매를 원하시면 010-3364-0633(파수꾼 김대운)으로 문의 주시기 바랍니다.'
      );
      setInputs({ ...inputs, phone_number: '' });
      return;
    }

    if (inputs.count && inputs.name && inputs.phone_number) {
      await addDoc(collection(fireStore, 'booker'), { ...inputs, createdAt: time })
        .then(() => sessionStorage.setItem('isBooked', 'true'))
        .then(() => {
          sessionStorage.setItem('inputs', JSON.stringify(inputs));
          setInputs({
            name: '',
            count: '',
            phone_number: '',
          });
        });
    } else {
      alert('필수 정보를 입력해 주세요');
    }
  };

  return (
    <main className='flex flex-col items-center justify-center p-6' style={{ height: `${100 * vh}px` }}>
      {!dataList.length ? (
        <svg className='animate-spin h-10 w-10 mr-3' fill='#fff' viewBox='0 0 48 48'>
          <g id='_레이어_1-2' data-name='레이어 1'>
            <path
              className='cls-1'
              d='m42.7,20.72c.19,1.07.3,2.16.3,3.28,0,10.48-8.52,19-19,19S5,34.48,5,24,13.52,5,24,5c1.12,0,2.21.12,3.28.3l1.9-4.74c-1.67-.37-3.4-.57-5.17-.57C10.75,0,0,10.75,0,24s10.75,24,24,24,24-10.75,24-24c0-1.78-.2-3.51-.57-5.17l-4.74,1.9Z'
            />
          </g>
        </svg>
      ) : restTicket >= 60 ? (
        <p>전석 매진 되었습니다.</p>
      ) : isBooked && restTicket < 60 ? (
        <section className='flex flex-col items-center p-0'>
          {/* <h1 className='mb-4'>'편도' 예매하기</h1> */}
          <p className='mb-4 text-lg'>잔여 {60 - restTicket}석</p>
          <form className='submit-form flex flex-col text-center items-center lg:gap-8 md:gap-6 gap-4 mb-16 rounded-2xl p-8 lg:w-full md:w-96 xs:w-60 w-72'>
            <div className={styles.inputBox}>
              <label htmlFor='name' className='text-base'>
                성함
              </label>
              <input
                id='name'
                name='name'
                value={name}
                type='text'
                placeholder='ex) 김편도'
                onChange={handleData}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor='phone_number' className='text-base'>
                전화번호
              </label>
              <input
                id='phone_number'
                name='phone_number'
                value={phone_number}
                type='text'
                placeholder='- 없이 입력해주세요.'
                onChange={handleData}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor='count' className='text-base'>
                예매 장수
              </label>
              <input
                id='count'
                name='count'
                value={count}
                max={3}
                min={1}
                type='text'
                placeholder={`ex) 1 / 최대 ${60 - restTicket >= 3 ? 3 : 60 - restTicket}매`}
                onChange={handleData}
                required
                className={styles.input}
              />
            </div>

            <div className='flex gap-2'>
              <input id='agree' type='checkbox' className='border-none' onChange={() => setIsAgree((prev) => !prev)} />
              <label htmlFor='agree' className='text-xs'>
                개인정보제공에 동의합니다.
              </label>
            </div>
            <button
              disabled={isFilled ? false : true}
              type='submit'
              onClick={onClickReserve}
              className='border-solid border p-2 w-4/5 mt-2 bg-black/40 text-sm'
            >
              제출하기
            </button>
          </form>
        </section>
      ) : !isBooked ? (
        // <CompleteSection />
        <div className='flex flex-col items-center gap-2'>
          <p>예매가 종료되었습니다.</p>
          <p>잔여석에 한해 현장구매(12,000₩) 가능합니다.</p>
          <p>문의 : 010-3364-0633 파수꾼 김대운</p>
        </div>
      ) : null}
    </main>
  );
};

export default Reservation;
