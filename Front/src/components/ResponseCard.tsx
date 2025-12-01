import React from 'react'

interface ResponseCardProps {
  text: string
}

export default function ResponseCard({ text }: ResponseCardProps) {
  return (
    <div className="
      p-6 
      bg-slate-800/50 
      border border-slate-700 
      rounded-2xl 
      leading-relaxed 
      shadow-sm
      text-slate-200">
      <p className="whitespace-pre-wrap">{text}</p>
    </div>
  )
}