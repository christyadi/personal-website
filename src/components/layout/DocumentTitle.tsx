import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getProjectBySlug, profile } from '../../lib/content/repository'

export function DocumentTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    const slug = pathname.match(/^\/work\/([^/]+)$/)?.[1]
    const project = getProjectBySlug(slug)
    const section = pathname === '/' ? '' : pathname.split('/')[1]
    const names: Record<string, string> = { work: 'Work', lab: 'Lab', notes: 'Notes', about: 'About', changelog: 'Changelog' }
    document.title = project ? `${project.name} — ${profile.name}` : section ? `${names[section] ?? 'Resource not found'} — ${profile.name}` : `${profile.name} — ${profile.role}`
  }, [pathname])
  return null
}
