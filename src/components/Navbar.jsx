import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className='fixed w-full h-20 flex justify-between items-center px-4 bg-slate-900 text-gray-300 z-10'>
      <div>
        <h1 className='text-2xl font-bold text-cyan-500'>Leon Schumacher</h1>
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-x-8'>
        <li>
          <Link to='home' smooth={true} duration={500} className='hover:text-cyan-500 cursor-pointer'>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500} className='hover:text-cyan-500 cursor-pointer'>
            Über mich
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500} className='hover:text-cyan-500 cursor-pointer'>
            Skills
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500} className='hover:text-cyan-500 cursor-pointer'>
            Projekte
          </Link>
        </li>
        <li>
          <Link to='certificates' smooth={true} duration={500} className='hover:text-cyan-500 cursor-pointer'>
            Zertifikate
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500} className='hover:text-cyan-500 cursor-pointer'>
            Kontakt
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            Über mich
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projekte
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='certificates' smooth={true} duration={500}>
            Zertifikate
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
