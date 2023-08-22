import React from 'react';
import all from '@/components/india.json';
import SEOMeta from '@/components/SEOMeta';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const Link = () => {
  function getCountryStateCityNames(data) {
    const countryNames = [];
    const stateNames = [];
    const cityNames = [];

    for (const country of data) {
      countryNames.push(country.name);
      for (const state of country.states) {
        stateNames.push(state.name);
        for (const city of state.cities) {
          cityNames.push(city.name);
        }
      }
    }

    let newArr = [...countryNames, ...stateNames, ...cityNames];

    function slugify(string) {
      // Convert all characters to lowercase.
      string = string.toLowerCase();

      // Replace all consecutive hyphens with a single hyphen.
      string = string.replaceAll(' ', '-');

      // Remove any leading or trailing hyphens.
      string = string.trim('-');

      return `digital-marketing-courses-in-${string}`;
    }

    let countryStateArr = newArr.map((el) => {
      return { url: slugify(el) };
    });

    return countryStateArr;
  }

  const pathArr = getCountryStateCityNames(all);

  return (
    <>
      <SEOMeta
        title='Digital Marketing Course — Hyperlink School'
        description='Best digital marketing course in India with placemnet, fees: 24,999/- only'
        slug='links'
      />

      <main className='m-auto flex max-w-5xl flex-col px-4'>
        <Nav />
        <div className='flex flex-col items-start justify-center gap-6 px-4 py-10 '>
          <div className='flex flex-col gap-2 text-2xl font-medium'>
            Digital Marketing Courses
            <div className='text-sm'>Updated on 1 September, 2023</div>
          </div>
          <div>
            {pathArr &&
              pathArr.map((el, i) => (
                <div key={el}>
                  <span>{i + 1}</span>.{' '}
                  <a
                    className='text-blue-500'
                    href={`/${el.url}`}>
                    {el.url}
                  </a>
                </div>
              ))}
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Link;
