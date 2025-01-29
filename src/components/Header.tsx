"use client";

import React, { useState } from 'react'
import { Play, Search, Star, Film } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header(){
    const [searchQuery, setSearchQuery] = useState('')
    return(
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
    );
};