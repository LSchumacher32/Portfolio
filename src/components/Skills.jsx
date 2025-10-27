import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiLua } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

const Skills = () => {
  const skills = [
    { id: 1, name: 'HTML', icon: <FaHtml5 size={50} />, color: 'text-orange-500' },
    { id: 2, name: 'CSS', icon: <FaCss3Alt size={50} />, color: 'text-blue-500' },
    { id: 3, name: 'JavaScript', icon: <FaJs size={50} />, color: 'text-yellow-400' },
    { id: 4, name: 'React', icon: <FaReact size={50} />, color: 'text-cyan-400' },
    { id: 5, name: 'TailwindCSS', icon: <SiTailwindcss size={50} />, color: 'text-cyan-500' },
    { id: 6, name: 'Java', icon: <FaJava size={50} />, color: 'text-red-600' },
    { id: 7, name: 'Python', icon: <FaPython size={50} />, color: 'text-blue-400' },
    { id: 8, name: 'C#', icon: <TbBrandCSharp size={50} />, color: 'text-purple-500' },
  ];

  return (
    <div name='skills' className='w-full min-h-screen bg-slate-900 text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='w-full flex justify-center items-center flex-col mb-7'>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>
            Skills
          </p>
          <p className='py-4 text-xl text-center'>
            Diese Technologien habe ich bereits verwendet und damit gearbeitet
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8'>
          {skills.map((skill) => (
            <div 
              key={skill.id} 
              className='shadow-md shadow-[#040c16] hover:scale-110 duration-300 py-8 rounded-lg bg-slate-800'
            >
              <div className={`flex justify-center ${skill.color}`}>
                {skill.icon}
              </div>
              <p className='mt-4 font-semibold'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
