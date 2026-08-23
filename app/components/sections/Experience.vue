<script setup lang="ts">
import { ref } from 'vue'
import { useTechColors } from '~/composable/useTechColors'
import { useResume } from '~/composable/useResume'

const { workExperience, teachingExperience, educationHistory } = useResume()
const { getColor } = useTechColors()
const activeTab = ref('dev') // 'dev' | 'teacher' | 'education'

const toggleTab = (tab: string) => {
  activeTab.value = tab
}
</script>

<template>
  <section id="experiencia" class="py-24 bg-zinc-950 transition-colors duration-500">
    <div class="max-w-6xl mx-auto px-6">
      
      <div class="text-center mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-950/40 text-blue-300 border border-blue-800/60">
          <Icon name="lucide:briefcase" size="14" /> Experiencia & Liderazgo
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-100 tracking-tight">
          Trayectoria <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Profesional</span>
        </h2>
        <p class="text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg">
          Dos facetas, un mismo objetivo: <strong class="text-zinc-200">Crear valor a través de la arquitectura y la ingeniería de software.</strong>
        </p>
      </div>

      <div class="flex justify-center mb-12">
        <div class="bg-zinc-900 p-1.5 rounded-2xl shadow-lg border border-zinc-800 flex gap-2">
          
          <button 
            @click="toggleTab('dev')"
            class="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2"
            :class="activeTab === 'dev' 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
              : 'text-zinc-400 hover:text-zinc-100'"
          >
            <Icon name="lucide:code-2" size="18" /> Desarrollador & Tech Lead
          </button>
          
          <button 
            @click="toggleTab('teacher')"
            class="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2"
            :class="activeTab === 'teacher' 
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' 
              : 'text-zinc-400 hover:text-zinc-100'"
          >
            <Icon name="lucide:graduation-cap" size="18" /> Docente & Coach Ágil
          </button>

          <button 
            @click="toggleTab('education')"
            class="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2"
            :class="activeTab === 'education' 
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
              : 'text-zinc-400 hover:text-zinc-100'"
          >
            <Icon name="lucide:book-open" size="18" /> Formación & Certificaciones
          </button>

        </div>
      </div>

      <div class="relative min-h-[500px]">
        
        <Transition name="fade" mode="out-in">
          <!-- DEV EXPERIENCE -->
          <div v-if="activeTab === 'dev'" key="dev" class="space-y-8">
            <div 
              v-for="job in workExperience" 
              :key="job.id" 
              class="relative pl-8 border-l-2 border-zinc-800 hover:border-blue-500 transition-colors duration-300"
            >
              
              <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-zinc-950"></div>

              <div class="mb-3">
                <h3 class="text-2xl font-bold text-zinc-100">{{ job.name }}</h3>
              </div>

              <div 
                v-for="role in job.roles" 
                :key="role.id" 
                class="mb-6 last:mb-0 bg-zinc-900/70 p-6 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-lg transition-all backdrop-blur-md"
              >
                <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <h4 class="text-lg font-bold text-blue-400">{{ role.title }}</h4>
                  <span class="text-xs font-mono text-zinc-400 bg-zinc-950 px-3 py-1 rounded-md border border-zinc-800">
                    {{ role.period }}
                  </span>
                </div>
                <p class="text-zinc-300 text-sm mb-4 leading-relaxed font-normal">
                  {{ role.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in role.techStack" 
                    :key="tech" 
                    :class="getColor(tech)"
                    class="text-xs font-semibold px-2.5 py-1 rounded-lg border bg-zinc-950/60 border-zinc-800"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- TEACHER EXPERIENCE -->
          <div v-else-if="activeTab === 'teacher'" key="teacher" class="space-y-8">
            <div 
              v-for="school in teachingExperience" 
              :key="school.id" 
              class="relative pl-8 border-l-2 border-zinc-800 hover:border-emerald-500 transition-colors duration-300"
            >
              
              <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-zinc-950"></div>

              <div class="mb-3">
                <h3 class="text-2xl font-bold text-zinc-100">{{ school.name }}</h3>
              </div>

              <div 
                v-for="role in school.roles" 
                :key="role.id" 
                class="mb-6 last:mb-0 bg-zinc-900/70 p-6 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-lg transition-all backdrop-blur-md border-t-4 border-t-emerald-500/30"
              >
                <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <h4 class="text-lg font-bold text-emerald-400">{{ role.title }}</h4>
                  <span class="text-xs font-mono text-zinc-400 bg-zinc-950 px-3 py-1 rounded-md border border-zinc-800">
                    {{ role.period }}
                  </span>
                </div>
                <p class="text-zinc-300 text-sm mb-4 leading-relaxed font-normal">
                  {{ role.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in role.techStack" 
                    :key="tech" 
                    :class="getColor(tech)"
                    class="text-xs font-semibold px-2.5 py-1 rounded-lg border bg-zinc-950/60 border-zinc-800"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- EDUCATION -->
          <div v-else-if="activeTab === 'education'" key="education" class="space-y-8">
            <div 
              v-for="school in educationHistory" 
              :key="school.id" 
              class="relative pl-8 border-l-2 border-zinc-800 hover:border-indigo-500 transition-colors duration-300"
            >
              
              <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-zinc-950"></div>

              <div class="mb-3">
                <h3 class="text-2xl font-bold text-zinc-100">{{ school.name }}</h3>
              </div>

              <div 
                v-for="role in school.roles" 
                :key="role.id" 
                class="mb-6 last:mb-0 bg-zinc-900/70 p-6 rounded-2xl shadow-sm border border-zinc-800 hover:shadow-lg transition-all backdrop-blur-md border-t-4 border-t-indigo-500/30"
              >
                <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                  <h4 class="text-lg font-bold text-indigo-400">{{ role.title }}</h4>
                  <span class="text-xs font-mono text-zinc-400 bg-zinc-950 px-3 py-1 rounded-md border border-zinc-800">
                    {{ role.period }}
                  </span>
                </div>
                <p class="text-zinc-300 text-sm mb-4 leading-relaxed font-normal whitespace-pre-line">
                  {{ role.description }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in role.techStack" 
                    :key="tech" 
                    :class="getColor(tech)"
                    class="text-xs font-semibold px-2.5 py-1 rounded-lg border bg-zinc-950/60 border-zinc-800"
                  >
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