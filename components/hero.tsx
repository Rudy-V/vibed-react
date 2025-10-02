'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1516426122078-c23e76319801)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="relative z-20 text-center text-white px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience Africa's Finest
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Embark on an extraordinary journey through the heart of Africa's most pristine wilderness
        </motion.p>
        <motion.button 
          className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/90 transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Plan Your Safari
        </motion.button>
      </div>
    </div>
  )
}
