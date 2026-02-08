<script setup>
import { useTheme } from '~/composable/useTheme'
const { isDark, toggleTheme } = useTheme()
const isMenuOpen = ref(false)
const route = useRoute()

// Cierra el menú automáticamente si cambiamos de ruta
watch(() => route.fullPath, () => {
  isMenuOpen.value = false
})

// Bloquear el scroll del body cuando el menú está abierto
// Usamos un watcher para asegurar que se limpie si el componente se desmonta
watch(isMenuOpen, (isOpen) => {
  if (import.meta.client) {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
})

const scrollToSection = (id) => {
  isMenuOpen.value = false
  setTimeout(() => {
    const target = document.querySelector(id)
    if (target) {
      // Si tienes lenis global, úsalo, si no, nativo
      const lenis = useNuxtApp().$lenis
      if (lenis) lenis.scrollTo(target, { offset: -80 })
      else target.scrollIntoView({ behavior: 'smooth' })
    }
  }, 300)
}
</script>

<template>
  <header class="fixed top-0 w-full z-40 transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-navy-900/80 border-b border-slate-200/50 dark:border-navy-800">
    <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center relative">
      
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
        <button @click="scrollToSection('#habilidades')" class="hover:text-blue-600 dark:hover:text-white transition-colors">Habilidades</button>
        <button @click="scrollToSection('#proyectos')" class="hover:text-blue-600 dark:hover:text-white transition-colors">Proyectos</button>
      </nav>

      <div class="hidden md:flex items-center gap-4">
        <button @click="toggleTheme" class="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors">
          <Icon v-if="isDark" name="lucide:sun" size="20" />
          <Icon v-else name="lucide:moon" size="20" />
        </button>
        <UiBaseButton variant="primary" to="#contacto" class="!py-2 !px-4 text-sm">Hablemos</UiBaseButton>
      </div>

      <div class="md:hidden flex items-center gap-4 relative z-50">
        <button @click="toggleTheme" class="text-navy-900 dark:text-white">
           <Icon v-if="isDark" name="lucide:sun" size="20" />
           <Icon v-else name="lucide:moon" size="20" />
        </button>
        
        <button @click="isMenuOpen = !isMenuOpen" aria-label="Abrir menú" class="text-navy-900 dark:text-white p-2 focus:outline-none">
          <div class="relative w-6 h-5">
             <span class="absolute top-0 left-0 w-full h-0.5 bg-current transition-transform duration-300" :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''"></span>
             <span class="absolute top-2 left-0 w-full h-0.5 bg-current transition-opacity duration-300" :class="isMenuOpen ? 'opacity-0' : 'opacity-100'"></span>
             <span class="absolute bottom-0 left-0 w-full h-0.5 bg-current transition-transform duration-300" :class="isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''"></span>
          </div>
        </button>
      </div>

    </div>

    <ClientOnly>
      <Teleport to="body">
        <Transition name="fade">
          <div v-if="isMenuOpen" 
               class="fixed inset-0 z-[9999] bg-white dark:bg-navy-900 overflow-y-auto"
               style="height: 100dvh;"> <div class="flex flex-col min-h-full">
              
              <div class="h-20 px-6 flex items-center justify-end shrink-0">
                 <button @click="isMenuOpen = false" class="p-4 -mr-4 text-navy-900 dark:text-white">
                    <Icon name="lucide:x" size="32" />
                 </button>
              </div>

              <div class="flex-grow flex flex-col items-center justify-center gap-8 py-8">
                <button @click="scrollToSection('#experiencia')" class="text-4xl font-bold text-navy-900 dark:text-white active:scale-95 transition-transform">
                  Experiencia
                </button>
                <button @click="scrollToSection('#habilidades')" class="text-4xl font-bold text-navy-900 dark:text-white active:scale-95 transition-transform">
                  Habilidades
                </button>
                <button @click="scrollToSection('#proyectos')" class="text-4xl font-bold text-navy-900 dark:text-white active:scale-95 transition-transform">
                  Proyectos
                </button>
                <button @click="scrollToSection('#contacto')" class="text-4xl font-bold text-navy-900 dark:text-white active:scale-95 transition-transform">
                  Contacto
                </button>
              </div>

              <div class="p-8 pb-12 text-center shrink-0">
                 <p class="text-slate-500 mb-4 text-sm uppercase tracking-widest">Sígueme</p>
                 <div class="flex justify-center gap-8">
                    <a href="#" class="text-slate-400 hover:text-blue-600"><Icon name="lucide:github" size="28" /></a>
                    <a href="#" class="text-slate-400 hover:text-blue-600"><Icon name="lucide:linkedin" size="28" /></a>
                 </div>
              </div>

            </div>
          </div>
        </Transition>
      </Teleport>
    </ClientOnly>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>