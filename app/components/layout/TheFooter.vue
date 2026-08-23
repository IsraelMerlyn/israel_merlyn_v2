<template>
  <footer class="bg-zinc-950 text-white pt-20 pb-12 relative overflow-hidden border-t border-zinc-900">
    
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        <div class="max-w-xl space-y-4">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-100 tracking-tight leading-tight">
            ¿Listo para llevar tu software al <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">siguiente nivel</span>?
          </h2>
          <p class="text-zinc-400 text-base sm:text-lg font-normal">
            Diseño e implemento arquitecturas escalables Web y Móviles, garantizo calidad en producción y capacito equipos de desarrollo.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <a href="mailto:isramerlyn@gmail.com" class="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 text-sm">
              Envíame un correo
            </a>
            <a href="https://www.linkedin.com/in/josuevasquez" target="_blank" class="px-8 py-3.5 border border-zinc-800 text-zinc-300 font-bold rounded-xl hover:border-zinc-700 hover:text-white transition-all text-sm bg-zinc-900/50">
              Perfil de LinkedIn
            </a>
          </div>
        </div>

        <div class="flex flex-col items-center md:items-end gap-2">
          <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl font-black mb-2 shadow-lg shadow-blue-600/20">
            IM
          </div>
          <span class="text-zinc-500 text-xs font-mono">Tlaxiaco, Oaxaca · Disposición de reubicación / Remoto</span>
        </div>
      </div>

      <div class="border-t border-zinc-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-500">
        <p>© 2026 Israel Merlyn — SSr Software Engineer. Construido con Nuxt 3 & Tailwind CSS.</p>
        <div class="flex gap-6">
          <a href="https://github.com/IsraelMerlyn" target="_blank" aria-label="Visitar perfil de GitHub" class="hover:text-zinc-100 transition-colors">
            <Icon name="lucide:github" size="20" />
          </a>
          <a href="https://www.linkedin.com/in/josuevasquez" target="_blank" aria-label="Visitar perfil de LinkedIn" class="hover:text-zinc-100 transition-colors">
            <Icon name="lucide:linkedin" size="20" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>