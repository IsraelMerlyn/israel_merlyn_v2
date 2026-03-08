// composables/useTechColors.ts
export const useTechColors = () => {
    const techColorMap: Record<string, string> = {
        // Verdes
        'Vue.js': 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/40',
        'Nuxt 3': 'bg-green-100 text-green-700 border-green-200 dark:bg-green-500/20 dark:text-green-300 dark:border-green-500/40',

        // Azules
        'React': 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/40',
        'React Native': 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-500/20 dark:text-sky-300 dark:border-sky-500/40',
        'TypeScript': 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-400/20 dark:text-blue-300 dark:border-blue-400/40',

        // Mobile
        'Flutter': 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-500/20 dark:text-cyan-300 dark:border-cyan-500/40',
        'Kotlin': 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-500/20 dark:text-violet-300 dark:border-violet-500/40',

        // Backend & BD
        'Java': 'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-500/20 dark:text-orange-300 dark:border-orange-500/40',
        'Spring Boot': 'bg-lime-100 text-lime-700 border-lime-200 dark:bg-lime-500/20 dark:text-lime-300 dark:border-lime-500/40',
        'MySQL': 'bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-500/40',

        // Otros
        'JavaScript': 'bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-500/20 dark:text-amber-300 dark:border-amber-500/40',
    };

    const getColor = (techName: string): string => {
        return techColorMap[techName] || 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-700/50 dark:text-slate-200 dark:border-slate-600';
    };

    return { getColor };
};