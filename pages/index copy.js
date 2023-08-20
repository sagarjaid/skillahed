import React from 'react';

const index = () => {
  return (
    <div className='m-auto flex flex-col gap-6  justify-center items-center'>
      <nav className='w-full bg-orange-600 m-auto flex justify-between items-center p-4 '>
        <img
          src='/hyperlink-logo.png'
          className='w-[190px] rounded-lg'
        />
        <div className='flex gap-6'>
          <img
            src='/google-partner.png'
            className=' w-[100px] rounded-lg'
          />
          <div className='flex cursor-pointer items-center gap-1 justify-around  rounded-full bg-white p-2.5 px-4 text-orange-500'>
            <span className='text-xs font-semibold'>Apply Now</span>
            <svg
              className='w-4'
              fill='none'
              stroke='currentColor'
              strokeWidth={1.5}
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
              />
            </svg>
          </div>
        </div>
      </nav>
      <section className='max-w-6xl'>
        <img
          src='/digital-marketing-courses.png'
          className='w-full'
        />
      </section>
    </div>
  );
};

export default index;
