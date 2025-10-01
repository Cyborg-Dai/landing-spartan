import React from 'react'
import { motion } from 'framer-motion'
import { slipeUp } from '../../utility/animation'

const About = () => {
  return (
    <section id='about' className='min-h-screen snap-start flex items-center justify-center pt-16 px-4 sm:px-12'>
      <div className='max-w-5xl mx-auto'>
        <motion.h2
          className='text-3xl sm:text-4xl font-semibold text-[#AFFF00] text-center'
          variants={slipeUp(0.1)}
          initial='initial'
          animate='animate'
        >
          Sobre Nosotros
        </motion.h2>
        <motion.p
          className='mt-6 text-white/90 text-center'
          variants={slipeUp(0.2)}
          initial='initial'
          animate='animate'
        >
          En Spartan Code, nuestra misión es clara: Proteger el futuro digital a través de la experiencia real.

Somos un equipo de profesionales apasionados por la ciberseguridad, dedicados a aplicar nuestros conocimientos en el campo del hacking ético y el pen testing. Nacidos de un compromiso con la excelencia académica y la aplicación práctica, hemos unido nuestras habilidades para enfrentar los desafíos de seguridad más complejos del mundo digital.

Nuestra filosofía es simple: no solo identificamos vulnerabilidades; las entendemos a fondo. Nos sumergimos en los sistemas para descubrir sus puntos débiles, no con la intención de dañar, sino para fortalecer. Cada prueba de penetración y cada análisis de seguridad que realizamos es un paso más para asegurar que las empresas puedan operar con total tranquilidad.

En un mundo donde las amenazas evolucionan constantemente, en Spartan Code nos mantenemos a la vanguardia, aprendiendo y adaptando nuestras técnicas. Nuestra experiencia, forjada en la práctica y el trabajo conjunto, es la garantía de que tus activos digitales estarán en las manos más capaces.
        </motion.p>
      </div>
    </section>
  )
}

export default About
