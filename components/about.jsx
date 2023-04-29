import React from 'react'
import Image from 'next/image'
import typingImg from '../public/skills/typingHTML.jpg'
const About = () => {
  return (
    <div id='about' className='w-full md:h-full p-2 items-center justify-items-start  py-16'>
     <div className=' flex flex-col md:flex-row gap-3 max-w-[1240px] m-auto md:gap-x-3 '>
        <div className='flex flex-col gap-3 md:w-3/5 p-2'>
            <span className='uppercase shadow-xl font-bold text-3xl text-center md:text-4xl text-violet-700 p-3'>About</span>
            <h3 className='text-amber-300 font-semibold text-2xl underline underline-offset-4'>Who I am</h3>
            <p className='text-slate-700 text-lg tracking-wider md:text-xl'> 
            Having a background in medicine and a passion for programming,I made the decision to learn front-end development from the available online tools and courses.I studied HTML,CSS and JavaScript at W3schools.com,academind.com and JavaScript.info.In addition,I've also learnt how to work with modern frameworks and libraries like React,NextJs,Redux and tailwind CSS to design responsive user interfaces offering users the best experience.I am proficient in the use of Git and GitHub, which I believe are essential tools for effective collaboration and version control in software development.I'm willing to pick up fresh methods and tools to develop my skillset. As I've progressed through my programming career, I've developed strong problem-solving skills, critical thinking, and outstanding communication skills.
             </p>
        </div>
        <div className='flex bg-none mt-2 md:w-2/5 max-w-[500px] ml-2 shadow-lg shadow-gray-500 h-[420px]'>
            <Image priority src = {typingImg} alt = 'coding-image' className='object-cover rounded-tl-3xl rounded-br-3xl h-full w-[500px]'/>
           
        </div>
     </div>
    </div>
  )
}

export default About