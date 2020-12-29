import React, { useState } from 'react';
import clsx from 'clsx';
import Result from '../Result/Result';

export default function Form({ data, setData }) {
  const [finished, setFinished] = useState(true);

  function handleGender(gender) {
    if (gender === 'male') {
      setData({ ...data, gender: 'male' });
    } else {
      setData({ ...data, gender: 'female' });
    }
  }

  function increment(type) {
    if (type === 'weight') {
      setData({ ...data, weight: data.weight + 1 });
    } else if (type === 'height') {
      setData({ ...data, height: data.height + 1 });
    } else {
      setData({ ...data, age: data.age + 1 });
    }
  }

  function decrement(type) {
    if (type === 'weight') {
      setData({ ...data, weight: data.weight - 1 });
    } else if (type === 'height') {
      setData({ ...data, height: data.height - 1 });
    } else {
      setData({ ...data, age: data.age - 1 });
    }
  }

  return (
    <div className='flex flex-col px-6'>
      {!finished ? (
        <>
          <div className='text-3xl font-semibold mt-20'>BMI Calculator</div>
          <div className='flex flex-col mt-12'>
            <span className='text-sm text-gray-300'>Gender</span>
            <div className='flex w-full mt-2'>
              <div
                className={clsx(
                  'w-1/2 bg-gray-900 mr-3 rounded-md flex items-center h-40 justify-center relative',
                  data.gender === 'male' && 'border-2 border-green-500'
                )}
                onClick={() => handleGender('male')}
              >
                <div
                  className={clsx(
                    'absolute top-0 right-0 p-2 ',
                    data.gender === 'male' ? 'text-green-500' : 'text-gray-700'
                  )}
                >
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                Male
              </div>
              <div
                className={clsx(
                  'w-1/2 bg-gray-900 ml-3 rounded-md flex items-center h-40 justify-center relative',
                  data.gender === 'female' && 'border-2 border-green-500'
                )}
                onClick={() => handleGender('female')}
              >
                <div
                  className={clsx(
                    'absolute top-0 right-0 p-2 ',
                    data.gender === 'female'
                      ? 'text-green-500'
                      : 'text-gray-700'
                  )}
                >
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                Female
              </div>
            </div>
          </div>
          <div className='flex flex-col mt-6'>
            <div className='flex flex-col'>
              <span className='text-md text-gray-300'>Weight</span>
              <div className='flex items-center mt-2 text-black space-x-4'>
                <div className='bg-gray-200 w-full h-12 rounded-md py-2 font-bold relative flex items-center justify-center text-lg'>
                  <div className='absolute left-0 pl-4'>
                    <svg
                      onClick={() => decrement('weight')}
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  {data.weight}
                  <div className='absolute right-0 pr-4'>
                    <svg
                      onClick={() => increment('weight')}
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </div>
                <div className='bg-gray-200 w-32 rounded-md h-12 py-2 relative flex items-center left-0 pl-4'>
                  kg
                  <div className='absolute right-0 pr-2'>
                    <svg
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col mt-6'>
            <div className='flex flex-col'>
              <span className='text-md text-gray-300'>Height</span>
              <div className='flex items-center mt-2 text-black space-x-4'>
                <div className='bg-gray-200 w-full h-12 rounded-md py-2 font-bold relative flex items-center justify-center text-lg'>
                  <div className='absolute left-0 pl-4'>
                    <svg
                      onClick={() => decrement('height')}
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  {data.height}
                  <div className='absolute right-0 pr-4'>
                    <svg
                      onClick={() => increment('height')}
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </div>
                <div className='bg-gray-200 w-32 rounded-md h-12 py-2 relative flex items-center left-0 pl-4'>
                  cm
                  <div className='absolute right-0 pr-2'>
                    <svg
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col mt-6'>
            <div className='flex flex-col'>
              <span className='text-md text-gray-300'>Age</span>
              <div className='flex items-center mt-2 text-black space-x-4'>
                <div className='bg-gray-200 w-full h-12 rounded-md py-2 font-bold relative flex items-center justify-center text-lg'>
                  <div className='absolute left-0 pl-4'>
                    <svg
                      onClick={() => decrement()}
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  {data.age}
                  <div className='absolute right-0 pr-4'>
                    <svg
                      onClick={() => increment()}
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full mt-10'>
            <button
              onClick={() => setFinished(true)}
              className='bg-green-500 w-full py-3 rounded-md text-xl focus:outline-none'
            >
              Calculate
            </button>
          </div>
        </>
      ) : (
        <Result data={data} />
      )}
    </div>
  );
}
