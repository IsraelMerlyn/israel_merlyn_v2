<script setup lang="ts">
const metrics = [
  {
    value: '50+',
    label: 'Obras Públicas Auditadas',
    detail: 'Control en tiempo real de presupuestos e infraestructura municipal',
    icon: 'lucide:building-2',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
  },
  {
    value: '4 Devs',
    label: 'Mentoring & Code Reviews',
    detail: 'Guía técnica y Code Reviews de célula ágil',
    icon: 'lucide:users',
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
  },
  {
    value: '60 FPS',
    label: 'Rendimiento Móvil',
    detail: 'Procesamiento de imagen pesado usando Dart Isolates',
    icon: 'lucide:zap',
    color: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
  },
  {
    value: '0 Token Leaks',
    label: 'Seguridad SSO Enforzada',
    detail: 'Shell App inter-dominio con HTTP-Only Cookies anti-XSS',
    icon: 'lucide:shield-check',
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
  }
]

const architecturePills = [
  'Clean Architecture',
  'Feature-Sliced Design (FSD)',
  'Offline-First Sync',
  'Liquibase DB Versioning',
  'AI-Assisted Workflow'
]
</script>

<template>
  <section class="min-h-screen flex items-center justify-center pt-28 pb-16 relative overflow-hidden bg-zinc-950 transition-colors duration-500">
    
    <!-- Background Glows -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/4 right-5 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-10 left-5 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
      
      <!-- Columna Izquierda: Mensaje Ejecutivo & Posicionamiento -->
      <div class="lg:col-span-7 space-y-8 text-center lg:text-left">
        
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-950/40 text-blue-300 border border-blue-800/60 shadow-sm animate-fade-in-up">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          SSr Software Engineer · Remote / Relocation
        </div>
        
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-zinc-100 tracking-tight animate-fade-in-up delay-100">
          Arquitectura limpia y desarrollo escalable en <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400">Web, Mobile y Backend.</span>
        </h1>
        
        <p class="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal animate-fade-in-up delay-200">
          Soy SSr Software Engineer. Diseño e implemento sistemas robustos usando Flutter, Vue 3 / Nuxt y Spring Boot. Mi enfoque técnico se basa en Clean Architecture, FSD y la integración de flujos asistidos por IA para maximizar la calidad y velocidad de entrega.
        </p>
        
        <!-- Acciones Principales -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 animate-fade-in-up delay-300">
          <UiBaseButton variant="primary" to="#proyectos" class="w-full sm:w-auto text-base py-3.5 px-8 shadow-lg shadow-blue-600/20">
            Explorar Case Studies <Icon name="lucide:arrow-down-right" size="18" class="ml-1" />
          </UiBaseButton>
          <UiBaseButton variant="outline" to="#experiencia" class="w-full sm:w-auto text-base py-3.5 px-8">
            Ver Trayectoria Técnica
          </UiBaseButton>
        </div>

        <!-- Badges Arquitectónicos Inferiores -->
        <div class="pt-4 animate-fade-in-up delay-400">
          <p class="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">Enfoque & Arquitectura de Software</p>
          <div class="flex flex-wrap gap-2 justify-center lg:justify-start">
            <span 
              v-for="pill in architecturePills" 
              :key="pill"
              class="px-3 py-1.5 rounded-xl text-xs font-semibold bg-zinc-900 text-zinc-300 border border-zinc-800 shadow-sm"
            >
              {{ pill }}
            </span>
          </div>
        </div>

      </div>

      <!-- Columna Derecha: Panel Ejecutivo de Métricas e Impacto Reales -->
      <div class="lg:col-span-5 relative mt-4 lg:mt-0 animate-fade-in-up delay-500">
        
        <div class="relative bg-zinc-900/80 backdrop-blur-xl p-8 rounded-3xl border border-zinc-800 shadow-2xl space-y-6">
          
          <div class="flex items-center justify-between border-b border-zinc-800 pb-4">
            <div>
              <h2 class="text-lg font-bold text-zinc-100 flex items-center gap-2">
                <Icon name="lucide:activity" class="text-blue-500" size="20" /> Métricas de Impacto Directo
              </h2>
              <p class="text-xs text-zinc-400">Resultados verificables en producción</p>
            </div>
            <span class="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">
              Verified Prod
            </span>
          </div>

          <!-- Grilla de KPIs -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div 
              v-for="metric in metrics" 
              :key="metric.label"
              class="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 transition-all hover:-translate-y-1 hover:border-zinc-700"
            >
              <div class="flex items-center justify-between mb-2">
                <span class="text-2xl sm:text-3xl font-black text-zinc-100">
                  {{ metric.value }}
                </span>
                <div :class="`p-2 rounded-xl border ${metric.color}`">
                  <Icon :name="metric.icon" size="18" />
                </div>
              </div>
              <p class="text-xs font-bold text-zinc-200 mb-0.5">{{ metric.label }}</p>
              <p class="text-[11px] text-zinc-400 leading-snug">{{ metric.detail }}</p>
            </div>
          </div>

          <!-- Banner Informativo Inferior del Panel -->
          <div class="p-4 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 flex items-start gap-3">
            <Icon name="lucide:terminal" size="20" class="text-blue-400 shrink-0 mt-0.5" />
            <div class="text-xs text-zinc-300 leading-relaxed">
              <span class="font-bold text-white">Metodología:</span> Integración de pruebas estáticas con SonarQube, desarrollo guiado por historias de usuario y flujos asistidos por agentes de IA con revisión humana rigurosa.
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>