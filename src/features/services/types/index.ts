import type { LucideIcon } from "lucide-react";

export interface ServiceGridItem {
    label: string;
    value: string;
    icon?: LucideIcon;
}

export interface ServiceSection {
    title: string;
    description?: string;
    items?: string[];
    icon?: LucideIcon;
    gridItems?: ServiceGridItem[];
}

export interface ServiceInfo {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    detailedSections: ServiceSection[];
    considerations?: string[];
}

export interface ServiceSubItem {
    name: string;
    icon: LucideIcon;
    details: string[];
}

export interface ComprehensiveService {
    category: string;
    icon: LucideIcon;
    description: string;
    color: string;
    services: ServiceSubItem[];
}
