'use client'

import React, { useState } from 'react'
import { Play, Search, Star, Film } from 'lucide-react'
import { motion } from 'framer-motion'

const MoviesComponent = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      {/* Main Content */}
      <main className="p-8">
        <motion.h1 className="text-4xl font-bold mb-8 text-red-500">
          Movies
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <motion.div
              key={item}
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item * 0.1 }}
            >
              <div className="aspect-video bg-gray-600"></div>
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2 text-red-400">Movie Title</h4>
                <div className="flex items-center space-x-2 text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <span>4.5</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default MoviesComponent
