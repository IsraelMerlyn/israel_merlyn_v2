<script setup lang="ts">
// Definimos las props para hacerlo flexible
const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // 'primary', 'secondary', 'outline'
    validator: (value: string) => ['primary', 'secondary', 'outline'].includes(value)
  },
  to: {
    type: String,
    default: null
  }
})

// Clases base que todos los botones tendrán
const baseClasses = "px-6 py-3 rounded-xl font-bold transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2"

// Variantes de estilo (Tus colores brutales)
const variants: Record<string, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:-translate-y-1",
  secondary: "bg-navy-900 text-white hover:bg-navy-800 dark:bg-white dark:text-navy-900 dark:hover:bg-mist-200 shadow-md",
  outline: "border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white dark:border-mist-200 dark:text-mist-200 dark:hover:bg-mist-200 dark:hover:text-navy-900"
}
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="[baseClasses, variants[variant]]">
    <slot />
  </NuxtLink>
  
  <button v-else :class="[baseClasses, variants[variant]]">
    <slot />
  </button>
</template>