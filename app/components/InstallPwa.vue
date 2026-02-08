<script setup>
import { ref, onMounted } from 'vue'

const deferredPrompt = ref(null)
const showButton = ref(false)

onMounted(() => {
  // Escuchar el evento que dispara Chrome cuando la PWA es instalable
  window.addEventListener('beforeinstallprompt', (e) => {
    // 1. Prevenir que Chrome muestre el banner automático (opcional)
    e.preventDefault()
    // 2. Guardar el evento para dispararlo después
    deferredPrompt.value = e
    // 3. Mostrar nuestro botón
    showButton.value = true
  })
})

const installApp = async () => {
  if (!deferredPrompt.value) return

  // Disparar el prompt de instalación nativo
  deferredPrompt.value.prompt()

  // Esperar a ver qué decide el usuario
  const { outcome } = await deferredPrompt.value.userChoice
  
  if (outcome === 'accepted') {
    deferredPrompt.value = null
    showButton.value = false
  }
}
</script>

<template>
  <button 
    v-if="showButton"
    @click="installApp"
    class="fixed bottom-4 right-4 z-50 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 font-bold animate-bounce"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
    Instalar App
  </button>
</template>