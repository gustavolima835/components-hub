"use client"

import type React from "react"
import { useState } from "react"

import {
  Image,
  Sparkles,
  FileCode,
  Palette,
} from "lucide-react"

import MemoriesGallery from "./components/memories-gallery"
import ExpandableCards from "./components/expandable-cards"

interface UIComponentItem {
  id: string
  name: string
  category: string
  description: string
  component: React.ComponentType
}

const componentList: UIComponentItem[] = [
  {
    id: "memories-gallery",
    name: "Galeria Animada de Memórias",
    category: "Galerias Interativas",
    description: "Uma galeria contínua com animações suaves, efeitos de paralaxe e sobreposição de camadas que trazem vida às memórias.",
    component: MemoriesGallery,
  },
  {
    id: "expandable-cards",
    name: "Cartões Expansíveis",
    category: "Experiências Visuais",
    description: "Cartões animados com transição dinâmica de largura e conteúdo revelado ao passar o cursor.",
    component: ExpandableCards,
  },
]

const categoryIcons: Record<string, React.ReactNode> = {
  "Galerias Interativas": <Image className="w-4 h-4 mr-2" />,
  "Experiências Visuais": <Sparkles className="w-4 h-4 mr-2" />,
}

export default function ComponentExplorer() {
  const [selectedComponentId, setSelectedComponentId] = useState<string>()

  const selectedComponent = componentList.find((c) => c.id === selectedComponentId)

  return (
    <div className="min-h-screen flex bg-slate-950 text-white">
      
      <aside className="w-80 bg-slate-900 border-r border-slate-800 flex flex-col">
        <div className="p-2 overflow-y-auto space-y-1 flex-1">
          {componentList.map((component) => (
            <div
              key={component.id}
              className={`p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                selectedComponentId === component.id
                  ? "bg-slate-700 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
              onClick={() => setSelectedComponentId(component.id)}
            >
              <div className="flex items-center mb-1">
                {categoryIcons[component.category] ?? <FileCode className="w-4 h-4 mr-2" />}
                <span className="font-medium text-sm">{component.name}</span>
              </div>
              <div className="text-xs text-slate-400">{component.category}</div>
              <p className="text-xs text-slate-500">{component.description}</p>
            </div>
          ))}
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        {selectedComponent ? (
          <>
            <header className="bg-slate-900 border-b border-slate-800 p-6">
              <div>
                <h1 className="text-3xl font-bold">{selectedComponent.name}</h1>
                <p className="text-slate-400 text-lg">{selectedComponent.description}</p>
              </div>
            </header>

            <section className="flex-1 p-8">
              <div className="h-full rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                <selectedComponent.component />
              </div>
            </section>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <Palette className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Component Library</h2>
              <p className="text-slate-400 max-w-md mx-auto">
                Selecione um componente na barra lateral para visualizar o preview.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
