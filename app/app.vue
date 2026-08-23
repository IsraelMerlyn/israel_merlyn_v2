<script setup>
import { useScrollReveal } from './composable/useScrollReveal';

useScrollReveal()

useHead({
  htmlAttrs: { class: 'dark' },
  bodyAttrs: { class: 'bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300' }
})

useSeoMeta({
  title: 'Israel Merlyn | SSr Software Engineer',
  description: 'SSr Software Engineer especializado en Flutter, Vue/Nuxt y Spring Boot. Enfocado en Clean Architecture, Feature-Sliced Design (FSD) y flujos de ingeniería asistidos por IA.',
  ogTitle: 'Israel Merlyn | SSr Software Engineer',
  ogDescription: 'SSr Software Engineer especializado en Flutter, Vue/Nuxt y Spring Boot. Enfocado en Clean Architecture, Feature-Sliced Design (FSD) y flujos de ingeniería asistidos por IA.',
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