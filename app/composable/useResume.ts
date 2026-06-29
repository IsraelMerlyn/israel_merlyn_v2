// composables/useResume.ts
import type { ExperienceItem, InstitutionItem, ProjectItem, SkillCategory } from '~/type/resume'

export const useResume = () => {

    const workExperience: ExperienceItem[] = [
        {
            id: 1,
            name: 'MUNICIPIO DE TLAXIACO',
            roles: [
                {
                    id: 10,
                    title: 'SSr Software Engineer | Technical Lead',
                    period: 'Mayo 2026 - Actualidad',
                    description: 'Lideró el diseño y desarrollo desde cero de un sistema ERP municipal enfocado en la planeación, ruteo, presupuesto y bitácora histórica de aproximadamente 50 proyectos de infraestructura pública. Dirijo técnicamente a 4 ingenieros en su etapa de residencia profesional, traduciendo requerimientos administrativos en historias de usuario, gestionando sprints ágiles y mitigando riesgos técnicos. Definí y estructuré el stack tecnológico basado en un monolito modular con Spring Boot (Java) y Angular 19.',
                    techStack: ['Spring Boot', 'Java', 'Angular 19', 'ERP', 'Agile', 'Scrum']
                }
            ]
        },
        {
            id: 2,
            name: 'NARAES ID S. de R.L. de C.V.',
            roles: [
                {
                    id: 20,
                    title: 'Mobile Developer (Flutter) | Remoto',
                    period: 'Febrero 2026 - Actualidad',
                    description: 'Lideré la viabilidad técnica y el desarrollo inicial de dos aplicaciones móviles de misión crítica para el sector financiero y de boletaje (Ticket) utilizando Flutter. Diseñé e implementé la arquitectura modular bajo el patrón Feature-Sliced Design (FSD) y la capa de Clean Architecture (Domain, Data, Presentation), gestionando estados reactivos con BLoC y Cubit. Coordiné la reestructuración visual y la mejora de interfaces dinámicas utilizando Expo y EAS en etapas de análisis y factibilidad previas.',
                    techStack: ['Flutter', 'Dart', 'BLoC', 'Cubit', 'FSD', 'Clean Architecture', 'Expo', 'EAS']
                },
                {
                    id: 21,
                    title: 'Ssr. Frontend Developer (Vue/Nuxt)',
                    period: 'Octubre 2025 - Actualidad',
                    description: 'Dirigí la reingeniería y migración de una plataforma web con alta deuda técnica. Modularicé el sistema mediante componentes reutilizables, optimizando el rendimiento, SEO, accesibilidad y velocidad de carga global. Diseñé e implementé un sistema robusto de permisos globales para gestionar la autorización de usuarios sobre vistas y componentes críticos. Construí catálogos dinámicos complejos (CRUDs relacionales) consumiendo APIs REST, implementando validación estricta de payloads y un manejo de errores resiliente para mejorar la experiencia del usuario.',
                    techStack: ['Vue.js', 'Nuxt 3', 'TypeScript', 'APIs REST', 'FSD', 'SEO']
                },
                {
                    id: 22,
                    title: 'Frontend Developer',
                    period: 'Diciembre 2024 - Septiembre 2025',
                    description: 'Responsable del diseño y desarrollo de interfaces dinámicas consumiendo APIs REST para la implementación de módulos funcionales completos de la plataforma web. Logré una cobertura sólida de pruebas unitarias y de rendimiento utilizando Vitest para asegurar entregas continuas libres de regresiones.',
                    techStack: ['Vue.js', 'Nuxt 3', 'TypeScript', 'APIs REST', 'Vitest']
                }
            ]
        },
        {
            id: 3,
            name: 'LA TLAXIAQUEÑA 91.5 FM',
            roles: [
                {
                    id: 30,
                    title: 'Desarrollador Móvil Android | Híbrida',
                    period: 'Septiembre - Diciembre 2024',
                    description: 'Desarrollé fragmentos (Fragments) y animaciones fluidas para la aplicación nativa utilizando Kotlin, aplicando patrones arquitectónicos MVVM para asegurar un código mantenible y desacoplado.',
                    techStack: ['Kotlin', 'MVVM', 'Android SDK', 'Material Design']
                }
            ]
        },
        {
            id: 4,
            name: 'CITI VALUE IN REAL TIME',
            roles: [
                {
                    id: 40,
                    title: 'Desarrollador Backend | Remoto',
                    period: 'Marzo - Agosto 2023',
                    description: 'Realicé modificaciones y mejoras arquitectónicas en el backend utilizando Spring Boot (Java), integrando y ajustando APIs REST para el consumo del cliente. Ejecuté pruebas de integración de servicios web con SOAP UI, gestionando entregas a través de Azure DevOps.',
                    techStack: ['Spring Boot', 'Java', 'APIs REST', 'SOAP UI', 'Azure DevOps']
                }
            ]
        },
        {
            id: 5,
            name: 'INXENIUX',
            roles: [
                {
                    id: 50,
                    title: 'Frontend Web Developer | Remoto',
                    period: 'Octubre - Noviembre 2022',
                    description: 'Ejecuté la reestructuración y rediseño de aplicaciones web internas utilizando PHP y Bootstrap, optimizando los procesos operativos y la experiencia del usuario. Brindé soporte técnico para el mantenimiento de las plataformas web.',
                    techStack: ['PHP', 'Bootstrap', 'Soporte Técnico']
                }
            ]
        },
        {
            id: 6,
            name: 'BITFX',
            roles: [
                {
                    id: 60,
                    title: 'Frontend Web Developer | Remoto',
                    period: 'Enero - Junio 2022',
                    description: 'Colaboré en la actualización y mejora de vistas utilizando Vue y Laravel, integrando frontend y backend para asegurar la correcta funcionalidad de las aplicaciones, optimizando la experiencia de usuario. Realicé modificaciones en el backend utilizando Laravel, integrando y ajustando APIs REST.',
                    techStack: ['Vue.js', 'Laravel', 'APIs REST', 'MySQL', 'Git']
                }
            ]
        }
    ];

    const teachingExperience: InstitutionItem[] = [
        {
            id: 1,
            name: 'INSTITUTO TECNOLÓGICO DE TLAXIACO | Presencial',
            roles: [
                {
                    id: 101,
                    title: 'Docente de Especialidad TI, Instructor Ágil & Tech Lead',
                    period: 'Enero 2025 - Actualidad',
                    description: 'Cátedra Tecnológica: Imparto y diseño la planeación técnica de materias de especialidad como: Desarrollo Web, Desarrollo Móvil (React Native/Flutter), Inteligencia Artificial, Ciberseguridad y Cómputo en la Nube.\nInstructor de Diplomado - Desarrollo Ágil: Diseñé y dicté un diplomado de actualización metodológica para docentes del TecNM. El programa capacitó a profesores en la gestión de backlogs, criterios de aceptación (DoD), estimación ágil y la integración ética de herramientas de Inteligencia Artificial (Agentes) como soporte en el ciclo de vida del software.',
                    techStack: ['Scrum', 'Kanban', 'Flutter', 'React Native', 'IA', 'Docencia']
                }
            ]
        },
        {
            id: 2,
            name: 'CENTRO ESCOLAR DE CAPACITACIÓN Y CERTIFICACIÓN EDUCATIVA | Remoto',
            roles: [
                {
                    id: 102,
                    title: 'Docente de Herramientas Tecnológicas',
                    period: 'Mayo - Agosto 2025',
                    description: 'Diseño Instruccional: Desarrollé e impartí el programa de "Herramientas Tecnológicas y Educación", enfocándose en la adopción de soluciones digitales para la optimización de procesos de aprendizaje.',
                    techStack: ['Diseño Instruccional', 'E-learning', 'Herramientas Digitales']
                }
            ]
        },
        {
            id: 3,
            name: 'INSTITUTO TECNOLÓGICO SUPERIOR DE SAN MIGUEL EL GRANDE | Presencial',
            roles: [
                {
                    id: 103,
                    title: 'Docente de TI',
                    period: 'Enero - Junio 2024',
                    description: 'Impartí materias clave (Fundamentos de Programación, Matemáticas Discretas) para las carreras de TI y Administración.',
                    techStack: ['Programación', 'Matemáticas Discretas', 'Docencia']
                }
            ]
        }
    ];

    const educationHistory: InstitutionItem[] = [
        {
            id: 1,
            name: 'AXITY',
            roles: [
                {
                    id: 201,
                    title: 'Programa de Formación Java Full Stack (136 horas)',
                    period: 'Febrero - Mayo 2026',
                    description: 'Capacitación intensiva y certificación práctica en desarrollo Java empresarial, cubriendo bases de datos relacionales, Spring Framework, Spring Boot y microservicios.',
                    techStack: ['Java', 'Spring Boot', 'SQL', 'Git']
                }
            ]
        },
        {
            id: 2,
            name: 'TECNOLÓGICO NACIONAL DE MÉXICO',
            roles: [
                {
                    id: 202,
                    title: 'Diplomado en Pensamiento Crítico para la Educación Tecnológica',
                    period: 'Mayo 2026 - Actualidad',
                    description: 'Capacitación y diseño pedagógico orientado a incentivar metodologías de resolución de problemas e innovación técnica en estudiantes de ingeniería.',
                    techStack: ['Educación', 'Pensamiento Crítico']
                },
                {
                    id: 203,
                    title: 'Diplomado en Integración de Inteligencia Artificial en Escenarios de Aprendizaje',
                    period: '2025',
                    description: 'Estudio de modelos LLM y agentes de IA aplicados a la educación tecnológica y automatización en el flujo de desarrollo de software.',
                    techStack: ['Inteligencia Artificial', 'Prompt Engineering']
                },
                {
                    id: 204,
                    title: 'Diplomado en Ciencias de Datos',
                    period: '2024',
                    description: 'Capacitación teórico-práctica en procesamiento de datos, visualización y análisis predictivo.',
                    techStack: ['Data Science', 'Python']
                }
            ]
        },
        {
            id: 3,
            name: 'INSTITUTO TECNOLÓGICO DE TLAXIACO',
            roles: [
                {
                    id: 205,
                    title: 'Ingeniería en Sistemas Computacionales',
                    period: '2019 - 2023',
                    description: 'Formación universitaria en diseño de software, bases de datos relacionales y no relacionales, redes, algoritmos y metodologías de ingeniería.',
                    techStack: ['Algoritmos', 'Ingeniería de Software', 'Bases de Datos']
                }
            ]
        }
    ];


    const projects: ProjectItem[] = [
        {
            id: 1,
            title: 'Scaneame',
            category: 'mobile',
            status: 'Play Store',
            description: 'Aplicación móvil offline-first para el escaneo inteligente de documentos físicos y procesamiento local de imágenes. Desarrollada bajo arquitectura limpia combinada con FSD en Flutter para garantizar escalabilidad, seguridad e interoperabilidad de librerías nativas.',
            technicalDetail: 'Implementa isolates (Isolate.run) para procesamiento pesado y compresión en segundo plano, evitando jank en el hilo principal.',
            image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
            techStack: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'FSD', 'Dio', 'sqflite', 'Isolates'],
            links: {
                demo: '#',
                repo: '#'
            }
        },
        {
            id: 2,
            title: 'LuxReport',
            category: 'fullstack',
            status: 'En producción',
            description: 'Sistema offline-first de reporte geolocalizado para fallas de alumbrado público. Cuenta con aplicación móvil híbrida (Flutter) con sincronización inteligente en segundo plano, backend en Spring Boot, base de datos espacial PostgreSQL y panel administrativo en Nuxt 3 con mapas interactivos de Leaflet.js y algoritmo Haversine para la prevención automática de duplicados.',
            technicalDetail: 'Usa WorkManager para sincronización diferida en segundo plano y cálculos geográficos optimizados con índices espaciales.',
            image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1000&auto=format&fit=crop',
            techStack: ['Flutter', 'Spring Boot', 'PostgreSQL', 'Nuxt 3', 'Leaflet.js', 'Haversine', 'Background Sync'],
            links: {
                demo: '#',
                repo: '#'
            }
        },
        {
            id: 3,
            title: 'Hub Municipal',
            category: 'fullstack',
            status: 'En producción',
            description: 'Plataforma unificada de acceso gubernamental que opera como una Shell App. Centraliza la navegación y las credenciales de usuario mediante sesiones unificadas (Single Sign-On) hacia sistemas satélite desarrollados de manera independiente en Angular y Nuxt 3.',
            technicalDetail: 'Configuración segura de cookies HTTP-Only y token exchange para mantener sesiones unificadas entre múltiples dominios.',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
            techStack: ['Nuxt 3', 'Angular', 'Spring Boot', 'Spring Security', 'JWT', 'Shell Architecture'],
            links: {
                demo: '#',
                repo: '#'
            }
        },
        {
            id: 4,
            title: 'ERP Obras Públicas',
            category: 'fullstack',
            status: 'En producción',
            description: 'Sistema empresarial (ERP) municipal enfocado en la planeación presupuestal, auditoría y bitácora de proyectos de infraestructura pública. Gestiona asignaciones de recursos, avance de obra físico-financiero y generación de documentación oficial requerida por ley.',
            technicalDetail: 'Usa control transaccional estricto con Liquibase en el backend y validaciones reactivas en Nuxt 3 para auditoría de obra.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
            techStack: ['Nuxt 3', 'Spring Boot', 'PostgreSQL', 'Liquibase', 'Spring Security', 'Tailwind CSS'],
            links: {
                demo: '#',
                repo: '#'
            }
        },
        {
            id: 5,
            title: 'Destino Fullstack',
            category: 'fullstack',
            status: 'En producción',
            description: 'Aplicación web interactiva para la exploración y recomendación de destinos turísticos. Utiliza renderizado híbrido en Nuxt (SSR/CSR) comunicado con Supabase como backend-as-a-service, desplegando datos dinámicos en mapas e interfaces responsivas.',
            technicalDetail: 'Optimizado mediante caching y revalidación de datos asíncronos con middlewares y supabase-js.',
            image: '/projects/rutas.png',
            techStack: ['Nuxt.js', 'Supabase', 'Nitro', 'SSR/CSR', 'Tailwind CSS'],
            links: {
                demo: 'https://conocetudestino.netlify.app/',
                repo: '#'
            }
        },
        {
            id: 6,
            title: 'Aniversario Tecnológico Tlaxiaco',
            category: 'fullstack',
            status: 'En producción',
            description: 'Plataforma web de registro y acreditación automática mediante códigos QR para eventos conmemorativos de la institución. Diseñado con React y conectado a base de datos en la nube para sincronización en tiempo real.',
            technicalDetail: 'Validación instantánea de QR en puerta con lecturas menores a 200ms comunicadas con API REST y Supabase.',
            image: '/projects/tec.png',
            techStack: ['React', 'Supabase', 'Redux', 'Bootstrap 5', 'QR Generation'],
            links: {
                demo: 'https://tlaxiacoaniversario.vercel.app/',
                repo: '#'
            }
        },
        {
            id: 7,
            title: 'Aplicación de NASA + PWA',
            category: 'mobile',
            status: 'En producción',
            description: 'Aplicación progresiva (PWA) de exploración espacial utilizando las APIs abiertas de la NASA. Desarrollada bajo principios de arquitectura limpia con persistencia reactiva en Pinia.',
            technicalDetail: 'Configurado con precaching completo de imágenes satelitales y comportamiento offline mediante service worker.',
            image: '/projects/Panel.png',
            techStack: ['Vue 3', 'PWA', 'Clean Architecture', 'NASA API', 'Pinia', 'Tailwind CSS'],
            links: {
                demo: 'https://webapp-nasa-ten.vercel.app/',
                repo: 'https://github.com/IsraelMerlyn/webapp-nasa.git'
            }
        },
        {
            id: 8,
            title: 'Aplicación de Gastos',
            category: 'mobile',
            status: 'En desarrollo',
            description: 'Herramienta móvil para el control financiero personal que permite registrar transacciones y categorizar egresos/ingresos localmente de forma offline.',
            technicalDetail: 'Utiliza sqflite con base de datos encriptada y reactividad pura con cubits/bloc para sincronización reactiva.',
            image: '/projects/home.png',
            techStack: ['Flutter', 'Dart', 'sqflite', 'BLoC', 'FSD', 'Material UI'],
            links: {
                demo: 'https://github.com/IsraelMerlyn/gastos_app.git',
                repo: 'https://github.com/IsraelMerlyn/gastos_app.git'
            }
        }
    ];

    const skillCategories: SkillCategory[] = [
        {
            title: 'Dominio Alto (Core Stack)',
            icon: 'lucide:cpu',
            skills: [
                {
                    name: 'Flutter',
                    icon: 'logos:flutter',
                    class: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20'
                },
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
                    name: 'JavaScript / TypeScript',
                    icon: 'logos:typescript-icon',
                    class: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border-blue-200 dark:border-blue-500/20'
                },
                {
                    name: 'Tailwind CSS',
                    icon: 'logos:tailwindcss-icon',
                    class: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20'
                }
            ]
        },
        {
            title: 'Dominio Medio (Backend & Database)',
            icon: 'lucide:database',
            skills: [
                {
                    name: 'Spring Boot',
                    icon: 'logos:spring-icon',
                    class: 'bg-lime-100 text-lime-700 dark:bg-lime-500/10 dark:text-lime-400 border-lime-200 dark:border-lime-500/20'
                },
                {
                    name: 'Java',
                    icon: 'logos:java',
                    class: 'bg-orange-100 text-orange-800 dark:bg-orange-500/10 dark:text-orange-400 border-orange-200 dark:border-orange-500/20'
                },
                {
                    name: 'PostgreSQL / MySQL',
                    icon: 'logos:postgresql',
                    class: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/20'
                },
                {
                    name: 'Git / GitHub',
                    icon: 'logos:git-icon',
                    class: 'bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-300 border-orange-100 dark:border-orange-500/20'
                }
            ]
        },
        {
            title: 'Conocimiento & Colaboración',
            icon: 'lucide:users-2',
            skills: [
                {
                    name: 'Inteligencia Artificial (Prompting & APIs)',
                    icon: 'logos:google-gemini',
                    class: 'bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-400 border-violet-200 dark:border-violet-500/20'
                },
                {
                    name: 'Angular',
                    icon: 'logos:angular-icon',
                    class: 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400 border-red-200 dark:border-red-500/20'
                },
                {
                    name: 'React / React Native',
                    icon: 'logos:react',
                    class: 'bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-400 border-sky-200 dark:border-sky-500/20'
                },
                {
                    name: 'SonarQube',
                    icon: 'logos:sonarqube',
                    class: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border-blue-200 dark:border-blue-500/20'
                },
                {
                    name: 'Agile / SCRUM (Code Reviews)',
                    icon: 'logos:jira',
                    class: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300 border-blue-100 dark:border-blue-500/20'
                }
            ]
        }
    ];
    return {
        workExperience,
        teachingExperience,
        educationHistory,
        projects,
        skillCategories
    };
};