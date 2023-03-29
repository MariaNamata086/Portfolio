import React from 'react'
import Image from 'next/image'

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
                <Image src='/../public/skills/html.png' alt='HTML logo' width={64} height={64}/>
            </div>
            <span className='text-xl md:text-sm font-bold text-slate-900 tracking-widest'>HTML</span>
        </div>
        <div className='flex flex-row justify-between items-center p-4 shadow-lg shadow-gray-300 rounded-lg w-3/4 h-[80px]'>
            <div>
                <Image src='/../public/skills/css.png' alt='CSS logo' width={64} height={64}/>
            </div>
            <span className='text-xl md:text-sm font-bold text-slate-900 tracking-widest'>CSS</span>
        </div>
        <div className='flex flex-row justify-between items-center p-4 shadow-lg shadow-gray-300 rounded-lg w-3/4 h-[80px]'>
            <div>
                <Image src='/../public/skills/javascript.png' alt='JS logo' width={64} height={64}/>
            </div>
            <span className='text-xl md:text-sm font-bold text-slate-900 tracking-widest'>JavaScript</span>
        </div>
        <div className='flex flex-row justify-between items-center p-4 shadow-lg shadow-gray-300 rounded-lg w-3/4 h-[80px]'>
            <div>
                <Image src='/../public/skills/react.png' alt='React logo' width={64} height={64}/>
            </div>
            <span className='text-xl md:text-sm font-bold text-slate-900 tracking-widest'>ReactJS</span>
        </div>
        <div className='flex flex-row justify-between items-center p-4 shadow-lg shadow-gray-300 rounded-lg w-3/4 h-[80px]'>
            <div>
                <Image src='/../public/skills/redux2.png' alt='redux logo' width={64} height={64}/>
            </div>
            <span className='text-xl md:text-sm font-bold text-slate-900 tracking-widest'>Redux</span>
        </div>
        <div className='flex flex-row justify-between items-center p-4 shadow-lg shadow-gray-300 rounded-lg w-3/4 h-[80px]'>
            <div>
                <Image src='/../public/skills/nextjs.png' alt='nextjs logo' width={64} height={64}/>
            </div>
            <span className='text-xl md:text-sm font-bold text-slate-900 tracking-widest'>NextJS</span>
        </div>
        <div className='flex flex-row justify-between items-center p-4 shadow-lg shadow-gray-300 rounded-lg w-3/4 h-[80px]'>
            <div>
                <Image src='/../public/skills/tailwind.png' alt='tailwind logo' width={64} height={64}/>
            </div>
            <span className='text-xl md:text-sm font-bold text-slate-900 tracking-widest'>TailwindCSS</span>
        </div>
        <div className='flex flex-row justify-between items-center p-4 shadow-lg shadow-gray-300 rounded-lg w-3/4 h-[80px]'>
            <div>
                <Image src='/../public/skills/github1.png' alt='github logo' width={64} height={64}/>
            </div>
            <span className='text-xl md:text-sm font-bold text-slate-900 tracking-widest'>GitHub</span>
        </div>
        
    </div>
    </div>
  )
}

export default Skills