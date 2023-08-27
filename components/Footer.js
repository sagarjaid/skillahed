import React from 'react';
import { impArr } from './Imp';

const Footer = () => {
  function slugify(string) {
    // Convert all characters to lowercase.
    string = string.toLowerCase();

    // Replace all consecutive hyphens with a single hyphen.
    string = string.replaceAll(' ', '-');

    // Remove any leading or trailing hyphens.
    string = string.trim('-');

    return `digital-marketing-courses-in-${string}`;
  }

  return (
    <div className='m-auto flex flex-col justify-center items-start gap-10 pt-5 max-w-6xl p-4 pb-10'>
      <div className='m-auto flex mdx:justify-center items-center gap-0.5 flex-row  flex-wrap'>
        {impArr.length > 0 &&
          impArr.map((el) => (
            <div
              className='text-[6.5px] text-gray-500'
              key={el.id}>
              <a
                href={`https://hyperlinkschool.com/${slugify(el.name)}`}
                className='w-36'>
                Digital marketing courses in {el.name}
              </a>
            </div>
          ))}
      </div>
      <div className='m-auto flex justify-center gap-2 text-xs'>
        <a
          href='https://hyperlinkschool.com/sitemap.xml'
          target='_blank'>
          Sitemap
        </a>
        <span>|</span>

        <a
          href='https://hyperlinkschool.com/privacy'
          target='_blank'>
          Privacy
        </a>
        <span>|</span>
        <a
          href='https://hyperlinkschool.com/links'
          target='_blank'>
          Links
        </a>
        <span>|</span>
        <a
          href='https://hyperlinkschool.com/tc'
          target='_blank'>
          T&C
        </a>
      </div>
    </div>
  );
};

export default Footer;
