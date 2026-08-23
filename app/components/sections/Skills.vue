<script setup lang="ts">
import { useResume } from '~/composable/useResume'
const { skillCategories } = useResume()

const domainDescriptions: Record<string, string> = {
  'Mobile Engineering': 'Desarrollo de aplicaciones nativas e híbridas de alta precisión, patrones reactivos BLoC, persistencia SQLite local y multihilo.',
  'Modern Web & Frontend': 'Construcción de SPA/SSR escalables en Nuxt 3, tipado estricto en TypeScript, estado reactivo en Pinia y optimización SEO/PWA.',
  'Backend & Systems': 'Arquitectura de monolitos modulares en Spring Boot 3, versionado declarativo de BD con Liquibase, control RBAC y PostGIS espacial.',
  'Quality & Agile Leadership': 'Garantía de calidad con Vitest/SonarQube, liderazgo de sprints ágiles, Code Reviews rigurosos y workflows asistidos por IA.'
}
</script>

<template>
  <section id="habilidades" class="py-24 bg-zinc-950 transition-colors duration-500 relative overflow-hidden">
    
    <!-- Background Glows -->
    <div class="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
      
      <!-- Encabezado de la Sección -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-950/40 text-blue-300 border border-blue-800/60">
          <Icon name="lucide:cpu" size="14" /> Dominio Técnico por Capa
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-100 tracking-tight">
          Habilidades de <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Ingeniería de Software</span>
        </h2>
        <p class="text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
          Conjunto de tecnologías, patrones de arquitectura y herramientas organizadas por dominio operativo para garantizar calidad, resiliencia y mantenibilidad.
        </p>
      </div>

      <!-- Grilla de 4 Cards por Dominio Arquitectónico -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div 
          v-for="category in skillCategories" 
          :key="category.title"
          class="group p-8 rounded-3xl border border-zinc-800 bg-zinc-900/70 shadow-md hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between backdrop-blur-md"
        >
          <!-- Head Card -->
          <div class="space-y-4 mb-6">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 shadow-inner group-hover:scale-110 transition-transform">
                <Icon :name="category.icon" size="24" />
              </div>
              <div>
                <h3 class="text-xl font-extrabold tracking-tight text-zinc-100">
                  {{ category.title }}
                </h3>
                <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-950/50 px-2 py-0.5 rounded border border-blue-800">
                  Dominio de Producción
                </span>
              </div>
            </div>

            <p class="text-xs text-zinc-400 leading-relaxed font-normal">
              {{ domainDescriptions[category.title] || 'Tecnologías y herramientas clave de producción.' }}
            </p>
          </div>

          <!-- Skills Grid -->
          <div class="grid grid-cols-2 gap-3 pt-4 border-t border-zinc-800">
            <div 
              v-for="skill in category.skills" 
              :key="skill.name"
              class="flex items-center gap-3 p-3 rounded-2xl border transition-all duration-200 hover:scale-[1.02] bg-zinc-950/60 border-zinc-800 text-zinc-200"
            >
              <div class="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 shadow-sm">
                <Icon :name="skill.icon" size="16" />
              </div>
              <span class="font-bold text-xs tracking-tight leading-tight truncate">
                {{ skill.name }}
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>