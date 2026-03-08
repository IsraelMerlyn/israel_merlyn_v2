<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});

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
  <section id="contacto" class="py-24 bg-slate-50 dark:bg-navy-900 transition-colors duration-500 relative overflow-hidden">
    
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none"></div>

    <div class="max-w-4xl mx-auto px-6 relative z-10">
      
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-navy-900 dark:text-white mb-4">
          Trabajemos <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600">Juntos</span>
        </h2>
        <p class="text-slate-600 dark:text-slate-400 text-lg">¿Tienes un proyecto en mente o una propuesta? Escríbeme y lo hacemos realidad.</p>
      </div>

      <div class="bg-white dark:bg-navy-800 p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border border-slate-200/50 dark:border-navy-700/50 transition-all">
        
        <form @submit.prevent="submitForm" class="space-y-8">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-3">
              <label for="name" class="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Nombre</label>
              <input v-model="form.name" type="text" id="name" required
                class="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 text-navy-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-inner"
                placeholder="Ej. Juan Pérez" />
            </div>

            <div class="space-y-3">
              <label for="email" class="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Correo Electrónico</label>
              <input v-model="form.email" type="email" id="email" required
                class="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 text-navy-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-inner"
                placeholder="hola@tucorreo.com" />
            </div>
          </div>

          <div class="space-y-3">
            <label for="message" class="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Mensaje</label>
            <textarea v-model="form.message" id="message" rows="5" required
              class="w-full px-5 py-4 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 text-navy-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all custom-scrollbar resize-none shadow-inner"
              placeholder="Hola Israel, me interesa tu perfil para..."></textarea>
          </div>

          <Transition name="fade">
            <p v-if="errorMessage" class="text-red-500 text-sm font-bold flex items-center gap-2">
              <Icon name="lucide:alert-circle" size="18" /> {{ errorMessage }}
            </p>
          </Transition>

          <Transition name="fade">
            <div v-if="showSuccess" class="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 p-5 rounded-2xl font-bold border border-emerald-200 dark:border-emerald-500/20">
              <Icon name="lucide:check-circle-2" size="24" />
              ¡Mensaje enviado con éxito! Despegando hacia tu bandeja... 🚀
            </div>
          </Transition>

          <button type="submit" :disabled="isSubmitting || showSuccess"
            class="w-full py-5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white rounded-2xl font-bold text-lg transition-all shadow-lg shadow-blue-600/30 flex justify-center items-center gap-3 hover:-translate-y-1">
            
            <Icon v-if="isSubmitting" name="lucide:loader-2" size="24" class="animate-spin" />
            <Icon v-else-if="!showSuccess" name="lucide:send" size="24" />
            
            <span>{{ isSubmitting ? 'Enviando...' : (showSuccess ? 'Mensaje Enviado' : 'Enviar Mensaje') }}</span>
          </button>

        </form>

      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; transform: translateY(-10px); }
</style>