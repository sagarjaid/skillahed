import HeroCard from '@/components/HeroCard';
import React from 'react';

const index = () => {
  return (
    <>
      <div className='m-auto max-w-6xl flex flex-col gap-6  justify-center items-center p-4'>
        <nav className='w-full flex justify-between items-center py-4 '>
          <img
            src='/hyperlink-logo-2.png'
            className='w-[250px]'
          />
          <div className='flex gap-6'>
            <img
              src='/google-partner.png'
              className=' w-[100px] border rounded-sm'
            />
            <div className='flex cursor-pointer items-center gap-1 justify-around  rounded-full bg-black p-2.5 px-4 text-white'>
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
        <section className=''>
          <img
            src='/digital-marketing-courses-2.png'
            className='w-full rounded-xl'
          />
        </section>
        <section className="flex flex-col text-center items-center py-4 text-base font-extrabold xs:text-xl sdm:text-3xl sm:gap-3 md:text-4xl mdx:text-4xl ">
          <div>Digital Marketing Courses in Mumbai</div>
          <div className='md:text-xl text-orange-500'>24+ Modules <sapn className="line-through">₹30,999</sapn>  Now only at ₹24,999</div>
        </section>
      </div>
      <div className="relative overflow-x-hidden w-full flex-col justify-end gap-2 bg-gradient-to-t from-white via-orange-200 to-white px-2 flex">
        <div className="slide-track  flex-row gap-2 bg-transparent flex">
          <HeroCard name="Web Designer" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Dentist" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Astronaut" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Math Teacher" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Youtuber" styles="w-52 h-52 bg-transparent" />
          <HeroCard
            name="Software Engineer"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard
            name="Digital Marketer"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard
            name="Graphic Designer"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard name="Data Scientist" styles="w-52 h-52 bg-transparent" />
          <HeroCard
            name="Business Analyst"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard
            name="Network Engineer"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard
            name="Fashion Designer"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard
            name="Financial Analyst"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard name="Air Hostess" styles="w-52 h-52 bg-transparent" />
          <HeroCard
            name="Project Manager"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard name="Civil Engineer" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Web Designer" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Dentist" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Astronaut" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Math Teacher" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Youtuber" styles="w-52 h-52 bg-transparent" />
          <HeroCard
            name="Software Engineer"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard
            name="Digital Marketer"
            styles="w-52 h-52 bg-transparent"
          />
        </div>
        <div className="slide-track-2 flex-row gap-2 bg-transparent flex">
          <HeroCard name="Web Designer" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Dentist" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Astronaut" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Math Teacher" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Youtuber" styles="w-52 h-52 bg-transparent" />
          <HeroCard
            name="Software Engineer"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard
            name="Digital Marketer"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard
            name="Graphic Designer"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard name="Data Scientist" styles="w-52 h-52 bg-transparent" />
          <HeroCard
            name="Business Analyst"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard
            name="Network Engineer"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard
            name="Fashion Designer"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard
            name="Financial Analyst"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard name="Air Hostess" styles="w-52 h-52 bg-transparent" />
          <HeroCard
            name="Project Manager"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard name="Civil Engineer" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Web Designer" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Dentist" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Astronaut" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Math Teacher" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Youtuber" styles="w-52 h-52 bg-transparent" />
          <HeroCard
            name="Software Engineer"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard
            name="Digital Marketer"
            styles="w-52 h-52 bg-transparent"
          />
        </div>
        <div className="slide-track-3 flex-row gap-2 bg-transparent flex">
          <HeroCard name="Web Designer" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Dentist" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Astronaut" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Math Teacher" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Youtuber" styles="w-52 h-52 bg-transparent" />
          <HeroCard
            name="Software Engineer"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard
            name="Digital Marketer"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard
            name="Graphic Designer"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard name="Data Scientist" styles="w-52 h-52 bg-transparent" />
          <HeroCard
            name="Business Analyst"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard
            name="Network Engineer"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard
            name="Fashion Designer"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard
            name="Financial Analyst"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard name="Air Hostess" styles="w-52 h-52 bg-transparent" />
          <HeroCard
            name="Project Manager"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard name="Civil Engineer" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Web Designer" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Dentist" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Astronaut" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Math Teacher" styles="w-52 h-52 bg-transparent" />
          <HeroCard name="Youtuber" styles="w-52 h-52 bg-transparent" />
          <HeroCard
            name="Software Engineer"
            styles="w-52 h-52 bg-transparent"
          />
          <HeroCard
            name="Digital Marketer"
            styles="w-52 h-52 bg-transparent"
          />
        </div>
      </div>


      <div className='m-auto max-w-6xl flex flex-col gap-6  justify-center items-center p-4'>

        <section className='flex flex-col justify-center items-center'>
          <div className='text-7xl font-extrabold text-orange-500'>&</div>
          <img
            src='https://younickmind.com/wp-content/uploads/2020/07/why-us-digital-marketing-1.png'
            className="w-full"
          />
        </section>

        <section className="flex flex-col text-center items-center py-4 sm:gap-3 ">
          <div className='text-base font-extrabold xs:text-xl sdm:text-3xl  md:text-4xl mdx:text-4xl '>Certificates form Hyperlink School and Google</div>
          <div className='w-full flex '>
            <img
              src='https://younickmind.com/wp-content/uploads/2020/02/digital-marketing-certificate.png'
              className="w-1/2"
            />
            <img
              src='https://younickmind.com/wp-content/uploads/2020/02/digital-marketing-certificate.png'
              className="w-1/2"
            />

          </div>
        </section>




        <div className='flex w-full bg-white rounded-xl border'>
          <div className='hidden md:flex w-1/2 bg-orange-200  justify-center items-center'></div>
          <div className='w-1/2 max-w-sm bg-white flex flex-col justify-center p-6 md:p-6 gap-4 text-xs'>
            <div className='text-base font-extrabold xs:text-xl sdm:text-3xl  md:text-4xl mdx:text-4xl '>Get 30% OFF on this month only for Limited seats
            </div>


            <div className='flex flex-col gap-1 '>
              <label className='font-bold'>
                First name
              </label>
              <input
                value=""
                type='number'
                className='border border-gray-600 rounded-lg p-2 placeholder:text-[9px]'
                placeholder='+91 8898720799'
              />
            </div>

            <div className='flex flex-col gap-1 '>
              <label className='font-bold'>
                Last name
              </label>
              <input
                value=""
                type='number'
                className='border border-gray-600 rounded-lg p-2 placeholder:text-[9px]'
                placeholder='+91 8898720799'
              />
            </div>

            <div className='flex flex-col gap-1 '>
              <label className='font-bold'>
                Phone number <span className='text-xs'>(optional)</span>
              </label>
              <input
                value=""
                type='number'
                className='border border-gray-600 rounded-lg p-2 placeholder:text-[9px]'
                placeholder='+91 8898720799'
              />
            </div>

            <div className='flex flex-col gap-1 '>
              <label className='font-bold'>Highest eductaion?</label>
              <select
                className='w-full rounded-lg border border-gray-600 p-2 text-xs outline-none'
              >
                <option>Select</option>
                <option value='10th'>10th</option>
                <option value='12th'>12th</option>
                <option value='Professional certificate'>
                  Professional certificate
                </option>
                <option value='In college (Undergraduate)'>
                  In college (Undergraduate)
                </option>
                <option value='Diploma'>Diploma</option>
                <option value='Graduate'>Graduate</option>
                <option value='Post Graduate'>Post Graduate</option>
                <option value='Doctorate'>Doctorate</option>
                <option value='Post-Doctorate'> Post-Doctorate</option>
              </select>
            </div>



            {"err" && (
              <div className='text-xs text-rose-600'>
                All fields are required except phone number
              </div>
            )}
            <div
              className='flex w-fit gap-2 items-center cursor-pointer justify-center rounded-full bg-blue-500 p-2 px-4 text-white  hover:bg-blue-600 '>
              <span>Update profile</span>
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
              by signing up you acknowledge to be a part of close early beta of
              product which may contain bugs.
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default index;
