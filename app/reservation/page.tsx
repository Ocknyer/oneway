'use client';

import CompleteSection from '@/components/CompleteSection';
import fireStore from '../../firebase/firestore';
import { getDocs, addDoc, collection, query, orderBy } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

const Reservation = () => {
  const [time, setTime] = useState(new Date());
  const [dataList, setDataList] = useState<any>([]);

  const json = typeof window !== 'undefined' ? sessionStorage.getItem('isBooked') : null;
  const isBooked = json && JSON.parse(json);
  console.log(isBooked);

  const [inputs, setInputs] = useState({
    name: '',
    count: 0,
    phone_number: '',
  });

  const { name, count, phone_number } = inputs;

  const handleData = (e: any) => {
    const { name, value } = e.target;

    const nextInputs = {
      ...inputs,
      [name]: value,
    };
    setInputs(nextInputs);
  };

  const getReserveList = async () => {
    const q = query(collection(fireStore, 'ticketholder'), orderBy('createdAt'));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(doc => {
      console.log(doc.id, ' => ', doc.data());
    });
  };

  useEffect(() => {
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
    setInputs({
      name: '',
      count: 0,
      phone_number: '',
    });
    sessionStorage.setItem('isBooked', 'true');
    await addDoc(collection(fireStore, 'ticketholder'), { ...inputs, createdAt: time });
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <form action='submit' className='flex flex-col gap-2'>
        <label htmlFor='name'>성함</label>
        <input
          id='name'
          name='name'
          value={inputs.name}
          type='text'
          placeholder='ex) 홍길동'
          onChange={handleData}
        />
        <label htmlFor='phone_number'>전화번호</label>
        <input
          id='phone_number'
          name='phone_number'
          value={inputs.phone_number}
          type='text'
          placeholder='ex) 010-0000-0000'
          onChange={handleData}
        />
        <label htmlFor='count'>예매 장수</label>
        <input
          id='count'
          name='count'
          value={inputs.count}
          max={3}
          type='number'
          placeholder='ex) 3'
          onChange={handleData}
        />
        <button type='submit' onClick={onClickReserve}>
          예매하기
        </button>
      </form>
      {isBooked ? <CompleteSection /> : null}
    </main>
  );
};

export default Reservation;
