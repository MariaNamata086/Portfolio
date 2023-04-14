import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TfiLinkedin,} from "react-icons/tfi";
import { BsGithub,BsFillPersonPlusFill,BsTwitter} from "react-icons/bs";
import typingImg from '/./public/skills/typing1.jpg'

const Contacts = () => {
  return (
    <div id='contacts' className=' w-[85%] mx-auto '>
        <div className='flex flex-col p-3'>
            <p className='text-3xl md:text-4xl uppercase mb-2 p-3  shadow-lg shadow-gray-300 tracking-widest text-violet-600 font-bold w-3/4 text-center'>Contacts</p>
            <h2 className='mt-2 font-semibold tracking-wider'> Get In Touch</h2>
        </div>
        <div className='flex flex-col md:flex-row md:justify-around md:gap-x-5 items-center justify-center p-2 shadow-xl shadow-gray-200 h-auto'> 
        <div className='flex md:w-1/2 h-auto p-2 shadow-lg rounded-br-xl'>
         <div className='flex flex-col'>
            <div className='flex p-2 shadow-lg'>
                <Image src={typingImg} alt='computer' className='rounded-tr-3xl rounded-bl-3xl hover:scale-105 ease-in duration-200'/>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='font-bold text-3xl md:text-4xl text-slate-800'>Maria</p>
                <h3 className='font-semibold text-2xl text-teal-600'>Front-end Developer</h3>
                <p className='text-neutral-500'>Iam available for free lancing or full-time positions. Contact me and Let's talk.</p>
                <p className='font-semibold text-xl md:text-3xl text-slate-700'>Connect with me:</p>
            </div>
             <div className='flex w-full items-center gap-x-4 mx-auto py-4'>
             <Link  href= 'https://www.linkedin.com/in/marianamata-front-enddeveloper/'target='_blank' title='Linked-in' className='flex rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 hover:scale-105 ease-in duration-300'><TfiLinkedin/></Link>
                  <Link href= 'https://github.com/MariaNamata086' target='_blank' title='Github' className='flex rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 hover:scale-105 ease-in duration-300'><BsGithub/></Link>
                  <Link href= 'https://twitter.com/Mariya08883' target='_blank' title='Twitter' className='flex rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 hover:scale-105 ease-in duration-300'><BsTwitter/></Link>
                  <Link href= '#'  title='namatamaria086@gmail.com' className='flex rounded-full shadow-lg shadow-gray-400 p-4 md:p-6 hover:scale-105 ease-in duration-300'><BsFillPersonPlusFill/></Link>
            </div>
          </div>
        </div>
          <div className='flex flex-col md:w-1/2  h-auto shadow-lg shadow-gray-300 rounded-tl-3xl rounded-br-3xl p-6 gap-3'>
            <h2 className='ml-3 mb-2 font-semibold text-gray-700 mt-5 '>Let's Connect:</h2>
            <p className='font-bold  tracking-wider md:text-xl text-cyan-800'>Email: <span className='font-normal text-slate-900'>namatamaria086@gmail.com</span></p>
            <p className='font-bold  tracking-wider md:text-xl text-cyan-800'>Mobile: <span className='font-normal text-slate-900'>+256784736487</span></p>
            <p className='font-bold  tracking-wider md:text-xl text-cyan-800'>Twitter: <a href='https://twitter.com/Mariya08883'className='font-normal text-slate-900'>https://twitter.com/Mariya08883</a></p>
            <p className='font-bold  tracking-wider md:text-xl text-cyan-800'>Linked-in <a className='font-normal text-slate-900' href='https://www.linkedin.com/in/marianamata-front-enddeveloper/'>https://www.linkedin.com/in/marianamata-juniorfront-enddeveloper/</a></p>
            <p className='font-bold  tracking-wider md:text-xl text-cyan-800'>GitHub: <a className='font-normal text-slate-900'href='https://github.com/MariaNamata086'>https://github.com/MariaNamata086</a></p>
          </div>

        </div>

        <div className=' flex justify-center mt-6 p-5 w-20 mb-5 relative left-[50%] rounded-full shadow-lg shadow-gray-400 hover:scale-105 transition-shadow ease-in duration-200'>
          <Link href='/' title='Back to Top'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
</svg>
</Link>
        </div>
    </div>
  )
}

export default Contacts