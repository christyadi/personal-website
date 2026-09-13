import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../../types/content'
import { StatusIndicator } from './StatusIndicator'

export function ServiceRegistry({ projects, compact = false }: { projects: Project[]; compact?: boolean }) {
  return <div className="registry"><div className="registry-head"><span>ID</span><span>SERVICE</span><span>TYPE</span><span>STATUS</span>{!compact && <span>YEAR</span>}<span className="sr-only">Open project</span></div>{projects.map((project, index) => <Link className="registry-row" to={`/work/${project.slug}`} key={project.slug}><span className="mono index">{String(index + 1).padStart(2, '0')}</span><span className="service-name">{project.shortName}</span><span className="service-type">{project.type}</span><StatusIndicator status={project.status} />{!compact && <span className="service-year">{project.year}</span>}<ArrowUpRight className="row-arrow" size={17} /></Link>)}</div>
}
