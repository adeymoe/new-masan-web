import React from 'react'
import {motion} from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'
import masan from '../assets/MASAN.jpg'
import masan1 from '../assets/MASAN1.jpg'
import masan2 from '../assets/MASAN2.jpg'
import masan3 from '../assets/MASAN3.jpg'
import masan4 from '../assets/MASAN4.jpg'
import masan5 from '../assets/MASAN5.jpg'
import masan6 from '../assets/MASAN6.jpg'
import masan7 from '../assets/MASAN7.jpg'
import masan8 from '../assets/MASAN8.jpg'
import masan9 from '../assets/MASAN9.jpg'
import masan10 from '../assets/MASAN10.jpg'
import masan11 from '../assets/MASAN11.jpg'
import masan12 from '../assets/MASAN12.jpg'
import masan13 from '../assets/MASAN13.jpg'
import masan14 from '../assets/MASAN14.jpg'
import masan15 from '../assets/MASAN15.jpg'


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