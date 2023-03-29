import React from 'react'
import shopImg from '../public/projects/e-commerce.png'
import weatherImg from '../public/projects/weatherapp.jpg'
import landing2 from '../public/projects/landing2.png'
import landing1 from '../public/projects/landing-page1.png'
import timerImg from '../public/projects/timer.png'
import todoImg from '../public/projects/todo.jpg'
import { ProjectItem } from './projectItem'

const Projects = () => {
  return (
    <div id='projects '>
        <div className='relative max-w-[1240px] w-[90%] mx-auto px-2 py-10 -z-10 md:z-0 '>
            <p className='text-3xl  md:text-4xl tracking-widest uppercase text-[#5651e9] font-bold'>Projects</p>
            <h2 className='py-4 text-amber-400 underline underline-offset-4 '>What I've Built</h2>
            <div className = 'grid md:grid-cols-2 gap-8 '>
             <ProjectItem
             projectImg={shopImg}
             projectDesc = 'React,Ts,TailwindCss,Redux'
             projectTitle='E-commerce App'
             projectUrl='/e-commerce'
             />
             <ProjectItem
             projectImg={weatherImg}
             projectDesc = 'React,TailwindCss'
             projectTitle='Weather App'
             projectUrl='/weatherApp'
             />
             <ProjectItem
             projectImg={landing2}
             projectDesc = 'React,TailwindCss'
             projectTitle='HomeSmart-Landing Page'
             projectUrl='/landing2'
             />
             <ProjectItem
             projectImg={landing1}
             projectDesc = 'HTML,TailwindCss'
             projectTitle='Manage-Go landingpage'
             projectUrl='/manage-go'
             />
             <ProjectItem
             projectImg={timerImg}
             projectDesc = 'HTML,CSS,JavaScript'
             projectTitle='CountDown Timer'
             projectUrl='/timer'
             />
             <ProjectItem
             projectImg={todoImg}
             projectDesc = 'React,CSS'
             projectTitle='Todo List App'
             projectUrl='/todo'
             />            
               
            </div>

        </div>

    </div>
  )
}

export default Projects