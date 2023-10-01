import Head from 'next/head';

const index = () => {
  return (
    <>
      <Head>
        <title>Hyperlink School - Digital Marketing courses in Bangalore</title>
        <meta
          name='title'
          content='Hyperlink School - Digital Marketing courses in Bangalore'
        />
        <meta
          name='description'
          content='Best digital marketing courses in Bangalore with placement, fees: 24,999/- only'
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
          content='Hyperlink School - Digital Marketing courses in Bangalore'
        />
        <meta
          property='og:description'
          content='Best digital marketing courses in Bangalore with placement, fees: 24,999/- only'
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
          content='Hyperlink School - Digital Marketing courses in Bangalore'
        />
        <meta
          property='twitter:description'
          content='Best digital marketing courses in Bangalore with placement, fees: 24,999/- only'
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

      <div className='flex flex-col justify-center items-center h-[92vh] gap-5 p-4 text-gray-600'>
        <img
          src='hp-logo.png'
          className='w-64 md:w-96'
        />
        <div className='flex flex-col gap-1 text-center font-medium'>
          <div>Switch to High Paying job in IT,</div>
          <div> No IT background required.</div>
        </div>
        <a
          className='flex items-center gap-2 justify-around rounded-full bg-blue-500 text-white shadow-sm p-2 px-4 '
          href='https://whatsapp.com/channel/0029Va9ULh6C1FuLWKmx1E1n'
          target='_blank'>
          <span className='text-sm'>FREE MASTERCLASS</span>
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
        </a>
      </div>
      <div className='m-auto flex justify-center text-gray-600 gap-2 text-xs'>
        <a
          href='https://hyperlinkschool.com/privacy'
          target='_blank'>
          Privacy
        </a>
        <span>|</span>
        <a
          href='https://hyperlinkschool.com/tc'
          target='_blank'>
          T&C
        </a>
      </div>
    </>
  );
};

export default index;
