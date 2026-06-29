<script setup lang="ts">
import { useResume } from '~/composable/useResume';
const { skillCategories } = useResume()

const getDominioLabel = (title: string) => {
  if (title.includes('Core') || title.includes('Alto')) return 'Core / Expert';
  if (title.includes('Backend') || title.includes('Medio')) return 'Advanced';
  return 'Collaborative';
}

const getCategoryDescription = (title: string) => {
  if (title.includes('Core') || title.includes('Alto')) {
    return 'Tecnologías principales y arquitectura core';
  }
  if (title.includes('Backend') || title.includes('Medio')) {
    return 'Diseño de servicios REST y persistencia';
  }
  return 'Metodologías de entrega y herramientas secundarias';
}
</script>

<template>
  <section id="habilidades" class="py-24 bg-slate-50 dark:bg-navy-900/60 transition-colors duration-500 relative overflow-hidden">
    
    <!-- Esferas de brillo premium de fondo -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <div class="mb-16 text-center md:text-left space-y-4">
        <h2 class="text-4xl md:text-5xl font-black text-navy-900 dark:text-white tracking-tight">
          Arsenal <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Tecnológico</span>
        </h2>
        <p class="text-slate-600 dark:text-slate-400 max-w-2xl text-lg leading-relaxed">
          Selección de herramientas y metodologías aplicadas en producción para resolver problemas complejos de rendimiento, escala y experiencia de usuario.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div v-for="(category, index) in skillCategories" :key="category.title"
             class="group p-8 rounded-[2rem] border border-slate-200/60 dark:border-navy-700/60 bg-white/80 dark:bg-navy-800/30 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all duration-300"
             :class="{ 
               'lg:col-span-2': index === 0, 
               'lg:col-span-1': index !== 0 
             }">
          
          <!-- Encabezado de la Categoría -->
          <div class="flex items-center gap-4 mb-8">
            <div class="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 flex items-center justify-center shadow-inner transition-transform group-hover:scale-110">
              <Icon :name="category.icon" size="24" />
            </div>
            <div>
              <h3 class="text-xl font-extrabold tracking-tight text-navy-900 dark:text-white">
                {{ category.title }}
              </h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {{ getCategoryDescription(category.title) }}
              </p>
            </div>
          </div>

          <!-- Grid de Habilidades -->
          <div class="grid gap-4" 
               :class="index === 0 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-1'">
            
            <div v-for="skill in category.skills" :key="skill.name" 
                 class="group/skill flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                 :class="skill.class || 'border-slate-100 dark:border-navy-700/40 bg-slate-50/50 dark:bg-navy-900/20 text-navy-900 dark:text-white hover:bg-white dark:hover:bg-navy-900/60'">
              
              <div class="flex items-center gap-3.5">
                <div class="w-10 h-10 rounded-xl bg-white dark:bg-navy-800/80 border border-slate-100 dark:border-navy-700/40 shadow-sm flex items-center justify-center transition-transform group-hover/skill:rotate-6">
                  <Icon :name="skill.icon" size="22" />
                </div>
                <span class="font-bold text-sm tracking-tight text-navy-900 dark:text-white">
                  {{ skill.name }}
                </span>
              </div>
              
              <span class="text-[9px] font-mono font-black tracking-wider uppercase opacity-60 group-hover/skill:opacity-100 transition-opacity">
                {{ getDominioLabel(category.title) }}
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>