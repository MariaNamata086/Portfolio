import React from 'react'
import Image from 'next/image'
import timerImg from '../public/projects/timer2.png'
import { RxDotFilled } from "react-icons/rx";
import Link from 'next/link';


const Timer = () => {
  return (
    <div className='w-full'>
        <div className='w-full h-[60vh] lg:h-[70vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[60vh] lg:h-[70vh] bg-black/60 z-10'/>
            <Image src={timerImg} alt='ecommerce-Website' className='absolute z-1 object-cover' layout='fill'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white '>
                <h2 className='py-2 font-bold'>Count-down Timer</h2>
                <h3> HTML | CSS | JavaScript </h3>
            </div>
        </div>

        <div className='w-[90%] mx-auto p-3 flex flex-col md:flex-row md:justify-between gap-x-5 gap-y-4 pt-8'>
            <div className='flex flex-col w-2/3'>
            <p className='text-2xl font-semibold uppercase underline underline-offset-4 text-red-600 tracking-widest mb-4 shaadoow'>Project</p>
            <h2 className='font-semibold mb-3 text-neutral-600'>Overview:</h2>
            <p className='text-lg md:text-xl tracking-wider text-slate-800 mb-4 leading-relaxed'>Need to do something after a given duration? then this countdown timer app that I build is the perfect tool for you.Built from scratch using vanilla Javascript, with basic functionalities of set time; where the user is prompted to enter the number of minutes. This feature is fool-proofed such that a user cannot start the timer with a value of less than zero.The other functionalities include starting,pausing and resetting the timer.This project helped me to better understand JavaScript core concepts such as functions and events.The project challenged me to learn how to correctly update the UI based on the user's inputs or actions.It also gave me a better understanding of the CSS since i had to write all of it from scratch; thus understanding concepts like flex-box.</p>
                <div className='flex flex-row gap-4'>
                <button className='px-8 py-2 mt-4 mr-10 w-[140px]'><Link href='https://count-down-timer-liard.vercel.app/' target='_blank'>Demo</Link></button>
                <button className='px-8 py-2 mt-4 w-[140px]'><Link href='https://github.com/MariaNamata086/COUNT-DOWN-TIMER' target='_blank'>Code</Link></button>
                </div>
            </div>
            <div className='flex flex-col md:w-1/3 shadow-xl  rounded-xl p-4 shadow-gray-400 mt-10 md:mt-20 md:h-[200px] '>
                <p className='ml-3 font-bold pb-2'>Technologies</p>
             <div className='p-2 grid grid-cols-3 md:grid-cols-1' >
                <div className='text-gray-600 py-2 flex items-center'>
                    <span><RxDotFilled/></span>
                    <span>HTML</span>
                </div>
                <div className='text-gray-600 py-2 flex items-center'>
                    <span><RxDotFilled/></span>
                    <span>CSS</span>
                </div>
                <div className='text-gray-600 py-2 flex items-center'>
                    <span><RxDotFilled/></span>
                    <span>JavaScript</span>
                </div>               
                
                </div>
         </div>
        </div>
        <Link href='/#projects'>
            <p className='text-teal-700 font-bold text-xl text-center mb-4 underline'>Back</p>
        </Link>
    </div>
  )
}

export default Timer