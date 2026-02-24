<script setup>
// Importamos los iconos necesarios
import { 
  AcademicCapIcon, 
  UserGroupIcon, 
  CodeBracketSquareIcon, 
  RocketLaunchIcon 
} from '@heroicons/vue/24/outline'

const achievements = [
  {
    title: 'Instructor de Agilismo',
    role: 'Diplomado en Desarrollo Ágil',
    description: 'Capacitación de equipos profesionales en metodologías Scrum y Kanban. Enfoque en la optimización de flujos de trabajo y entrega de valor continuo.',
    icon: UserGroupIcon,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'group-hover:border-blue-500/50'
  },
  {
    title: 'Docencia Universitaria',
    role: 'Ingeniería de Software',
    description: 'Más de 3 años formando a la próxima generación de desarrolladores. Especialista en Lógica de Programación, Estructuras de Datos y Frontend Moderno.',
    icon: AcademicCapIcon,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'group-hover:border-emerald-500/50'
  },
  {
    title: 'Arquitectura Fullstack',
    role: 'Vue/Nuxt & Spring Boot',
    description: 'Diseño de soluciones escalables combinando la robustez de Java (Spring) con la agilidad de Vue 3. Implementación de PWAs de alto rendimiento.',
    icon: CodeBracketSquareIcon,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'group-hover:border-violet-500/50'
  },
  {
    title: 'Desarrollo Móvil',
    role: 'React Native & Flutter',
    description: 'Creación de aplicaciones nativas multiplataforma. Experiencia en integración de APIs, gestión de estado y despliegue en tiendas.',
    icon: RocketLaunchIcon,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'group-hover:border-amber-500/50'
  }
]
</script>

<template>
  <section class="py-24 px-6 bg-slate-900 relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 opacity-50 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto relative z-10">
      
      <div class="text-center mb-16 space-y-4">
        <h2 class="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Trayectoria & <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Impacto</span>
        </h2>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg">
          No solo escribo código; construyo conocimiento. Mi carrera combina la ejecución técnica con la formación de talento.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(item, index) in achievements" 
          :key="index"
          class="group p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
          :class="item.border"
        >
          <div :class="`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${item.bg} ${item.color}`">
            <component :is="item.icon" class="w-8 h-8" />
          </div>
          
          <div class="mb-3">
            <h3 class="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
              {{ item.title }}
            </h3>
            <span class="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {{ item.role }}
            </span>
          </div>

          <p class="text-slate-400 leading-relaxed text-sm">
            {{ item.description }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>