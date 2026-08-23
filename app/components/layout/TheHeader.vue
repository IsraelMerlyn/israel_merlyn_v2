<script setup>
const isMenuOpen = ref(false)
const route = useRoute()

// Cierra el menú automáticamente si cambiamos de ruta
watch(() => route.fullPath, () => {
  isMenuOpen.value = false
})

// Bloquear el scroll del body cuando el menú está abierto
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
      const lenis = useNuxtApp().$lenis
      if (lenis) lenis.scrollTo(target, { offset: -80 })
      else target.scrollIntoView({ behavior: 'smooth' })
    }
  }, 300)
}
</script>

<template>
  <header class="fixed top-0 w-full z-40 transition-all duration-300 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800">
    <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center relative">
      
      <NuxtLink to="/" class="group flex items-center gap-2 relative z-50" @click="isMenuOpen = false">
        <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl transition-transform group-hover:rotate-12 shadow-lg shadow-blue-600/20">
          IS
        </div>
        <span class="font-black text-xl tracking-tighter text-zinc-100">
          DEV<span class="text-blue-500">ISRAEL</span>
        </span>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-8 font-semibold text-sm text-zinc-300">
        <button @click="scrollToSection('#experiencia')" class="hover:text-white transition-colors">Experiencia</button>
        <button @click="scrollToSection('#habilidades')" class="hover:text-white transition-colors">Habilidades</button>
        <button @click="scrollToSection('#ai-workflow')" class="hover:text-purple-400 transition-colors">Workflow IA</button>
        <button @click="scrollToSection('#proyectos')" class="hover:text-white transition-colors">Proyectos</button>
      </nav>

      <div class="hidden md:flex items-center gap-4">
        <button @click="scrollToSection('#contacto')" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-6 rounded-xl transition-colors shadow-lg shadow-blue-600/20 text-xs uppercase tracking-wider">
          Hablemos
        </button>
      </div>

      <div class="md:hidden flex items-center gap-4 relative z-50">
        <button @click="isMenuOpen = !isMenuOpen" aria-label="Abrir menú" class="text-zinc-100 p-2 focus:outline-none">
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
               class="fixed inset-0 z-[9999] bg-zinc-950 overflow-y-auto"
               style="height: 100dvh;"> 
            <div class="flex flex-col min-h-full">
              
              <div class="h-20 px-6 flex items-center justify-end shrink-0">
                 <button @click="isMenuOpen = false" class="p-4 -mr-4 text-zinc-100">
                    <Icon name="lucide:x" size="32" />
                 </button>
              </div>

              <div class="flex-grow flex flex-col items-center justify-center gap-8 py-8">
                <button @click="scrollToSection('#experiencia')" class="text-3xl font-black text-zinc-100 active:scale-95 transition-transform">
                  Experiencia
                </button>
                <button @click="scrollToSection('#habilidades')" class="text-3xl font-black text-zinc-100 active:scale-95 transition-transform">
                  Habilidades
                </button>
                <button @click="scrollToSection('#ai-workflow')" class="text-3xl font-black text-zinc-100 active:scale-95 transition-transform">
                  Workflow IA
                </button>
                <button @click="scrollToSection('#proyectos')" class="text-3xl font-black text-zinc-100 active:scale-95 transition-transform">
                  Proyectos
                </button>
                <button @click="scrollToSection('#contacto')" class="text-3xl font-black text-zinc-100 active:scale-95 transition-transform">
                  Contacto
                </button>
              </div>

              <div class="p-8 pb-12 text-center shrink-0">
                 <p class="text-zinc-500 mb-4 text-xs uppercase tracking-widest font-mono">Contacto & Redes</p>
                 <div class="flex justify-center gap-8">
                    <a href="https://github.com/IsraelMerlyn" target="_blank" class="text-zinc-400 hover:text-blue-500"><Icon name="lucide:github" size="28" /></a>
                    <a href="https://www.linkedin.com/in/josuevasquez" target="_blank" class="text-zinc-400 hover:text-blue-500"><Icon name="lucide:linkedin" size="28" /></a>
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