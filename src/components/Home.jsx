import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import profileImg from '../assets/profile.webp';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-slate-900 pt-20'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-8'>
        
        {/* Profilbild */}
        <div className='flex justify-center items-center md:order-2'>
        <img 
        src={profileImg}
        alt="Leon Schumacher" 
        className='rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-cyan-500 shadow-xl shadow-cyan-500/50 hover:scale-105 transition-transform duration-300'
        />

        </div>

        {/* Text Content */}
        <div className='flex flex-col justify-center h-full md:order-1'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            Hallo, ich bin Leon
          </h2>
          <p className='text-cyan-500 text-2xl sm:text-3xl font-bold mt-4'>
            Fachinformatiker für Anwendungsentwicklung
          </p>
          <p className='text-gray-400 py-4 max-w-md'>
            Ich befinde mich in einer Umschulung zum Fachinformatiker für Anwendungsentwicklung 
            und bin motiviert, lernbereit und zielorientiert. Aktuell suche ich ein Praktikum 
            im Raum Minden, um meine Kenntnisse in der Praxis anzuwenden.
          </p>

          <div className='flex py-4 gap-4'>
            <a 
              href='https://github.com/LSchumacher32' 
              target='_blank' 
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-cyan-500 transition-colors'
            >
              <FaGithub size={40} />
            </a>
            <a 
              href='https://www.linkedin.com/in/schumacher-leon' 
              target='_blank' 
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-cyan-500 transition-colors'
            >
              <FaLinkedin size={40} />
            </a>
          </div>

          <div>
            <Link
              to='projects'
              smooth={true}
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform'
            >
              Projekte ansehen
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

