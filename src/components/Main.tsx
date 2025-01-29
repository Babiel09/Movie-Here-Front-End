'use client'

import React, { useState } from 'react'
import { Play, Search, Star, Film } from 'lucide-react'
import { motion } from 'framer-motion'

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Film className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold">Movie Here</h1>
          </motion.div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies..."
                className="bg-gray-800 rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section 
        className="container mx-auto px-4 py-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-6">Discover Amazing Movies</h2>
        <p className="text-xl text-gray-300 mb-8">Your ultimate destination for movie exploration</p>
        
        <motion.button
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full flex items-center justify-center mx-auto space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Play className="h-5 w-5" />
          <span>Get Started</span>
        </motion.button>
      </motion.section>

      {/* Featured Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.h3 
          className="text-3xl font-bold mb-8"
          {...fadeInUp}
        >
          Featured Movies
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="bg-gray-800 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item * 0.2 }}
            >
              <div className="aspect-video bg-gray-700"></div>
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">Movie Title</h4>
                <div className="flex items-center space-x-2 text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <span>4.5</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage