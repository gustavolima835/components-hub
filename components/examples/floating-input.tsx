"use client"

import { useState } from "react"

export function FloatingInput() {
  const [value, setValue] = useState("")

  return (
    <div className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-slate-600 focus:outline-none transition-colors duration-200"
          placeholder="Digite seu nome"
        />
        <label className="absolute left-4 -top-2 text-xs text-slate-400 bg-slate-950 px-2">Nome</label>
      </div>
    </div>
  )
}
