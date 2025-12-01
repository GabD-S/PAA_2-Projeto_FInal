import React from 'react'
import { Cpu } from 'lucide-react'

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      {/* Logo / Nome do Projeto */}
      <div className="flex items-center gap-2 text-blue-400">
        <Cpu size={24} />
        <span className="font-bold text-lg tracking-wider text-slate-200">
          TurboAI <span className="text-slate-500 text-sm font-normal">| PAA</span>
        </span>
      </div>

      {/* Menu Simples (Opcional) */}
      <nav className="hidden md:flex gap-6 text-sm text-slate-400">
        <a href="#" className="hover:text-blue-400 transition-colors">Sobre</a>
        <a href="#" className="hover:text-blue-400 transition-colors">Histórico</a>
      </nav>

      {/* Avatar / Perfil (Decorativo) */}
      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white cursor-pointer">
        D
      </div>
    </header>
  )
}