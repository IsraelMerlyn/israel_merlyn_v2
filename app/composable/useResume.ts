// composables/useResume.ts
import type { ExperienceItem, InstitutionItem, ProjectItem, SkillCategory } from '~/type/resume'

export const useResume = () => {

    const workExperience: ExperienceItem[] = [
        {
            id: 1,
            name: 'NARAES',
            roles: [
                {
                    id: 11,
                    title: 'Frontend Developer',
                    period: 'Diciembre 2024 - Actualidad',
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
                    description: 'Mentoría y guía en el desarrollo de soluciones tecnológicas reales para empresas e instituciones.',
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
            title: 'Ecosistema Fullstack Gestión',
            category: 'fullstack',
            description: 'Arquitectura escalable que orquesta operaciones CRUD complejas. Frontend reactivo en Vue.js comunicado con un Backend robusto en Spring Boot bajo seguridad JWT.',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop', // Placeholder Tech
            techStack: ['Vue.js', 'Spring Boot 3', 'MySQL', 'JWT', 'Bootstrap'],
            links: {
                demo: 'https://tu-demo.com',
                repo: 'https://github.com/tu-usuario/repo'
            }
        },
        {
            id: 2,
            title: 'Chef Pocket: App de Recetas',
            category: 'mobile',
            description: 'Experiencia móvil nativa en Flutter. Implementa patrón Provider para gestión de estado, persistencia local con SQLite y modo Offline-First para cocinas sin conexión.',
            image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000&auto=format&fit=crop', // Placeholder Cocina
            techStack: ['Flutter', 'Dart', 'Provider', 'SQLite', 'Mockoon'],
            links: {
                demo: '#', // Link a la PlayStore o APK
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
                { name: 'Vue.js', icon: 'logos:vue' },
                { name: 'Nuxt 3', icon: 'logos:nuxt-icon' },
                { name: 'React Native', icon: 'logos:react' },
                { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
                { name: 'JavaScript (ES6+)', icon: 'logos:javascript' },
                { name: 'Spring Boot', icon: 'logos:spring-icon' }
            ]
        },
        {
            title: 'Mobile & Frontend',
            icon: 'lucide:smartphone',
            skills: [
                { name: 'Flutter', icon: 'logos:flutter' },
                { name: 'Kotlin', icon: 'logos:kotlin-icon' },
                { name: 'React.js', icon: 'logos:react' },
                { name: 'Bootstrap', icon: 'logos:bootstrap' },
                { name: 'HTML5/CSS3', icon: 'logos:html-5' }
            ]
        },
        {
            title: 'Backend & Bases de Datos',
            icon: 'lucide:database',
            skills: [
                { name: 'SQL Server', icon: 'devicon:microsoftsqlserver' },
                { name: 'Laravel', icon: 'logos:laravel' },
                { name: 'Python / Flask', icon: 'logos:python' },
                { name: 'Java', icon: 'logos:java' }
            ]
        },
        {
            title: 'Herramientas & Agilidad',
            icon: 'lucide:trello',
            skills: [
                { name: 'Git / GitHub', icon: 'logos:git-icon' },
                { name: 'Scrum / Agile', icon: 'logos:jira' },
                { name: 'Postman', icon: 'logos:postman-icon' },
                { name: 'Figma (UI/UX)', icon: 'logos:figma' }
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