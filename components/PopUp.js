import React from 'react';

const PopUp = ({handleToggle, toggle}) => {
  

    return (
        <>
            {toggle && (
                <>
                    <div onClick={handleToggle} className="fixed inset-0 flex overflow-y-auto overflow-x-hidden outline-none focus:outline-none p-8 cursor-cell" />
                    <div className='w-full sdm:w-[80%] sm:w-[60%] mdx:w-[50%] lg:w-[45%] xl:w-[35%] fixed right-0 top-0 bg-orange-50 flex flex-col sdm:px-12 p-8 gap-4 text-xs h-screen border-l hover:corsor-pointer'>
                        <div className='w- full flex justify-between items-center'>
                            <img className="w-12" src="/favicon.png"></img>
                            <div onClick={handleToggle} className='px-2.5 py-1 hover:shadow-md cursor-pointer  rounded-full border bg-black text-white text-sm'>X</div>
                        </div>

                        <section className='flex flex-col py-4  font-extrabold text-xl sdm:text-2xl gap-3 '>
                            <h1>Register for FREE Demo-lecture</h1>
                            <div className='text-lg font-medium'>
                                Get 30% OFF on this month only for Limited seats
                            </div>
                        </section>
                            <div className='w-full flex flex-col gap-1 '>
                                <label className='font-bold'>First name</label>
                                <input
                                    value=''
                                    type='text'
                                    className='border border-gray-500 p-2 placeholder:text-[9px]'
                                    placeholder='Sagar'
                                />
                            </div>

                            <div className='w-full flex flex-col gap-1 '>
                                <label className='font-bold'>Last name</label>
                                <input
                                    value=''
                                    type='text'
                                    className='border border-gray-500 p-2 placeholder:text-[9px]'
                                    placeholder='Jaid'
                                />
                            </div>

                        <div className='flex flex-col gap-1 '>
                            <label className='font-bold'>Phone number</label>
                            <input
                                value=''
                                type='number'
                                className=' border border-gray-500 p-2 placeholder:text-[9px]'
                                placeholder='+91 8898720799'
                            />
                        </div>

                        <div className='flex flex-col gap-1 '>
                            <label className='font-bold'>
                                Are you Interested in DEMO lecture?
                            </label>
                            <select className='w-full border border-gray-500 p-2 text-xs outline-none'>
                                <option>Select</option>
                                <option value='Yes'>Yes</option>
                                <option value='No'>No</option>
                            </select>
                        </div>

                        <div className='flex flex-col gap-1 '>
                            <label className='font-bold'>Course Mode</label>
                            <select className='w-full border border-gray-500 p-2 text-xs outline-none'>
                                <option>Select</option>
                                <option value='Offline'>Offline</option>
                                <option value='Online'>Online</option>
                            </select>
                        </div>

                        {'err' && (
                            <div className='text-xs text-orange-700'>
                                All fields are required*
                            </div>
                        )}
                        <div className='flex w-fit gap-2 items-center cursor-pointer justify-center rounded-full bg-orange-500 p-2 px-4 text-white  hover:bg-orange-600 '>
                            <span>Submit</span>
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
