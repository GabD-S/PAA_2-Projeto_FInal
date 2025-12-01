import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import { useNavigate } from 'react-router-dom'
import { Sparkles, Code, Calculator, BrainCircuit } from 'lucide-react' // Ícones opcionais (instale lucide-react se não tiver)

export default function Home() {
  const navigate = useNavigate()

  const handleSearch = (q: string) => {
    if (!q.trim()) return
    navigate(`/response?q=${encodeURIComponent(q)}`)
  }

  // Sugestões para testar o sistema (relevante para PAA)
  const suggestions = [
    { text: "Qual a complexidade do Merge Sort?", icon: <Calculator size={18} /> },
    { text: "Explique o algoritmo de Dijkstra", icon: <BrainCircuit size={18} /> },
    { text: "O que é Programação Dinâmica?", icon: <Code size={18} /> },
    { text: "Resuma o problema do Caixeiro Viajante", icon: <Sparkles size={18} /> },
  ]

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 flex flex-col font-sans">
      {/* Header fixo ou transparente */}
      <div className="w-full border-b border-slate-800/50">
        <Header />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 pb-20">
        
        {/* Saudação com Gradiente estilo Gemini */}
        <div className="mb-10 text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
              Olá, User
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-400 font-light">
            Como posso ajudar com seus algoritmos hoje?
          </h2>
        </div>

        {/* Área da Busca - Central e Larga */}
        <div className="w-full max-w-2xl relative z-10">
          <div className="bg-slate-800/50 p-1 rounded-2xl shadow-xl border border-slate-700 backdrop-blur-sm hover:border-slate-600 transition-colors">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>

        {/* Cards de Sugestão (Prompt Starters) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-12 w-full max-w-2xl">
          {suggestions.map((item, index) => (
            <button
              key={index}
              onClick={() => handleSearch(item.text)}
              className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:bg-slate-700/50 hover:border-slate-500 transition-all text-left text-sm text-slate-300 group"
            >
              <span className="p-2 rounded-full bg-slate-900 group-hover:bg-slate-800 text-purple-400 transition-colors">
                {item.icon}
              </span>
              <span>{item.text}</span>
            </button>
          ))}
        </div>
      </main>

      {/* Footer simples para disclaimer */}
      <footer className="py-4 text-center text-xs text-slate-600">
        Projeto de PAA - UnB 2025/2 • Desenvolvido para fins acadêmicos
      </footer>
    </div>
  )
}