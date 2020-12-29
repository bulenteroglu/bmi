import React, { useState } from 'react';
import Form from '../Form/Form';

export default function Calculator() {
  const [data, setData] = useState({
    weight: 109.3,
    weightUnit: 'kg',
    height: 168,
    heightUnit: 'cm',
    age: 22,
    gender: 'male',
  });

  return (
    <div>
      <Form data={data} setData={setData} />
    </div>
  );
}
