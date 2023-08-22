import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-center gap-2 py-10 text-xs'>
      <a
        href='https://hyperlinkschool.com/links'
        target='_blank'>
        Digital Marketing Courses
      </a>
      <span>|</span>

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
        href='https://hyperlinkschool.com/tc'
        target='_blank'>
        T&C
      </a>
      <span>|</span>
      <a
        href='https://hyperlinkschool.com/gdpr'
        target='_blank'>
        GDPR
      </a>
    </div>
  );
};

export default Footer;
