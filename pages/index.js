import Card from '@/components/Card';
import Footer from '@/components/Footer';
import HeroCard from '@/components/HeroCard';
import SEOMeta from '@/components/SEOMeta';
import React from 'react';

const index = () => {
  return (
    <>
      <SEOMeta
        title='Hyperlink School - Digital Marketing course in Mumbai'
        description='Best digital marketing course in mumbai with placemnet, fees: 24,999/- only'
      />
      <div className='m-auto max-w-6xl flex flex-col gap-20  justify-center items-center p-4'>
        <nav className='w-full flex justify-between items-center py-3 sticky top-0 bg-white'>
          <img
            src='/hyperlink-logo.png'
            className='w-[180px] sdm:w-[250px]'
          />
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

        <div className='flex flex-col justify-center items-center gap-10 w-full  -mt-16'>
          <section className=''>
            <img
              src='/digital-marketing-courses-2.png'
              className='hidden md:block w-full rounded-2xl shadow-xl '
            />
            <img
              src='/digital-marketing-courses-3.png'
              className='md:hidden w-full rounded-2xl shadow-xl '
            />
          </section>
          <section className='flex flex-col text-center items-center py-4 text-base font-extrabold xs:text-xl sdm:text-3xl gap-4 md:text-4xl mdx:text-4xl '>
            <h1>Digital Marketing Courses in Mumbai</h1>
            <h2 className='md:text-xl text-orange-500'>
              24+ Modules <sapn className='line-through'>₹30,999</sapn> Now only
              at ₹24,999
            </h2>

            <div className='text-xl font-semibold'>You will be learning...</div>
          </section>

          <div className='flex gap-4 justify-center -mt-6 flex-wrap'>
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

          <section className='flex flex-col gap-10 justify-center items-center'>
            <div className='text-7xl font-extrabold text-orange-500'>&</div>
            <div className='flex flex-col mdx:flex-row gap-2.5 justify-center items-center text-white'>
              <div className='w-[300px] h-[400px] bg-orange-500 flex flex-col gap-6 justify-center items-center text-xl rounded-xl font-semibold shadow-md hover:shadow-xl cursor-pointer'>
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
              <div className='text-6xl font-extrabold text-orange-500'>+</div>

              <div className='w-[300px]  h-[400px] bg-orange-500 flex flex-col gap-6 justify-center items-center text-xl rounded-xl font-semibold shadow-md hover:shadow-xl cursor-pointer'>
                <img
                  src='/certificate-2.png'
                  className='w-20'
                />
                <div>Google Certificate</div>
                <div>+</div>
                <div>hyperlink Certificate</div>
                <div>+</div>
                <div>Meta Certificate</div>
              </div>

              <div className='text-6xl font-extrabold text-orange-500'>+</div>

              <div className='w-[300px]  h-[400px] bg-orange-500 flex flex-col gap-6 justify-center items-center text-xl rounded-xl font-semibold shadow-md hover:shadow-xl cursor-pointer'>
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
        </div>

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

        <section className='flex flex-col text-center items-center py-4 gap-10 '>
          <div className='text-base font-extrabold xs:text-xl sdm:text-3xl  md:text-4xl mdx:text-4xl '>
            Internship & Placement partners
          </div>
          <img
            src='/digital-marketing-placement.png'
            className='w-full sdm:w-1/2'
          />
        </section>

        <div className='flex md:hidden flex-col w-full bg-orange-500 text-white rounded-xl text-4xl gap-20 p-4 py-10 justify-center items-center'>
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

        <div className='flex flex-col md:flex-row-reverse w-full bg-white  border-4 rounded-xl border-orange-500 '>
          <div className='md:w-1/2 bg-white flex flex-col justify-center p-6 md:px-10 gap-4 rounded-xl text-xs'>
            <section className='flex flex-col py-4  font-extrabold text-2xl sdm:text-3xl gap-3 '>
              <h1>Register for FREE Demo-lecture</h1>
              <div className='text-lg font-medium'>
                Get 30% OFF on this month only for Limited seats
              </div>
            </section>
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
              by submiting this form you're are accepting our privacy policy and
              terms and conditions
            </div>
          </div>
          <div className='hidden md:flex flex-col md:w-1/2 bg-orange-500 text-white text-4xl gap-20 p-4 py-10 justify-center items-center'>
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
      <Footer />
    </>
  );
};

export default index;
