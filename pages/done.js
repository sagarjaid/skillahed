const Done = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-6 p-4'>
      <img
        src='verified.png'
        className='mb-2  h-20 w-20 '
      />
      <div className='text-5xl font-bold'>Thank you!</div>
      <div>One of our career counsellors will conatct you shortly</div>
      <a
        className='flex items-center gap-1 justify-around rounded-full bg-black p-2 px-4 text-white'
        href='https://www.instagram.com/hyperlinkschool/'
        target='_blank'>
        <span className='text-sm'>Follow us on Instagram</span>
        <svg
          className='w-5'
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
      </a>{' '}
      <a
        href='https://www.instagram.com/hyperlinkschool/'
        target='_blank'
        className='text-sm underline text-blue-500'>
        Back to Home
      </a>
    </div>
  );
};

export default Done;
