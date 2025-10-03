import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { slipeUp } from '../../utility/animation'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Construir mailto (frontend-only)
    const to = 'cyborg.daibx@gmail.com' // Reemplazar por email de la empresa
    const subject = `Consulta desde landing - ${name}`
    const body = `Nombre: ${name}\nEmail: ${email}\n\nMensaje: ${message}`

    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <section id='contact' className='min-h-screen snap-start flex items-center justify-center pt-16 px-4 sm:px-12'>
      <div className='max-w-4xl mx-auto'>
        <motion.h2
          className='text-3xl sm:text-4xl font-semibold text-[#AFFF00] text-center'
          variants={slipeUp(0.1)}
          initial='initial'
          animate='animate'
        >
          Contacto
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className='mt-8 grid grid-cols-1 gap-4'
          variants={slipeUp(0.2)}
          initial='initial'
          animate='animate'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <input
              type='text'
              placeholder='Tu nombre'
              className='w-full rounded-md bg-black/40 border border-[#AFFF00]/40 px-4 py-3 text-white outline-none focus:border-[#AFFF00]'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type='email'
              placeholder='Tu email'
              className='w-full rounded-md bg-black/40 border border-[#AFFF00]/40 px-4 py-3 text-white outline-none focus:border-[#AFFF00]'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <textarea
            placeholder='Tu mensaje'
            rows={5}
            className='w-full rounded-md bg-black/40 border border-[#AFFF00]/40 px-4 py-3 text-white outline-none focus:border-[#AFFF00]'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type='submit'
            className='mt-2 inline-flex items-center justify-center rounded-md bg-[#AFFF00] px-6 py-3 font-medium text-black hover:bg-[#7FFF00] transition-colors'
          >
            Enviar
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
