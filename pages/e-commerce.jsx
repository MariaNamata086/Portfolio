import React from 'react'
import Image from 'next/image'
import shopImg from '../public/projects/product-details.png'
import { RxDotFilled } from "react-icons/rx";
import Link from 'next/link';

const Ecommerce = () => {
  return (
    <div className='w-full'>
        <div className='w-full h-[60vh] lg:h-[70vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[60vh] lg:h-[70vh] bg-black/60 z-10'/>
            <Image src={shopImg} alt='ecommerce-Website' className='absolute z-1 object-cover' layout='fill'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white '>
                <h2 className='py-2 font-bold'>E-commerce App UI</h2>
                <h3>React | Tailwind | Redux | Typescript</h3>
            </div>
        </div>

        <div className='w-[90%] mx-auto p-2 flex flex-col md:flex-row md:justify-between gap-x-5 pt-8'>
            <div className='flex flex-col md:w-2/3'>
            <p className='text-2xl font-bold uppercase underline underline-offset-4 text-amber-500 tracking-widest mb-4'>Project</p>
            <h2 className='font-semibold mb-3 text-lime-500'>Overview:</h2>
            <p className='text-lg md:text-xl tracking-wider text-slate-800 mb-4 leading-relaxed'>Technology evolves to make life simpler for man, and this includes introducing convenience in the palm of a users's hand. Shopping has never been made easier and quicker than with the introduction of online shopping.This project features a fully responsive design that allows users to access it on any device. It is also equipped with a powerful search functionality that makes it easy for users to find the products that they are looking for,instead of having to scroll through the entire list of products. To ensure a seamless user experience, this app features React Router, allowing for easy navigation between the homepage,shopping cart page and the product details page. The app is also integrated React-Redux to provide a seamless data flow and global state management,ensuring that users can shop with confidence. I was initially challenged,this being my first project working with Redux,as it introducs a new way of handling state in applications.However, this gave me a valuable learning experience and thus Ican confidently say Iam well conversant with using redux to manage global state. Although the payment logic is not included in this version of the app, it still serves as a showcase of my skills in building robust and responsive web applications. Iam excited to present this project as a part of my portfolio, and I hope it demonstrates my abilities to potential clients and employers. </p>
                <div className='flex flex-row gap-4'>
                <button className='px-8 py-2 mt-4 mr-10 w-[140px]'><Link href='https://ecommerce-app-eight-dusky.vercel.app/' target='_blank'>Demo</Link></button>
                <button className='px-8 py-2 mt-4 w-[140px]'><Link href='https://github.com/MariaNamata086/EcommerceApp' target='_blank'>Code</Link></button>
                </div>
            </div>
            <div className='flex flex-col md:w-1/3 shadow-xl  rounded-xl p-4 shadow-gray-400 mt-10 md:h-[380px] md:mt-20'>
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
                <div className='text-gray-600 py-2 flex items-center'>
                    <span><RxDotFilled/></span>
                    <span>Typescript </span>
                </div>
                <div className='text-gray-600 py-2 flex items-center'>
                    <span><RxDotFilled/></span>
                    <span>React-&nbsp;Redux</span>
                </div>
                <div className='text-gray-600 py-2 flex items-center'>
                    <span><RxDotFilled/></span>
                    <span>Reduxt-&nbsp;Toolkit</span>
                </div>
                <div className='text-gray-600 py-2 flex items-center'>
                    <span><RxDotFilled/></span>
                    <span>React-&nbsp;Router </span>
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

export default Ecommerce