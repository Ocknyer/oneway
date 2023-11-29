/* eslint-disable react/no-unescaped-entities */
'use client';

import CompleteSection from '@/components/CompleteSection';
import fireStore from '../../firebase/firestore';
import { getDocs, addDoc, collection, query, orderBy } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

export type Input = {
  name: string;
  count: string;
  phone_number: string;
};

const styles = {
  inputBox: 'flex flex-col lg:w-96 md:w-80 w-full mt-2',
  input: 'p-3 border-solid border mt-2',
};

const Reservation = () => {
  const [time, setTime] = useState(new Date());
  const [dataList, setDataList] = useState<any>([]);
  // const [mounted, setMounted] = useState<boolean>(false);

  const json = typeof window !== 'undefined' ? sessionStorage.getItem('isBooked') : null;
  const isBooked = json && JSON.parse(json);

  const [inputs, setInputs] = useState<Input>({
    name: '',
    count: '',
    phone_number: '',
  });

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
      const regex = /^[1-3]{0,1}$/;
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
        phone_number: inputs.phone_number
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs.phone_number]);

  const getReserveList = async () => {
    const q = query(collection(fireStore, 'ticketholder'), orderBy('createdAt'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(doc => {
      setDataList((prev: any) => [...prev, { ...doc.data(), id: doc.id }]);
    });
  };

  const reservedList = dataList.filter((obj: any, idx: number) => {
    const test = dataList.findIndex((obj2: any) => obj2.id === obj.id);
    return test === idx;
  });

  const restTicket = reservedList.reduce((acc: number, cur: any) => (acc += +cur?.count), 0);

  useEffect(() => {
    // setMounted(true);
    getReserveList();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 10000);

    return () => {
      clearInterval(interval);
    };
  });

  const checkIsBooked = (inputs: Input) => {
    // const checkName = reservedList.filter((item: any) => item.name === inputs.name);
    const checkPhoneNumber = reservedList.filter(
      (item: any) => item.phone_number === inputs.phone_number,
    );

    return checkPhoneNumber.length > 0 ? true : false;
  };

  const onClickReserve = async (e: any) => {
    e.preventDefault();

    if (checkIsBooked(inputs)) {
      alert('입력하신 정보로 예매 정보가 존재합니다.');
      return;
    }

    if (inputs.count && inputs.name && inputs.phone_number) {
      await addDoc(collection(fireStore, 'ticketholder'), { ...inputs, createdAt: time })
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
    <main className='flex min-h-screen flex-col items-center justify-center p-6'>
      {restTicket > 60 ? (
        <p>전석 매진 되었습니다.</p>
      ) : !isBooked && restTicket < 60 ? (
        <section className='flex flex-col items-center p-0'>
          {/* <h1 className='mb-4'>'편도' 예매하기</h1> */}
          <p className='mb-8'>잔여 {60 - restTicket}석</p>
          <form className='submit-form flex flex-col text-center items-center lg:gap-8 md:gap-6 gap-4 mb-16 rounded-2xl p-8 lg:w-full md:w-96 w-80'>
            <div className={styles.inputBox}>
              <label htmlFor='name' className='text-base'>
                성함
              </label>
              <input
                id='name'
                name='name'
                value={name}
                type='text'
                placeholder='ex) 홍길동'
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
                placeholder='- 없이 입력하세요'
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
                placeholder='ex) 3'
                onChange={handleData}
                required
                className={styles.input}
              />
            </div>
            <button
              type='submit'
              onClick={onClickReserve}
              className='border-solid border p-3 w-full mt-4 bg-black/40'
            >
              제출하기
            </button>
          </form>
        </section>
      ) : isBooked ? (
        <CompleteSection />
      ) : null}
    </main>
  );
};

export default Reservation;
