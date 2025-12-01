import React, { useEffect, useState, useRef } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import ResponseCard from '../components/ResponseCard' // Certifique-se que este componente suporte Dark Mode
import { useLocation, useNavigate } from 'react-router-dom'
import { queryServer } from '../api/client' // [cite: 10]
import { User, Cpu, Loader2 } from 'lucide-react'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export default function ResponsePage() {
  const q = useQuery().get('q') || ''
  const navigate = useNavigate()
  
  const [loading, setLoading] = useState(false)
  const [answer, setAnswer] = useState('')
  
  // Ref para rolar a página para a resposta automaticamente
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!q) return
    
    setLoading(true)
    setAnswer('') // Limpa resposta anterior ao mudar a pergunta
    
    // Simulação da chamada ao servidor [cite: 10]
    queryServer(q)
      .then((data) => {
        setAnswer(data.answer)
      })
      .catch((err) => {
        console.error(err)
        setAnswer("Desculpe, ocorreu um erro ao processar seu algoritmo.")
      })
      .finally(() => {
        setLoading(false)
      })
  }, [q])

  // Scroll automático quando a resposta chega
  useEffect(() => {
    if (!loading && answer) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [answer, loading])

  const handleNewSearch = (newTerm: string) => {
    // Usa navigate ao invés de window.location para manter a SPA rápida
    navigate(`/response?q=${encodeURIComponent(newTerm)}`)
  }

  return (
    <div className="flex flex-col h-screen bg-[#0f172a] text-slate-200 font-sans overflow-hidden">
      {/* Header Fixo */}
      <div className="border-b border-slate-800/50 bg-[#0f172a] z-20">
        <Header />
      </div>

      {/* Área de Conteúdo (Scrollável) */}
      <main className="flex-1 overflow-y-auto w-full relative">
        <div className="max-w-3xl mx-auto px-4 py-8 pb-40">
          
          {/* Pergunta do Usuário */}
          {q && (
            <div className="flex justify-end mb-8">
              <div className="flex gap-4 items-start max-w-[80%] flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
                  <User size={16} className="text-slate-300"/>
                </div>
                <div className="bg-slate-800 rounded-2xl rounded-tr-sm p-4 text-slate-200 shadow-sm border border-slate-700">
                  <p className="font-medium text-sm text-slate-400 mb-1">Você perguntou:</p>
                  <p>{q}</p>
                </div>
              </div>
            </div>
          )}

          {/* Resposta do Sistema [cite: 5, 10] */}
          <div className="flex gap-4 items-start mb-8 animate-in fade-in duration-500">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
              <Cpu size={16} className="text-white animate-pulse" />
            </div>
            
            <div className="flex-1 min-w-0">
              {loading ? (
                <div className="flex items-center gap-2 text-slate-400 mt-1">
                  <Loader2 className="animate-spin" size={20} />
                  <span>Analisando complexidade...</span> {/*  */}
                </div>
              ) : (
                <div className="prose prose-invert max-w-none">
                  {/* ResponseCard renderiza a resposta final */}
                  <ResponseCard text={answer} /> 
                </div>
              )}
            </div>
          </div>
          
          {/* Elemento invisível para scroll */}
          <div ref={bottomRef} />
        </div>
      </main>

      {/* Barra de Busca Fixa (Rodapé) */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a] to-transparent pt-10 pb-6 px-4 z-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-800/80 backdrop-blur-md p-1 rounded-2xl shadow-2xl border border-slate-700/50">
            <SearchBar onSearch={handleNewSearch} /> {/* Reutilizando o SearchBar transparente */}
          </div>
          <p className="text-center text-xs text-slate-600 mt-3">
            O sistema pode cometer erros. Verifique informações importantes.
          </p>
        </div>
      </div>
    </div>
  )
}