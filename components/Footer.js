import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-center gap-1 py-10 text-sm">
      <a href="https://www.linkedin.com/in/sagarjaid/" target="_blank">
        by Sagar Jaid
      </a>
      <span>|</span>

      <a href="https://hyperlinkschool.com/privacy" target="_blank">
        Privacy
      </a>
      <span>|</span>
      <a href="https://hyperlinkschool.com/tc" target="_blank">
        T&C
      </a>
      <span>|</span>
      <a href="https://hyperlinkschool.com/gdpr" target="_blank">
        GDPR
      </a>
    </div>
  );
};

export default Footer;
