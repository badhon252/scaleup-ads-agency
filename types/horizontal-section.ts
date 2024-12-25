export interface StatItem {
  value: string;
  label: string;
}

export interface ProgressItem {
  title: string;
  percentage: number;
  description: string;
}

export interface Section {
  id: string;
  type: "hero" | "progress" | "stats" | "contact";
  content: {
    title?: string;
    subtitle?: string;
    headings?: string;
    subheadings?: string;
    stats?: StatItem[];
    progress?: ProgressItem[];
    description?: string;
    buttonText?: string;
  };
  
}
