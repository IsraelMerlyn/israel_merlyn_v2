<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ProjectItem } from '~/type/resume'
import { useTechColors } from '~/composable/useTechColors'

const props = defineProps<{
  project: ProjectItem
}>()

const emit = defineEmits<{
  (e: 'open-details'): void
}>()

const { getColor } = useTechColors()

// Control del Skeleton Loader de la imagen
const isLoaded = ref(false)
const handleImageLoad = () => {
  isLoaded.value = true
}

// Configuración del badge de estado
const statusConfig = computed(() => {
  switch (props.project.status) {
    case 'Play Store':
      return {
        label: 'Play Store',
        class: 'bg-blue-500/10 text-blue-500 border border-blue-500/20 dark:bg-blue-400/10 dark:text-blue-400 dark:border-blue-400/20',
        icon: 'simple-icons:googleplay'
      }
    case 'En producción':
      return {
        label: 'En producción',
        class: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 dark:bg-emerald-400/10 dark:text-emerald-400 dark:border-emerald-400/20',
        icon: 'lucide:rocket'
      }
    case 'En desarrollo':
    default:
      return {
        label: 'En desarrollo',
        class: 'bg-amber-500/10 text-amber-600 border border-amber-500/20 dark:bg-amber-400/10 dark:text-amber-400 dark:border-amber-400/20',
        icon: 'lucide:wrench'
      }
  }
})

// Mapeo dinámico de tecnologías a iconos de Iconify
const getTechIcon = (tech: string): string => {
  const t = tech.toLowerCase().trim()
  if (t.includes('flutter')) return 'logos:flutter'
  if (t.includes('dart')) return 'logos:dart'
  if (t.includes('vue')) return 'logos:vue'
  if (t.includes('nuxt')) return 'logos:nuxt-icon'
  if (t.includes('typescript') || t.includes('ts')) return 'logos:typescript-icon'
  if (t.includes('javascript') || t.includes('js')) return 'logos:javascript'
  if (t.includes('tailwind')) return 'logos:tailwindcss-icon'
  if (t.includes('spring')) return 'logos:spring-icon'
  if (t.includes('java')) return 'logos:java'
  if (t.includes('postgre')) return 'logos:postgresql'
  if (t.includes('mysql')) return 'logos:mysql'
  if (t.includes('git')) return 'logos:git-icon'
  if (t.includes('angular')) return 'logos:angular-icon'
  if (t.includes('react')) return 'logos:react'
  if (t.includes('kotlin')) return 'logos:kotlin'
  if (t.includes('laravel')) return 'logos:laravel'
  if (t.includes('supabase')) return 'logos:supabase-icon'
  if (t.includes('redux')) return 'logos:redux'
  if (t.includes('bootstrap')) return 'logos:bootstrap'
  if (t.includes('sqflite') || t.includes('sqlite')) return 'logos:sqlite'
  if (t.includes('pinia')) return 'logos:pinia'
  if (t.includes('liquibase')) return 'lucide:database'
  if (t.includes('sonarqube')) return 'logos:sonarqube'
  if (t.includes('sec')) return 'lucide:shield'
  if (t.includes('jwt')) return 'lucide:key-round'
  if (t.includes('shell')) return 'lucide:box'
  if (t.includes('sync')) return 'lucide:refresh-cw'
  if (t.includes('haversine')) return 'lucide:map-pin'
  if (t.includes('leaflet')) return 'lucide:map'
  if (t.includes('nitro')) return 'lucide:zap'
  if (t.includes('ssr')) return 'lucide:globe'
  if (t.includes('pwa')) return 'lucide:smartphone'
  if (t.includes('qr')) return 'lucide:qr-code'
  return 'lucide:cpu'
}
</script>

<template>
  <article 
    class="group relative bg-white dark:bg-navy-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-navy-700/60 shadow-lg hover:shadow-glow-blue dark:hover:shadow-glow-blue hover:border-primary/50 transition-glow flex flex-col h-full hover:-translate-y-1"
  >
    <!-- Contenedor de Imagen + Badge -->
    <div class="relative w-full h-64 overflow-hidden bg-slate-900 cursor-pointer" @click="emit('open-details')">
      <!-- Skeleton Loader -->
      <div v-if="!isLoaded" class="absolute inset-0 skeleton-loader"></div>
      
      <!-- Imagen Optimizada con NuxtImg -->
      <NuxtImg 
        :src="project.image" 
        :alt="project.title" 
        format="webp" 
        loading="lazy"
        @load="handleImageLoad"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        :class="isLoaded ? 'opacity-100' : 'opacity-0'"
      />
      
      <!-- Degradado superior -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <!-- Badge de Estado Dinámico -->
      <span 
        class="absolute top-4 right-4 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase backdrop-blur-md shadow-sm"
        :class="statusConfig.class"
      >
        <Icon :name="statusConfig.icon" size="14" />
        {{ statusConfig.label }}
      </span>
    </div>

    <!-- Contenido Técnico de la Card -->
    <div class="p-6 md:p-8 flex flex-col flex-grow">
      
      <!-- Título de Proyecto -->
      <h3 
        @click="emit('open-details')" 
        class="text-2xl font-black text-navy-900 dark:text-white mb-2 cursor-pointer hover:text-primary dark:hover:text-blue-400 transition-colors"
      >
        {{ project.title }}
      </h3>
      
      <!-- Descripción Normal -->
      <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
        {{ project.description }}
      </p>

      <!-- Descripción Técnica Expandible en Hover -->
      <div class="overflow-hidden max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-in-out mb-6">
        <div class="p-4 bg-slate-50 dark:bg-navy-900/50 rounded-2xl border border-slate-100 dark:border-navy-700/60">
          <p class="text-xs font-bold text-primary dark:text-blue-400 mb-1 flex items-center gap-1">
            <Icon name="lucide:info" size="12" /> ENFOQUE ARQUITECTÓNICO
          </p>
          <p class="text-xs text-slate-500 dark:text-slate-300 leading-relaxed italic">
            {{ project.technicalDetail || 'Desarrollo modular enfocado en escalabilidad y alto rendimiento.' }}
          </p>
        </div>
      </div>

      <!-- Chips de Stack con Iconos -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span 
          v-for="tech in project.techStack.slice(0, 5)" 
          :key="tech"
          class="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl border bg-slate-50/50 dark:bg-navy-900/30 transition-colors border-slate-100 dark:border-navy-700/50" 
          :class="getColor(tech)"
        >
          <Icon :name="getTechIcon(tech)" size="14" />
          {{ tech }}
        </span>
        <span 
          v-if="project.techStack.length > 5" 
          class="text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-100 dark:border-navy-700/50 bg-slate-100 text-slate-600 dark:bg-navy-700 dark:text-slate-400"
        >
          +{{ project.techStack.length - 5 }}
        </span>
      </div>

      <!-- Footer de Enlaces y Botones -->
      <div class="pt-5 border-t border-slate-100 dark:border-navy-700/60 flex items-center justify-between mt-auto">
        
        <!-- Enlaces Condicionales (Sin Links Rotos) -->
        <div class="flex items-center gap-4">
          <!-- Repositorio GitHub / Privado -->
          <template v-if="project.links.repo && project.links.repo !== '#'">
            <a 
              :href="project.links.repo" 
              target="_blank"
              class="p-2 text-slate-400 hover:text-navy-900 dark:text-slate-500 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-700/80 rounded-xl transition-all" 
              title="Código en GitHub"
            >
              <Icon name="lucide:github" size="22" />
            </a>
          </template>
          <template v-else>
            <span 
              class="flex items-center gap-1.5 text-xs font-bold text-slate-400 dark:text-slate-500 cursor-not-allowed bg-slate-50 dark:bg-navy-900/40 px-3 py-1.5 rounded-xl border border-dashed border-slate-200 dark:border-navy-700" 
              title="Repositorio Privado"
            >
              <Icon name="lucide:lock" size="14" />
              Repo privado
            </span>
          </template>

          <!-- Demo en Vivo -->
          <template v-if="project.links.demo && project.links.demo !== '#'">
            <a 
              :href="project.links.demo" 
              target="_blank"
              class="p-2 text-slate-400 hover:text-primary dark:text-slate-500 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-all" 
              title="Demo en Vivo"
            >
              <Icon name="lucide:external-link" size="22" />
            </a>
          </template>
        </div>
        
        <!-- Botón de Leer Más -->
        <button 
          @click="emit('open-details')" 
          class="px-4 py-2 text-xs font-bold text-primary dark:text-blue-400 hover:text-white dark:hover:text-white bg-blue-50 hover:bg-primary dark:bg-blue-500/10 dark:hover:bg-primary rounded-xl flex items-center gap-1.5 transition-all shadow-sm"
        >
          Detalles <Icon name="lucide:arrow-right" size="14" />
        </button>
      </div>

    </div>
  </article>
</template>
