import Card from '@/components/Card';
import Footer from '@/components/Footer';
import HeroCard from '@/components/HeroCard';
import React from 'react';

const index = () => {
  return (
    <>
      <div className='m-auto max-w-6xl flex flex-col gap-6  justify-center items-center p-4'>
        <nav className='w-full flex justify-between items-center py-4 '>
          <img
            src='/hyperlink-logo.png'
            className='w-[180px] sdm:w-[250px]'
          />
          <div className='flex gap-6'>
            <img
              src='/google-partner.png'
              className=' w-[100px] border rounded-sm'
            />
            <div className='hidden md:flex cursor-pointer items-center gap-1 justify-around  rounded-full bg-orange-500 p-2.5 px-4 text-white'>
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
            className='w-full rounded-2xl shadow-xl '
          />
        </section>
        <section className='flex flex-col text-center items-center py-4 text-base font-extrabold xs:text-xl sdm:text-3xl sm:gap-3 md:text-4xl mdx:text-4xl '>
          <div>Digital Marketing Courses in Mumbai</div>
          <div className='md:text-xl text-orange-500'>
            24+ Modules <sapn className='line-through'>₹30,999</sapn> Now only
            at ₹24,999
          </div>
        </section>

        <div className='md:text-xl font-extabold'>You will be learning...</div>

        <div className='flex gap-4 justify-center flex-wrap'>
          <Card
            name='Digital Marketing Fundamentals'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/digital-marketing-fundamentals.png'
          />
          <Card
            name='Search Engine Optimization (SE0)'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/seo.png'
          />

          <Card
            name='Google Search Console'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/gsc.png'
          />

          <Card
            name='WordPress Website/Blog'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/wordpress.png'
          />
          <Card
            name='Google Analytics (GA4)'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/google-analytics.png'
          />
          <Card
            name='Media Planning & Buying'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/media-planing.png'
          />
          <Card
            name='Google Ads (PPC)'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/google-ads.png'
          />
          <Card
            name='Google Re-marketing Ads'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/remarketing.png'
          />
          <Card
            name='E-commerce Marketing'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/ecommerce-marketing.png'
          />
          <Card
            name='Video/ YouTube Ads'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/youtube-ads.png'
          />
          <Card
            name='Mobile App Marketing'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/mobile-app-marketing.png'
          />
          <Card
            name='Social Media Marketing'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/social-media-marketing.png'
          />

          <Card
            name='Lead Generation'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/lead-generation.png'
          />
          <Card
            name='Facebook Ads'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/facebook-ads.png'
          />
          <Card
            name='Instagram Ads'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/instagram-ads.png'
          />
          <Card
            name='Social Media Management'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/social-media-management.png'
          />

          <Card
            name='Viral Marketing'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/viral-marketing.png'
          />

          <Card
            name='AI for digital marketers'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/ai.png'
          />
          <Card
            name='Content Marketing'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/content-marketing.png'
          />
          <Card
            name='Canva Basics'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/canva.png'
          />

          <Card
            name='Email Marketing'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/email-marketing.png'
          />

          <Card
            name='WhatsApp Marketing'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/whatsapp-marketing.png'
          />

          <Card
            name='Online Reputation Management ORM'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/orm.png'
          />

          <Card
            name='Google Adsense'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/g-adsense.png'
          />

          <Card
            name='Blogging'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/blogging.png'
          />

          <Card
            name='Affiliate Marketing'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/affiliate-marketing.png'
          />

          <Card
            name='Freelancing'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/freelancing.png'
          />

          <Card
            name='Digital Marketing Strategy'
            description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
            imgUrl='/dm-strategy.png'
          />
        </div>
      </div>

      <div></div>

      <div className='m-auto max-w-6xl flex flex-col gap-20 mb-20 justify-center items-center p-4'>
        <section className='flex flex-col gap-10 justify-center items-center'>
          <div className='text-7xl font-extrabold text-orange-500'>&</div>
          <div className='flex flex-col mdx:flex-row gap-3 justify-center items-center text-white'>
            <div className='w-[250px] h-[400px] bg-orange-500 flex flex-col gap-6 justify-center items-center text-xl rounded-xl font-semibold shadow-md hover:shadow-xl cursor-pointer'>
              <img
                src='/live-project.png'
                className='w-20'
              />

              <div>Live Project Website</div>
              <div>+</div>
              <div>FREE Hosting</div>
              <div>+</div>
              <div>FREE DM Tools</div>
            </div>
            <div className='text-7xl font-extrabold text-gray-600'>+</div>

            <div className='w-[250px] h-[400px] bg-orange-500 flex flex-col gap-6 justify-center items-center text-xl rounded-xl font-semibold shadow-md hover:shadow-xl cursor-pointer'>
              <img
                src='/certificate-2.png'
                className='w-20'
              />
              <div>Google</div>
              <div>+</div>
              <div>Meta</div>
              <div>+</div>
              <div>hyperlink</div>
            </div>

            <div className='text-7xl font-extrabold text-gray-600'>+</div>

            <div className='w-[250px] h-[400px] bg-orange-500 flex flex-col gap-6 justify-center items-center text-xl rounded-xl font-semibold shadow-md hover:shadow-xl cursor-pointer'>
              <img
                src='/intern.png'
                className='w-20'
              />

              <div>Internship</div>
              <div>+</div>
              <div>100% Job assistance</div>
              <div>+</div>
              <div>Placement Cell</div>
            </div>
          </div>
        </section>

        <section className='flex flex-col text-center items-center py-4 gap-10 '>
          <div className='text-base font-extrabold xs:text-xl sdm:text-3xl  md:text-4xl mdx:text-4xl '>
            Certificates form Hyperlink School <br />
            Google & Meta
          </div>
          <div className='w-full flex flex-col gap-5 md:flex-row'>
            <img
              src='/hyperschool-certificate-2.png'
              className='w-full md:w-1/2 h-full  shadow-xl'
            />
            <img
              src='/hyperschool-certificate.png'
              className='w-full md:w-1/2 h-full shadow-xl'
            />
          </div>
        </section>

        <div className='flex flex-col md:flex-row-reverse w-full bg-white  border-4 rounded-xl border-orange-500 '>
          <div className='md:w-1/2 bg-white flex flex-col justify-center p-6 md:px-10 gap-4 rounded-xl text-xs'>
            <div className='text-base font-extrabold xs:text-xl sdm:text-2xl'>
              Get 30% OFF on this month only for Limited seats
            </div>
            <div className='flex flex-col md:flex-row gap-2 w-full'>
              <div className='w-full flex flex-col gap-1 '>
                <label className='font-bold'>First name</label>
                <input
                  value=''
                  type='text'
                  className='border border-gray-600 rounded-lg p-2 placeholder:text-[9px]'
                  placeholder='Sagar'
                />
              </div>

              <div className='w-full flex flex-col gap-1 '>
                <label className='font-bold'>Last name</label>
                <input
                  value=''
                  type='text'
                  className='border border-gray-600 rounded-lg p-2 placeholder:text-[9px]'
                  placeholder='Jaid'
                />
              </div>
            </div>

            <div className='flex flex-col gap-1 '>
              <label className='font-bold'>Phone number</label>
              <input
                value=''
                type='number'
                className='border border-gray-600 rounded-lg p-2 placeholder:text-[9px]'
                placeholder='+91 8898720799'
              />
            </div>

            <div className='flex flex-col gap-1 '>
              <label className='font-bold'>
                Are you Interested in DEMO lecture?
              </label>
              <select className='w-full rounded-lg border border-gray-600 p-2 text-xs outline-none'>
                <option>Select</option>
                <option value='Yes'>Yes</option>
                <option value='No'>No</option>
              </select>
            </div>

            <div className='flex flex-col gap-1 '>
              <label className='font-bold'>Course Mode</label>
              <select className='w-full rounded-lg border border-gray-600 p-2 text-xs outline-none'>
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
              by signing up you acknowledge to be a part of close early beta of
              product which may contain bugs.
            </div>
          </div>
          <div className='flex flex-col md:w-1/2 bg-orange-500 text-white text-4xl gap-20 p-4 py-10 justify-center items-center'>
            <img
              src='/hyperlink-logo-2.png'
              className='w-[250px]'
            />

            <div className='flex flex-col justify-center items-center gap-4'>
              <div className='line-through'>Yesterday</div>
              <div className='text-9xl font-bold'>Now</div>
              <div className='line-through'>Tomorrow</div>
            </div>

            <div className='text-base'>call us: +918898720799</div>
          </div>
        </div>
      </div>
      {/* <div className='relative overflow-x-hidden w-full flex-col justify-end gap-2 bg-gradient-to-t from-white via-orange-400 to-white px-2 flex'>
        <div className='slide-track  flex-row gap-2 bg-transparent flex'>
          <HeroCard
            name='SEO'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='PPC'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='SMM'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Facebook Ads'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Google Ads'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='ORM'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Digital Marketer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Graphic Designer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Data Scientist'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Business Analyst'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Network Engineer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Fashion Designer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Financial Analyst'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Air Hostess'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Project Manager'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Civil Engineer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Web Designer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Dentist'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Astronaut'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Math Teacher'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Youtuber'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Software Engineer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Digital Marketer'
            styles='w-52 h-52 bg-transparent'
          />
        </div>
        <div className='slide-track-2 flex-row gap-2 bg-transparent flex'>
          <HeroCard
            name='Web Designer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Dentist'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Astronaut'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Math Teacher'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Youtuber'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Software Engineer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Digital Marketer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Graphic Designer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Data Scientist'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Business Analyst'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Network Engineer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Fashion Designer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Financial Analyst'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Air Hostess'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Project Manager'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Civil Engineer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Web Designer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Dentist'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Astronaut'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Math Teacher'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Youtuber'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Software Engineer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Digital Marketer'
            styles='w-52 h-52 bg-transparent'
          />
        </div>
        <div className='slide-track-3 flex-row gap-2 bg-transparent flex'>
          <HeroCard
            name='Web Designer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Dentist'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Astronaut'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Math Teacher'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Youtuber'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Software Engineer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Digital Marketer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Graphic Designer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Data Scientist'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Business Analyst'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Network Engineer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Fashion Designer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Financial Analyst'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Air Hostess'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Project Manager'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Civil Engineer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Web Designer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Dentist'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Astronaut'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Math Teacher'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Youtuber'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Software Engineer'
            styles='w-52 h-52 bg-transparent'
          />
          <HeroCard
            name='Digital Marketer'
            styles='w-52 h-52 bg-transparent'
          />
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default index;
