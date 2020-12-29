import React, { useState } from 'react';
import Form from '../Form/Form';

export default function Calculator() {
  const [data, setData] = useState({
    weight: 56,
    weightUnit: 'kg',
    height: 162,
    heightUnit: 'cm',
    age: 29,
    gender: 'male',
  });

  return (
    <div>
      <Form data={data} setData={setData} />
    </div>
  );
}
