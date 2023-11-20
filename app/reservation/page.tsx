'use client';

import CompleteSection from '@/components/CompleteSection';
import fireStore from '../../firebase/firestore';
import { getDocs, addDoc, collection, query, orderBy } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

type Input = {
  name: string;
  count: string;
  phone_number: string;
};

const Styles = {
  inputBox: 'flex flex-col lg:w-96 md:w-80 w-64',
  input: 'p-3 rounded-lg border-solid border mt-2',
};

const Reservation = () => {
  const [time, setTime] = useState(new Date());
  const [dataList, setDataList] = useState<any>([]);
  // const [mounted, setMounted] = useState<boolean>(false);

  const json = typeof window !== 'undefined' ? sessionStorage.getItem('isBooked') : null;
  const isBooked = json && JSON.parse(json);
  console.log(isBooked);

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
      console.log(doc.id, ' => ', doc.data());
    });
  };

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

  const onClickReserve = async (e: any) => {
    e.preventDefault();
    if (inputs.count && inputs.name && inputs.phone_number) {
      await addDoc(collection(fireStore, 'ticketholder'), { ...inputs, createdAt: time })
        .then(() => sessionStorage.setItem('isBooked', 'true'))
        .then(() => {
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
      {!isBooked ? (
        <section className='p-0'>
          <form className='flex flex-col items-center lg:gap-8 md:gap-6 gap-4 mb-16'>
            <div className={Styles.inputBox}>
              <label htmlFor='name' className='text-sm'>
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
                className={Styles.input}
              />
            </div>
            <div className={Styles.inputBox}>
              <label htmlFor='phone_number' className='text-sm'>
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
                className={Styles.input}
              />
            </div>
            <div className={Styles.inputBox}>
              <label htmlFor='count' className='text-sm'>
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
                className={Styles.input}
              />
            </div>
            <button
              type='submit'
              onClick={onClickReserve}
              className='border-solid border p-3 lg:w-56 md:w-48 w-36'
            >
              예매하기
            </button>
          </form>
        </section>
      ) : (
        <CompleteSection />
      )}
    </main>
  );
};

export default Reservation;
