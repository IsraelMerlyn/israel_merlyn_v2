<script setup lang="ts">

import { useResume } from '~/composable/useResume';
const { workExperience, teachingExperience } = useResume()
const activeTab = ref('dev') // 'dev' | 'teacher'

const toggleTab = (tab: string) => {
  activeTab.value = tab
}
</script>

<template>
  <section id="experiencia" class="py-20 bg-slate-50 dark:bg-navy-900 transition-colors duration-500">
    <div class="max-w-6xl mx-auto px-6">
      
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-navy-900 dark:text-white mb-4">
          Trayectoria Profesional
        </h2>
        <p class="text-slate-600 dark:text-mist-200 max-w-2xl mx-auto">
          Dos facetas, un mismo objetivo: <span class="text-blue-600 dark:text-blue-400 font-bold">Crear valor a través de la tecnología.</span>
        </p>
      </div>

      <div class="flex justify-center mb-12">
        <div class="bg-white dark:bg-navy-800 p-1.5 rounded-2xl shadow-lg border border-slate-100 dark:border-navy-700 flex gap-2">
          
          <button 
            @click="toggleTab('dev')"
            class="px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2"
            :class="activeTab === 'dev' 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
              : 'text-slate-500 hover:text-navy-900 dark:text-slate-400 dark:hover:text-white'"
          >
            💻 Desarrollador
          </button>
          
          <button 
            @click="toggleTab('teacher')"
            class="px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2"
            :class="activeTab === 'teacher' 
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30' 
              : 'text-slate-500 hover:text-navy-900 dark:text-slate-400 dark:hover:text-white'"
          >
            🎓 Docente
          </button>

        </div>
      </div>

      <div class="relative min-h-[500px]">
        
        <Transition name="fade" mode="out-in">
          <div v-if="activeTab === 'dev'" key="dev" class="space-y-8">
            <div v-for="job in workExperience" :key="job.id" 
                 class="relative pl-8 border-l-2 border-slate-200 dark:border-navy-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors duration-300">
              
              <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-navy-900"></div>

              <div class="mb-2">
                <h3 class="text-2xl font-bold text-navy-900 dark:text-white">{{ job.name }}</h3>
              </div>

              <div v-for="role in job.roles" :key="role.id" class="mb-6 last:mb-0 bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-navy-700/50 hover:shadow-lg transition-shadow">
                <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <h4 class="text-lg font-bold text-blue-600 dark:text-blue-400">{{ role.title }}</h4>
                  <span class="text-sm font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-navy-900 px-2 py-1 rounded">
                    {{ role.period }}
                  </span>
                </div>
                <p class="text-slate-600 dark:text-mist-200 mb-4 leading-relaxed">
                  {{ role.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in role.techStack" :key="tech" 
                        class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border border-blue-100 dark:border-blue-900/30">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div v-else key="teacher" class="space-y-8">
            <div v-for="school in teachingExperience" :key="school.id" 
                 class="relative pl-8 border-l-2 border-slate-200 dark:border-navy-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors duration-300">
              
              <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-white dark:ring-navy-900"></div>

              <div class="mb-2">
                <h3 class="text-2xl font-bold text-navy-900 dark:text-white">{{ school.name }}</h3>
              </div>

              <div v-for="role in school.roles" :key="role.id" class="mb-6 last:mb-0 bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-navy-700/50 hover:shadow-lg transition-shadow border-t-4 border-t-emerald-500/20">
                <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <h4 class="text-lg font-bold text-emerald-600 dark:text-emerald-400">{{ role.title }}</h4>
                  <span class="text-sm font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-navy-900 px-2 py-1 rounded">
                    {{ role.period }}
                  </span>
                </div>
                <p class="text-slate-600 dark:text-mist-200 mb-4 leading-relaxed">
                  {{ role.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in role.techStack" :key="tech" 
                        class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900/30">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Transition>

      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>