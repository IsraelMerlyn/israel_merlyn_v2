<script setup lang="ts">
import type { ProjectItem } from '~/type/resume'
import { useTechColors } from '~/composable/useTechColors'

const props = defineProps<{
  project: ProjectItem
}>()

const emit = defineEmits<{
  (e: 'open'): void
}>()

const { getColor } = useTechColors()

const accessBadges: Record<string, { label: string; class: string; icon: string }> = {
  enterprise_private: {
    label: 'Enterprise / Private',
    class: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    icon: 'lucide:lock'
  },
  play_store: {
    label: 'Play Store Live',
    class: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    icon: 'lucide:smartphone'
  },
  open_source: {
    label: 'Open Source Code',
    class: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    icon: 'lucide:github'
  }
}
</script>

<template>
  <div 
    class="group relative bg-zinc-900/70 rounded-3xl overflow-hidden border border-zinc-800 shadow-md hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300 flex flex-col h-full hover:-translate-y-1.5 backdrop-blur-md"
  >
    
    <!-- C4 / Diagram Header Preview -->
    <div class="h-44 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-950 p-5 flex flex-col justify-between border-b border-zinc-800 relative overflow-hidden">
      <!-- Grid Effect -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:16px_16px] opacity-20"></div>

      <div class="flex items-center justify-between relative z-10">
        <span 
          class="px-2.5 py-1 text-[10px] font-mono font-extrabold uppercase tracking-wider rounded-md border flex items-center gap-1.5 shadow-sm"
          :class="accessBadges[project.accessType]?.class || 'bg-zinc-800 text-zinc-300 border-zinc-700'"
        >
          <Icon :name="accessBadges[project.accessType]?.icon || 'lucide:box'" size="12" />
          {{ accessBadges[project.accessType]?.label }}
        </span>

        <span class="text-[10px] font-mono text-zinc-400 bg-zinc-950/80 px-2 py-0.5 rounded border border-zinc-800">
          C4 Component Architecture
        </span>
      </div>

      <div class="relative z-10 flex items-end justify-between">
        <div class="space-y-1">
          <span class="text-[10px] font-mono text-blue-400 uppercase tracking-widest block font-bold">
            {{ project.category }} engineering
          </span>
          <h3 class="text-lg font-black text-white group-hover:text-blue-400 transition-colors line-clamp-1">
            {{ project.title }}
          </h3>
        </div>

        <button 
          @click="emit('open')"
          class="w-9 h-9 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0"
          aria-label="Abrir detalles del proyecto"
        >
          <Icon name="lucide:arrow-up-right" size="18" />
        </button>
      </div>
    </div>

    <!-- Body de la Card -->
    <div class="p-6 flex flex-col justify-between flex-grow space-y-6">
      
      <div class="space-y-3">
        <p class="text-xs text-zinc-400 leading-relaxed line-clamp-3 font-normal">
          {{ project.description }}
        </p>

        <!-- KPI / Métrica destacada -->
        <div v-if="project.metrics && project.metrics.length > 0" class="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800 space-y-1">
          <div class="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 font-bold uppercase">
            <Icon name="lucide:trending-up" size="12" /> Impacto Medible
          </div>
          <p class="text-xs font-bold text-zinc-200 line-clamp-1">
            {{ project.metrics[0] }}
          </p>
        </div>
      </div>

      <!-- Tech Stack Badges -->
      <div class="pt-4 border-t border-zinc-800 space-y-3">
        <div class="flex flex-wrap gap-1.5">
          <span 
            v-for="tech in project.techStack.slice(0, 5)" 
            :key="tech"
            :class="getColor(tech)"
            class="text-[11px] font-semibold px-2 py-0.5 rounded-lg border bg-zinc-950/60 border-zinc-800 text-zinc-300"
          >
            {{ tech }}
          </span>
          <span v-if="project.techStack.length > 5" class="text-[10px] font-mono text-zinc-400 self-center">
            +{{ project.techStack.length - 5 }}
          </span>
        </div>

        <button 
          @click="emit('open')"
          class="w-full py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-bold transition-all flex items-center justify-center gap-2 group-hover:border-zinc-700"
        >
          <span>Ver Case Study Completo</span>
          <Icon name="lucide:chevron-right" size="14" class="text-zinc-400 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>

  </div>
</template>
