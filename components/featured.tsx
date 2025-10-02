'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const destinations = [
  {
    title: "Serengeti National Park",
    description: "Witness the great migration across endless plains",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801"
  },
  {
    title: "Okavango Delta",
    description: "Explore waterways in pristine wilderness",
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e"
  },
  {
    title: "Masai Mara",
    description: "Experience authentic African culture and wildlife",
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53"
  }
]

export function Featured() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Featured Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of Africa's most extraordinary safari destinations
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <div className="h-64 relative">
                  <img 
                    src={destination.image} 
                    alt={destination.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{destination.title}</CardTitle>
                  <CardDescription>{destination.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <button className="text-sm font-semibold text-primary hover:underline">
                    Learn more →
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
