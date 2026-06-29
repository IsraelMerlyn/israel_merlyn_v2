<script setup>
import UiMagicCursor from './components/ui/MagicCursor.vue'
import { useScrollReveal } from './composable/useScrollReveal';

useScrollReveal()

useSeoMeta({
  title: 'Josue Israel Vázquez | SSr Software Engineer · Flutter & Vue 3',
  ogTitle: 'Josue Israel Vázquez | SSr Software Engineer · Flutter & Vue 3',
  description: 'Portafolio de Josue Israel Vázquez, SSr Software Engineer y Tech Lead. Especialista en Flutter, Vue 3, Nuxt 3 y Spring Boot.',
  ogDescription: 'Portafolio de Josue Israel Vázquez, SSr Software Engineer y Tech Lead. Especialista en Flutter, Vue 3, Nuxt 3 y Spring Boot.',
  ogImage: 'https://portafolio-israelmerlyn.netlify.app/home.png',
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

      <div class="reveal">
        <LazySectionsContact />
      </div>
    </main>

    <LazyLayoutTheFooter />

  </div>
  <ContactModal />
  <LayoutMobileNav />
  <UiMagicCursor />
  <!-- <InstallPwa /> -->
   <ClientOnly>
    <InstallPwa />
  </ClientOnly>
</template>

<style>
/* La magia de la transición "blur" */
.blur-enter-active,
.blur-leave-active {
  transition: all 0.4s ease-in-out;
}

.blur-enter-from,
.blur-leave-to {
  opacity: 0;
  filter: blur(10px); /* Esto le da el toque "coquetón" */
  transform: translateY(10px); /* Un pequeño salto elegante */
}
</style>