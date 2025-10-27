import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-slate-800 text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full p-4'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>
              Über mich
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>
              Hallo, ich bin Leon Schumacher. 
              Schön, dass du hier bist!
            </p>
          </div>
          <div>
            <p className='text-lg'>
              Ich bin 24 Jahre alt und befinde mich aktuell in einer Umschulung zum 
              Fachinformatiker für Anwendungsentwicklung. Meine Leidenschaft gilt der 
              Softwareentwicklung, besonders in den Bereichen Webentwicklung und 
              Game Development.
            </p>
            <p className='text-lg mt-4'>
              In meiner Freizeit entwickle ich Websites mit modernen Technologien wie 
              React und TailwindCSS, erstelle Spiele in Unity3D oder arbeite an 
              verschiedenen anderen Projekten. Ich bin motiviert, lernbereit und zielorientiert 
              und suche aktuell ein Praktikum im Raum Minden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
