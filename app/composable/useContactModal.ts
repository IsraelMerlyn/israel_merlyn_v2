// composables/useContactModal.ts
export const useContactModal = () => {
    // Estado global: ¿El modal está abierto o cerrado?
    const isOpen = useState('contactModalOpen', () => false)

    const openContact = () => isOpen.value = true
    const closeContact = () => isOpen.value = false

    return { isOpen, openContact, closeContact }
}