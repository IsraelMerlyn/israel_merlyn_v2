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

export interface ProjectItem {
    id: number;
    title: string;
    description: string;
    image: string; // URL de la imagen
    techStack: string[];
    category: ProjectCategory;
    links: {
        demo?: string;
        repo?: string;
        video?: string;
    };
}

export interface Skill {
    name: string;
    icon: string;
}

export interface SkillCategory {
    title: string;
    icon: string;
    skills: Skill[];
}