import React from 'react'
import Textprin from '../../assets/Texto -principal.png'
import { motion } from 'framer-motion'
import { slipeUp } from '../../utility/animation'

const Hero = () => {
  return (
    <section id='home' className='min-h-screen snap-start flex items-center justify-center pt-16'>


       {/*Descripción*/}
       <div className='flex flex-col items-center justify-center p-5'> {/*chequear aca y modificar */}
        <motion.img
        className='mx-auto max-w-full h-auto'
        src={Textprin} alt="Texto principal"
        variants={slipeUp(0.2)}
        initial="initial"
        animate="animate"
        />
        <motion.p className='text-white text-center text-base sm:text-lg md:text-xl whitespace-pre-line'
        variants={slipeUp(0.1)}
        initial="initial"
        animate="animate"
        >
        Ofrecemos servicios de pen testing para identificar <br/> 
        vulnerabilidades y fortalecer la seguridad de tu empresa.
        </motion.p>
       </div>

    </section>
  )
}

export default Hero
