import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Cryptify',
      description: 'Eine Website zur Ver- und Entschlüsselung von Texten',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/LSchumacher32/Cryptify',
      demo: 'https://lschumacher32.github.io/Cryptify',
    },
    {
      id: 2,
      title: 'QR-Code Generator',
      description: 'Dynamischer QR-Code Generator mit modernem Design',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/LSchumacher32/QRCode-Generator',
      demo: 'https://lschumacher32.github.io/QRCode-Generator',
    },
    {
      id: 3,
      title: 'Swooper',
      description: 'Eine etwas "andere" Version von Minesweeper',
      tech: ['Java'],
      github: 'https://github.com/LSchumacher32/Swooper',
      demo: '#',
    },
  ];

  return (
    <div name='projects' className='w-full min-h-screen bg-slate-800 text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>
            Projekte
          </p>
          <p className='py-6 text-xl'>
            Hier sind einige meiner aktuellen Projekte
          </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8'>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className='bg-slate-900 rounded-lg shadow-lg shadow-[#040c16] hover:scale-105 duration-300 p-6'
            >
              <h3 className='text-2xl font-bold text-cyan-500 mb-2'>
                {project.title}
              </h3>
              <p className='text-gray-400 mb-4'>
                {project.description}
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className='px-3 py-1 bg-cyan-900 rounded-full text-sm'
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex gap-4'>
                <a 
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='px-4 py-2 bg-white text-gray-900 rounded hover:bg-cyan-500 hover:text-white transition-colors'
                >
                  Code
                </a>
                {project.demo !== '#' && (
                  <a 
                    href={project.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition-colors'
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
