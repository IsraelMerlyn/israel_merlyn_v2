<template>
  <section class="min-h-screen flex items-center justify-center pt-32 pb-12 md:pt-20 relative overflow-hidden">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-navy-800/10 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
      
      <div class="space-y-8 text-center md:text-left">
        <div class="inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-4 animate-fade-in-up delay-100">
           Disponible para proyectos
        </div>
        
        <h1 class="text-4xl md:text-7xl font-bold leading-tight text-navy-900 dark:text-white animate-fade-in-up delay-200">
          Hola <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Soy Josue Israel Vázquez</span>
        </h1>
        
        <p class="text-lg md:text-xl text-slate-600 dark:text-steel-300 max-w-lg mx-auto md:mx-0 leading-relaxed animate-fade-in-up delay-300">
          <strong>SSr Software Engineer | Flutter · Vue 3 · Nuxt · Spring Boot</strong>.<br />
          Tech Lead de 2 equipos, Code Review owner y Docente en el TecNM, enfocado en el desarrollo ágil de software robusto y escalable.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4 animate-fade-in-up delay-400">
          <UiBaseButton variant="primary" to="#proyectos" class="w-full sm:w-auto">Ver Portafolio</UiBaseButton>
          <UiBaseButton variant="outline" to="#contacto" class="w-full sm:w-auto">Descargar CV</UiBaseButton>
        </div>
      </div>

      <div class="relative group perspective-1000 mt-8 md:mt-0 animate-fade-in-up delay-500">
        <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
        <div class="relative bg-white dark:bg-navy-800 p-6 rounded-2xl border border-mist-200 dark:border-navy-700 shadow-2xl transform transition-transform group-hover:rotate-y-2 duration-500 overflow-hidden">
          <div class="overflow-x-auto">
            <pre class="font-mono text-xs md:text-sm text-slate-700 dark:text-slate-300">
<span class="text-purple-400">const</span> <span class="text-blue-500 font-bold">engineer</span> = {
  <span class="text-cyan-600 dark:text-cyan-400">name</span>: <span class="text-emerald-600 dark:text-emerald-400">"Josue Israel Vázquez"</span>,
  <span class="text-cyan-600 dark:text-cyan-400">role</span>: <span class="text-emerald-600 dark:text-emerald-400">"SSr Software Engineer"</span>,
  <span class="text-cyan-600 dark:text-cyan-400">stack</span>: {
    <span class="text-cyan-600 dark:text-cyan-400">mobile</span>: [<span class="text-emerald-600 dark:text-emerald-400">"Flutter"</span>, <span class="text-emerald-600 dark:text-emerald-400">"BLoC"</span>, <span class="text-emerald-600 dark:text-emerald-400">"Clean Architecture"</span>, <span class="text-emerald-600 dark:text-emerald-400">"FSD"</span>],
    <span class="text-cyan-600 dark:text-cyan-400">frontend</span>: [<span class="text-emerald-600 dark:text-emerald-400">"Vue 3"</span>, <span class="text-emerald-600 dark:text-emerald-400">"Nuxt"</span>, <span class="text-emerald-600 dark:text-emerald-400">"TypeScript"</span>, <span class="text-emerald-600 dark:text-emerald-400">"Pinia"</span>],
    <span class="text-cyan-600 dark:text-cyan-400">backend</span>: [<span class="text-emerald-600 dark:text-emerald-400">"Spring Boot"</span>, <span class="text-emerald-600 dark:text-emerald-400">"Liquibase"</span>, <span class="text-emerald-600 dark:text-emerald-400">"PostgreSQL"</span>],
  },
  <span class="text-cyan-600 dark:text-cyan-400">currentFocus</span>: <span class="text-emerald-600 dark:text-emerald-400">"Scaneame → Play Store"</span>,
  <span class="text-cyan-600 dark:text-cyan-400">openTo</span>: <span class="text-emerald-600 dark:text-emerald-400">"remote opportunities"</span>,
};</pre>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Las animaciones fadeInUp y su retraso se definen de manera nativa en animations.css */
</style>