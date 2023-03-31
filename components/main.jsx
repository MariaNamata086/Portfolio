import React from 'react'
import { TfiLinkedin,} from "react-icons/tfi";
import { BsGithub,BsFillPersonPlusFill,BsTwitter} from "react-icons/bs";
import profileImg from '../public/projects/Untitled design.png'
import Image from 'next/image'
import Link from 'next/link'

const Main = () => {
  return (
    <>    
    <div id='main' className=' flex w-full h-screen text-center pt-30 md:mb-[590px] mb-[1500px] sm:mb-[940px]'>
        <div className=' flex flex-col max-w-[1240px] w-full h-auto mx-auto p-2 gap-6  justify-center items-center'>
          <div className='flex left-[50%] rounded-full w-[400px] h-[400px] mt-[1650px] sm:mt-[1080px] md:mt-[720px]'>            
            <Image priority src={profileImg} alt='profilePhoto' className='rounded-full'/>
          </div>
            <div>
                <p className='uppercase tracking-widest text-cyan-700 text-lg md:text-xl font-semibold'>Let's connect and build something together</p>
                <h1 className='py-3 font-bold text-slate-700'>Hi, I'm <span className='text-violet-700'>Maria</span></h1>
                <h1 className='py-2 font-bold text-slate-700'>A front-End Web Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] mx-auto tracking-wider text-lg'> I’m a 24 year old female who resides in Uganda. I am looking forward to the opportunity to work on-site or remotely with a diverse group of people from different backgrounds. I have a strong foundation in HTML, CSS, JavaScript and TypeScript as a front-end web developer. I have also worked with various modern frameworks and libraries such as React, Tailwind CSS, and Redux to create visually appealing, interactive and user-friendly interfaces. I am a Cytotechnology graduate of Makerere University. I am seeking a front-end development position that will let me use my skills and abilities to advance both professionally and persobally, while also helping the company to thrive. I have experience building web projects, including an e-commerce app UI, a weather app, a self-portfolio app, a to-do list app, and landing pages all available in the projects section below. In addition to my technical skills,  I am also proficient in the English Language, with excellent communication skills, adaptability, critical thinking, resilient, and creative with a keen eye for detail. With these skills, I am confident that I bring a unique perspective experience necessary to make a valuable contribution to the team.</p>
                <div className='flex max-w-[330px] items-center justify-between mx-auto py-4'>
                <Link  href= 'https://www.linkedin.com/in/marianamata-juniorfront-enddeveloper/'target='_blank' title='Linked-in' className='flex rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 hover:scale-125 ease-in duration-300'><TfiLinkedin/></Link>
                  <Link href= 'https://github.com/MariaNamata086' target='_blank' title='Github-in' className='flex rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 hover:scale-125 ease-in duration-300'><BsGithub/></Link>
                  <Link href= 'https://twitter.com/Mariya08883' target='_blank' title='Twitter' className='flex rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 hover:scale-125 ease-in duration-300'><BsTwitter/></Link>
                  <Link href= '#'  title='namatamaria086@gmail.com' className='flex rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 hover:scale-125 ease-in duration-300'><BsFillPersonPlusFill/></Link>
                </div>

            </div>
        </div>
    </div>
    </>
    
  )
}

export default Main