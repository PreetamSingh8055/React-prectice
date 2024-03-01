import React, { useState, useEffect } from 'react';

function Banner() {
  const [currentString, setCurrentString] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const strings = ['Web Development', 'Digital marketing', 'Ethical Hacking'];
  const [stringIndex, setStringIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentString((prevString) => {
        const targetString = strings[stringIndex];
        const nextChar = targetString.charAt(prevString.length);

        if (prevString === targetString) {
          setStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
          return '';
        }

        return prevString + nextChar;
      });

      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 100);

    return () => clearInterval(intervalId);
  }, [stringIndex, strings]);

  return (
    <div className='w-full h-screen bg-[#2699fb] py-[100px] '>
      <div className='max-w-[1240px] mx-auto h-screen text-center font-bold mt-1'>
        <div className=' text-[30px]  md:text-[30px] my-1'>Learn with us</div>
        <div className='text-white text-[40px] md:text-[60px] my-1'>Grow with us</div>
        <div className='text-white text-[25px] md:text-[50px] my-1'>
          Learn {currentString}
          <span className='cursor' style={{ opacity: showCursor ? 1 : 0 }}>
            |
          </span>
        </div>
        <button className='my-4 border border-black text-white bg-black rounded py-1 px-6 hover:bg-white hover:text-black'>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Banner;
