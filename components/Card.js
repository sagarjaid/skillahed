const Card = (props) => {
  const { name, description, imgUrl } = props;
  return (
    <div className='flex  sdm:min-w-[250px] sdm:min-h-[200px]  sdm:max-w-[250px] flex-col justify-center gap-2 rounded-2xl  sdm:border border-gray-600 bg-white p-3'>
      <span>
        {imgUrl ? (
          <img
            src={imgUrl}
            className='mb-2  h-9 w-9 '
          />
        ) : (
          <svg
            className='mb-2  h-7 w-7  sdm:h-9 sdm:w-9 rounded-full bg-gray-700 p-2'
            fill='none'
            stroke='white'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
            />
          </svg>
        )}
      </span>
      <span className='text-sm sdm:text-md font-extrabold text-black '>
        {name}
      </span>
      <span className='text-[8px] text-xs text-gray-600'>{description}</span>
    </div>
  );
};

export default Card;
