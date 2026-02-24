// composables/useResume.ts
import type { ExperienceItem, InstitutionItem, ProjectItem, SkillCategory } from '~/type/resume'

export const useResume = () => {

    const workExperience: ExperienceItem[] = [
        {
            id: 1,
            name: 'NARAES',
            roles: [
                {
                    id: 10,
                    title: 'Ssr. Frontend Developer (Vue.js)',
                    period: 'Noviembre 2025 - Actualidad',
                    description: '​Lideré​ ​la​ ​reestructuración​ ​arquitectónica​ ​del​ ​proyecto​ ​en​ ​Vue.js,​ ​asumiendo​ ​la​ ​responsabilidad​ ​end-to-end del desarrollo de módulos completos.Creación​​de​​catálogos​​dinámicos​​(CRUDs​​relacionales)​​integrando​​consumo​​avanzado​​de​​APIs​​REST,​​con validación estricta de respuestas y manejo de errores',

                    techStack: ['Vue.js', 'JavaScript', 'APIs REST', 'UI/UX']
                },
                {
                    id: 11,
                    title: 'Frontend Developer',
                    period: 'Diciembre 2024 - Octubre 2025',
                    description: 'Desarrollo de interfaces de usuario utilizando Vue.js, con integración de consumo de APIs en las vistas para datos dinámicos y mejora de la interacción del usuario.',
                    techStack: ['Vue.js', 'JavaScript', 'APIs REST', 'UI/UX']
                },
                {
                    id: 12,
                    title: 'Flutter Mobile Developer',
                    period: 'Abril - Agosto 2025',
                    description: 'Experiencia en navegación entre pantallas, consumo de APIs REST y gestión de estados. Enfoque en crear experiencias de usuario fluidas.',
                    techStack: ['Flutter', 'Dart', 'APIs REST', 'Provider']
                }
            ]
        },
        {
            id: 2,
            name: 'LA TLAXIAQUEÑA 91.5 FM',
            roles: [
                {
                    id: 21,
                    title: 'Desarrollador Móvil Android',
                    period: 'Septiembre - Diciembre 2024',
                    description: 'Desarrollo de fragmentos y animaciones en Kotlin, utilizando el patrón MVVM para asegurar una estructura escalable. Aplicación de SCRUM.',
                    techStack: ['Kotlin', 'MVVM', 'SCRUM', 'Animaciones']
                }
            ]
        },
        {
            id: 3,
            name: 'CITI VALUE IN REAL TIME',
            roles: [
                {
                    id: 31,
                    title: 'Desarrollador Backend',
                    period: 'Mayo - Agosto 2023',
                    description: 'Colaboré en la actualización de vistas con React. Realicé modificaciones en el backend utilizando Spring Boot, integrando APIs REST.',
                    techStack: ['React', 'Spring Boot', 'APIs REST', 'SonarQube', 'SOAPUI']
                }
            ]
        },
        {
            id: 4,
            name: 'INXENIUX',
            roles: [
                {
                    id: 41,
                    title: 'Becario Frontend',
                    period: 'Octubre - Noviembre 2022',
                    description: 'Desarrollé el rediseño del frontend utilizando PHP y bootstrap optimizando procesos internos y mejorando la experiencia del usuario.',
                    techStack: ['Bootstrap', 'PHP', 'CSS']
                }
            ]
        },
        {
            id: 5,
            name: 'BITFX (Residencia Profesional)',
            roles: [
                {
                    id: 51,
                    title: 'Fullstack Developer',
                    period: 'Enero - Junio 2022',
                    description: 'Colaboré en la actualización y mejora de vistas utilizando Vue y Laravel, integrando frontend y backend para asegurar la funcionalidad.',
                    techStack: ['Vue.js', 'Laravel', 'APIs REST', 'Postman']
                }
            ]
        }
    ];

    const teachingExperience: InstitutionItem[] = [
        {
            id: 1,
            name: 'INSTITUTO TECNOLOGICO DE TLAXIACO',
            roles: [
                {
                    id: 101,
                    title: 'Docente de Sistemas Computacionales',
                    period: 'Enero 2025 - Actualidad',
                    description: 'Desarrollo y planeación de materias: Programación web, IA y Metodología Ágil. Formación en tecnologías emergentes.',
                    techStack: ['React Native Expo', 'Spring Boot', 'Flask', 'SQL Server 2012', 'GitHub']
                },
                {
                    id: 102,
                    title: 'Asesor de Residentes Profesionales',
                    period: 'Octubre 2025 - Actualidad',
                    description: 'Actué como Tech Lead consultivo para proyectos en React Native,​definiendo la viabilidad tecnológica, implementando Clean Architecture, asegurando la integración de​ ​APIs con JWT / Postman y optimizando la experiencia de usuario (UI/UX).',
                    techStack: ['Mentoría', 'Gestión de Proyectos', 'Supervisión Técnica']
                },
                {
                    id: 103,
                    title: 'Instructor - Diplomado en Desarrollo Ágil',
                    period: '11 al 15 de Agosto 2025',
                    description: 'Impartí el Módulo I: Fundamentos de Desarrollo Ágil, enseñando principios SCRUM y prácticas modernas.',
                    techStack: ['SCRUM', 'Kanban', 'Lean Development', 'Coaching Ágil']
                }
            ]
        },
        {
            id: 2,
            name: 'CENTRO ESCOLAR DE CAPACITACIÓN Y CERTIFICACIÓN EDUCATIVA',
            roles: [
                {
                    id: 201,
                    title: 'Docente',
                    period: 'Mayo - Agosto 2025',
                    description: 'Desarrollé y planeé el contenido de la materia: Herramientas tecnológicas y educación.',
                    techStack: ['Copilot', 'ChatGPT', 'Classroom']
                }
            ]
        },
        {
            id: 3,
            name: 'INSTITUTO TECNOLOGICO SUPERIOR DE SAN MIGUEL EL GRANDE',
            roles: [
                {
                    id: 301,
                    title: 'Docente de TI',
                    period: 'Febrero - Junio 2024',
                    description: 'Impartí clases en las carreras de Ingeniería en TI e Ingeniería en Administración.',
                    techStack: ['Java', 'Fundamentos TI', 'Administración']
                }
            ]
        }
    ];


    const projects: ProjectItem[] = [
        {
            id: 1,
            title: 'Destino Fullstack ',
            category: 'fullstack',
            description: ' Frontend Nuxt comunicado con Supabase.',
            image: '~/projects/ruta.png', // Placeholder Tech
            techStack: ['Nuxt.js', 'Supabase', 'Nitro', 'SSR/CSR', 'Tailwind'],
            links: {
                demo: 'https://conocetudestino.netlify.app/',
                repo: 'https://github.com/tu-usuario/repo'
            }
        },
        {
            id: 2,
            title: 'Landing Pages',
            category: 'fullstack',
            description: 'Lading pages para encontrar empresa',
            image: '~/projects/landing.png', // Placeholder Cocina
            techStack: ['Nuxt.js', 'Tailwind', 'SSR/CSR', 'Tailwind'],
            links: {
                demo: 'https://consultoriaisraelmerlyn.netlify.app/', // Link a la PlayStore o APK
                repo: '#'
            }
        },
        {
            id: 3,
            title: 'Microservicio API Alumnos',
            category: 'backend',
            description: 'API RESTful pura diseñada bajo principios SOLID. Documentación viva con Swagger, pruebas de carga con Postman y endpoints optimizados para alto rendimiento.',
            image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop', // Placeholder Código
            techStack: ['Spring Boot', 'Swagger UI', 'JUnit', 'MySQL', 'Docker'],
            links: {
                demo: '#', // Link a la doc de Swagger
                repo: '#'
            }
        },
        {
            id: 4,
            title: 'Mentoring Digital: DevIsrael',
            category: 'content',
            description: 'Iniciativa educativa open-source. Serie de tutoriales técnicos donde desgloso arquitecturas complejas (Vue, Spring, Flutter) en guías paso a paso para la comunidad.',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop', // Placeholder YouTube
            techStack: ['YouTube', 'OBS', 'Edición', 'Pedagogía'],
            links: {
                video: 'https://youtube.com/c/tu-canal',
                demo: 'https://youtube.com/c/tu-canal'
            }
        }
    ];

    const skillCategories: SkillCategory[] = [
        {
            title: 'Core Stack (Dominio Alto)',
            icon: 'lucide:cpu',
            skills: [
                {
                    name: 'Vue.js',
                    icon: 'logos:vue',
                    class: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20'
                },
                {
                    name: 'Nuxt 3',
                    icon: 'logos:nuxt-icon',
                    class: 'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400 border-green-200 dark:border-green-500/20'
                },
                {
                    name: 'React Native',
                    icon: 'logos:react',
                    class: 'bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-400 border-sky-200 dark:border-sky-500/20'
                },
                {
                    name: 'Tailwind CSS',
                    icon: 'logos:tailwindcss-icon',
                    class: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20'
                },
                {
                    name: 'JavaScript (ES6+)',
                    icon: 'logos:javascript',
                    class: 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border-amber-200 dark:border-amber-500/20'
                },
                {
                    name: 'Spring Boot',
                    icon: 'logos:spring-icon',
                    class: 'bg-lime-100 text-lime-700 dark:bg-lime-500/10 dark:text-lime-400 border-lime-200 dark:border-lime-500/20'
                }
            ]
        },
        {
            title: 'Mobile & Frontend',
            icon: 'lucide:smartphone',
            skills: [
                {
                    name: 'Flutter',
                    icon: 'logos:flutter',
                    class: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border-blue-200 dark:border-blue-500/20'
                },
                {
                    name: 'Kotlin',
                    icon: 'logos:kotlin-icon',
                    class: 'bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-400 border-violet-200 dark:border-violet-500/20'
                },
                {
                    name: 'React.js',
                    icon: 'logos:react',
                    class: 'bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-400 border-sky-200 dark:border-sky-500/20'
                },
                {
                    name: 'Bootstrap',
                    icon: 'logos:bootstrap',
                    class: 'bg-purple-100 text-purple-700 dark:bg-purple-500/10 dark:text-purple-400 border-purple-200 dark:border-purple-500/20'
                },
                {
                    name: 'HTML5/CSS3',
                    icon: 'logos:html-5',
                    class: 'bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400 border-orange-200 dark:border-orange-500/20'
                }
            ]
        },
        {
            title: 'Backend & Bases de Datos',
            icon: 'lucide:database',
            skills: [
                {
                    name: 'SQL Server',
                    icon: 'devicon:microsoftsqlserver',
                    class: 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400 border-red-200 dark:border-red-500/20'
                },
                {
                    name: 'Laravel',
                    icon: 'logos:laravel',
                    class: 'bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400 border-rose-200 dark:border-rose-500/20'
                },
                {
                    name: 'Python / Flask',
                    icon: 'logos:python',
                    class: 'bg-slate-100 text-slate-700 dark:bg-slate-500/10 dark:text-slate-400 border-slate-200 dark:border-slate-500/20'
                },
                {
                    name: 'Java',
                    icon: 'logos:java',
                    class: 'bg-orange-100 text-orange-800 dark:bg-orange-500/10 dark:text-orange-400 border-orange-200 dark:border-orange-500/20'
                }
            ]
        },
        {
            title: 'Herramientas & Agilidad',
            icon: 'lucide:trello',
            skills: [
                {
                    name: 'Git / GitHub',
                    icon: 'logos:git-icon',
                    class: 'bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300 border-orange-100 dark:border-orange-500/20'
                },
                {
                    name: 'Scrum / Agile',
                    icon: 'logos:jira',
                    class: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300 border-blue-100 dark:border-blue-500/20'
                },
                {
                    name: 'Postman',
                    icon: 'logos:postman-icon',
                    class: 'bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300 border-orange-100 dark:border-orange-500/20'
                },
                {
                    name: 'Figma (UI/UX)',
                    icon: 'logos:figma',
                    class: 'bg-pink-100 text-pink-700 dark:bg-pink-500/10 dark:text-pink-400 border-pink-200 dark:border-pink-500/20'
                }
            ]
        }
    ];
    return {
        workExperience,
        teachingExperience,
        projects,
        skillCategories
    };
};