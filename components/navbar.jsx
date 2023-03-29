import React, {useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TfiLinkedin,} from "react-icons/tfi";
import { BsGithub,BsFillPersonPlusFill,BsTwitter} from "react-icons/bs";
import profileImg from '../public/projects/Untitled design.png'
import { useRouter } from 'next/router';
import bgImg from '../public/projects/home-bg.jpg'

const Navbar = () => {
  const [nav,setnav] = useState(false);
  const [shadow,setShadow] = useState(false)
  const [navbg,setNavBg] = useState('white')
  const [linkColor,setLinkColor] = useState('black') 
  const [isOpen,setIsOpen] = useState(false)
  const router = useRouter(); //useRouer returns an object that contains the current route information

  useEffect(()=>{
   if(router.asPath === '/e-commerce' || '/landing2' || '/timer'|| '/todo' || '/weatherApp'){
    setNavBg('transparent')
    setLinkColor('white')
    setnav(false)
   }else{
    setNavBg('white')
    setLinkColor('black')
   }
  },[router])

  useEffect(
    ()=>{
      const handleShadow = ()=>{
        if(window.scrollY >= 90 ){
          setShadow(true)
        }else{setShadow(false)}
      }
      window.addEventListener('scroll', handleShadow)
    },[])
   const handleClick = ()=>{
    setnav(!nav);
   }
  return (
    <div  className={shadow?`fixed w-full shadow-xl z-5 h-20 bg-[${navbg}]`: `fixed w-full z-50 h-20`}>
        <div className='flex flex-row items-center justify-between w-full h-full px-2 2xl:px-16 bg-black'>
        <Image src={bgImg} alt = 'logo' className='w-20 h-20 rounded-full object-fit'/>
        <div className={`hidden md:flex text-${linkColor} `} >
          <Link className='ml-10 hover:underline offset-4 text-sm hover:text-xl' href='/'>Home</Link>
          <Link className='ml-10 hover:underline offset-4 text-sm hover:text-xl' href='/#about'>About</Link>
          <Link className='ml-10 hover:underline offset-4 text-sm hover:text-xl' href='/#skills'>Skills</Link>
          <Link className='ml-10 hover:underline offset-4 text-sm hover:text-xl' href='/#projects'>Projects</Link>
          <Link className='ml-10 hover:underline offset-4 text-sm hover:text-xl' href='/#contacts'>Contacts</Link>
        </div>
        <div className='flex md:hidden text-white' onClick={handleClick}>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
         <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
         </svg>

        </div>
        </div>
        <div onClick={()=>setnav(false)} className={`fixed left-0 top-0 bg-black/70 w-full h-screen text-slate-600 ${nav?'block':'hidden'} md:hidden `}>
          <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-auto bg-[#ecf0f3] p-10 ease-in duration-500'>
            <div>
              <div className='flex flex-row w-full items-center justify-between'>
                <Image src = {profileImg} alt='logo'  className='w-[60px] h-[60px] rounded-full object-scale-down'/>
                <span className=' flex items-center rounded-full shadow-lg shadow-gray-400 cursor-pointer p-3' onClick={handleClick}>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
                </span>
              </div>
              <div className='border-b border-gray-300 my-4 p-3'>
               <p className='w-[85%] md:w-[90%] py-4 font-semibold'>Let's build something legendary together</p>
              </div>
            </div>
            <div className='py-4 flex flex-col'>
              <ul className='uppercase'>
                {/* <Link href='/'><li className='py-4 text-sm'>Home</li></Link> */}
                <li className='py-4 text-sm'><Link href='/'>Home</Link></li>
                <li className='py-4 text-sm'><Link href='/#about'>About</Link></li>
                <li className='py-4 text-sm'><Link href='/#skills'>Skills</Link></li>
                <li className='py-4 text-sm'><Link href='/#projects'>Projects</Link></li>
                <li className='py-4 text-sm'><Link href='/#contacts'>Contacts</Link></li>
              </ul>
              <div className='flex flex-col pt-5'>
                <p className='uppercase tracking-widest text-[#5651e5] font-bold'>Let's connect</p>
                <div className='flex flex-row mt-3 gap-6 md:justify-around w-1/2'>
                  <span className='flex rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300'><TfiLinkedin/></span>
                  <span className='flex rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300'><BsGithub/></span>
                  <span className='flex rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300'><BsTwitter/></span>
                  <span className='flex rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300'><BsFillPersonPlusFill/></span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar