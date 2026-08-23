<script setup>
import { useScrollReveal } from './composable/useScrollReveal';

useScrollReveal()

useHead({
  
  htmlAttrs: { class: 'dark' },
  bodyAttrs: { class: 'bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300' },
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': 'Israel Merlyn',
        'alternateName': ['Josué Israel Vázquez', 'Israel Vázquez'],
        'jobTitle': 'SSr Software Engineer',
        'url': 'https://portafolio-israelmerlyn.netlify.app',
        'sameAs': [
          'https://github.com/israelmerlyn',
          'https://www.linkedin.com/in/israelmerlyn'
        ],
        'knowsAbout': [
          'Flutter',
          'Vue.js',
          'Nuxt.js',
          'Spring Boot',
          'Clean Architecture',
          'Feature-Sliced Design',
          'Artificial Intelligence'
        ],
        'description': 'SSr Software Engineer especializado en Flutter, Vue/Nuxt y Spring Boot.'
      })
    }
  ]
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
    
    <main class="pb-24 md:pb-0">
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