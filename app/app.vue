<script setup>
import UiMagicCursor from './components/ui/MagicCursor.vue'
import { useScrollReveal } from './composable/useScrollReveal';
import Experience from './components/sections/Experience.vue';
useScrollReveal()

useSeoMeta({
  title: 'Israel | Frontend Developer & Docente',
  ogTitle: 'Israel | Frontend Developer & Docente',
  description: 'Portafolio profesional. Especialista en Vue.js, Nuxt y Arquitectura de Software.',
  ogDescription: 'Portafolio profesional. Especialista en Vue.js, Nuxt y Arquitectura de Software.',
  ogImage: 'https://tu-dominio.com/tu-foto-cover.jpg', // ¡Sube una imagen a la carpeta public!
  twitterCard: 'summary_large_image',
})
</script>

<template>
<div class="min-h-screen transition-colors duration-500 bg-white dark:bg-navy-900 text-slate-800 dark:text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
    
    <LayoutTheHeader />
    
    <main>
      <SectionsTheHero /> 
      
      <div class="reveal"> 
        <LazySectionsExperience /> 
      </div>
     
      <div class="reveal">
        <LazySectionsSkills />
      </div>

      <div class="reveal">
        <LazySectionsProjects />
      </div>
    </main>

    <LazyLayoutTheFooter />

  </div>
  
  <UiMagicCursor />
</template>