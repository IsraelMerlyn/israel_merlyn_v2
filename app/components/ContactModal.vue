<script setup lang="ts">
import { ref } from 'vue';
import { useContactModal } from '~/composable/useContactModal';

const { isOpen, closeContact } = useContactModal();

const form = ref({ name: '', email: '', message: '' });
const isSubmitting = ref(false);
const showSuccess = ref(false);
const errorMessage = ref('');

const submitForm = async () => {
  isSubmitting.value = true;
  errorMessage.value = '';
  
  try {
    const response = await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: {
        access_key: '60bedcba-914a-43c9-a24e-2047448edefc', 
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        subject: `Nuevo mensaje de Portafolio: ${form.value.name}`,
        from_name: 'Portafolio Notificaciones'
      }
    });

    if (response.success) {
      showSuccess.value = true;
      form.value = { name: '', email: '', message: '' };
      setTimeout(() => showSuccess.value = false, 5000);
    } else {
      throw new Error('La API rechazó el envío');
    }

  } catch (error: any) {
    errorMessage.value = 'Hubo un problema al enviar el mensaje. Inténtalo de nuevo.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6">
        
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" @click="closeContact"></div>
        
        <div class="relative w-full max-w-2xl bg-zinc-900 rounded-3xl shadow-2xl p-8 md:p-12 border border-zinc-800 transform transition-all">
          
          <button @click="closeContact" class="absolute top-6 right-6 p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-zinc-400 transition-colors">
            <Icon name="lucide:x" size="20" />
          </button>

          <div class="text-center mb-8 mt-2 space-y-1">
            <h2 class="text-3xl font-black text-zinc-100">
              Trabajemos <span class="text-blue-500">Juntos</span>
            </h2>
            <p class="text-zinc-400 text-sm font-normal">Cuéntame sobre tu proyecto o propuesta.</p>
          </div>

          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-xs font-bold uppercase tracking-wider text-zinc-300">Nombre</label>
                <input v-model="form.name" type="text" required
                  class="w-full px-4 py-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-zinc-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                  placeholder="Juan Pérez" />
              </div>
              <div class="space-y-2">
                <label class="text-xs font-bold uppercase tracking-wider text-zinc-300">Correo</label>
                <input v-model="form.email" type="email" required
                  class="w-full px-4 py-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-zinc-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm"
                  placeholder="hola@tucorreo.com" />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-xs font-bold uppercase tracking-wider text-zinc-300">Mensaje</label>
              <textarea v-model="form.message" rows="4" required
                class="w-full px-4 py-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-zinc-100 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none text-sm"
                placeholder="Hola Israel, me interesa tu perfil..."></textarea>
            </div>

            <p v-if="errorMessage" class="text-red-500 text-sm font-bold">{{ errorMessage }}</p>
            
            <div v-if="showSuccess" class="flex items-center gap-3 text-emerald-400 bg-emerald-500/10 p-4 rounded-2xl font-bold border border-emerald-500/20 text-xs">
              <Icon name="lucide:check-circle-2" size="20" />
              ¡Mensaje enviado con éxito! 🚀
            </div>

            <button type="submit" :disabled="isSubmitting || showSuccess"
              class="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 flex justify-center items-center gap-2 text-sm">
              <Icon v-if="isSubmitting" name="lucide:loader-2" size="20" class="animate-spin" />
              <Icon v-else-if="!showSuccess" name="lucide:send" size="20" />
              <span>{{ isSubmitting ? 'Enviando...' : (showSuccess ? 'Enviado' : 'Enviar Mensaje') }}</span>
            </button>
          </form>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.modal-enter-from,
.modal-leave-to { opacity: 0; transform: scale(0.95) translateY(20px); }
</style>