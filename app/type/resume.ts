// types/resume.ts
export type ProjectCategory = 'fullstack' | 'mobile' | 'backend' | 'content';

export interface Role {
    id: number;
    title: string;
    period: string;
    description: string;
    techStack: string[];
}

export interface ExperienceItem {
    id: number;
    name: string; // Nombre de la empresa
    roles: Role[];
}

export interface InstitutionItem {
    id: number;
    name: string; // Nombre de la institución educativa
    roles: Role[];
}

export type AccessType = 'enterprise_private' | 'play_store' | 'open_source';

export interface StackLayerGroup {
    category: string;
    items: string[];
}

export interface StackByLayerObject {
    backend?: string[];
    frontend?: string[];
    mobile?: string[];
    database?: string[];
    architecture?: string[];
}

export type StackByLayer = StackByLayerObject | StackLayerGroup[];

export interface ProjectItem {
    id: number | string;
    tier?: 'A' | 'B' | 'C' | 'D';
    title: string;
    clientOrContext?: string;
    role?: string;
    scope?: string;
    description: string;
    image?: string;
    techStack: string[];
    category: ProjectCategory;
    status?: 'En desarrollo' | 'En producción' | 'Play Store';
    accessType: AccessType;
    statusLabel: string;
    technicalDetail?: string;
    problem?: string;
    technicalChallenge?: string;
    architectureDecision?: string;
    metrics?: string[];
    stackByLayer?: StackByLayer;
    diagramMermaid?: string;
    links: {
        demo?: string;
        repo?: string;
        video?: string;
    };
}

export interface Skill {
    name: string;
    icon: string;
    class?: string;
}

export interface SkillCategory {
    title: string;
    icon: string;
    skills: Skill[];
}