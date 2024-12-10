import React from 'react'
import {motion} from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'

const About = () => {
  return (
    <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]' id='about'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
      >
        <motion.h1
          variants={slideUpVariants}
          className='text-yellow-500 text-2xl'
        >
          WELCOME TO
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className='text-white uppercsae text-[40px] font-bold'
        >
          MASAN CONSTRUCTION
        </motion.h1>
        <div className='w-[120px] h-[6px] bg-yellow-500'></div>
        <motion.p 
        className='text-3xl italic text-gray-50 mt-[60px]'
        variants={zoomInVariants}
        >Founded by its current leader in 1994, MASAN Construction Company has successfully completed over 300 diverse projects including water borehole construction, major road construction, mega hospitals, computer-based test centers, residential construction, technological installations, security projects and more.

        From its inception, the company has maintained a commitment to excellence and a broad scope of capabilities.
        </motion.p>

      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
      >
        <motion.p 
        className='text-white text-lg text-justify'
        variants={zoomInVariants}
        >With years of experience in the construction industry, we take immense pride in our unwavering dedication to delivering projects that not only meet but consistently exceed our clients' expectations.
        We recognize that every project is unique, and we make it our mission to work closely with our clients to understand their specific needs, preferences, and goals. Whether it's a residential, commercial, or industrial project, our team ensures that every detail is tailored to align with the client's vision. Our collaborative approach fosters transparency and trust, ensuring that the entire process, from concept to completion, runs smoothly and efficiently.
        Our team of highly skilled professionals is at the heart of what we do. We pride ourselves on maintaining an excellent track record of completing projects on schedule without compromising quality. From detailed planning to seamless execution, we meticulously manage every aspect of the project to ensure it is delivered within the agreed time frame and budget
        </motion.p>
        <a href='#projects'><motion.button
          variants={zoomInVariants}
          className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black'
        >
          PROJECTS
        </motion.button></a>
      </motion.div>
    </div>
  )
}

export default About