'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, User, ArrowRight } from 'lucide-react'

interface RegistrationModalProps {
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ onClose }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    // Add registration logic here
    console.log('Registration submitted', { name, email, password })
  }


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gray-800/80 backdrop-blur-md p-8 rounded-xl w-full max-w-md shadow-xl border border-gray-700/50"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
        >
          ✕
        </button>

        <h1 className="text-3xl font-bold text-white mb-8 text-center">Sign Up</h1>
       
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <div className="relative">
              <input
                type="text"
                className="w-full bg-gray-700/50 backdrop-blur-sm rounded-lg px-4 py-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <div className="relative">
              <input
                type="email"
                className="w-full bg-gray-700/50 backdrop-blur-sm rounded-lg px-4 py-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full bg-gray-700/50 backdrop-blur-sm rounded-lg px-4 py-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Confirm Password</label>
            <div className="relative">
              <input
                type="password"
                className="w-full bg-gray-700/50 backdrop-blur-sm rounded-lg px-4 py-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="******"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2"
            type="submit"
          >
            <span>Sign Up</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </form>

        <p className="text-gray-400 text-center mt-6">
          Already have an account?{' '}
          <button onClick={onClose} className="text-red-500 hover:text-red-400">
            Log In
          </button>
        </p>
      </motion.div>
    </div>
  )
}

export default RegistrationModal