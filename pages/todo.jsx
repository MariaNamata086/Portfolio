import React from 'react'
import Image from 'next/image'
import todoImg from '../public/projects/todo2.png'
import { RxDotFilled } from "react-icons/rx";
import Link from 'next/link';

const Todo = () => {
  return (
    <div className='w-full'>
        <div className='w-full h-[60vh] lg:h-[70vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[60vh] lg:h-[70vh] bg-black/60 z-10'/>
            <Image src={todoImg} alt='ecommerce-Website' className='absolute z-1 object-cover' layout='fill'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white '>
                <h2 className='py-2 font-bold'>Todo-List App UI</h2>
                <h3>React | CSS | JavaScript </h3>
            </div>
        </div>

        <div className='w-[90%] mx-auto p-2 flex flex-col md:flex-row md:justify-between gap-x-5 pt-8'>
            <div className='flex flex-col md:w-2/3'>
            <p className='text-2xl font-bold uppercase underline underline-offset-4 text-teal-400 tracking-widest shaadoow mb-4'>Project</p>
            <h2 className='font-semibold mb-3 text-lime-300'>Overview:</h2>
            <p className='text-lg md:text-xl tracking-wider text-slate-800 mb-4 leading-relaxed'> We all occasionally have alot on our plate to do, and we would like to accomplish as much of it as possible.This is a project that i designed to help with that, by helping users keep track of their tasks, such that they worry less about forgetting a given task and concentrate on performing the various tasks. i designed it using React,CSS and Javascript. React was used to create a dynamic UI which updates in realtime, allowing users to add,remove,edit and mark tasks as done. the CSS helped me design a minimalist UI, and to also provide visual feedback to users,such as higlighting completed tasks. Javascript was used to handle input and manage the app's state, ensuring that changes in the app's data are reflected in the UI.I faced a few challenges of learning state management in react, as this was my first react application but I finally got the hang of it &128513;. </p>
                <div className='flex flex-row gap-4'>
                <button className='px-8 py-2 mt-4 mr-10 w-[140px]'><Link href='https://todo-list-app-ten-alpha.vercel.app/' target='_blank'>Demo</Link></button>
                <button className='px-8 py-2 mt-4 w-[140px]'><Link href='https://github.com/MariaNamata086/todoApp' target='_blank'>Code</Link></button>
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

export default Todo