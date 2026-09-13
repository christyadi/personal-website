export type ProjectStatus = 'active' | 'stable' | 'experimental' | 'archived'

export interface Decision { id: string; title: string; decision: string; reasoning: string; alternative: string }
export interface Project {
  slug: string; name: string; shortName: string; status: ProjectStatus; type: string; featured: boolean; version: string; year: number; role: string; description: string; technologies: string[];
  sections: Partial<Record<'context' | 'problem' | 'solution' | 'implementation' | 'challenges' | 'outcome' | 'nextIteration', string>>
  decisions: Decision[]; architecture: string[]
}
export interface Profile { name: string; initials: string; role: string; tagline: string; location: string; status: string; github: string; linkedin: string; cvUrl: string; bio: string; approach: string }
export interface Experience { period: string; role: string; organization: string; summary: string; responsibilities: string[] }
export interface Experiment { slug: string; id: string; name: string; hypothesis: string; setup: string; result: string; status: string }
export interface Note { id: string; title: string; topic: string; excerpt: string }
export interface ChangelogItem { type: 'ADDED' | 'CHANGED' | 'FIXED'; text: string }
export interface Changelog { version: string; date: string; items: ChangelogItem[] }
