<script setup>
import UiMagicCursor from './components/ui/MagicCursor.vue'
import { useScrollReveal } from './composable/useScrollReveal';
import Experience from './components/sections/Experience.vue';
useScrollReveal()
// No necesitamos importar nada, Nuxt lo hace solo (auto-imports)
</script>

<template>
  <div class="min-h-screen transition-colors duration-500 bg-white dark:bg-navy-900 text-slate-800 dark:text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
    
    <LayoutTheHeader />
    
    <main>
      <SectionsTheHero /> <div class="reveal"> <Experience/> </div>
     
      <SectionsSkills />
      <SectionsProjects />
      
      </main>
<LayoutTheFooter />
    </div>
    <UiMagicCursor />
</template>