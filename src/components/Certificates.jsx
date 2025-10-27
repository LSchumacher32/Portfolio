import React from 'react';
import { FaCertificate } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Google IT-Support',
      institution: 'Google',
      platform: 'Coursera',
      year: '2024',
    },
    {
      id: 2,
      title: 'HTML, CSS, and Javascript for Web Developers',
      institution: 'Johns Hopkins University',
      platform: 'Coursera',
      year: '2025',
    },
  ];

  return (
    <div name='certificates' className='w-full min-h-screen bg-slate-900 text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>
            Zertifikate
          </p>
          <p className='py-6 text-xl'>
            Meine abgeschlossenen Kurse und Zertifizierungen
          </p>
        </div>

        <div className='grid sm:grid-cols-2 gap-8'>
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className='bg-slate-800 rounded-lg shadow-lg shadow-[#040c16] hover:scale-105 duration-300 p-6 flex flex-col items-center'
            >
              <FaCertificate className='text-cyan-500 mb-4' size={50} />
              <h3 className='text-xl font-bold text-center mb-2'>
                {cert.title}
              </h3>
              <p className='text-gray-400 text-center'>{cert.institution}</p>
              <p className='text-gray-500 text-center'>{cert.platform}</p>
              <p className='text-cyan-500 mt-2'>{cert.year}</p>
            </div>
          ))}
        </div>

        <div className='mt-8 text-center'>
          <a 
            href='https://www.linkedin.com/in/schumacher-leon/details/certifications'
            target='_blank'
            rel='noopener noreferrer'
            className='text-cyan-500 hover:text-cyan-400 transition-colors'
          >
            Weitere Zertifikate auf LinkedIn →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
