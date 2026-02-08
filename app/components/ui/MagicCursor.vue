<script setup>
// Estado reactivo inicializado fuera de pantalla para que no parpadee al cargar
const cursorX = ref(-100)
const cursorY = ref(-100)
const isHovering = ref(false)
const isClicking = ref(false)

// Lógica 100% Nativa (Sin librerías pesadas)
const updateCursor = (e) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
  
  // Detectar si estamos sobre un enlace, botón o elemento interactivo
  const target = e.target
  // Verificamos si el elemento o alguno de sus padres es interactivo
  isHovering.value = 
    target.tagName === 'A' || 
    target.tagName === 'BUTTON' ||
    target.closest('a') || 
    target.closest('button') ||
    target.closest('.interactive')
}

const onMouseDown = () => { isClicking.value = true }
const onMouseUp = () => { isClicking.value = false }

onMounted(() => {
  // Solo activar en cliente (navegador)
  if (import.meta.client) {
    window.addEventListener('mousemove', updateCursor)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('mousemove', updateCursor)
    window.removeEventListener('mousedown', onMouseDown)
    window.removeEventListener('mouseup', onMouseUp)
  }
})
</script>

<template>
  <div 
    class="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference hidden md:block transition-transform duration-75 ease-out rounded-full bg-white flex items-center justify-center"
    :style="{ 
      transform: `translate(${cursorX - 16}px, ${cursorY - 16}px) scale(${isHovering ? 1.5 : 0.5})`,
      opacity: isClicking ? 0.8 : 1
    }"
  >
  </div>
</template>