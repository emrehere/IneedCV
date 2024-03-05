"use client";
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Example = ({ componentRef }) => (
  <div ref={componentRef}>
   
  </div>
);

export default function Templates() {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <Example componentRef={componentRef} />
      <button className='bg-red-500 text-white' onClick={handlePrint}>
        Print this out!
      </button>
    </div>
  );
}
