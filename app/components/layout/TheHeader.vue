<script setup>
import { useTheme } from '~/composable/useTheme';
const { isDark, toggleTheme } = useTheme()
const isMenuOpen = ref(false) // Para menú móvil futuro
</script>

<template>
  <header class="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-navy-900/80 border-b border-mist-200/50 dark:border-navy-800">
    <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
      
      <NuxtLink to="/" class="group flex items-center gap-2">
        <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:rotate-12">
          IS
        </div>
        <span class="font-bold text-xl tracking-tighter text-navy-900 dark:text-white">
          DEV<span class="text-blue-600 dark:text-blue-500">ISRAEL</span>
        </span>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-8 font-medium text-slate-600 dark:text-mist-200">
        <NuxtLink to="#experiencia" class="hover:text-blue-600 dark:hover:text-white transition-colors">Experiencia</NuxtLink>
        <NuxtLink to="#proyectos" class="hover:text-blue-600 dark:hover:text-white transition-colors">Proyectos</NuxtLink>
        <NuxtLink to="#blog" class="hover:text-blue-600 dark:hover:text-white transition-colors">Blog Docente</NuxtLink>
      </nav>

      <div class="flex items-center gap-4">
        <button @click="toggleTheme" 
                class="p-2 rounded-full text-slate-600 dark:text-mist-200 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors">
          <span v-if="isDark">☀️</span>
          <span v-else>🌙</span>
        </button>
        
        <div class="hidden md:block">
          <UiBaseButton variant="primary" to="#contacto" class="!py-2 !px-4 text-sm">
            Hablemos
          </UiBaseButton>
        </div>
      </div>

    </div>
  </header>
</template>