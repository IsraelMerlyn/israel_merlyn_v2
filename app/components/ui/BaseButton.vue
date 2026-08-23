<script setup lang="ts">
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary', 'outline'].includes(value)
  },
  to: {
    type: String,
    default: null
  }
})

const baseClasses = "px-6 py-3 rounded-xl font-bold transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 text-sm"

const variants: Record<string, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20 hover:-translate-y-0.5",
  secondary: "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 border border-zinc-700 shadow-md",
  outline: "border border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-700"
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