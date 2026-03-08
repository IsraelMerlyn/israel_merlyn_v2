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
    // 1. Apuntamos directo a la API pública de Web3Forms
    const response = await $fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: {
        // 👇 PEGA TU LLAVE AQUÍ
        access_key: '60bedcba-914a-43c9-a24e-2047448edefc', 
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        subject: `Nuevo mensaje de Portafolio: ${form.value.name}`, // Asunto del correo
        from_name: 'Portafolio Notificaciones' // Quién lo envía
      }
    });

    // 2. Si Web3Forms responde que todo salió bien
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
        
        <div class="absolute inset-0 bg-slate-900/60 dark:bg-[#0B1120]/80 backdrop-blur-md" @click="closeContact"></div>
        
        <div class="relative w-full max-w-2xl bg-white dark:bg-navy-800 rounded-[2rem] shadow-2xl p-8 md:p-12 border border-slate-200/50 dark:border-navy-700/50 transform transition-all">
          
          <button @click="closeContact" class="absolute top-6 right-6 p-2 bg-slate-100 hover:bg-slate-200 dark:bg-navy-900 dark:hover:bg-black rounded-full text-slate-500 dark:text-slate-400 transition-colors">
            <Icon name="lucide:x" size="24" />
          </button>

          <div class="text-center mb-8 mt-2">
            <h2 class="text-3xl font-black text-navy-900 dark:text-white mb-2">
              Trabajemos <span class="text-blue-600 dark:text-blue-500">Juntos</span>
            </h2>
            <p class="text-slate-600 dark:text-slate-400">Cuéntame sobre tu proyecto o propuesta.</p>
          </div>

          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-sm font-bold text-slate-700 dark:text-slate-300">Nombre</label>
                <input v-model="form.name" type="text" required
                  class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 text-navy-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="Juan Pérez" />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-bold text-slate-700 dark:text-slate-300">Correo</label>
                <input v-model="form.email" type="email" required
                  class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 text-navy-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="hola@tucorreo.com" />
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-bold text-slate-700 dark:text-slate-300">Mensaje</label>
              <textarea v-model="form.message" rows="4" required
                class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 text-navy-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                placeholder="Hola Israel, me interesa tu perfil..."></textarea>
            </div>

            <p v-if="errorMessage" class="text-red-500 text-sm font-bold">{{ errorMessage }}</p>
            
            <div v-if="showSuccess" class="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 p-4 rounded-xl font-bold">
              <Icon name="lucide:check-circle-2" size="24" />
              ¡Mensaje enviado! Despegando hacia tu bandeja... 🚀
            </div>

            <button type="submit" :disabled="isSubmitting || showSuccess"
              class="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/30 flex justify-center items-center gap-2">
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