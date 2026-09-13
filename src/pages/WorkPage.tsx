import { useMemo, useState } from 'react'
import { getProjects } from '../lib/content/repository'
import { ServiceRegistry } from '../components/workstation/ServiceRegistry'

const filters = ['All', 'Backend', 'Full-stack', 'Frontend', 'AI']
export function WorkPage() { const [filter, setFilter] = useState('All'); const projects = useMemo(() => getProjects().filter((project) => filter === 'All' || project.type.toLowerCase().includes(filter === 'AI' ? 'ai' : filter.toLowerCase())), [filter]); return <section className="page-frame"><div className="page-heading"><div><p className="eyebrow">PROJECT REGISTRY / 02</p><h1>Work index</h1></div><p>Systems, interfaces and experiments built to make difficult work more legible.</p></div><div className="filter-bar" aria-label="Project filters">{filters.map((item) => <button className={filter === item ? 'active' : ''} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div><ServiceRegistry projects={projects} /></section> }
