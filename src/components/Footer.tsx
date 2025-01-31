'use client'

import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[#121212] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Profile Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-24 h-24 mb-4">
              <img
                src="https://avatars.githubusercontent.com/u/177035115?v=4"
                onClick={()=>window.location.href = "https://github.com/Babiel09"}
                alt="GitHub Profile"
                className="rounded-full border-2 border-red-500 hover:cursor-pointer"
              />
              <div className="absolute -bottom-2 -right-2 bg-red-500 text-white p-2 rounded-full">
                <Heart className="w-4 h-4" fill="currentColor" />
              </div>
            </div>
            <h3 className="text-white font-bold mb-2">Gabriel Castro</h3>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Full Stack Typescript Developer with focus on Back End
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-red-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">About</a>
              </li>
              <li>
                <a href="/movies" className="hover:text-red-500 transition-colors">Movies</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Private Police</a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">Cookies</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-gray-800 p-2 rounded-full">
                  <Mail className="w-4 h-4 text-red-500" />
                </div>
                <a href="mailto:contato@exemplo.com" className="text-gray-400 hover:text-red-500 transition-colors">
                  estudosbabiel@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gray-800 p-2 rounded-full">
                  <Github className="w-4 h-4 text-red-500" />
                </div>
                <a href="https://github.com/Babiel09" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors">
                /Babiel09
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Movie Here. An open source project.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> by Gabriel Castro
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer