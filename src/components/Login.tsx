'use client'
import React, { useState, useEffect } from 'react'
import { Mail, Lock, ArrowRight, User } from 'lucide-react'
import { motion } from 'framer-motion'
import RegistrationModal from './Register';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const LoginComponent = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [particles, setParticles] = useState<Particle[]>([])
  const [modal, setModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setModal(false);
  };

  useEffect(() => {
    // Create initial particles
    const initialParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.5 + 0.3
    }))

    setParticles(initialParticles)

    // Animation loop
    const animate = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => ({
          ...particle,
          y: particle.y - particle.speed,
          // Reset particle position when it goes off screen
          ...(particle.y < -10
            ? {
                y: window.innerHeight + 10,
                x: Math.random() * window.innerWidth
              }
            : {})
        }))
      )
    }

    const animationInterval = setInterval(animate, 50)

    return () => clearInterval(animationInterval)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-4">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-red-500"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.x,
              top: particle.y,
              opacity: particle.opacity,
            }}
            initial={false}
          />
        ))}
      </div>

      {/* Glassmorphism effect for the login container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-800/80 backdrop-blur-md p-8 rounded-xl w-full max-w-md z-10 shadow-xl border border-gray-700/50"
      >
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Login</h1>
       
        <form className="space-y-6">
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <div className="relative">
              <input
                type="text"
                className="w-full bg-gray-700/50 backdrop-blur-sm rounded-lg px-4 py-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
            <br />
            <label className="block text-gray-300 mb-2">Email</label>
            <div className="relative">
              <input
                type="email"
                className="w-full bg-gray-700/50 backdrop-blur-sm rounded-lg px-4 py-3 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div>
            <label className="block text-gray-300 mb-2">Senha</label>
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
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2"
            type="submit"
          >
            <span>Login</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </form>
        <p className="text-gray-400 text-center mt-6">
          Do not have an acount?{' '}
          <button onClick={()=>setModal(true)} className="text-red-500 hover:text-red-400">
            Sign Up!
          </button>
        </p>
        { modal && <RegistrationModal onClose={handleCloseModal}/>}
      </motion.div>
    </div>
  )
}

export default LoginComponent