import React, { useRef } from 'react'
import {motion} from 'framer-motion'
import {slideUpVariants, zoomInVariants} from './animation'
import emailjs from 'emailjs-com'

const Contact = () => {

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sqrj3cd",   // Replace with your EmailJS service ID
        "template_nv1c68i",  // Replace with your EmailJS template ID
        formRef.current,
        "gFHMrnQNo0ofTD5vX"    // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
          e.target.reset();
        },
        (error) => {
          alert('Problem Sending Email. Try Again!!')
          console.log("Error sending email:", error.text);
        }
      );
  };



  return (
    <div id='contact' className='bg-white w-full'>
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
          CONTACT US
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className='text-black uppercsae text-[40px] font-bold'
        >
          REACH US FOR ENQUIRY
        </motion.h1>
        <div className='w-[120px] h-[6px] bg-yellow-500'></div>
        <motion.div
        className='italic mt-[60px]'
        variants={zoomInVariants}
        >
								<motion.p
                  variants={slideUpVariants}
                >
                  <span className='text-yellow-500 '>Tel: </span> (+234)-803-395-5311
                </motion.p>
								<motion.p
                  variants={slideUpVariants}
                >
                  <span className='text-yellow-500 '>Email: </span> banjiaraoye@gmail.com
                </motion.p>
								<motion.p
                variants={zoomInVariants}
                >
                  <span className='text-yellow-500 '>Office Address: </span> Room 1 Oba Matanmi III Shopping Complex <br /> Olorunda Local Government,<br/>Osogbo, Osun State, NIGERIA
                </motion.p>
        </motion.div>

      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
      >
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial="hidden"
          whileInView='visible'
          variants={zoomInVariants}
          className='flex flex-col justify-center items-start gap-4 w-full'
        >
          <input name='fullname' type="text" placeholder='Enter Fullname' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
          <input name='email' type="email" placeholder='Enter Email' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
          <input type="number" name='mobile' placeholder='Enter Mobile Number' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full' />
          <textarea name='message' placeholder='Enter your message...' rows='5' className='px-6 py-3 border-[2px] border-black text-black rounded-lg w-full'></textarea>
          <motion.button
          type='submit'
            variants={zoomInVariants}
            className='bg-yellow-500 hover:bg-black hover:text-white px-10 py-4 text-lack font-bold rounded-lg w-full'
          >
            SUBMIT ENQUIRY
          </motion.button>

        </motion.form>
        
      </motion.div>
    </div> 
    </div> 
  )
}

export default Contact