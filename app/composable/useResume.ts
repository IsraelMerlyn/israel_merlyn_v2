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


    const featuredProjects: ProjectItem[] = [
        {
            id: 'cv-llm-lab',
            tier: 'A',
            title: 'cv-llm-lab: Ingesta Documental & Evaluación Semántica con Spring AI',
            clientOrContext: 'Arquitectura Backend / Enterprise AI Lab',
            role: 'Backend & AI Systems Architect',
            scope: 'Diseño integral de microservicio On-Premise',
            accessType: 'open_source',
            statusLabel: 'Código & Arquitectura en GitHub',
            category: 'backend',
            description: 'Microservicio On-Premise para ingesta documental, aislamiento de PII y evaluación semántica de compatibilidad de CVs mediante Spring AI y Ollama (Gemma local).',
            technicalDetail: 'Pipeline desacoplado con Apache PDFBox 3.x para extracción determinista y BeanOutputConverter para validación de esquemas JSON estructurados sin alucinaciones.',
            problem: 'Riesgos de privacidad al enviar información personal identificable (PII) a APIs cloud y alta tasa de alucinación/falta de tipado estricto al evaluar compatibilidad de candidatos contra vacantes.',
            technicalChallenge: 'Extracción determinista de texto en PDFs no estructurados y garantía de respuestas en formato JSON fuertemente tipado mediante inferencia local sin degradar la memoria del servidor.',
            architectureDecision: 'Pipeline desacoplado con Apache PDFBox 3.x para normalización de texto, persistencia intermedia con Spring Data JPA y orquestación con Spring AI + Ollama (Gemma), aplicando BeanOutputConverter para forzar cumplimiento estricto de esquemas JSON.',
            metrics: [
                '100% On-Premise (0% fuga de datos sensibles/PII)',
                '100% de consistencia en contratos JSON estructurados',
                '< 3.2s tiempo promedio de extracción, inferencia y scoring'
            ],
            stackByLayer: [
                { category: 'Framework & AI', items: ['Java 17', 'Spring Boot 3', 'Spring AI', 'Ollama (Gemma)'] },
                { category: 'Parsing & Persistencia', items: ['Apache PDFBox 3.x', 'Spring Data JPA', 'H2 / PostgreSQL'] },
                { category: 'Validación & Tipado', items: ['BeanOutputConverter', 'Jackson', 'REST Multipart'] }
            ],
            diagramMermaid: `flowchart TD
    Client[Cliente / Multipart Request] -->|PDF o TXT| Controller[REST Ingestion Controller]
    Controller --> Parser[Apache PDFBox 3.x Parser]
    Parser -->|Texto Normalizado| Repo[(Persistencia JPA)]
    Repo --> PromptEngine[Spring AI Prompt Template]
    PromptEngine -->|Prompt + JSON Schema| Ollama[Ollama Engine / Gemma Local]
    Ollama --> OutputConverter[Spring AI BeanOutputConverter]
    OutputConverter -->|JSON Fuertemente Tipado| Client`,
            techStack: ['Java 17', 'Spring Boot 3', 'Spring AI', 'Ollama', 'PDFBox', 'PostgreSQL', 'Jackson'],
            links: {
                demo: 'https://github.com/IsraelMerlyn/cv-llm-lab',
                repo: 'https://github.com/IsraelMerlyn/cv-llm-lab'
            }
        },
        {
            id: 1,
            title: 'ERP Obras Públicas',
            category: 'fullstack',
            status: 'En producción',
            accessType: 'enterprise_private',
            statusLabel: 'Enterprise / Código Confidencial',
            description: 'Sistema empresarial (ERP) municipal enfocado en la planeación presupuestal, auditoría en tiempo real y bitácora histórica de aproximadamente 50 proyectos de infraestructura pública.',
            technicalDetail: 'Implementación de control transaccional estricto con Liquibase para migraciones sin downtime y arquitectura monolítica modular en Spring Boot 3 con frontend en Nuxt 3.',
            problem: 'Descontrol operativo, falta de trazabilidad en desembolsos presupuestales y riesgo de inconsistencias auditoras en más de 50 obras de infraestructura gubernamental.',
            technicalChallenge: 'Asegurar la integridad transaccional estricta del historial de cambios sin downtime en base de datos PostgreSQL, garantizando el cumplimiento de normativas de auditoría legal y fiscal.',
            architectureDecision: 'Diseño de un monolito modular desacoplado en Spring Boot con Liquibase para versionado declarativo de esquemas de BD, reduciendo riesgos de descalce de versiones entre entornos de dev y prod.',
            metrics: [
                '50+ obras públicas gestionadas y auditadas en tiempo real',
                '0 discrepancias en versionado de base de datos PostgreSQL',
                '100% digitalización del expediente técnico-financiero municipal'
            ],
            stackByLayer: {
                backend: ['Spring Boot 3', 'Java 21', 'Spring Security', 'REST APIs'],
                frontend: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Tailwind CSS'],
                database: ['PostgreSQL', 'Liquibase'],
                architecture: ['Monolito Modular', 'RBAC Security', 'Transaction Management']
            },
            diagramMermaid: `graph TD
    A[Nuxt 3 Web UI / Auditor Dashboard] -->|HTTPS / JWT REST| B[Spring Boot 3 Modular Monolith]
    B -->|Spring Security RBAC| C[Audit & Finance Core]
    B -->|Liquibase Version Control| D[(PostgreSQL Enterprise DB)]
    C -->|PDF / Audit Export| E[Archivado Oficial de Obras]`,
            techStack: ['Nuxt 3', 'Spring Boot', 'PostgreSQL', 'Liquibase', 'Spring Security', 'TypeScript'],
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
            accessType: 'enterprise_private',
            statusLabel: 'Enterprise / Sistema Operativo Municipal',
            description: 'Sistema offline-first de reporte y gestión geolocalizada para alumbrado público. Incluye app móvil Flutter con sync en segundo plano, backend Spring Boot y mapas interactivos con algoritmo Haversine.',
            technicalDetail: 'Algoritmo Haversine en backend para prevenir reportes duplicados dentro de un radio espacial y WorkManager en Flutter para sincronización diferida.',
            problem: 'Saturación de cuadrillas operativas por reportes ciudadanos duplicados de la misma luminaria y falta de conectividad móvil en zonas rurales.',
            technicalChallenge: 'Calcular la proximidad espacial de nuevos reportes en tiempo real para evitar duplicados en la base de datos y garantizar el levantamiento de fallas en offline.',
            architectureDecision: 'Uso del algoritmo matemático Haversine en la capa de servicio de Spring Boot para clustering espacial y WorkManager en Flutter para cola de peticiones diferidas.',
            metrics: [
                'Reducción drástica de reportes duplicados mediante agrupamiento geográfico',
                'Sincronización en segundo plano < 2 segundos al reconectar señal',
                'Visualización espacial de fallas en mapas interactivos con Leaflet.js'
            ],
            stackByLayer: {
                backend: ['Spring Boot', 'Java', 'Haversine Clustering'],
                mobile: ['Flutter', 'Dart', 'BLoC', 'WorkManager (Background Sync)'],
                frontend: ['Nuxt 3', 'Leaflet.js', 'PostGIS / PostgreSQL'],
                architecture: ['Offline-First', 'Spatial Indexing', 'Eventual Consistency']
            },
            diagramMermaid: `sequenceDiagram
    autonumber
    Citizen App (Flutter)->>SQLite Local: Guarda reporte (Offline Mode)
    Note over Citizen App (Flutter),WorkManager: Sin señal celular
    WorkManager->>Spring Boot Backend: Sincroniza al detectar red
    Spring Boot Backend->>Haversine Service: ¿Existe reporte en radio X metros?
    alt Es Duplicado
        Haversine Service-->>Spring Boot Backend: Agrupa al ticket existente
    else Es Nuevo
        Spring Boot Backend->>PostgreSQL: Crea nuevo ticket de mantenimiento
    end`,
            techStack: ['Flutter', 'Spring Boot', 'PostgreSQL', 'Nuxt 3', 'Leaflet.js', 'Haversine'],
            links: {
                demo: '#',
                repo: '#'
            }
        },
        {
            id: 3,
            title: 'Hub Municipal (Shell App SSO)',
            category: 'fullstack',
            status: 'En producción',
            accessType: 'enterprise_private',
            statusLabel: 'Enterprise / Micro-Frontends & SSO',
            description: 'Plataforma unificada de acceso gubernamental que funciona como Shell App. Centraliza la navegación y credenciales (Single Sign-On) hacia subsistemas en Angular 19 y Nuxt 3.',
            technicalDetail: 'Aislamiento de sesiones inter-dominio mediante HTTP-Only Cookies anti-XSS y Token Exchange seguro en Spring Security.',
            problem: 'Dispersión de sistemas gubernamentales independientes con autenticaciones duplicadas, generando fricción para los usuarios y riesgos de seguridad en localStorage.',
            technicalChallenge: 'Compartir la sesión de usuario de forma transparente y segura entre subsistemas desarrollados en frameworks distintos (Angular y Nuxt 3) en dominios separados.',
            architectureDecision: 'Implementación de arquitectura Shell App con token exchange y cookies HTTP-Only SameSite, previniendo ataques XSS/CSRF y centralizando el control RBAC.',
            metrics: [
                '1 solo login unificado (SSO) para múltiples subsistemas municipales',
                '0 tokens de sesión expuestos en localStorage',
                'Arquitectura extensible para integrar nuevas apps en Angular/Nuxt'
            ],
            stackByLayer: {
                frontend: ['Nuxt 3 (Shell App)', 'Angular 19 (Satellite Apps)', 'TypeScript'],
                backend: ['Spring Boot', 'Spring Security', 'OAuth2 / JWT Token Exchange'],
                architecture: ['Micro-Frontends', 'Shell Architecture', 'HTTP-Only Cookie Auth']
            },
            diagramMermaid: `graph LR
    User[Navegador del Usuario] -->|Login Centralizado| Shell[Nuxt 3 Shell App]
    Shell -->|Token Exchange / HTTP-Only Cookie| Auth[Spring Security Auth Server]
    Auth -->|Valid Access Token| Sat1[Sub-sistema Obras (Angular 19)]
    Auth -->|Valid Access Token| Sat2[Sub-sistema Catastro (Nuxt 3)]`,
            techStack: ['Nuxt 3', 'Angular', 'Spring Boot', 'Spring Security', 'JWT', 'Shell Architecture'],
            links: {
                demo: '#',
                repo: '#'
            }
        },
        {
            id: 4,
            title: 'Scaneame',
            category: 'mobile',
            status: 'Play Store',
            accessType: 'play_store',
            statusLabel: 'Disponible en Google Play',
            description: 'Aplicación móvil offline-first para el escaneo inteligente de documentos físicos y procesamiento local de imágenes, publicada oficialmente en Google Play Store.',
            technicalDetail: 'Delegación de tareas pesadas de compresión y procesamiento de imagen a Dart Isolates (`Isolate.run`) para garantizar 60 FPS constantes en la interfaz.',
            problem: 'Lentitud y congelamientos de interfaz en teléfonos móviles de gama media/baja al procesar y comprimir imágenes pesadas en el hilo de UI.',
            technicalChallenge: 'Ejecutar algoritmos de manipulación de píxeles y compresión de archivos sin bloquear el hilo principal (Event Loop) de Flutter.',
            architectureDecision: 'Adopción de Feature-Sliced Design (FSD) + Clean Architecture y uso de Isolates para procesamiento multi-hilo en segundo plano.',
            metrics: [
                'Publicada y activa en Google Play Store',
                '60 FPS mantenidos durante la compresión pesada de imágenes',
                '100% procesamiento local (Privacidad total sin servidor)'
            ],
            stackByLayer: {
                mobile: ['Flutter', 'Dart', 'BLoC / Cubit', 'Dart Isolates', 'sqflite', 'Dio'],
                architecture: ['Clean Architecture', 'Feature-Sliced Design (FSD)', 'Offline-First']
            },
            diagramMermaid: `graph TD
    UI[Flutter Main Thread / UI] -->|Captura de documento| Controller[BLoC State Management]
    Controller -->|Delegación de cómputo| Isolate[Dart Isolate Thread]
    Isolate -->|Compresión & Filtrado Heavy| ImageResult[Píxeles Procesados]
    Isolate -->>|Retorno asíncrono| UI
    Controller -->|Persistencia local| DB[(sqflite Local Database)]`,
            techStack: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'FSD', 'Isolates', 'sqflite'],
            links: {
                demo: 'https://play.google.com/store/apps/details?id=com.israelmerlyn.scaneame',
                repo: '#'
            }
        }
    ];

    const secondaryProjects: ProjectItem[] = [
        {
            id: 5,
            title: 'Destino Fullstack',
            category: 'fullstack',
            status: 'En producción',
            accessType: 'open_source',
            statusLabel: 'Código Abierto / Web Live',
            description: 'Aplicación web interactiva para la exploración de destinos turísticos usando renderizado híbrido (SSR/CSR) en Nuxt 3 y Supabase como backend-as-a-service.',
            technicalDetail: 'Caching y revalidación asíncrona de datos con middlewares de Nitro y Supabase JS.',
            techStack: ['Nuxt 3', 'Supabase', 'Nitro', 'SSR/CSR', 'Tailwind CSS'],
            links: {
                demo: 'https://conocetudestino.netlify.app/',
                repo: 'https://github.com/IsraelMerlyn'
            }
        },
        {
            id: 6,
            title: 'Aniversario Tecnológico Tlaxiaco',
            category: 'fullstack',
            status: 'En producción',
            accessType: 'open_source',
            statusLabel: 'Web Evento / Live',
            description: 'Plataforma web de registro y acreditación mediante códigos QR con validación instantánea en puerta (<200ms) conectada a Supabase.',
            technicalDetail: 'Lectura de QR en tiempo real e integración con API REST para sincronización instantánea de asistencia.',
            techStack: ['React', 'Supabase', 'Redux', 'Bootstrap 5', 'QR Generation'],
            links: {
                demo: 'https://tlaxiacoaniversario.vercel.app/',
                repo: 'https://github.com/IsraelMerlyn'
            }
        }
    ];

    const projects: ProjectItem[] = [...featuredProjects, ...secondaryProjects];

    const skillCategories: SkillCategory[] = [
        {
            title: 'Mobile Engineering',
            icon: 'lucide:smartphone',
            skills: [
                {
                    name: 'Flutter & Dart',
                    icon: 'logos:flutter',
                    class: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                },
                {
                    name: 'Clean Arch + FSD',
                    icon: 'lucide:layers',
                    class: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                },
                {
                    name: 'BLoC / Cubit',
                    icon: 'lucide:cpu',
                    class: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                },
                {
                    name: 'Dart Isolates',
                    icon: 'lucide:zap',
                    class: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                },
                {
                    name: 'SQLite (sqflite)',
                    icon: 'logos:sqlite',
                    class: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                },
                {
                    name: 'EAS & Play Console',
                    icon: 'simple-icons:googleplay',
                    class: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                }
            ]
        },
        {
            title: 'Modern Web & Frontend',
            icon: 'lucide:layout-template',
            skills: [
                {
                    name: 'Vue 3 & Nuxt 3',
                    icon: 'logos:nuxt-icon',
                    class: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                },
                {
                    name: 'TypeScript Estricto',
                    icon: 'logos:typescript-icon',
                    class: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                },
                {
                    name: 'Nitro Engine & SSR',
                    icon: 'lucide:server',
                    class: 'bg-green-500/10 text-green-400 border-green-500/20'
                },
                {
                    name: 'Pinia & State',
                    icon: 'logos:pinia',
                    class: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                },
                {
                    name: 'Tailwind CSS',
                    icon: 'logos:tailwindcss-icon',
                    class: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                },
                {
                    name: 'Progressive Web Apps (PWA)',
                    icon: 'lucide:globe',
                    class: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                }
            ]
        },
        {
            title: 'Backend & Systems',
            icon: 'lucide:database',
            skills: [
                {
                    name: 'Spring Boot 3 (Java)',
                    icon: 'logos:spring-icon',
                    class: 'bg-lime-500/10 text-lime-400 border-lime-500/20'
                },
                {
                    name: 'Spring Security (JWT/SSO)',
                    icon: 'lucide:shield-check',
                    class: 'bg-red-500/10 text-red-400 border-red-500/20'
                },
                {
                    name: 'Liquibase (DB Versioning)',
                    icon: 'lucide:database',
                    class: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                },
                {
                    name: 'PostgreSQL & PostGIS',
                    icon: 'logos:postgresql',
                    class: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                },
                {
                    name: 'Monolito Modular',
                    icon: 'lucide:box',
                    class: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                },
                {
                    name: 'REST APIs & OpenAPI',
                    icon: 'lucide:code-2',
                    class: 'bg-violet-500/10 text-violet-400 border-violet-500/20'
                }
            ]
        },
        {
            title: 'Quality & Agile Leadership',
            icon: 'lucide:award',
            skills: [
                {
                    name: 'Vitest & Unit Testing',
                    icon: 'logos:vitest',
                    class: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                },
                {
                    name: 'SonarQube Quality',
                    icon: 'logos:sonarqube',
                    class: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                },
                {
                    name: 'Agile & Scrum Training',
                    icon: 'logos:jira',
                    class: 'bg-sky-500/10 text-sky-400 border-sky-500/20'
                },
                {
                    name: 'Code Reviews & DoD',
                    icon: 'lucide:git-pull-request',
                    class: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                },
                {
                    name: 'AI-Assisted Workflow',
                    icon: 'logos:google-gemini',
                    class: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                },
                {
                    name: 'Azure DevOps & Git',
                    icon: 'logos:git-icon',
                    class: 'bg-orange-500/10 text-orange-400 border-orange-500/20'
                }
            ]
        }
    ];

    return {
        workExperience,
        teachingExperience,
        educationHistory,
        featuredProjects,
        secondaryProjects,
        projects,
        skillCategories
    };
};