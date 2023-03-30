import React from 'react'
import Image from 'next/image'
import htmlImg from '../public/skills/html.png'
import cssImg from '../public/skills/css.png'
import javascriptImg from '../public/skills/javascript.png'
import reactImg from '../public/skills/react.png'
import reduxImg from '../public/skills/redux2.png'
import nextImg from '../public/skills/nextjs.png'
import tailwindImg from '../public/skills/tailwind.png'
import gitImg from '../public/skills/github1.png'

const Skills = () => {
  return (
    <div id='skills' className='flex flex-col items-center gap-4 mt-15 justify-items-start  h-auto mx-auto '>
        <div className='flex flex-col gap-3 uppercase'>
        <h1 className='font-bold text-violet-800 tracking-wider shadow-lg p-3 text-3xl md:text-4xl'>Skills</h1>
        <h4 className='font-semibold text-amber-400 text-2xl underline underline-offset-4 mt-4 mb-4'>What I Can Do:</h4>
        </div>
    <div className='grid md:grid-cols-2 lg:grid-cols-4  items-center w-[80%]  mx-auto p-3 gap-3 '>
        <div className='flex flex-row justify-between items-center p-4 shadow-lg shadow-gray-300 rounded-lg w-3/4 h-[80px]'>
            <div>
                <Image src={htmlImg} alt='HTML logo' width={64} height={64}/>
            </div>
            <span className='text-xl md:text-sm font-bold text-slate-900 tracking-widest'>HTML</span>
        </div>
        <div className='flex flex-row justify-between items-center p-4 shadow-lg shadow-gray-300 rounded-lg w-3/4 h-[80px]'>
            <div>
                <Image src={cssImg} alt='CSS logo' width={64} height={64}/>
            </div>
            <span className='text-xl md:text-sm font-bold text-slate-900 tracking-widest'>CSS</span>
        </div>
        <div className='flex flex-row justify-between items-center p-4 shadow-lg shadow-gray-300 rounded-lg w-3/4 h-[80px]'>
            <div>
                <Image src={javascriptImg} alt='JS logo' width={64} height={64}/>
            </div>
            <span className='text-xl md:text-sm font-bold text-slate-900 tracking-widest'>JavaScript</span>
        </div>
        <div className='flex flex-row justify-between items-center p-4 shadow-lg shadow-gray-300 rounded-lg w-3/4 h-[80px]'>
            <div>
                <Image src={reactImg} alt='React logo' width={64} height={64}/>
            </div>
            <span className='text-xl md:text-sm font-bold text-slate-900 tracking-widest'>ReactJS</span>
        </div>
        <div className='flex flex-row justify-between items-center p-4 shadow-lg shadow-gray-300 rounded-lg w-3/4 h-[80px]'>
            <div>
                <Image src={reduxImg} alt='redux logo' width={64} height={64}/>
            </div>
            <span className='text-xl md:text-sm font-bold text-slate-900 tracking-widest'>Redux</span>
        </div>
        <div className='flex flex-row justify-between items-center p-4 shadow-lg shadow-gray-300 rounded-lg w-3/4 h-[80px]'>
            <div>
                <Image src={nextImg}alt='nextjs logo' width={64} height={64}/>
            </div>
            <span className='text-xl md:text-sm font-bold text-slate-900 tracking-widest'>NextJS</span>
        </div>
        <div className='flex flex-row justify-between items-center p-4 shadow-lg shadow-gray-300 rounded-lg w-3/4 h-[80px]'>
            <div>
                <Image src={tailwindImg}alt='tailwind logo' width={64} height={64}/>
            </div>
            <span className='text-xl md:text-sm font-bold text-slate-900 tracking-widest'>TailwindCSS</span>
        </div>
        <div className='flex flex-row justify-between items-center p-4 shadow-lg shadow-gray-300 rounded-lg w-3/4 h-[80px]'>
            <div>
                <Image src={gitImg}alt='github logo' width={64} height={64}/>
            </div>
            <span className='text-xl md:text-sm font-bold text-slate-900 tracking-widest'>GitHub</span>
        </div>
        
    </div>
    </div>
  )
}

export default Skills