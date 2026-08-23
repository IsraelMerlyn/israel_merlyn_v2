<script setup lang="ts">
const navItems = [
  { name: 'Inicio', icon: 'lucide:home', href: '#' },
  { name: 'Experiencia', icon: 'lucide:briefcase', href: '#experiencia' },
  { name: 'Workflow IA', icon: 'lucide:cpu', href: '#ai-workflow' },
  { name: 'Proyectos', icon: 'lucide:layers', href: '#proyectos' },
  { name: 'Contacto', icon: 'lucide:mail', href: '#contacto' }
]
</script>

<template>
  <div class="md:hidden fixed bottom-4 left-4 right-4 z-[90]">
    <nav class="bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 shadow-2xl rounded-2xl px-2 py-3">
      <ul class="flex justify-around items-center w-full">
        <li v-for="item in navItems" :key="item.name">
          <a :href="item.href" 
             class="flex flex-col items-center justify-center w-14 gap-1 text-zinc-400 hover:text-blue-400 transition-colors group">
            
            <Icon :name="item.icon" size="20" class="transition-transform group-active:scale-90 group-hover:-translate-y-0.5" />
            
            <span class="text-[9px] font-bold tracking-wide">{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>