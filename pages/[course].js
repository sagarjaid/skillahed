import React, { useEffect } from 'react';
import all from '@/components/india.json';
import SEOMeta from '@/components/SEOMeta';

const locationPage = ({ text, url }) => {
  console.log(url, 'url');
  return (
    <>
      <SEOMeta
        title={`${text} - Hyperlink School`}
        description={`Best ${text} with placemnet, fees: 24,999/- only`}
        slug={url}
      />
      <div className='flex h-screen justify-center items-center text-xl w-full'>
        <h1>{text}</h1>
      </div>
    </>
  );
};

export async function getStaticPaths() {
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
      return { params: { course: slugify(el) } };
    });

    return countryStateArr;
  }

  const pathArr = getCountryStateCityNames(all);

  return {
    paths: pathArr,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  function unslugify(string) {
    // Replace all hyphens with spaces.
    string = string.replace('-', ' ');

    // Capitalize the first letter of each word.
    string = string.replace(/\w+/g, function (word) {
      return word[0].toUpperCase() + word.slice(1);
    });

    string = string.replaceAll('-', ' ');

    return string;
  }

  let text = unslugify(context.params.course);

  let url = context.params.course;

  return {
    props: { text, url },
  };
}

export default locationPage;
