<script setup>
import { useTheme } from '~/composable/useTheme'
const { isDark, toggleTheme } = useTheme()
const isMenuOpen = ref(false)

// Función para cerrar menú y hacer scroll suave
const scrollToSection = (id) => {
  isMenuOpen.value = false // Cerrar menú
  
  // Si usamos Lenis (inyectado globalmente), lo usamos aquí
  const lenis = useNuxtApp().$lenis
  const target = document.querySelector(id)
  
  if (lenis && target) {
    lenis.scrollTo(target, { offset: -80 })
  } else if (target) {
    // Fallback nativo
    target.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header class="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-navy-900/80 border-b border-slate-200/50 dark:border-navy-800">
    <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
      
      <NuxtLink to="/" class="group flex items-center gap-2 relative z-50" @click="isMenuOpen = false">
        <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:rotate-12 shadow-lg shadow-blue-600/20">
          IS
        </div>
        <span class="font-bold text-xl tracking-tighter text-navy-900 dark:text-white">
          DEV<span class="text-blue-600 dark:text-blue-500">ISRAEL</span>
        </span>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-8 font-medium text-slate-600 dark:text-slate-300">
        <button @click="scrollToSection('#experiencia')" class="hover:text-blue-600 dark:hover:text-white transition-colors">Experiencia</button>
        <button @click="scrollToSection('#habilidades')" class="hover:text-blue-600 dark:hover:text-white transition-colors">Skills</button>
        <button @click="scrollToSection('#proyectos')" class="hover:text-blue-600 dark:hover:text-white transition-colors">Proyectos</button>
      </nav>

      <div class="hidden md:flex items-center gap-4">
        <button @click="toggleTheme" 
                class="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors">
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </button>
        <UiBaseButton variant="primary" to="#contacto" class="!py-2 !px-4 text-sm">
          Hablemos
        </UiBaseButton>
      </div>

      <div class="md:hidden flex items-center gap-4 z-50">
        <button @click="toggleTheme" class="text-2xl">
           <span v-if="isDark">☀️</span><span v-else>🌙</span>
        </button>
        
        <button @click="isMenuOpen = !isMenuOpen" class="text-navy-900 dark:text-white focus:outline-none">
          <div class="w-6 h-5 relative flex flex-col justify-between">
            <span class="w-full h-0.5 bg-current transform transition-all duration-300" :class="isMenuOpen ? 'rotate-45 translate-y-2.5' : ''"></span>
            <span class="w-full h-0.5 bg-current transition-opacity duration-300" :class="isMenuOpen ? 'opacity-0' : 'opacity-100'"></span>
            <span class="w-full h-0.5 bg-current transform transition-all duration-300" :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''"></span>
          </div>
        </button>
      </div>

    </div>

    <Transition name="slide-fade">
      <div v-if="isMenuOpen" class="fixed inset-0 bg-white/95 dark:bg-navy-900/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 text-center md:hidden">
        
        <button @click="scrollToSection('#experiencia')" class="text-3xl font-bold text-navy-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
          Experiencia
        </button>
        <button @click="scrollToSection('#habilidades')" class="text-3xl font-bold text-navy-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
          Habilidades
        </button>
        <button @click="scrollToSection('#proyectos')" class="text-3xl font-bold text-navy-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
          Proyectos
        </button>
        <button @click="scrollToSection('#contacto')" class="text-3xl font-bold text-navy-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
          Contacto
        </button>

        <div class="pt-8">
           <p class="text-sm text-slate-500 uppercase tracking-widest mb-4">Sígueme</p>
           <div class="flex gap-6 justify-center">
             <a href="#" class="text-2xl text-slate-400 hover:text-blue-600">Github</a>
             <a href="#" class="text-2xl text-slate-400 hover:text-blue-600">LinkedIn</a>
           </div>
        </div>

      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Animación de entrada del menú móvil */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>