import React, { useState } from 'react'
import { Search, ArrowRight } from 'lucide-react'

interface SearchBarProps {
  onSearch: (term: string) => void
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [term, setTerm] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (term.trim()) {
      onSearch(term)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full relative flex items-center">
      {/* Ícone de Lupa à esquerda */}
      <div className="absolute left-4 text-slate-400">
        <Search size={20} />
      </div>

      {/* Input Transparente (o container pai no Home já tem a cor de fundo) */}
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Pergunte sobre algoritmos, complexidade..."
        className="w-full bg-transparent text-slate-200 placeholder-slate-500 py-4 pl-12 pr-12 rounded-xl outline-none text-lg"
      />

      {/* Botão de Enviar (só aparece se tiver texto ou pode ficar fixo) */}
      <button
        type="submit"
        disabled={!term.trim()}
        className="absolute right-3 p-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors disabled:opacity-0 disabled:pointer-events-none"
      >
        <ArrowRight size={20} />
      </button>
    </form>
  )
}