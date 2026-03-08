<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ProjectCategory, ProjectItem } from '~/type/resume';
import { useResume } from '~/composable/useResume';
import { useTechColors } from '~/composable/useTechColors';

const { getColor } = useTechColors();
const { projects } = useResume()

// Filtros
const activeCategory = ref<ProjectCategory | 'all'>('all')

const filteredProjects = computed(() => {
    if (activeCategory.value === 'all') return projects
    return projects.filter(p => p.category === activeCategory.value)
})

const categories: { key: ProjectCategory | 'all'; label: string }[] = [
    { key: 'all', label: 'Todo' },
    { key: 'fullstack', label: 'Fullstack' },
    { key: 'mobile', label: 'Móvil' },
    { key: 'backend', label: 'Backend' },
    { key: 'content', label: 'Educación' }
]

// Lógica del Modal
const selectedProject = ref<ProjectItem | null>(null)

const openModal = (project: ProjectItem) => {
    selectedProject.value = project
    // Prevenir el scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    selectedProject.value = null
    document.body.style.overflow = 'auto'
}
</script>

<template>
    <section id="proyectos"
        class="py-24 bg-white dark:bg-[#0B1120] transition-colors duration-500 relative overflow-hidden">

        <div class="max-w-7xl mx-auto px-6 relative z-10">

            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-4">
                    Proyectos <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600">Destacados</span>
                </h2>
                <p class="text-slate-600 dark:text-mist-200 text-lg">
                    Haz clic en cualquier proyecto para ver los detalles, código y demostración.
                </p>
            </div>

            <div class="flex flex-wrap justify-center gap-3 mb-16">
                <button v-for="cat in categories" :key="cat.key" @click="activeCategory = cat.key"
                    class="px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border backdrop-blur-sm"
                    :class="activeCategory === cat.key
                        ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/30'
                        : 'bg-transparent text-slate-500 border-slate-200 hover:border-blue-500 hover:text-blue-600 dark:border-navy-700 dark:text-slate-400 dark:hover:border-blue-400 dark:hover:text-blue-300'">
                    {{ cat.label }}
                </button>
            </div>

          <TransitionGroup name="list" tag="div" class="grid grid-cols-1 lg:grid-cols-2 gap-10">

                <article 
                    v-for="project in filteredProjects" 
                    :key="project.id"
                    class="group relative bg-white dark:bg-navy-800 rounded-[2rem] overflow-hidden border-2 border-slate-100 dark:border-navy-700/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full hover:-translate-y-2"
                >
                    <div class="relative w-full h-72 overflow-hidden bg-slate-100 dark:bg-navy-900 cursor-pointer" @click="openModal(project)">
                        <NuxtImg :src="project.image" :alt="project.title" format="webp" loading="lazy"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        
                        <div class="absolute inset-0 bg-navy-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        
                        <span class="absolute top-5 right-5 bg-white/95 dark:bg-navy-900/95 backdrop-blur-md text-blue-600 dark:text-blue-400 text-xs font-black tracking-widest px-4 py-2 rounded-xl shadow-lg border border-slate-100 dark:border-navy-600">
                            {{ project.category.toUpperCase() }}
                        </span>
                    </div>

                    <div class="p-8 flex flex-col flex-grow relative">
                        
                        <h3 @click="openModal(project)" class="text-2xl md:text-3xl font-black text-navy-900 dark:text-white mb-3 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            {{ project.title }}
                        </h3>
                        
                        <p class="text-slate-600 dark:text-slate-400 text-base mb-8 flex-grow line-clamp-3 leading-relaxed">
                            {{ project.description }}
                        </p>

                        <div class="flex flex-wrap gap-2.5 mb-8">
                            <span v-for="tech in project.techStack.slice(0, 5)" :key="tech"
                                class="text-xs font-bold px-3 py-1 rounded-md border transition-colors cursor-default dark:text-opacity-100" :class="getColor(tech)">
                                {{ tech }}
                            </span>
                            <span v-if="project.techStack.length > 5" class="text-sm font-bold px-3 py-1.5 rounded-lg border bg-slate-100 text-slate-600 dark:bg-navy-700 dark:text-slate-400 dark:border-navy-600 shadow-sm">
                                +{{ project.techStack.length - 5 }}
                            </span>
                        </div>

                        <div class="pt-6 border-t-2 border-slate-100 dark:border-navy-700/50 flex items-center justify-between mt-auto">
                            
                            <div class="flex gap-5">
                                <a v-if="project.links.repo && project.links.repo !== '#'" :href="project.links.repo" target="_blank"
                                   class="p-2 -ml-2 text-slate-400 hover:text-navy-900 dark:text-slate-500 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-700 rounded-lg transition-all" title="Código en GitHub">
                                    <Icon name="lucide:github" size="24" />
                                </a>
                                <a v-if="project.links.demo && project.links.demo !== '#'" :href="project.links.demo" target="_blank"
                                   class="p-2 text-slate-400 hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-all" title="Demo en Vivo">
                                    <Icon name="lucide:external-link" size="24" />
                                </a>
                            </div>
                            
                            <button @click="openModal(project)" class="px-5 py-2.5 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-white dark:hover:text-white bg-blue-50 hover:bg-blue-600 dark:bg-blue-500/10 dark:hover:bg-blue-500 rounded-xl flex items-center gap-2 transition-all">
                                Leer más <Icon name="lucide:arrow-right" size="18" />
                            </button>
                        </div>

                    </div>
                </article>

            </TransitionGroup>
            <div v-if="filteredProjects.length === 0"
                class="text-center w-full py-20 text-slate-500 dark:text-slate-400 animate-pulse">
                <Icon name="lucide:folder-search" size="48" class="mx-auto mb-4 opacity-50" />
                <p class="text-lg">No hay proyectos en esta categoría aún.</p>
            </div>

        </div>
    <Teleport to="body">
            <Transition name="modal">
                <div v-if="selectedProject" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    
                    <div class="absolute inset-0 bg-slate-900/80 dark:bg-[#0B1120]/90 backdrop-blur-sm transition-opacity" @click="closeModal"></div>
                    
                    <div class="relative w-full max-w-5xl bg-white dark:bg-navy-800 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col transform transition-all max-h-[95vh] border border-slate-200/50 dark:border-navy-700/50">
                        
                        <button @click="closeModal" class="absolute top-4 right-4 z-50 p-3 bg-black/40 hover:bg-black/70 backdrop-blur-md rounded-full text-white transition-all shadow-lg hover:scale-110 hover:rotate-90 duration-300 border border-white/10">
                            <Icon name="lucide:x" size="24" stroke-width="2.5" />
                        </button>

                        <div class="overflow-y-auto custom-scrollbar flex-grow flex flex-col relative">

                            <div class="relative w-full h-64 sm:h-80 md:h-[450px] bg-slate-900 flex-shrink-0 group overflow-hidden">
                                <NuxtImg :src="selectedProject.image" format="webp" 
                                    class="absolute inset-0 w-full h-full object-cover opacity-40 blur-2xl scale-110 pointer-events-none" />
                                
                                <NuxtImg :src="selectedProject.image" :alt="selectedProject.title" format="webp"
                                    class="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl p-4 md:p-8" />
                            </div>

                            <div class="p-8 md:p-12 bg-white dark:bg-navy-800 flex flex-col gap-8 relative z-10">
                                
                                <div>
                                    <div class="inline-flex items-center gap-2 mb-3">
                                        <span class="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                                        <p class="text-blue-600 dark:text-blue-400 font-bold tracking-widest text-sm uppercase">{{ selectedProject.category }}</p>
                                    </div>
                                    <h3 class="text-3xl md:text-5xl font-black text-navy-900 dark:text-white leading-tight mb-2">{{ selectedProject.title }}</h3>
                                </div>

                                <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 border-t border-slate-100 dark:border-navy-700 pt-8">
                                    
                                    <div class="lg:col-span-2 flex flex-col gap-10">
                                        
                                        <div>
                                            <h4 class="text-xl font-bold text-navy-900 dark:text-white mb-4 flex items-center gap-2">
                                                <Icon name="lucide:info" size="20" class="text-blue-500" /> Sobre el proyecto
                                            </h4>
                                            <p class="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium">
                                                {{ selectedProject.description }}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 class="text-xl font-bold text-navy-900 dark:text-white mb-4 flex items-center gap-2">
                                                <Icon name="lucide:cpu" size="20" class="text-blue-500" /> Tecnologías usadas
                                            </h4>
                                            <div class="flex flex-wrap gap-3">
                                                <span v-for="tech in selectedProject.techStack" :key="tech"
                                                    class="text-sm font-bold px-4 py-2 dark:text-white rounded-xl border shadow-sm transition-transform hover:-translate-y-1" >
                                                    {{ tech }}
                                                </span>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="lg:col-span-1">
                                        <div class="bg-slate-50 dark:bg-navy-900/50 p-6 rounded-2xl border border-slate-100 dark:border-navy-700/50 sticky top-4">
                                            
                                            <h4 class="text-xs font-black text-slate-400 dark:text-slate-500 mb-5 uppercase tracking-widest">
                                                Enlaces del Proyecto
                                            </h4>

                                            <div class="flex flex-col gap-4">
                                                <a v-if="selectedProject.links.demo && selectedProject.links.demo !== '#'" 
                                                   :href="selectedProject.links.demo" target="_blank"
                                                   class="flex items-center justify-center w-full gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-1">
                                                    <Icon name="lucide:external-link" size="20" />
                                                    Ver Demo en Vivo
                                                </a>
                                                
                                                <a v-if="selectedProject.links.repo && selectedProject.links.repo !== '#'" 
                                                   :href="selectedProject.links.repo" target="_blank"
                                                   class="flex items-center justify-center w-full gap-3 px-6 py-4 bg-slate-800 hover:bg-slate-700 dark:bg-white dark:text-navy-900 dark:hover:bg-slate-200 text-white rounded-xl font-bold transition-all shadow-lg hover:-translate-y-1 border border-slate-200 dark:border-navy-600">
                                                    <Icon name="lucide:github" size="20" />
                                                    Repositorio GitHub
                                                </a>
                                                
                                                <div v-if="(!selectedProject.links.demo || selectedProject.links.demo === '#') && (!selectedProject.links.repo || selectedProject.links.repo === '#')" 
                                                     class="text-center text-sm text-slate-500 dark:text-slate-400 py-4 bg-slate-100 dark:bg-navy-800 rounded-xl border border-dashed border-slate-300 dark:border-navy-600">
                                                    <Icon name="lucide:lock" size="20" class="mx-auto mb-2 opacity-50" />
                                                    Enlaces privados o en desarrollo
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>

    </section>
</template>

<style scoped>
/* Animaciones para el filtro de tarjetas */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
}

.list-move {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Animaciones del Modal Premium */
.modal-enter-active,
.modal-leave-active {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .relative,
/* Apunta al contenedor interior */
.modal-leave-to .relative {
    transform: scale(0.95) translateY(20px);
}

/* Scrollbar personalizado para el modal */
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(148, 163, 184, 0.3);
    border-radius: 20px;
}
</style>