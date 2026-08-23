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
  <section id="contacto" class="py-24 bg-zinc-950 transition-colors duration-500 relative overflow-hidden">
    
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none"></div>

    <div class="max-w-4xl mx-auto px-6 relative z-10 space-y-12">
      
      <div class="text-center space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-950/40 text-blue-300 border border-blue-800/60">
          <Icon name="lucide:mail" size="14" /> Contacto Directo
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-100 tracking-tight">
          Trabajemos <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Juntos</span>
        </h2>
        <p class="text-zinc-400 text-base sm:text-lg">¿Tienes una propuesta o un proyecto en mente? Escríbeme y agendemos una llamada.</p>
      </div>

      <div class="bg-zinc-900/70 p-8 md:p-12 rounded-3xl shadow-xl border border-zinc-800 transition-all backdrop-blur-md">
        
        <form @submit.prevent="submitForm" class="space-y-8">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-3">
              <label for="name" class="text-xs font-bold text-zinc-300 uppercase tracking-wider">Nombre</label>
              <input v-model="form.name" type="text" id="name" required
                class="w-full px-5 py-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-zinc-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-inner text-sm"
                placeholder="Ej. Juan Pérez" />
            </div>

            <div class="space-y-3">
              <label for="email" class="text-xs font-bold text-zinc-300 uppercase tracking-wider">Correo Electrónico</label>
              <input v-model="form.email" type="email" id="email" required
                class="w-full px-5 py-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-zinc-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-inner text-sm"
                placeholder="hola@tucorreo.com" />
            </div>
          </div>

          <div class="space-y-3">
            <label for="message" class="text-xs font-bold text-zinc-300 uppercase tracking-wider">Mensaje</label>
            <textarea v-model="form.message" id="message" rows="5" required
              class="w-full px-5 py-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-zinc-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all custom-scrollbar resize-none shadow-inner text-sm"
              placeholder="Hola Israel, me interesa tu perfil para..."></textarea>
          </div>

          <Transition name="fade">
            <p v-if="errorMessage" class="text-red-500 text-sm font-bold flex items-center gap-2">
              <Icon name="lucide:alert-circle" size="18" /> {{ errorMessage }}
            </p>
          </Transition>

          <Transition name="fade">
            <div v-if="showSuccess" class="flex items-center gap-3 text-emerald-400 bg-emerald-500/10 p-5 rounded-2xl font-bold border border-emerald-500/20">
              <Icon name="lucide:check-circle-2" size="24" />
              ¡Mensaje enviado con éxito! Te responderé a la brevedad. 🚀
            </div>
          </Transition>

          <button type="submit" :disabled="isSubmitting || showSuccess"
            class="w-full py-5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white rounded-2xl font-bold text-base transition-all shadow-lg shadow-blue-600/20 flex justify-center items-center gap-3 hover:-translate-y-1">
            
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