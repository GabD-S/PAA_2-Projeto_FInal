import React from 'react'

export default function ResultCard({ title, desc, onView, onContact }: any){
  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-start gap-4">
      <div className="w-16 h-16 bg-gray-200 rounded" />
      <div className="flex-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
      <div className="flex flex-col gap-2">
        <button className="bg-sky-600 text-white px-3 py-1 rounded" onClick={onView}>Ver</button>
        <button className="border px-3 py-1 rounded" onClick={onContact}>Contato</button>
      </div>
    </div>
  )
}