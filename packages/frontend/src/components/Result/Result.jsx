import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function Result({ data, setFinished }) {
  const [bmi, setBmi] = useState(null);
  const [weightRange, setWeightRange] = useState({ min: null, max: null });
  const [category, setCategory] = useState(null);
  const [textColor, setTextColor] = useState('');

  useEffect(() => {
    const { gender, weight, weightUnit, height, heightUnit, age } = data;

    let convertedWeight = weight;

    const handleData = (convertedWeight) => {
      console.log(convertedWeight);

      let bmi = (convertedWeight / height / height) * 10000;
      let low = (18.5 * height * height) / 10000;
      let high = (24.9 * height * height) / 10000;
      setBmi(bmi.toFixed(1));
      setWeightRange({ min: low.toFixed(1), max: high.toFixed(1) });
    };

    if (weightUnit === 'pounds') {
      convertedWeight = (weight / 2.205).toFixed(2);
    }

    handleData(convertedWeight);
  }, [data]);

  // Convert pounds to kg: Pounds / 2.205 = kg

  useEffect(() => {
    if (bmi >= 18.5 && bmi <= 24.9) {
      setCategory('Normal');
      setTextColor('text-green-500');
    } else if (bmi < 18.5) {
      setCategory('Underweight');
      setTextColor('text-indigo-300');
    } else if (bmi >= 25 && bmi <= 29.9) {
      setCategory('Overweight');
      setTextColor('text-yellow-200');
    } else if (bmi >= 30.0 && bmi <= 34.9) {
      setCategory('Obesity Class I');
      setTextColor('text-yellow-600');
    } else if (bmi >= 35.0 && bmi <= 39.9) {
      setCategory('Obesity Class II');
      setTextColor('text-pink-500');
    } else {
      setCategory('Obesity Class III');
      setTextColor('text-red-500');
    }
  }, [bmi]);

  return (
    <div className='flex flex-col items-center'>
      <div className='text-3xl font-semibold mt-16'>Result</div>
      <div
        style={{ height: '17rem' }}
        className='mt-5 bg-gray-900 flex flex-col items-center w-full rounded-md py-2 space-y-3'
      >
        <div className='mt-3 text-xl text-gray-400'>Your current BMI</div>
        <span className='text-4xl font-bold'>{bmi}</span>
      </div>
      <div
        style={{ width: '19.6rem' }}
        className='mt-5 font-medium text-lg mr-auto'
      >
        For your height, a normal weight range would be from{' '}
        {weightRange.min + ' '}
        to {weightRange.max} kilograms.
      </div>
      <div className='mt-6 text-gray-300'>
        Your BMI is <span className={clsx(textColor)}>{bmi}</span>, indiciating
        your weight is in the
        <span className={clsx(textColor)}> {category}</span> category for adults
        of your height.
      </div>

      <div className='mt-6 text-gray-300'>
        Maintaing a healthy weight may reduce the risk of chronic diseases
        associated with overweight and obesity.
      </div>
      <div className='w-full mt-11'>
        <button
          onClick={() => setFinished(false)}
          className='bg-green-500 w-full py-3 rounded-md focus:outline-none'
        >
          Recalculate BMI
        </button>
      </div>
    </div>
  );
}
