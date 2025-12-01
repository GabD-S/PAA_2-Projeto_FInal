import React from 'react'

type Props = { title: string; message: string; onClose: () => void }
export default function Modal({ title, message, onClose }: Props){
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-30" onClick={onClose} />
      <div className="bg-white rounded-2xl shadow-2xl p-6 z-10 max-w-sm text-center">
        <div className="text-4xl mb-2">✅</div>
        <h2 className="font-semibold">{title}</h2>
        <p className="text-sm text-gray-600 mt-2">{message}</p>
        <button onClick={onClose} className="mt-4 bg-green-600 text-white px-4 py-2 rounded-full">OK</button>
      </div>
    </div>
  )
}