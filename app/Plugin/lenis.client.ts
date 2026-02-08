// plugins/lenis.client.ts
import Lenis from 'lenis'

export default defineNuxtPlugin((nuxtApp) => {
    // 1. Configuración "Brutal" (más lento y suave)
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
    })

    // 2. Loop de animación
    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // 3. Inyectar para usarlo en componentes (ej. para el botón de scroll al inicio)
    nuxtApp.provide('lenis', lenis)

    // 4. ARREGLO DE LA NAVEGACIÓN: Interceptar clics en anclas
    if (import.meta.client) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                if (href && href !== '#') {
                    const target = document.querySelector(href);
                    if (target) {
                        lenis.scrollTo(target, { offset: -100 }) // -100px para que el header no tape el título
                    }
                }
            });
        });
    }
})