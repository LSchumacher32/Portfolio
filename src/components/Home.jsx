import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import profileImg from '../assets/profile.webp';

const Home = () => {
  return (
    <div name='home' className='w-full min-h-screen bg-slate-900 flex items-center pt-16 md:pt-0'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full px-4 md:flex-row gap-6 md:gap-8 py-8'>
        
        {/* Profilbild */}
        <div className='flex justify-center items-center md:order-2 mt-4 md:mt-0'>
          <img 
            src={profileImg}
            alt="Leon Schumacher" 
            className='rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-cyan-500 shadow-xl shadow-cyan-500/50 hover:scale-105 transition-transform duration-300'
          />
        </div>

        {/* Text Content */}
        <div className='flex flex-col justify-center md:order-1 text-center md:text-left'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            Hallo, ich bin Leon
          </h2>
          <p className='text-cyan-500 text-2xl sm:text-3xl font-bold mt-4'>
            Fachinformatiker für Anwendungsentwicklung
          </p>
          <p className='text-gray-400 py-4 max-w-md mx-auto md:mx-0'>
            Ich befinde mich in einer Umschulung zum Fachinformatiker für Anwendungsentwicklung 
            und bin motiviert, lernbereit und zielorientiert. Aktuell suche ich ein Praktikum 
            im Raum Minden, um meine Kenntnisse in der Praxis anzuwenden.
          </p>

          <div className='flex py-4 gap-4 justify-center md:justify-start'>
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

          <div className='flex justify-center md:justify-start'>
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


