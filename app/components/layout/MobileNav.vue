<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { name: 'Inicio', icon: 'lucide:home', href: '#' },
  { name: 'Experiencia', icon: 'lucide:briefcase', href: '#experiencia' },
  { name: 'IA Workflow', icon: 'lucide:cpu', href: '#ai-workflow' },
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
  <div class="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 pointer-events-none safe-bottom w-[calc(100%-2rem)] max-w-md mx-auto">
    <nav class="pointer-events-auto w-full bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-full px-3 py-2 shadow-2xl shadow-black/80 overflow-x-hidden">
      <ul class="flex items-center justify-around gap-1 w-full">
        <li v-for="item in navItems" :key="item.name">
          <a 
            :href="item.href"
            @click.prevent="scrollToSection(item.href)"
            class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full transition-all duration-200 group text-center whitespace-nowrap text-xs font-medium"
            :class="activeSection === item.href 
              ? 'text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20 font-semibold shadow-sm' 
              : 'text-zinc-400 hover:text-zinc-200 border border-transparent'"
          >
            <Icon 
              :name="item.icon" 
              size="18" 
              class="transition-transform duration-200 shrink-0"
              :class="activeSection === item.href ? 'text-emerald-400 scale-105' : 'text-zinc-400 group-hover:text-zinc-200'" 
            />
            
            <span class="text-[11px] tracking-tight leading-none">
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