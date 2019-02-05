import React, { useState } from 'react';

import useInterval from '../src';

export default function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <div>
      <h2>DEMO of <span style={{ color: '#F44336' }}>@use-hooks/interval</span></h2>
      <p>Count: {count}s</p>
    </div>
  );
}
