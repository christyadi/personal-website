import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getCurrentProcesses, getFeaturedProjects, getRecentChangelog, profile } from '../lib/content/repository'
import { ServiceRegistry } from '../components/workstation/ServiceRegistry'

export function HomePage() {
  const projects = getFeaturedProjects(); const log = getRecentChangelog().flatMap((entry) => entry.items.map((item) => ({ date: entry.date, text: item.text }))).slice(0, 3)
  return <><section className="home-intro"><div className="eyebrow">PUBLIC ENGINEERING WORKSTATION / 01</div><h1>{profile.name}</h1><div className="intro-bottom"><div><p className="role">{profile.role}</p><p className="tagline">{profile.tagline}</p></div><div className="intro-meta"><span>based in {profile.location}</span><div><a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a><a href={profile.cvUrl} target="_blank">CV <ArrowDown size={14} /></a></div></div></div></section>
  <section className="home-dashboard"><aside className="current-panel"><p className="section-label">CURRENT</p><ol>{getCurrentProcesses().map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>)}</ol><p className="muted process-note">Exploring systems that remain useful once the demo is over.</p></aside><div className="services-panel"><div className="section-header"><p className="section-label">ACTIVE SERVICES</p><Link to="/work">View index <ArrowUpRight size={14} /></Link></div><ServiceRegistry projects={projects} compact /></div></section>
  <section className="home-about"><div><p className="section-label">ABOUT ME</p><h2>Systems should make complex work easier to understand.</h2></div><div><p>{profile.bio}</p><Link to="/about">Read full profile <ArrowUpRight size={14} /></Link></div></section>
  <section className="recent-log"><div className="section-header"><p className="section-label">RECENT LOG</p><Link to="/changelog">Full changelog <ArrowUpRight size={14} /></Link></div><div className="log-list">{log.map((entry) => <div className="log-entry" key={`${entry.date}-${entry.text}`}><span>{entry.date}</span><p>{entry.text}</p></div>)}</div></section></>
}
