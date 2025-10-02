'use client'

import { motion } from 'framer-motion'

export function Experiences() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Curated Experiences</h2>
          <p className="text-gray-600">
            Every journey is tailored to provide unforgettable moments and exclusive access to Africa's most remarkable places
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="relative h-[600px] group cursor-pointer overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801"
              alt="Luxury Safari Experience"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:opacity-75" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Private Game Drives</h3>
              <p className="text-white/90">
                Exclusive wildlife viewing with expert guides in luxury vehicles
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative h-[600px] group cursor-pointer overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e"
              alt="Luxury Accommodation"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:opacity-75" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Luxury Lodges</h3>
              <p className="text-white/90">
                World-class accommodations in the heart of the wilderness
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
