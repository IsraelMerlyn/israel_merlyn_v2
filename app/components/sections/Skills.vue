<script setup>
import { useResume } from '~/composable/useResume';
const { skillCategories } = useResume()
</script>

<template>
  <section id="habilidades" class="py-24 bg-slate-50 dark:bg-navy-900 transition-colors duration-500 relative">
    
    <div class="max-w-7xl mx-auto px-6">
      
      <div class="mb-16 text-center md:text-left">
        <h2 class="text-4xl font-bold text-navy-900 dark:text-white mb-4">
          Arsenal <span class="text-blue-600">Tecnológico</span>
        </h2>
        <p class="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
          No me caso con una tecnología. Elijo la herramienta correcta para cada problema, 
          pero estas son mis armas de elección principal.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div v-for="(category, index) in skillCategories" :key="category.title"
             class="group relative p-6 rounded-3xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-800 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1"
             :class="{ 
               'md:col-span-2': index === 0, /* La primera categoría (Core Stack) ocupa 2 espacios */
               'md:row-span-2': index === 2  /* La tercera categoría se hace alta (opcional) */
             }">
          
          <div class="w-12 h-12 rounded-xl bg-blue-50 dark:bg-navy-900 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
            <Icon :name="category.icon" size="24" />
          </div>

          <h3 class="text-xl font-bold text-navy-900 dark:text-white mb-6">
            {{ category.title }}
          </h3>

          <div class="grid gap-4" 
               :class="index === 0 ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-1'">
            
            <div v-for="skill in category.skills" :key="skill.name" 
                 class="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-navy-700 transition-colors">
              
              <Icon :name="skill.icon" size="28" class="grayscale group-hover:grayscale-0 transition-all duration-300" />
              
              <div>
                <span class="font-bold text-sm text-slate-700 dark:text-slate-200 block">
                  {{ skill.name }}
                </span>
                <div class="w-full h-1 bg-slate-100 dark:bg-navy-900 rounded-full mt-1 overflow-hidden">
                  <div class="h-full bg-blue-500 rounded-full w-[80%] group-hover:animate-pulse"></div>
                </div>
              </div>
            </div>

          </div>

          <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/0 to-blue-500/5 rounded-tr-3xl pointer-events-none"></div>
        </div>

      </div>

      <div class="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center shadow-2xl relative overflow-hidden">
        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="text-left">
            <h3 class="text-2xl font-bold mb-2">¿Enseñas lo que programas?</h3>
            <p class="text-blue-100">La mejor forma de dominar un stack es explicarlo. Mi perfil docente potencia mi código.</p>
          </div>
          <a href="#contacto" class="px-6 py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
            Hablemos de Docencia
          </a>
        </div>
        
        <div class="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 -ml-10 -mb-10 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
      </div>

    </div>
  </section>
</template>