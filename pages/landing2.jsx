import React from 'react'
import Image from 'next/image'
import landing2 from '../public/projects/ldng2.png'
import { RxDotFilled } from "react-icons/rx";
import Link from 'next/link';
const Landing2 = () => {
  return (
    <div className='w-full'>
    <div className='w-full h-[60vh] lg:h-[70vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[60vh] lg:h-[70vh] bg-black/60 z-10'/>
        <Image src={landing2} alt='ecommerce-Website' className='absolute z-1 object-cover' layout='fill'/>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white '>
            <h2 className='py-2 font-bold'>HomeSmart landing page UI</h2>
            <h3>React | Tailwind </h3>
        </div>
    </div>

    <div className='w-[90%] mx-auto p-2 flex flex-col md:flex-row md:justify-between gap-x-5 pt-8'>
        <div className='flex flex-col md:w-2/3'>
        <p className='text-2xl font-bold uppercase underline underline-offset-4 text-amber-500 tracking-widest mb-4'>Project</p>
            <h2 className='font-semibold mb-3 text-teal-700'>Overview:</h2>
            <p className='text-lg md:text-xl tracking-wider text-slate-800 mb-4 leading-relaxed'>This was another landing page that I designed using React, Tailwind CSS and a little Javascript. It is mobile responsive, with dark mode and light mode accommodations.I used tailwind to provide consistency and responsiveness through out the page, making it easy to use and visually appealing to the users.Working on this project helped me better understand CSS rules like the negative Z-index, negative right and left values. React and JavaScript helped me create a dynamic and interactive UI, allowing users to interact with the app and see the changes in realtime.</p>
            <div className='flex flex-row gap-4'>
            <button className='px-8 py-2 mt-4 mr-10 w-[140px]'><Link href='https://landing-page2-tau.vercel.app/' target='_blank'>Demo</Link></button>
            <button className='px-8 py-2 mt-4 w-[140px]'><Link href='https://github.com/MariaNamata086/LandingPage2' target='_blank'>Code</Link></button>
            </div>
        </div>
        <div className='flex flex-col md:w-1/3 shadow-xl  rounded-xl p-4 shadow-gray-400 mt-10 md:h-[200px] md:mt-20'>
            <p className='ml-3 font-bold pb-2'>Technologies</p>
         <div className='p-2 grid grid-cols-3 md:grid-cols-1' >
            <div className='text-gray-600 py-2 flex items-center'>
                <span><RxDotFilled/></span>
                <span>React</span>
            </div>
            <div className='text-gray-600 py-2 flex items-center'>
                <span><RxDotFilled/></span>
                <span>Tailwind CSS</span>
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

export default Landing2