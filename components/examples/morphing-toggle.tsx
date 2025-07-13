"use client"

import { useState } from "react"

export function MorphingToggle() {
  const [isOn, setIsOn] = useState(false)

  return (
    <div className="flex items-center space-x-4">
      <span className="text-slate-400 text-sm">Toggle:</span>
      <button
        onClick={() => setIsOn(!isOn)}
        className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
          isOn ? "bg-slate-600" : "bg-slate-700"
        }`}
      >
        <div
          className={`absolute top-1 left-1 w-4 h-4 bg-slate-300 rounded-full transition-transform duration-200 ${
            isOn ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
      <span className="text-slate-400 text-sm">{isOn ? "ON" : "OFF"}</span>
    </div>
  )
}
