import React, { useState } from 'react';
import WidthPrinter from './hook/widthPrinter';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {count === 0 && <WidthPrinter />}
      <button onClick={() => setCount(count + 1)}>증가</button>
    </>
  );
}
