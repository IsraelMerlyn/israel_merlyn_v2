<script setup lang="ts">
import { ref, computed } from 'vue'
import { useResume } from '~/composable/useResume'
import type { ProjectItem, ProjectCategory } from '~/type/resume'

const { featuredProjects } = useResume()

const selectedCategory = ref<string>('all')
const selectedProject = ref<ProjectItem | null>(null)
const isModalOpen = ref<boolean>(false)

const categories = [
  { label: 'Todos los Proyectos', value: 'all', icon: 'lucide:layout-grid' },
  { label: 'Enterprise & Fullstack', value: 'fullstack', icon: 'lucide:server' },
  { label: 'Mobile Engineering', value: 'mobile', icon: 'lucide:smartphone' },
  { label: 'Backend & System AI', value: 'backend', icon: 'lucide:cpu' },
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') return featuredProjects
  return featuredProjects.filter(p => p.category === selectedCategory.value)
})

const openProjectModal = (project: ProjectItem) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeProjectModal = () => {
  isModalOpen.value = false
  setTimeout(() => {
    selectedProject.value = null
  }, 300)
}
</script>

<template>
  <section id="proyectos" class="py-24 bg-zinc-950 transition-colors duration-500 relative overflow-hidden">
    
    <!-- Background Glows -->
    <div class="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-1/4 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
      
      <!-- Encabezado de la Sección -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-950/40 text-blue-300 border border-blue-800/60">
          <Icon name="lucide:code-2" size="14" /> Case Studies & Arquitectura de Software
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-100 tracking-tight">
          Proyectos <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Destacados</span>
        </h2>
        <p class="text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
          Arquitecturas de producción reales, diseño de microservicios, aplicaciones móviles offline-first y soluciones asistidas por IA.
        </p>
      </div>

      <!-- Filtros por Categoria -->
      <div class="flex flex-wrap items-center justify-center gap-3">
        <button
          v-for="cat in categories"
          :key="cat.value"
          @click="selectedCategory = cat.value"
          class="flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 border"
          :class="selectedCategory === cat.value
            ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/20 scale-105'
            : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-100'"
        >
          <Icon :name="cat.icon" size="16" />
          {{ cat.label }}
        </button>
      </div>

      <!-- Grilla de Tarjetas de Proyecto -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SectionsProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          @open="openProjectModal(project)"
        />
      </div>

    </div>

    <!-- Modal Detallado con Mermaid & C4 -->
    <SectionsProjectModal
      v-if="selectedProject"
      :is-open="isModalOpen"
      :project="selectedProject"
      @close="closeProjectModal"
    />
  </section>
</template>