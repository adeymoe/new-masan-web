import React from 'react'
import {motion} from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'
import project5 from '../assets/project5.jpg'
import project6 from '../assets/project6.jpg'
import project7 from '../assets/project7.jpg'
import project8 from '../assets/project8.jpg'
import masan from '../assets/masan.jpg'
import masan1 from '../assets/masan1.jpg'
import masan2 from '../assets/masan2.jpg'
import masan3 from '../assets/masan3.jpg'
import masan4 from '../assets/masan4.jpg'
import masan5 from '../assets/masan5.jpg'
import masan6 from '../assets/masan6.jpg'
import masan7 from '../assets/masan7.jpg'
import masan8 from '../assets/masan8.jpg'
import masan9 from '../assets/masan9.jpg'
import masan10 from '../assets/masan10.jpg'
import masan11 from '../assets/masan11.jpg'
import masan12 from '../assets/masan12.jpg'
import masan13 from '../assets/masan13.jpg'
import masan14 from '../assets/masan14.jpg'
import masan15 from '../assets/masan15.jpg'


const Portfolio = () => {
  return (
    <div id='projects' className='w-full'>
      <motion.div
        initial="hidden"
        whileInView='visible'
        variants={slideUpVariants}
        className='lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]'
      >
        <motion.h1
          variants={slideUpVariants}
          className='text-yellow-500 text-2xl'
        >
          PORTFOLIO
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className='text-white uppercase text-[40px] font-bold text-center'
        >
          EXPLORE OUR PROJECTS
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className='w-[120px] h-[6px] bg-yellow-500'
        >
        </motion.div>
      </motion.div>
      <motion.div
          initial='hidden'
          whileInView='visible'
          variants={zoomInVariants}
          className='w-full m-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'
        >
          <img src={masan} alt="project image" className='h-[250px] w-full' />
          <img src={masan15} alt="project image" className='h-[250px] w-full' />
          <img src={masan2} alt="project image" className='h-[250px] w-full' />
          <img src={masan7} alt="project image" className='h-[250px] w-full' />
          <img src={masan12} alt="project image" className='h-[250px] w-full' />
          <img src={masan5} alt="project image" className='h-[250px] w-full' />
          <img src={masan9} alt="project image" className='h-[250px] w-full' />
          <img src={masan1} alt="project image" className='h-[250px] w-full' />

        </motion.div>
    </div>
  )
}

export default Portfolio