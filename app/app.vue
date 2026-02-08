<script setup>
import UiMagicCursor from './components/ui/MagicCursor.vue'
import { useScrollReveal } from './composable/useScrollReveal';

useScrollReveal()

useSeoMeta({
  title: 'Israel | Frontend Developer & Docente',
  ogTitle: 'Israel | Frontend Developer & Docente',
  description: 'Portafolio profesional. Vue.js, Nuxt.',
  ogDescription: 'Portafolio profesional. Desarrollador Frontend y Docente en Vue.js, Nuxt .',
  ogImage: 'https://portafolio-israelmerlyn.netlify.app/home.png', // ¡Sube una imagen a la carpeta public!
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
  <!-- <InstallPwa /> -->
</template>