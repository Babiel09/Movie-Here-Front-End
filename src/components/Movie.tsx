'use client'

import React, { useState } from 'react'
import { MoreHorizontal, Star, Search } from 'lucide-react'

interface Movie {
  id: number
  title: string
  posterUrl: string
  score: number
  releaseDate: string
}

const MoviesComponent = () => {
  const [selectedGenre, setSelectedGenre] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const genres = [
    { id: 'action', name: 'Action' },
    { id: 'fantasy', name: 'Fantasy' },
    { id: 'horror', name: 'Horror' },
    { id: 'music', name: 'Music' },
    { id: 'mystery', name: 'Mystery' },
    { id: 'romance', name: 'Romance' },
    { id: 'sci-fi', name: 'Science Fiction' },
    { id: 'tv-movie', name: 'TV Movie' },
    { id: 'thriller', name: 'Thriller' },
    { id: 'war', name: 'War' },
    { id: 'western', name: 'Western' }
  ]

  // Sample data - replace with your API data
  const movies: Movie[] = [
    {
      id: 1,
      title: "Werewolves",
      posterUrl: "/api/placeholder/300/450",
      score: 63,
      releaseDate: "Dec 06, 2024"
    },
    {
      id: 2,
      title: "The Gardener",
      posterUrl: "/api/placeholder/300/450",
      score: 58,
      releaseDate: "Jan 30, 2025"
    },
    {
      id: 3,
      title: "Kingdom IV: Return of the Great General",
      posterUrl: "/api/placeholder/300/450",
      score: 73,
      releaseDate: "Jan 15, 2025"
    },
    {
      id: 4,
      title: "Number 24",
      posterUrl: "/api/placeholder/300/450",
      score: 72,
      releaseDate: "Jan 01, 2025"
    },
    {
      id: 5,
      title: "The Substance",
      posterUrl: "/api/placeholder/300/450",
      score: 71,
      releaseDate: "Sep 19, 2024"
    }
    // Add more movies...
  ]

  const getScoreColor = (score: number) => {
    if (score >= 75) return 'bg-green-500'
    if (score >= 65) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-200 p-6">
      <div className="max-w-[1800px] mx-auto">
        {/* Search and Filters */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-white">Movies</h1>
          </div>

          {/* Genre Tags */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedGenre('all')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors
                ${selectedGenre === 'all' 
                  ? 'bg-white text-black' 
                  : 'bg-[#2a2a2a] hover:bg-[#3a3a3a]'}`}
            >
              All
            </button>
            {genres.map(genre => (
              <button
                key={genre.id}
                onClick={() => setSelectedGenre(genre.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors
                  ${selectedGenre === genre.id 
                    ? 'bg-white text-black' 
                    : 'bg-[#2a2a2a] hover:bg-[#3a3a3a]'}`}
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {movies.map(movie => (
            <div key={movie.id} className="group relative">
              <div className="relative aspect-[2/3] rounded-md overflow-hidden bg-[#2a2a2a]">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <div className={`w-10 h-10 rounded-full ${getScoreColor(movie.score)} flex items-center justify-center text-white font-bold text-sm`}>
                    {movie.score}
                  </div>
                </div>
                <button className="absolute top-2 left-2 p-1 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal className="w-5 h-5 text-white" />
                </button>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-2 rounded-full font-medium">
                    Ver Detalhes
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="text-sm font-medium text-white line-clamp-1">{movie.title}</h3>
                <p className="text-xs text-gray-400">{movie.releaseDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MoviesComponent