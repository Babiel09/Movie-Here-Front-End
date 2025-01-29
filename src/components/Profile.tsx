'use client'

import React, { useState, useRef } from 'react'
import { 
  User, 
  Mail, 
  Lock, 
  Shield, 
  Clock, 
  Edit2, 
  Camera, 
  ThumbsUp, 
  MessageSquare,
  CheckCircle,
  Settings,
  Key
} from 'lucide-react'
import { motion } from 'framer-motion'

interface UserData {
  id: number;
  name: string;
  email: string;
  photo: string;
  description: string;
  verified: boolean;
  twoStetps: boolean;
  createdAt: Date;
  role: string;
  upVotesCount: number;
  commentsCount: number;
}

const ProfileComponent = () => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showSecuritySettings, setShowSecuritySettings] = useState<boolean>(false)
    const [profilePic, setProfilePic] = useState<string>("");
  
    const [userData, setUserData] = useState<UserData>({
      id: 1,
      name: "João Silva",
      email: "joao@email.com",
      photo: "",
      description: "Amante de filmes de todos os gêneros. Sempre em busca da próxima obra-prima do cinema.",
      verified: true,
      twoStetps: true,
      createdAt: new Date("2024-01-01"),
      role: "User",
      upVotesCount: 42,
      commentsCount: 156
    })
  
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-6 border border-gray-700/50"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                  {userData.photo ? (
                    <img src={userData.photo} alt={userData.name} className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-16 h-16 text-gray-400" />
                  )}
                </div>
                <button 
                  className="absolute bottom-0 right-0 bg-red-500 p-2 rounded-full hover:bg-red-600 transition-colors"
                  onClick={() => setShowModal(true)}
                >
                  <Camera className="w-4 h-4 text-white" />
                </button>
              </div>
  
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-white">{userData.name}</h1>
                  {userData.verified && (
                    <CheckCircle className="w-6 h-6 text-blue-500" />
                  )}
                </div>
                
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <Mail className="w-4 h-4" />
                  <span>{userData.email}</span>
                </div>
  
                {isEditing ? (
                  <textarea
                    className="w-full bg-gray-700/50 rounded-lg p-3 text-white resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={userData.description}
                    onChange={(e) => setUserData({...userData, description: e.target.value})}
                    rows={3}
                  />
                ) : (
                  <p className="text-gray-300">{userData.description}</p>
                )}
  
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="mt-4 flex items-center gap-2 text-red-500 hover:text-red-400"
                >
                  <Edit2 className="w-4 h-4" />
                  <span>{isEditing ? 'Salvar' : 'Editar Perfil'}</span>
                </button>
              </div>
            </div>
          </motion.div>
  
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
                <h2 className="text-xl font-bold mb-4">Alterar Foto de Perfil</h2>
                <input
                  type="text"
                  placeholder="Insira a URL da imagem"
                  value={profilePic}
                  onChange={(e) => setProfilePic(e.target.value)}
                  className="w-full p-2 bg-gray-700 rounded mb-4 text-black px-5"
                />
                <div className="flex justify-center gap-2">
                  <button onClick={() => setShowModal(false)} className="bg-gray-600 px-4 py-2 rounded">Cancelar</button>
                  <button onClick={() => { setUserData({...userData, photo: profilePic}); setShowModal(false); }} className="bg-red-500 px-4 py-2 rounded">Salvar</button>
                </div>
              </div>
            </div>
          )}
  


        {/* Estatísticas e Segurança */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Estatísticas */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
          >
            <h2 className="text-xl font-bold text-white mb-6">Estatísticas</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <ThumbsUp className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300">Upvotes</span>
                </div>
                <span className="text-white font-bold">{userData.upVotesCount}</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-300">Comentários</span>
                </div>
                <span className="text-white font-bold">{userData.commentsCount}</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-300">Membro desde</span>
                </div>
                <span className="text-white font-bold">
                  {userData.createdAt.toLocaleDateString()}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Configurações de Segurança */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
          >
            <h2 className="text-xl font-bold text-white mb-6">Segurança</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-300">Autenticação em 2 Fatores</span>
                </div>
                <button
                  onClick={() => setUserData({...userData, twoStetps: !userData.twoStetps})}
                  className={`px-4 py-2 rounded-full ${
                    userData.twoStetps ? 'bg-green-500' : 'bg-gray-600'
                  }`}
                >
                  {userData.twoStetps ? 'Ativado' : 'Desativado'}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <Key className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-300">Alterar Senha</span>
                </div>
                <button
                  onClick={() => setShowSecuritySettings(!showSecuritySettings)}
                  className="text-red-500 hover:text-red-400"
                >
                  Alterar
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-300">Nível de Acesso</span>
                </div>
                <span className="px-4 py-2 bg-gray-600 rounded-full text-white">
                  {userData.role}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProfileComponent