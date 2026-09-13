import { z } from 'zod'
import profileJson from '../../content/profile.json'
import projectsJson from '../../content/projects.json'
import experienceJson from '../../content/experience.json'
import experimentsJson from '../../content/experiments.json'
import notesJson from '../../content/notes.json'
import currentJson from '../../content/current-processes.json'
import changelogJson from '../../content/changelog.json'
import type { Changelog, Experience, Experiment, Note, Profile, Project } from '../../types/content'

const projectSchema = z.object({ slug: z.string(), name: z.string(), shortName: z.string(), status: z.enum(['active', 'stable', 'experimental', 'archived']), type: z.string(), featured: z.boolean(), version: z.string(), year: z.number(), role: z.string(), description: z.string(), technologies: z.array(z.string()), sections: z.record(z.string(), z.string()), decisions: z.array(z.object({ id: z.string(), title: z.string(), decision: z.string(), reasoning: z.string(), alternative: z.string() })), architecture: z.array(z.string()) })
const profileSchema = z.object({ name: z.string(), initials: z.string(), role: z.string(), tagline: z.string(), location: z.string(), status: z.string(), github: z.string().url(), linkedin: z.string().url(), cvUrl: z.string(), bio: z.string(), approach: z.string() })
const experienceSchema = z.array(z.object({ period: z.string(), role: z.string(), organization: z.string(), summary: z.string(), responsibilities: z.array(z.string()) }))
const experimentSchema = z.array(z.object({ slug: z.string(), id: z.string(), name: z.string(), hypothesis: z.string(), setup: z.string(), result: z.string(), status: z.string() }))
const noteSchema = z.array(z.object({ id: z.string(), title: z.string(), topic: z.string(), excerpt: z.string() }))
const changelogSchema = z.array(z.object({ version: z.string(), date: z.string(), items: z.array(z.object({ type: z.enum(['ADDED', 'CHANGED', 'FIXED']), text: z.string() })) }))

export const profile = profileSchema.parse(profileJson) as Profile
const projects = z.array(projectSchema).parse(projectsJson) as Project[]
const experience = experienceSchema.parse(experienceJson) as Experience[]
const experiments = experimentSchema.parse(experimentsJson) as Experiment[]
const notes = noteSchema.parse(notesJson) as Note[]
const changelog = changelogSchema.parse(changelogJson) as Changelog[]

export const getProjects = () => projects
export const getFeaturedProjects = () => projects.filter((project) => project.featured)
export const getProjectBySlug = (slug?: string) => projects.find((project) => project.slug === slug)
export const getExperience = () => experience
export const getExperiments = () => experiments
export const getNotes = () => notes
export const getCurrentProcesses = () => z.array(z.string()).parse(currentJson)
export const getRecentChangelog = () => changelog
