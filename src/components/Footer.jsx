import React from 'react';

const Footer = () => {
  return (
    <div className='py-6 text-center bg-slate-900 text-gray-400 border-t border-slate-700'>
      <p>&copy; {new Date().getFullYear()} Leon Schumacher. Alle Rechte vorbehalten.</p>
    </div>
  );
};

export default Footer;
