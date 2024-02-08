"use client";
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Example = ({ componentRef }) => (
  <div ref={componentRef}>
    {/* Your content to be printed */}
    <div className="h-[1000px] w-[1000px] bg-black">
      <div className="bg-green-500 h-[20vh] "></div>
      <div className="flex flex-row">
        <div>a</div>
        <div>b</div>
      </div>
    </div>
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
