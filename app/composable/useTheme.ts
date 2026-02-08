// composables/useTheme.ts
export const useTheme = () => {
    const isDark = useState('theme', () => true) // Empezamos en true (Dark)

    // Función simple para cambiar el valor
    const toggleTheme = () => {
        isDark.value = !isDark.value
    }

    // Watcher: Cuando isDark cambie, ejecutamos esto automáticamente
    // Esto es más "Vue Style" y menos imperativo
    watch(isDark, (val) => {
        if (import.meta.client) {
            const html = document.documentElement
            const themeColor = val ? 'dark' : 'light'

            // Actualizamos clase en HTML
            val ? html.classList.add('dark') : html.classList.remove('dark')

            // Guardamos en local storage
            localStorage.setItem('theme', themeColor)
        }
    })

    // Inicialización (Client-side only)
    onMounted(() => {
        if (import.meta.client) {
            const savedTheme = localStorage.getItem('theme')
            if (savedTheme) {
                isDark.value = savedTheme === 'dark'
            }
            // Forzar la actualización inicial del DOM
            const html = document.documentElement
            isDark.value ? html.classList.add('dark') : html.classList.remove('dark')
        }
    })

    return { isDark, toggleTheme }
}