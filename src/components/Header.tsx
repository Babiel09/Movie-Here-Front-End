"use client";
import React, { useState } from 'react'
import { Play, Search, Star, Film, User, LogIn, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            onClick={() => window.location.href = "/"}
            className="flex items-center space-x-2 hover:cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Film className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-white">Movie Here</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies..."
                className="bg-gray-800 rounded-full px-4 py-2 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-red-500 w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <motion.a
              href="/movies"
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Play className="h-5 w-5" />
              <span>Movies</span>
            </motion.a>
            
            <motion.a
              href="/profile"
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </motion.a>

            <motion.a
              href="/login"
              className="flex items-center space-x-1 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-4"
          >
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search movies..."
                className="w-full bg-gray-800 rounded-full px-4 py-2 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <a
              href="/movies"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Play className="h-5 w-5" />
              <span>Movies</span>
            </a>
            <a
              href="/profile"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </a>

            <a
              href="/login"
              className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors w-full justify-center"
            >
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </a>
          </motion.div>
        )}
      </nav>
    </header>
  )
}