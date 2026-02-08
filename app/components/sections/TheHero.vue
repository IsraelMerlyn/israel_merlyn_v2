<template>
  <section class="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-navy-800/10 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
      
      <div class="space-y-8 text-center md:text-left">
        <div class="inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 mb-4 animate-fade-in-up">
           Disponible para proyectos
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold leading-tight text-navy-900 dark:text-white">
          Hola <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Soy Josue Vasquez</span>
        </h1>
        
        <p class="text-xl text-slate-600 dark:text-steel-300 max-w-lg mx-auto md:mx-0 leading-relaxed">
          Combino la lógica del <strong>Desarrollo Frontend</strong> con la pedagogía de la <strong>Docencia</strong> para crear productos digitales de alto impacto.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <UiBaseButton variant="primary" to="#proyectos">Ver Portafolio</UiBaseButton>
          <UiBaseButton variant="outline" to="#contacto">Descargar CV</UiBaseButton>
        </div>
      </div>

      <div class="relative group perspective-1000">
        <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
        <div class="relative bg-white dark:bg-navy-800 p-6 rounded-2xl border border-mist-200 dark:border-navy-700 shadow-2xl transform transition-transform group-hover:rotate-y-2 duration-500">
          <pre class="font-mono text-sm text-slate-600 dark:text-mist-200 overflow-x-auto">
<span class="text-blue-600">const</span> developer = {
  name: <span class="text-green-500">"IsraelMerlyn"</span>,
  roles: [<span class="text-green-500">"Frontend"</span>, <span class="text-green-500">"Docente"</span>],
  skills: {
    frontend: [<span class="text-green-500">"Vue"</span>, <span class="text-green-500">"Nuxt"</span>], <span class="text-green-500">"React"</span>],
    backend: [<span class="text-green-500">"Supabase"</span>, <span class="text-green-500">"SpringBoot"</span>]
  },
  passion: <span class="text-blue-600">true</span>
};
          </pre>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Pequeña animación de entrada */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>