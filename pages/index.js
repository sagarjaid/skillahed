import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import PopUp from '@/components/PopUp';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const index = () => {

  const [toggle, setToggle] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [err, setErr] = useState(false)


  const handleToggle = () => {
    setToggle(!toggle);
  };

  let initialState = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    demoLecture: "",
    courseMode: "",
    location: "Home",
  }

  const [Data, setData] = useState(initialState);

  const handleFName = (e) => {
    setErr(false)
    setData({ ...Data, firstName: e.target.value });
  };
  const handleLName = (e) => {
    setErr(false)
    setData({ ...Data, lastName: e.target.value });
  };


  const handlePhoneNumber = (e) => {
    setErr(false)
    setData({ ...Data, phoneNumber: e.target.value });
  };

  const handleDemoLecture = (e) => {
    setErr(false)
    setData({ ...Data, demoLecture: e.target.value });
  };

  const handleCourseMode = (e) => {
    setErr(false)
    setData({ ...Data, courseMode: e.target.value });
  };

  const handleSubmit = async () => {
    if (Data.phoneNumber && Data.firstName && Data.lastName && Data.courseMode && Data.demoLecture) {
      try {
        let url = 'https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/hyperlink/new';
        let body = {
          new: Data
        };

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json' // Set the content type to JSON
          },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const json = await response.json();
        console.log(json.new);

        setData(initialState)

        window.location.pathname = "/done"

      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      setErr(true)
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setToggle(true);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsAtEnd(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Hyperlink School - Digital Marketing course in Mumbai</title>
        <meta
          name='title'
          content='Hyperlink School - Digital Marketing course in Mumbai'
        />
        <meta
          name='description'
          content='Best digital marketing course in mumbai with placemnet, fees: 24,999/- only'
        />
        <link
          rel='canonical'
          href='https://hyperlinkschool.com'
        />

        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content='https://hyperlinkschool.com'
        />
        <meta
          property='og:title'
          content='Hyperlink School - Digital Marketing course in Mumbai'
        />
        <meta
          property='og:description'
          content='Best digital marketing course in mumbai with placemnet, fees: 24,999/- only'
        />
        <meta
          property='og:image'
          content='https://hyperlinkschool.com/digital-marketing-social.png'
        />

        <meta
          property='twitter:card'
          content='summary_large_image'
        />
        <meta
          property='twitter:url'
          content='https://hyperlinkschool.com'
        />
        <meta
          property='twitter:title'
          content='Hyperlink School - Digital Marketing course in Mumbai'
        />
        <meta
          property='twitter:description'
          content='Best digital marketing course in mumbai with placemnet, fees: 24,999/- only'
        />
        <meta
          property='twitter:image'
          content='https://hyperlinkschool.com/digital-marketing-social.png'
        />
        <link
          rel='icon'
          href='https://hyperlinkschool.com/favicon.png'
        />

        <meta
          name='google-site-verification'
          content='eOAAT8a829VDP-xyjZDHDe9iwtv2R0A8eUpzE75L8G0'
        />
      </Head>

      <div className='m-auto max-w-6xl flex flex-col gap-20 justify-center items-center p-4'>
        <Nav handleToggle={handleToggle} toggle={toggle} />

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

            <div className='text-lg font-normal'>You will be learning...</div>
          </section>

          <div className='flex gap-4 justify-center -mt-6 flex-wrap'>
            <Card
              name='Digital Marketing Fundamentals'
              description='Digital Marketing Fundamentals and Overview of all digital marketing & Modules'
              imgUrl='/digital-marketing-fundamentals.png'
            />
            <Card
              name='Search Engine Optimization (SE0)'
              description='Rank your website in top 3 organic position with help of on-page SEO & Off-page SEO in 2023'

              imgUrl='/seo.png'
            />

            <Card
              name='Google Search Console'
              description='Rank your website in Google Search within few Hours using Google Search Console (Webmaster Tool)'
              imgUrl='/gsc.png'
            />

            <Card
              name='WordPress Website/Blog'
              description='Learn to create amazing business or personal website and language pages for your business '
              imgUrl='/wordpress.png'
            />
            <Card
              name='Google Analytics (GA4)'
              description='Understand the customer journey, mesure KPI and watch the traffic on your website live with Google Analytics'
              imgUrl='/google-analytics.png'
            />
            <Card
              name='Media Planning & Buying'
              description='Learn the art of Digital media planning and buying & make right decisions for you business'
              imgUrl='/media-planing.png'
            />
            <Card
              name='Google Ads (PPC)'
              description='Lean how to use Google Ads and drive sales, leads from paid Google Search & grow your business'
              imgUrl='/google-ads.png'
            />
            <Card
              name='Google Re-marketing Ads'
              description='Learn to use Google Ads remarketing to re-engage with potential customers back to website/business'
              imgUrl='/remarketing.png'
            />
            <Card
              name='E-commerce Marketing'
              description='Learn how to create, manage & drive purchases to your online e-commerce business with E-commerce Marketing'
              imgUrl='/ecommerce-marketing.png'
            />
            <Card
              name='Video/ YouTube Ads'
              description='Ever though who run those video ads on youtube videos? Will learn the same in this module'
              imgUrl='/youtube-ads.png'
            />
            <Card
              name='Mobile App Marketing'
              description='Learn how to increase your mobile app downloads in playstore and IOS store with mobile app marketing'
              imgUrl='/mobile-app-marketing.png'
            />
            <Card
              name='Social Media Marketing'
              description='Master the social media marketing and market your brands on multiple social media site via paids ads'
              imgUrl='/social-media-marketing.png'
            />

            <Card
              name='Lead Generation'
              description='Learn how to generate highly qualified leads via Search Engine Optimisation, social media channel and Google ads'
              imgUrl='/lead-generation.png'
            />
            <Card
              name='Facebook Ads'
              description='Master the Art of running successful Facebook ads campaign and Scale to millions of users'
              imgUrl='/facebook-ads.png'
            />
            <Card
              name='Instagram Ads'
              description='Master the Art of running successful Instagram ads campaign and Scale to millions of users'
              imgUrl='/instagram-ads.png'
            />
            <Card
              name='Social Media Management'
              description='Master the social media account Management, Social media content calendar to market your brands on social media for FREE'
              imgUrl='/social-media-management.png'
            />

            <Card
              name='Viral Marketing'
              description='Learn how few things go viral & how to use viral marketing for user business'
              imgUrl='/viral-marketing.png'
            />

            <Card
              name='AI for digital marketers'
              description='How to use AI for Digital Marketing, Learn ScripAI to create quality content as digital Marketing'
              imgUrl='/ai.png'
            />
            <Card
              name='Content Marketing'
              description='Learn content marketing advanced concepts and core content strategies use to acquire/retain customers'
              imgUrl='/content-marketing.png'
            />
            <Card
              name='Canva Basics'
              description='Learn how to use Canva, Basics of design and what make good design good?'
              imgUrl='/canva.png'
            />

            <Card
              name='Email Marketing'
              description='Learn how to send thousands of email daily and how to use email marketing strategically and holistically'
              imgUrl='/email-marketing.png'
            />

            <Card
              name='WhatsApp Marketing'
              description='Learn WhatsApp Marketing to broadcast and automate promotional/transactional messages on WhatsApp  '
              imgUrl='/whatsapp-marketing.png'
            />

            <Card
              name='Online Reputation Management ORM'
              description='Learn how to manage and protect your brand/ business against fake reviews & bad marketing in ORM'
              imgUrl='/orm.png'
            />

            <Card
              name='Google Adsense'
              description='Lern how to use Google Adsense to make money via renting your blog ads space to Google'
              imgUrl='/g-adsense.png'
            />

            <Card
              name='Blogging'
              description='Master the art of writing & ranking your blogs on google and make money online and get free from 9-5 hustle'
              imgUrl='/blogging.png'
            />

            <Card
              name='Affiliate Marketing'
              description='Lean how make money online with Affiliate Marketing as digital marketer in 2023'
              imgUrl='/affiliate-marketing.png'
            />

            <Card
              name='Freelancing'
              description='Learn how to successfully become a freelance digital marketing expert in this module'
              imgUrl='/freelancing.png'
            />

            <Card
              name='Digital Marketing Strategy'
              description='Align your brand with set objectives and goals to attract a specific customers using all above marketing techniquess'
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

              <div className='w-[300px] h-[400px] bg-orange-500 flex flex-col gap-6 justify-center items-center text-xl rounded-xl font-semibold shadow-md hover:shadow-xl cursor-pointer'>
                <img
                  src='/certificate-2.png'
                  className='w-20'
                />
                <div>Google Certificate</div>
                <div>+</div>
                <div>hyperlink Certificate</div>
                <div>+</div>
                <div>Hubspot Certificate</div>
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

        <section className='flex flex-col text-center items-center gap-4  '>
          <div className='text-base font-extrabold xs:text-xl sdm:text-3xl md:text-4xl mdx:text-4xl '>
            Earn certificates form Hyperlink School, <br />
            Google, Hubspot & LinkedIn
          </div>
          <div className='w-full flex flex-col gap-2 md:flex-row'>
            <img
              src='/google-certificate.png'
              className='w-full md:w-1/2 h-full  shadow-xl'
            />
            <img
              src='/hyperlink-certificate.png'
              className='w-full md:w-1/2 h-full shadow-xl'
            />
          </div>
          <div className='w-full flex flex-col gap-2 md:flex-row'>
            <img
              src='/hubspot-certificate.png'
              className='w-full md:w-1/2 h-full  shadow-xl'
            />
            <img
              src='/linkedin-certificate.png'
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
          <div className='md:w-1/2 bg-white flex flex-col justify-center p-6 md:px-10 gap-5 rounded-xl text-xs'>
            <section className='flex flex-col py-4  font-extrabold text-2xl sdm:text-3xl gap-3 '>
              <h1>Register for FREE Demo-lecture</h1>
              <div className='text-lg font-medium'>
                Get 30% OFF on this month only for Limited seats
              </div>
            </section>
            <div className='flex flex-col md:flex-row gap-5 md:gap-2 w-full'>
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
            </div>

            <div className='flex items-center border border-gray-500 '>
              <div className='flex justify-center gap-1 items-center px-2'>
                <img src='/india.png' className='w-6' />
                <span>+91</span>
              </div>
              <input
                onChange={handlePhoneNumber}
                value={Data.phoneNumber}
                type='number'
                className='p-2 placeholder:text-xs w-full'
                placeholder='Phone number *'
              />
            </div>

            <select onChange={handleDemoLecture} className='w-full border border-gray-500 p-2 text-xs outline-none'>
              <option>Are you Interested in DEMO lecture? *</option>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>

            <select onChange={handleCourseMode} className='w-full border border-gray-500 p-2 text-xs outline-none'>
              <option>Select Course Mode *</option>
              <option value='Offline'>Offline</option>
              <option value='Online'>Online</option>
            </select>

            {err && (
              <div className='text-xs text-orange-700'>
                All fields are required*
              </div>
            )}
            <div onClick={handleSubmit} className='flex w-fit gap-2 items-center cursor-pointer justify-center font-semibold rounded-full bg-orange-500 p-2 px-4 text-white  hover:bg-orange-600 '>
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
        <div onClick={handleToggle} className={`fixed bottom-10 w-[200px] flex cursor-pointer items-center gap-1 justify-center rounded-full bg-green-600 hover:bg-green-500 p-3 text-white shadow-2xl ${isAtEnd ? 'hidden' : 'block'}`}>
          <span className='font-bold'>Get a call back</span>
          <svg className='w-4 animate-pulse' fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
          </svg>
        </div>
      </div>
      <Footer />
      <PopUp handleToggle={handleToggle} toggle={toggle} url="Home" />
    </>
  );
};

export default index;
