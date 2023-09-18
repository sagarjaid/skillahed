import React, { useState } from 'react';

const PopUp = ({ handleToggle, toggle, url }) => {
  const [err, setErr] = useState(false);

  let initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    demoLecture: '',
    courseMode: '',
    location: url,
  };

  const [Data, setData] = useState(initialState);

  const handleFName = (e) => {
    setErr(false);
    setData({ ...Data, firstName: e.target.value });
  };
  const handleLName = (e) => {
    setErr(false);
    setData({ ...Data, lastName: e.target.value });
  };

  const handlePhoneNumber = (e) => {
    setErr(false);
    setData({ ...Data, phoneNumber: e.target.value });
  };

  const handleEmail = (e) => {
    setErr(false);
    setData({ ...Data, email: e.target.value });
  };

  const handleDemoLecture = (e) => {
    setErr(false);
    setData({ ...Data, demoLecture: e.target.value });
  };

  const handleCourseMode = (e) => {
    setErr(false);
    setData({ ...Data, courseMode: e.target.value });
  };

  const handleSubmit = async () => {
    if (
      Data.phoneNumber &&
      Data.firstName &&
      Data.lastName &&
      Data.email &&
      Data.courseMode &&
      Data.demoLecture
    ) {
      try {
        let url =
          'https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/hyperlink/new';
        let body = {
          new: Data,
        };

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
          },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const json = await response.json();
        console.log(json.new);

        setData(initialState);

        window.location.pathname = '/done';
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      setErr(true);
    }
  };

  return (
    <>
      {toggle && (
        <>
          <div
            onClick={handleToggle}
            className='fixed inset-0 flex overflow-y-auto overflow-x-hidden outline-none focus:outline-none p-8 cursor-cell'
          />
          <div className='w-full sdm:w-[80%] sm:w-[60%] mdx:w-[50%] lg:w-[45%] xl:w-[35%] fixed right-0 top-0 bg-white flex flex-col sdm:px-12 p-8 gap-4 text-xs h-screen  shadow-2xl hover:corsor-pointer'>
            <div className='w- full flex justify-between items-center'>
              <img
                className='w-12'
                src='/favicon.png'></img>
              <div
                onClick={handleToggle}
                className='cursor-pointer font-bold text-gray-600 text-xl'>
                X
              </div>
            </div>

            <section className='flex flex-col py-4  font-extrabold text-2xl sdm:text-3xl gap-3 '>
              <h1>Register for FREE Demo-lecture</h1>
              <div className='text-lg font-medium'>
                Get 30% OFF on this month only for Limited seats
              </div>
            </section>
            <input
              onChange={handleFName}
              value={Data.firstName}
              type='text'
              className='border border-gray-500 p-2 placeholder:text-xs w-full'
              placeholder='First Name *'
            />

            <input
              onChange={handleLName}
              value={Data.lastName}
              type='text'
              className='border border-gray-500 p-2 placeholder:text-xs w-full'
              placeholder='Last Name *'
            />

            <div className='flex items-center border border-gray-500 '>
              <input
                onChange={handleEmail}
                value={Data.email}
                type='email'
                className='p-2 placeholder:text-xs w-full'
                placeholder='Email *'
              />
            </div>

            <div className='flex items-center border border-gray-500 '>
              <div className='flex justify-center gap-1 items-center px-2'>
                <img
                  src='/india.png'
                  className='w-6'
                />
                <span>+91</span>
              </div>
              <input
                onChange={handlePhoneNumber}
                value={Data.phoneNumber}
                type='number'
                maxLength='10'
                className='p-2 placeholder:text-xs w-full'
                placeholder='Phone number *'
              />
            </div>

            <select
              onChange={handleDemoLecture}
              className='w-full border border-gray-500 p-2 text-xs outline-none'>
              <option>Are you Interested in DEMO lecture? *</option>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>

            <select
              onChange={handleCourseMode}
              className='w-full border border-gray-500 p-2 text-xs outline-none'>
              <option>Select Course Mode *</option>
              <option value='Offline'>Offline</option>
              <option value='Online'>Online</option>
            </select>

            {err && (
              <div className='text-xs text-orange-700'>
                All fields are required*
              </div>
            )}
            <div
              onClick={handleSubmit}
              className='flex w-fit gap-2 items-center cursor-pointer justify-center font-semibold rounded-full bg-orange-500 p-2 px-4 text-white  hover:bg-orange-600 '>
              <span>Submit</span>
              <svg
                className='w-5'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
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
            <div className='text-[9px] text-gray-400'>
              by submiting this form you're are accepting our privacy policy and
              terms and conditions
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PopUp;
