import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'
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
import masan20 from '../assets/MASAN20.jpg'
import masan21 from '../assets/MASAN21.jpg'
import masan22 from '../assets/MASAN22.jpg'
import masan23 from '../assets/MASAN23.jpg'
import masan24 from '../assets/MASAN24.jpg'
import masan25 from '../assets/MASAN25.jpg'
import masan26 from '../assets/MASAN26.jpg'
import masan27 from '../assets/MASAN27.jpg'
import masan28 from '../assets/MASAN28.jpg'
import masan29 from '../assets/MASAN29.jpg'
import masan30 from '../assets/MASAN30.jpg'
import masan31 from '../assets/MASAN31.jpg'
import masan32 from '../assets/MASAN32.jpg'
import masan33 from '../assets/MASAN33.jpg'
import masan34 from '../assets/MASAN34.jpg'
import masan35 from '../assets/MASAN35.jpg'
import masan36 from '../assets/MASAN36.jpg'
import masan37 from '../assets/MASAN37.jpg'
import masan38 from '../assets/MASAN38.jpg'
import masan39 from '../assets/MASAN39.jpg'
import masan40 from '../assets/MASAN40.jpg'
import masan41 from '../assets/MASAN41.jpg'
import masan42 from '../assets/MASAN42.jpg'
import masan43 from '../assets/MASAN43.jpg'
import masan44 from '../assets/MASAN44.jpg'
import masan45 from '../assets/MASAN45.jpg'
import masan46 from '../assets/MASAN46.jpg'
import masan47 from '../assets/MASAN47.jpg'
import masan48 from '../assets/MASAN48.jpg'




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
      
      <motion.div
        // initial='hidden'
        // whileInView='visible'
        // variants={zoomInVariants}
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
        <img src={masan29} alt="project image" className='h-[250px] w-full' />
        <img src={masan30} alt="project image" className='h-[250px] w-full' />
        <img src={masan23} alt="project image" className='h-[250px] w-full' />
        <img src={masan26} alt="project image" className='h-[250px] w-full' />
        <img src={masan21} alt="project image" className='h-[250px] w-full' />
        <img src={masan24} alt="project image" className='h-[250px] w-full' />
        <img src={masan4} alt="project image" className='h-[250px] w-full' />
        <img src={masan10} alt="project image" className='h-[250px] w-full' />
        <img src={masan22} alt="project image" className='h-[250px] w-full' />
        <img src={masan11} alt="project image" className='h-[250px] w-full' />
        <img src={masan3} alt="project image" className='h-[250px] w-full' />
        <img src={masan27} alt="project image" className='h-[250px] w-full' />
        <img src={masan31} alt="project image" className='h-[250px] w-full' />
        <img src={masan34} alt="project image" className='h-[250px] w-full' />
        <img src={masan43} alt="project image" className='h-[250px] w-full' />
        <img src={masan33} alt="project image" className='h-[250px] w-full' />
        <img src={masan37} alt="project image" className='h-[250px] w-full' />
        <img src={masan38} alt="project image" className='h-[250px] w-full' />
        <img src={masan48} alt="project image" className='h-[250px] w-full' />
        <img src={masan25} alt="project image" className='h-[250px] w-full' />
        <img src={masan13} alt="project image" className='h-[250px] w-full' />
        <img src={masan6} alt="project image" className='h-[250px] w-full' />
        <img src={masan40} alt="project image" className='h-[250px] w-full' />
        <img src={masan46} alt="project image" className='h-[250px] w-full' />
        <img src={masan35} alt="project image" className='h-[250px] w-full' />
        <img src={masan42} alt="project image" className='h-[250px] w-full' />
        <img src={masan8} alt="project image" className='h-[250px] w-full' />
        <img src={masan41} alt="project image" className='h-[250px] w-full' />
        <img src={masan14} alt="project image" className='h-[250px] w-full' />
        <img src={masan28} alt="project image" className='h-[250px] w-full' />
        <img src={masan47} alt="project image" className='h-[250px] w-full' />
        <img src={masan32} alt="project image" className='h-[250px] w-full' />
        <img src={masan39} alt="project image" className='h-[250px] w-full' />
        <img src={masan44} alt="project image" className='h-[250px] w-full' />
        <img src={masan20} alt="project image" className='h-[250px] w-full' />
        <img src={masan36} alt="project image" className='h-[250px] w-full' />
      </motion.div>
      </motion.div>
    </div>
  )
}

export default Portfolio