import React, { useState } from 'react';
import Form from '../Form/Form';

export default function Calculator() {
  const [data, setData] = useState({
    weight: 85,
    weightUnit: 'kg',
    height: 180,
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
