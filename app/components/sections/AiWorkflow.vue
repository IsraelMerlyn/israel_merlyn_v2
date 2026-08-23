<script setup lang="ts">
const aiPillars = [
  {
    phase: 'Fase 01',
    title: 'CLI Agéntico & Scaffolding',
    icon: 'lucide:terminal',
    badge: 'Gemini CLI & Copilot',
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    description: 'Automatización en terminal con Gemini CLI, Gemini 2.0 y GitHub Copilot CLI para diseño rápido de controladores, scripts de despliegue y flujos de infraestructura.'
  },
  {
    phase: 'Fase 02',
    title: 'Inferencia Local & Privacidad On-Premise',
    icon: 'lucide:shield-check',
    badge: 'Spring AI & Ollama',
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    description: 'Procesamiento de documentos sensibles con Spring AI y Ollama (Gemma), aislando PII y eliminando dependencia de APIs cloud de terceros.'
  },
  {
    phase: 'Fase 03',
    title: 'Structured Outputs & Tipado Estricto',
    icon: 'lucide:code-2',
    badge: 'BeanOutputConverter',
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    description: 'Eliminación de alucinaciones mediante BeanOutputConverter y validación de esquemas JSON para respuestas consumibles por APIs enterprise.'
  },
  {
    phase: 'Fase 04',
    title: 'Testing Asistido & Human-in-the-Loop',
    icon: 'lucide:check-circle-2',
    badge: 'JUnit 5 & Vitest QA',
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    description: 'Síntesis acelerada de suites de prueba con JUnit 5 y Vitest; cero líneas de código a producción sin tipado estricto y revisión técnica manual.'
  }
]
</script>

<template>
  <section id="ai-workflow" class="py-24 bg-zinc-950 transition-colors duration-500 relative overflow-hidden">
    
    <!-- Backdrop Blur Glow -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
      
      <!-- Encabezado de la Sección -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-950/40 text-purple-300 border border-purple-800/60">
          <Icon name="logos:google-gemini" size="14" /> AI-Assisted Engineering Workflow
        </div>
        
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-100 tracking-tight">
          Flujo Agéntico & <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400">Gobernanza Técnica</span>
        </h2>
        
        <p class="text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
          Integración de LLMs locales y CLI agénticos en el ciclo de vida del software, garantizando privacidad On-Premise, cero alucinaciones y cumplimiento de arquitectura.
        </p>
      </div>

      <!-- Grilla de los 4 Pilares del Flujo Agéntico -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="pillar in aiPillars" 
          :key="pillar.title"
          class="p-6 sm:p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 shadow-xl hover:border-purple-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between backdrop-blur-md"
        >
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">{{ pillar.phase }}</span>
              <div :class="`p-2.5 rounded-xl border ${pillar.color}`">
                <Icon :name="pillar.icon" size="20" />
              </div>
            </div>

            <h3 class="text-lg font-extrabold text-zinc-100 leading-snug">
              {{ pillar.title }}
            </h3>

            <p class="text-zinc-400 text-xs leading-relaxed font-normal">
              {{ pillar.description }}
            </p>
          </div>

          <div class="pt-4 border-t border-zinc-800/80 mt-6">
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-800">
              {{ pillar.badge }}
            </span>
          </div>
        </div>
      </div>

      <!-- Banner de Filosofía de Ingeniería con IA -->
      <div class="p-8 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2 text-center md:text-left">
          <span class="text-xs font-mono font-bold uppercase tracking-widest text-purple-400">Filosofía de Desarrollo 2026</span>
          <h4 class="text-xl sm:text-2xl font-black">
            "AI amplifies my engineering velocity; it never replaces my technical judgment."
          </h4>
          <p class="text-xs text-zinc-400 max-w-2xl leading-relaxed">
            Formador de docentes en el TecNM en la adopción ética y estructurada de agentes de IA dentro del ciclo de desarrollo ágil de software.
          </p>
        </div>

        <div class="shrink-0">
          <UiBaseButton variant="primary" to="#contacto" class="text-xs py-3 px-6 shadow-lg shadow-purple-600/20">
            Conocer mi Enfoque <Icon name="lucide:arrow-right" size="14" class="ml-1" />
          </UiBaseButton>
        </div>
      </div>

    </div>
  </section>
</template>
