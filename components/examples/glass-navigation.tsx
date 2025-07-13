export function GlassNavigation() {
  return (
    <nav className="flex items-center space-x-1 p-2 rounded-xl bg-slate-800 border border-slate-700">
      <a
        href="#"
        className="px-3 py-2 rounded-lg text-slate-400 hover:bg-slate-700 hover:text-slate-300 transition-colors duration-200 text-sm"
      >
        Home
      </a>
      <a
        href="#"
        className="px-3 py-2 rounded-lg text-slate-400 hover:bg-slate-700 hover:text-slate-300 transition-colors duration-200 text-sm"
      >
        About
      </a>
      <a href="#" className="px-3 py-2 rounded-lg text-slate-300 bg-slate-700 transition-colors duration-200 text-sm">
        Contact
      </a>
      <a
        href="#"
        className="px-3 py-2 rounded-lg text-slate-400 hover:bg-slate-700 hover:text-slate-300 transition-colors duration-200 text-sm"
      >
        Services
      </a>
    </nav>
  )
}
