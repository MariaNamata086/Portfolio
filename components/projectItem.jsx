import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const ProjectItem = ({projectImg,projectUrl,projectTitle,projectDesc}) => {
  return (
    <div className = 'relative flex flex-col items-center justify-center h-auto mt-8 w-full shadow-xl shadow-gray-300 rounded-xl px-3 group hover:bg-gradient-to-r from-[#9c99f8] to-[#0a059e]'>
                    <Image src = {projectImg} alt='Project-image' className='rounded-xl group-hover:opacity-20'/>
                    <div className='hidden group-hover:block absolute text-white font-semibold gap-2 group-hover:z-40'>
                        <h3 className='text-2xl tracking-wider'>{projectTitle}</h3>
                        <p className='pb-4 pt-2 '>{projectDesc}</p>
                        <Link href={projectUrl}>
                            <span className='text-center p-2 rounded-lg  bg-white text-slate-800 text-lg px-4'>More Info</span>
                        </Link>
                    </div>
                    <div className='hidden flex-row gap-8  mt-5 md:hidden'>
                    <h3 className='text-xl tracking-wider font-bold'>{projectTitle}</h3>                 
                     <button className='text-center rounded-xl text-white text-lg px-3 py-2 mb-6 hover:scale-105'>
                       <Link href={projectUrl}>More Info
                      </Link>
                      </button>
                       
                    </div>
                </div>
  )
}
