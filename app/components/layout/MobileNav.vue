<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { name: 'Inicio', icon: 'lucide:home', href: '#' },
  { name: 'Experiencia', icon: 'lucide:briefcase', href: '#experiencia' },
  { name: 'Workflow IA', icon: 'lucide:cpu', href: '#ai-workflow' },
  { name: 'Proyectos', icon: 'lucide:layers', href: '#proyectos' },
  { name: 'Contacto', icon: 'lucide:mail', href: '#contacto' }
]

const activeSection = ref('#')

const scrollToSection = (href: string) => {
  activeSection.value = href
  if (href === '#') {
    if (import.meta.client) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return
  }
  const target = document.querySelector(href)
  if (target) {
    const lenis = (useNuxtApp() as any).$lenis
    if (lenis) {
      lenis.scrollTo(target, { offset: -80 })
    } else {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!import.meta.client) return
  
  const sectionIds = ['experiencia', 'habilidades', 'ai-workflow', 'proyectos', 'contacto']
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[]
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = `#${entry.target.id}`
      }
    })
  }, { threshold: 0.3 })

  sections.forEach(section => observer?.observe(section))
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <div class="md:hidden fixed bottom-3 left-3 right-3 z-[90] pointer-events-none safe-bottom">
    <nav class="pointer-events-auto max-w-lg mx-auto bg-zinc-900/90 backdrop-blur-xl border border-zinc-800/90 shadow-2xl rounded-2xl p-1.5 overflow-x-hidden">
      <ul class="flex justify-between items-center w-full gap-1">
        <li v-for="item in navItems" :key="item.name" class="flex-1">
          <a 
            :href="item.href"
            @click.prevent="scrollToSection(item.href)"
            class="flex flex-col items-center justify-center min-h-[48px] px-1 py-1 rounded-xl transition-all duration-200 group text-center whitespace-nowrap"
            :class="activeSection === item.href 
              ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 font-bold shadow-sm' 
              : 'text-zinc-400 hover:text-zinc-200 border border-transparent'"
          >
            <Icon 
              :name="item.icon" 
              size="20" 
              class="transition-transform duration-200 group-active:scale-90"
              :class="activeSection === item.href ? 'text-emerald-400 scale-105' : 'text-zinc-400 group-hover:text-zinc-200'" 
            />
            
            <span class="text-[9px] font-semibold tracking-tight mt-0.5 leading-none truncate max-w-full">
              {{ item.name }}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.safe-bottom {
  padding-bottom: max(env(safe-area-inset-bottom), 0px);
}
</style>