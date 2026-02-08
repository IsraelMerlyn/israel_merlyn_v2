<script setup lang="ts">
import type { ProjectCategory } from '~/type/resume';
import { useResume } from '~/composable/useResume';

const { projects } = useResume()
const activeCategory = ref<ProjectCategory | 'all'>('all')

// Lógica de filtrado reactivo
const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects
  return projects.filter(p => p.category === activeCategory.value)
})

// Botones del filtro
const categories: { key: ProjectCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'Todo' },
  { key: 'fullstack', label: 'Fullstack' },
  { key: 'mobile', label: 'Móvil' },
  { key: 'backend', label: 'Backend' },
  { key: 'content', label: 'Educación' }
]
</script>

<template>
  <section id="proyectos" class="py-24 bg-white dark:bg-[#0B1120] transition-colors duration-500 relative overflow-hidden">
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-4">
          Proyectos <span class="text-blue-600">Destacados</span>
        </h2>
        <p class="text-slate-600 dark:text-mist-200">
          Selecciona una categoría para ver mi trabajo.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-2 mb-12">
        <button 
          v-for="cat in categories" 
          :key="cat.key"
          @click="activeCategory = cat.key"
          class="px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border"
          :class="activeCategory === cat.key 
            ? 'bg-navy-900 text-white border-navy-900 shadow-lg dark:bg-white dark:text-navy-900' 
            : 'bg-transparent text-slate-500 border-slate-200 hover:border-navy-900 hover:text-navy-900 dark:border-navy-700 dark:text-slate-400 dark:hover:border-white dark:hover:text-white'"
        >
          {{ cat.label }}
        </button>
      </div>

      <TransitionGroup name="list" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <article v-for="project in filteredProjects" :key="project.id" 
                 class="group bg-slate-50 dark:bg-navy-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-navy-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
          
          <div class="relative h-48 overflow-hidden">
            <img :src="project.image" :alt="project.title" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute top-3 left-3 bg-white/90 backdrop-blur text-navy-900 text-xs font-bold px-2 py-1 rounded">
              {{ project.category.toUpperCase() }}
            </div>
          </div>

          <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-xl font-bold text-navy-900 dark:text-white mb-2">{{ project.title }}</h3>
            <p class="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">{{ project.description }}</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.techStack.slice(0,3)" :key="tech" class="text-xs bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 px-2 py-1 rounded text-slate-600 dark:text-slate-300">
                {{ tech }}
              </span>
            </div>

            <div class="mt-auto pt-4 border-t border-slate-200 dark:border-navy-700 flex justify-between items-center">
              <a href="#" class="text-blue-600 dark:text-blue-400 text-sm font-bold hover:underline">Ver Proyecto -></a>
              <span v-if="project.links.repo" class="text-slate-400 text-xs">GitHub</span>
            </div>
          </div>
        </article>
      
      </TransitionGroup>

      <div v-if="filteredProjects.length === 0" class="text-center w-full py-10 text-slate-500">
        No hay proyectos en esta categoría.
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Animaciones para el filtro */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: transform 0.5s ease;
}
</style>