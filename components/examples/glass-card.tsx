export function GlassCard() {
  return (
    <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 max-w-md">
      <h3 className="text-xl font-medium text-white mb-3">Glass Card</h3>
      <p className="text-slate-400 mb-4 text-sm">Este cartão usa um design minimalista e escuro.</p>
      <div className="flex space-x-2">
        <div className="w-2 h-2 rounded-full bg-slate-600"></div>
        <div className="w-2 h-2 rounded-full bg-slate-500"></div>
        <div className="w-2 h-2 rounded-full bg-slate-400"></div>
      </div>
    </div>
  )
}
