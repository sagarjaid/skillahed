import React from 'react';

const Nav = () => {
  return (
    <nav className='w-full flex justify-between items-center py-3 sticky top-0 bg-white'>
      <a href='https://hyperlinkschool.com/'>
        <img
          src='/hyperlink-logo.png'
          className='w-[180px] sdm:w-[250px]'
        />
      </a>
      <div className='flex gap-6'>
        <img
          src='/google-partner.png'
          className='hidden  md:block w-[100px] border rounded-md shadow-sm'
        />
        <div className='flex cursor-pointer items-center gap-1 justify-around  rounded-md bg-orange-500 hover:bg-orange-600 p-2.5 px-4 text-white shadow-sm'>
          <span className='text-xs font-bold'>Apply Now</span>
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
  );
};

export default Nav;
