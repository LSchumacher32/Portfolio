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
              Ich bin Leon Schumacher, angehender Fachinformatiker für Anwendungsentwicklung.
            </p>
          </div>
          <div>
            <p className='text-lg'>
              Aktuell mache ich eine Umschulung zum Fachinformatiker für
              Anwendungsentwicklung. Mein Schwerpunkt liegt auf C# und .NET.
              Dabei beschäftige ich mich mit Webanwendungen, REST APIs und
              relationalen Datenbanken.
            </p>
            <p className='text-lg mt-4'>
              In eigenen Projekten vertiefe ich meine Kenntnisse in ASP.NET Core,
              Entity Framework Core und SQL. In meiner Freizeit beschäftige ich
              mich außerdem mit der Spieleentwicklung in Unity3D und probiere eigene
              Spielideen aus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
