<script setup>
const error = useError()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-navy-900 text-white text-center px-6 relative overflow-hidden">
    
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
    
    <h1 class="text-9xl font-bold text-blue-600 mb-4 opacity-80">404</h1>
    <h2 class="text-3xl font-bold mb-6">¡Ups! Te saliste del mapa.</h2>
    <p class="text-slate-400 mb-8 max-w-md">
      Parece que esta página no existe o fue movida a otra dimensión.
    </p>
    
    <button @click="handleError" class="px-8 py-3 bg-white text-navy-900 font-bold rounded-xl hover:scale-105 transition-transform">
      Regresar al Inicio
    </button>
  </div>
</template>