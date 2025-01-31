'use client'

import React, { useState } from 'react'
import { 
  Play, 
  Search, 
  Star, 
  Film, 
  TrendingUp, 
  Clock, 
  Plus,
  ChevronRight,
  Tv,
  Award,
  Heart
} from 'lucide-react'
import { motion } from 'framer-motion'

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const featuredMovies = [
    {
      id: 1,
      title: "Inception",
      rating: 4.8,
      image: "/api/placeholder/800/450",
      genre: "Sci-Fi",
      year: 2010
    },
    {
      id: 2,
      title: "The Dark Knight",
      rating: 4.9,
      image: "/api/placeholder/800/450",
      genre: "Action",
      year: 2008
    },
    {
      id: 3,
      title: "Interstellar",
      rating: 4.7,
      image: "/api/placeholder/800/450",
      genre: "Sci-Fi",
      year: 2014
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/1080"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative h-full container mx-auto px-4 flex items-center">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Explore the Cinema Universe
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              See the movies informations with the best UI and UX!
            </p>

            <div className="flex gap-4">
              <motion.button
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full flex items-center space-x-2 font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = "/login"}
              >
                <Play className="h-5 w-5" fill="currentColor" />
                <span>Start now</span>
              </motion.button>

              <motion.button
                className="bg-gray-800/80 hover:bg-gray-700 text-white px-8 py-4 rounded-full flex items-center space-x-2 font-semibold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="h-5 w-5" />
                <span>Saiba Mais</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">40K+</div>
                <div className="text-gray-400">Movies</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Featured Section */}
      <section className="py-16 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <motion.h2
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Bombing
            </motion.h2>
            <motion.a
              href="/movies"
              className="flex items-center text-red-500 hover:text-red-400"
              whileHover={{ x: 5 }}
            >
              Ver Todos
              <ChevronRight className="h-5 w-5 ml-1" />
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMovies.map((movie, index) => (
              <motion.div
                key={movie.id}
                className="group relative rounded-xl overflow-hidden bg-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Star className="h-5 w-5 text-yellow-400" fill="currentColor" />
                        <span>{movie.rating}</span>
                        <span className="text-gray-400">• {movie.genre}</span>
                        <span className="text-gray-400">• {movie.year}</span>
                      </div>
                      <button className="bg-red-500 hover:bg-red-600 p-2 rounded-full">
                        <Play className="h-5 w-5" fill="currentColor" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Por que escolher nossa plataforma?
          </motion.h2>

          <div className="gap-8 flex justify-center items-center">
            {[
              {
                icon: <Film className="h-8 w-8" />,
                title: "Large library",
                description: "Access to thousands of films from different genres and eras"
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Rating System",
                description: "Complete rating system with community reviews"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-red-500/10 p-4 rounded-full inline-block mb-4 text-red-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage