import React, { useEffect, useState } from 'react';

export default function Result({ data }) {
  const [bmi, setBmi] = useState(null);
  useEffect(() => {
    const { gender, weight, weightUnit, height, heightUnit, age } = data;

    if (weightUnit === 'kg' && heightUnit === 'cm') {
      let bmi = (weight / height / height) * 10000;
      setBmi(bmi.toFixed(2));
    }
  }, []);

  return (
    <div>
      <div>Result</div>
      {bmi}
    </div>
  );
}
