<script setup lang="ts">
import { ref, watch } from 'vue'
import type { ProjectItem } from '~/type/resume'
import { useTechColors } from '~/composable/useTechColors'

const props = defineProps<{
  isOpen: boolean
  project: ProjectItem
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const activeTab = ref<'overview' | 'architecture' | 'stack'>('overview')
const { getColor } = useTechColors()

// Bloquear scroll de pantalla al abrir modal
watch(() => props.isOpen, (newVal) => {
  if (import.meta.client) {
    document.body.style.overflow = newVal ? 'hidden' : ''
  }
})

const accessBadges: Record<string, { label: string; class: string; icon: string }> = {
  enterprise_private: {
    label: 'Enterprise / Código Confidencial',
    class: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    icon: 'lucide:lock'
  },
  play_store: {
    label: 'Play Store Live App',
    class: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    icon: 'lucide:smartphone'
  },
  open_source: {
    label: 'Open Source Repository',
    class: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    icon: 'lucide:github'
  }
}
</script>

<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition name="modal-fade">
        <div 
          v-if="isOpen" 
          class="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-10"
        >
          <!-- Backdrop -->
          <div 
            class="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            @click="emit('close')"
          ></div>

          <!-- Modal Window -->
          <div 
            class="relative w-full max-w-5xl bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-800 overflow-hidden flex flex-col transform transition-all max-h-[92vh]"
          >
            
            <!-- Header del Modal -->
            <div class="p-6 md:p-8 bg-zinc-950/80 border-b border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
              <div class="space-y-2">
                <div class="flex items-center gap-3 flex-wrap">
                  <span 
                    class="px-2.5 py-1 text-[10px] font-mono font-extrabold uppercase tracking-wider rounded-md border flex items-center gap-1.5 shadow-sm"
                    :class="accessBadges[project.accessType]?.class || 'bg-zinc-800 text-zinc-300 border-zinc-700'"
                  >
                    <Icon :name="accessBadges[project.accessType]?.icon || 'lucide:box'" size="12" />
                    {{ accessBadges[project.accessType]?.label }}
                  </span>

                  <span class="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded border border-blue-500/20 uppercase tracking-widest">
                    {{ project.category }}
                  </span>
                </div>

                <h3 class="text-2xl md:text-3xl font-black text-zinc-100 tracking-tight">
                  {{ project.title }}
                </h3>
              </div>

              <!-- Botón Cierre -->
              <button 
                @click="emit('close')"
                class="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors flex items-center justify-center shrink-0 self-end md:self-auto"
                aria-label="Cerrar modal"
              >
                <Icon name="lucide:x" size="20" />
              </button>
            </div>

            <!-- Navegación por Pestañas Técnicas -->
            <div class="flex border-b border-zinc-800 px-6 bg-zinc-950/40 shrink-0 overflow-x-auto">
              <button 
                @click="activeTab = 'overview'"
                class="px-5 py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap"
                :class="activeTab === 'overview' 
                  ? 'border-blue-500 text-blue-400 bg-zinc-900/50' 
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'"
              >
                <Icon name="lucide:file-text" size="16" /> Contexto & Problema
              </button>

              <button 
                @click="activeTab = 'architecture'"
                class="px-5 py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap"
                :class="activeTab === 'architecture' 
                  ? 'border-blue-500 text-blue-400 bg-zinc-900/50' 
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'"
              >
                <Icon name="lucide:cpu" size="16" /> Arquitectura C4 & Decisiones
              </button>

              <button 
                @click="activeTab = 'stack'"
                class="px-5 py-3.5 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap"
                :class="activeTab === 'stack' 
                  ? 'border-blue-500 text-blue-400 bg-zinc-900/50' 
                  : 'border-transparent text-zinc-400 hover:text-zinc-200'"
              >
                <Icon name="lucide:layers" size="16" /> Stack por Capa & Métricas
              </button>
            </div>

            <!-- Contenido Dinámico por Pestaña -->
            <div class="overflow-y-auto custom-scrollbar p-6 md:p-8 flex-grow space-y-8 bg-zinc-900">
              
              <!-- PESTAÑA 1: OVERVIEW & PROBLEMA -->
              <div v-if="activeTab === 'overview'" class="space-y-6 animate-fade-in">
                
                <div class="space-y-3">
                  <h4 class="text-sm font-bold uppercase tracking-wider text-zinc-400">Resumen de Ejecución</h4>
                  <p class="text-zinc-300 text-sm md:text-base leading-relaxed font-normal">
                    {{ project.description }}
                  </p>
                </div>

                <div v-if="project.problem" class="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800 space-y-2">
                  <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                    <Icon name="lucide:alert-triangle" size="16" /> Problema de Negocio / Operativo
                  </div>
                  <p class="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    {{ project.problem }}
                  </p>
                </div>

                <div v-if="project.technicalChallenge" class="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-800 space-y-2">
                  <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                    <Icon name="lucide:wrench" size="16" /> Desafío Técnico Principal
                  </div>
                  <p class="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    {{ project.technicalChallenge }}
                  </p>
                </div>

              </div>

              <!-- PESTAÑA 2: ARQUITECTURA C4 & MERMAID DSL -->
              <div v-else-if="activeTab === 'architecture'" class="space-y-6 animate-fade-in">
                
                <div v-if="project.architectureDecision" class="space-y-3">
                  <h4 class="text-sm font-bold uppercase tracking-wider text-zinc-400">Decisión de Arquitectura & Patrones</h4>
                  <p class="text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal bg-zinc-950/60 p-5 rounded-2xl border border-zinc-800">
                    {{ project.architectureDecision }}
                  </p>
                </div>

                <!-- Mermaid C4 DSL Viewer -->
                <div v-if="project.diagramMermaid" class="space-y-3">
                  <div class="flex items-center justify-between">
                    <h4 class="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                      <Icon name="lucide:terminal" size="14" /> Mermaid C4 Component DSL
                    </h4>
                    <span class="text-[10px] font-mono text-zinc-500">Formato Estándar C4</span>
                  </div>

                  <div class="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 font-mono text-xs text-zinc-300 overflow-x-auto custom-scrollbar">
                    <pre class="leading-relaxed whitespace-pre-wrap">{{ project.diagramMermaid }}</pre>
                  </div>
                </div>

              </div>

              <!-- PESTAÑA 3: STACK & MÉTRICAS -->
              <div v-else-if="activeTab === 'stack'" class="space-y-8 animate-fade-in">
                
                <!-- Métricas de Impacto -->
                <div v-if="project.metrics && project.metrics.length > 0" class="space-y-4">
                  <h4 class="text-base font-bold text-zinc-100 flex items-center gap-2">
                    <Icon name="lucide:trending-up" size="18" class="text-emerald-400" /> Métricas de Producción & Impacto
                  </h4>
                  
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div 
                      v-for="(metric, idx) in project.metrics" 
                      :key="idx"
                      class="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800 space-y-1"
                    >
                      <span class="text-[10px] font-mono text-emerald-400 font-bold uppercase block">Métrica #{{ idx + 1 }}</span>
                      <p class="text-xs font-bold text-zinc-200 leading-snug">
                        {{ metric }}
                      </p>
                    </div>
                  </div>
                </div>

                <!-- Stack Agrupado por Capas Arquitectónicas -->
                <div v-if="project.stackByLayer" class="space-y-4">
                  <h4 class="text-base font-bold text-zinc-100 flex items-center gap-2">
                    <Icon name="lucide:layers" size="18" class="text-blue-500" /> Desglose Tecnológico por Capa
                  </h4>
                  
                  <!-- Si es Arreglo de Categorías -->
                  <div v-if="Array.isArray(project.stackByLayer)" class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div 
                      v-for="group in project.stackByLayer" 
                      :key="group.category" 
                      class="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800 space-y-2"
                    >
                      <span class="text-xs font-bold uppercase tracking-wider text-emerald-400 block">{{ group.category }}</span>
                      <div class="flex flex-wrap gap-1.5">
                        <span v-for="item in group.items" :key="item" class="px-2.5 py-1 text-xs font-medium rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                          {{ item }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Si es Objeto por Capas -->
                  <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div v-if="project.stackByLayer.backend" class="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
                      <span class="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block">Backend & APIs</span>
                      <div class="flex flex-wrap gap-1.5">
                        <span v-for="item in project.stackByLayer.backend" :key="item" class="px-2.5 py-1 text-xs font-medium rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {{ item }}
                        </span>
                      </div>
                    </div>

                    <div v-if="project.stackByLayer.frontend" class="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
                      <span class="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block">Frontend & Web</span>
                      <div class="flex flex-wrap gap-1.5">
                        <span v-for="item in project.stackByLayer.frontend" :key="item" class="px-2.5 py-1 text-xs font-medium rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {{ item }}
                        </span>
                      </div>
                    </div>

                    <div v-if="project.stackByLayer.mobile" class="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
                      <span class="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block">Mobile Engineering</span>
                      <div class="flex flex-wrap gap-1.5">
                        <span v-for="item in project.stackByLayer.mobile" :key="item" class="px-2.5 py-1 text-xs font-medium rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {{ item }}
                        </span>
                      </div>
                    </div>

                    <div v-if="project.stackByLayer.database" class="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800">
                      <span class="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 block">Persistencia & Bases de Datos</span>
                      <div class="flex flex-wrap gap-1.5">
                        <span v-for="item in project.stackByLayer.database" :key="item" class="px-2.5 py-1 text-xs font-medium rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                          {{ item }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <!-- Footer del Modal con Links -->
            <div class="p-6 bg-zinc-950/80 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
              <span class="text-xs font-mono text-zinc-500">
                Josue Israel Vázquez · Software Architecture
              </span>

              <div class="flex items-center gap-3 w-full sm:w-auto">
                <a 
                  v-if="project.links.repo && project.links.repo !== '#'"
                  :href="project.links.repo"
                  target="_blank"
                  class="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold transition-all border border-zinc-700 flex items-center justify-center gap-2"
                >
                  <Icon name="lucide:github" size="16" /> Ver Repositorio
                </a>

                <a 
                  v-if="project.links.demo && project.links.demo !== '#'"
                  :href="project.links.demo"
                  target="_blank"
                  class="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                >
                  <Icon name="lucide:external-link" size="16" /> Acceder a Demostración
                </a>
              </div>
            </div>

          </div>

        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.96) translateY(10px);
}

.animate-fade-in {
  animation: fadeIn 0.25s ease-in-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
