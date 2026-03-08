<script setup>
// Aquí definimos los enlaces de tu portafolio
const navItems = [
  { name: 'Inicio', icon: 'lucide:home', href: '#' }, // o el id de tu Hero
  { name: 'Trayectoria', icon: 'lucide:briefcase', href: '#experiencia' },
  { name: 'Proyectos', icon: 'lucide:layers', href: '#proyectos' },
  { name: 'Contacto', icon: 'lucide:mail', href: '#contacto' } // Asegúrate de tener este id
]
</script>

<template>
  <div class="md:hidden fixed bottom-4 left-4 right-4 z-[90]">
    
    <nav class="bg-white/80 dark:bg-navy-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-navy-700/50 shadow-2xl shadow-blue-900/10 rounded-2xl px-2 py-3">
      
      <ul class="flex justify-around items-center w-full">
        <li v-for="item in navItems" :key="item.name">
          <a :href="item.href" 
             class="flex flex-col items-center justify-center w-16 gap-1 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors group">
            
            <Icon :name="item.icon" size="22" class="transition-transform group-active:scale-90 group-hover:-translate-y-1" />
            
            <span class="text-[10px] font-bold tracking-wide">{{ item.name }}</span>
          </a>
        </li>
      </ul>

    </nav>
  </div>
</template>