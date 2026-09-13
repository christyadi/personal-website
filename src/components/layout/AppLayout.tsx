import { Code2, Contact, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { profile } from '../../lib/content/repository'
import { CommandPalette } from '../workstation/CommandPalette'
import { DocumentTitle } from './DocumentTitle'

const links = [{ to: '/work', label: '/work' }, { to: '/lab', label: '/lab' }, { to: '/notes', label: '/notes' }, { to: '/about', label: '/about' }]

export function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  return <div className="site-shell"><DocumentTitle /><header className="site-header"><NavLink className="wordmark" to="/" onClick={() => setMenuOpen(false)}><span>JC</span>/WORKSTATION</NavLink><nav className={menuOpen ? 'nav-links nav-links--open' : 'nav-links'} aria-label="Primary navigation">{links.map((link) => <NavLink key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>{link.label}</NavLink>)}</nav><div className="header-actions"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={17} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Contact size={17} /></a><CommandPalette /><button className="mobile-menu" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button></div></header><main><Outlet /></main><footer className="site-footer"><div><strong>JC/WORKSTATION</strong><span>build: production</span></div><div><span>runtime: browser</span><span>backend: none</span></div></footer></div>
}
