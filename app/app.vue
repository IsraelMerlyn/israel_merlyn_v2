<script setup>
import { useScrollReveal } from './composable/useScrollReveal';

useScrollReveal()

useHead({
  htmlAttrs: { class: 'dark' },
  bodyAttrs: { class: 'bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300' }
})

useSeoMeta({
  title: 'Josue Israel Vázquez | SSr Software Engineer & Tech Lead · Flutter, Nuxt 3 & Spring Boot',
  ogTitle: 'Josue Israel Vázquez | SSr Software Engineer & Tech Lead',
  description: 'Portafolio profesional de Josue Israel Vázquez, SSr Software Engineer y Tech Lead. Especialista en arquitecturas de software escalables en Flutter, Vue 3, Nuxt 3, Spring Boot e Inteligencia Artificial.',
  ogDescription: 'Portafolio profesional de Josue Israel Vázquez, SSr Software Engineer y Tech Lead. Especialista en arquitecturas de software escalables en Flutter, Vue 3, Nuxt 3, Spring Boot e Inteligencia Artificial.',
  ogImage: 'https://portafolio-israelmerlyn.netlify.app/home.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
    
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
        <LazySectionsAiWorkflow />
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
  <ClientOnly>
    <InstallPwa />
  </ClientOnly>
</template>

<style>
.blur-enter-active,
.blur-leave-active {
  transition: all 0.4s ease-in-out;
}

.blur-enter-from,
.blur-leave-to {
  opacity: 0;
  filter: blur(10px);
  transform: translateY(10px);
}
</style>