// composables/useScrollReveal.ts
export const useScrollReveal = () => {
    onMounted(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                    observer.unobserve(entry.target) // Solo animar una vez
                }
            })
        }, {
            threshold: 0.1, // Disparar cuando se vea el 10% del elemento
            rootMargin: "0px 0px -50px 0px"
        })

        // Buscar elementos con la clase .reveal
        document.querySelectorAll('.reveal').forEach((el) => {
            observer.observe(el)
        })
    })
}