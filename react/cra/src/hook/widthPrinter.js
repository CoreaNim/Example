import React, { useState, useEffect } from 'react';
import useWindowWidth from './useWndowWith';

export default function WidthPrinter() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    console.log('useEffect 1');
    return () => {
      window.removeEventListener('resize', onResize);
      console.log('useEffect 2');
    };
  }, []);

  return <div>{`width is ${width}`}</div>;
}

// export default function WidthPrinter() {
//   const width = useWindowWidth();
//   return <div>{`width is ${width}`}</div>;
// }
