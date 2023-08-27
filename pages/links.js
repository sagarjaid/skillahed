import React from 'react';
import all from '@/components/india.json';
import SEOMeta from '@/components/SEOMeta';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

const Link = () => {
  const getCountryStateCityNames = (data) => {
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

    function classesSlugify(string) {
      // Convert all characters to lowercase.
      string = string.toLowerCase();

      // Replace all consecutive hyphens with a single hyphen.
      string = string.replaceAll(' ', '-');

      // Remove any leading or trailing hyphens.
      string = string.trim('-');

      return `digital-marketing-classes-in-${string}`;
    }

    function coursesSlugify(string) {
      // Convert all characters to lowercase.
      string = string.toLowerCase();

      // Replace all consecutive hyphens with a single hyphen.
      string = string.replaceAll(' ', '-');

      // Remove any leading or trailing hyphens.
      string = string.trim('-');

      return `digital-marketing-courses-in-${string}`;
    }

    function instituteSlugify(string) {
      // Convert all characters to lowercase.
      string = string.toLowerCase();

      // Replace all consecutive hyphens with a single hyphen.
      string = string.replaceAll(' ', '-');

      // Remove any leading or trailing hyphens.
      string = string.trim('-');

      return `digital-marketing-institute-in-${string}`;
    }

    let classesArr = newArr.map((el) => {
      return { url: classesSlugify(el) };
    });

    let coursessArr = newArr.map((el) => {
      return { url: coursesSlugify(el) };
    });

    let instituteArr = newArr.map((el) => {
      return { url: instituteSlugify(el) };
    });

    let countryStateArr = [...classesArr, ...coursessArr, ...instituteArr];

    return countryStateArr;
  };

  const pathArr = getCountryStateCityNames(all);

  function unslugify(string) {
    // Replace all hyphens with spaces.
    string = string.replace(/-/g, ' ');

    // Capitalize the first letter of each word.
    string = string.replace(/\w+/g, function (word) {
      return word[0].toUpperCase() + word.slice(1);
    });

    // Convert " in " to lowercase
    string = string.replace(/\sin\s/gi, ' in ');

    return string;
  }

  return (
    <>
      <SEOMeta
        title='Digital Marketing Courses List in India — Hyperlink School'
        description='Best digital marketing courses List in India with placement, fees: 24,999/- only'
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
                    href={`https://hyperlinkschool.com/${el.url}`}>
                    {unslugify(el.url)}
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
