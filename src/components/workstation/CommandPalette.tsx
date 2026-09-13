import * as Dialog from '@radix-ui/react-dialog'
import { ArrowUpRight, FileDown, Search, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProjects, profile } from '../../lib/content/repository'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command'

const routes = [{ label: 'Work', path: '/work' }, { label: 'Lab', path: '/lab' }, { label: 'Notes', path: '/notes' }, { label: 'About', path: '/about' }]

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setOpen((value) => !value) } }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])
  const go = (path: string) => { navigate(path); setOpen(false) }
  return <Dialog.Root open={open} onOpenChange={setOpen}>
    <Dialog.Trigger asChild><button className="command-trigger" aria-label="Open command palette"><Search size={15} /><span>Search</span><kbd>Ctrl K</kbd></button></Dialog.Trigger>
    <Dialog.Portal><Dialog.Overlay className="command-overlay" /><Dialog.Content className="command-dialog" aria-describedby={undefined}>
      <Dialog.Title className="sr-only">Search workstation</Dialog.Title>
      <Command label="Search workstation"><div className="command-input"><Search size={17} /><CommandInput autoFocus placeholder="Search workstation..." /></div><CommandList><CommandEmpty>No matching resource.</CommandEmpty>
        <CommandGroup heading="Navigation">{routes.map((route) => <CommandItem key={route.path} onSelect={() => go(route.path)}>{route.label}<ArrowUpRight size={15} /></CommandItem>)}</CommandGroup>
        <CommandGroup heading="Projects">{getProjects().map((project) => <CommandItem key={project.slug} value={`${project.name} ${project.type} ${project.technologies.join(' ')}`} onSelect={() => go(`/work/${project.slug}`)}><span>{project.name}</span><small>{project.type}</small></CommandItem>)}</CommandGroup>
        <CommandGroup heading="Actions"><CommandItem onSelect={() => window.open(profile.cvUrl, '_blank')}><span>Download CV</span><FileDown size={15} /></CommandItem><CommandItem onSelect={() => window.open(profile.github, '_blank')}><span>Open GitHub</span><ArrowUpRight size={15} /></CommandItem></CommandGroup>
      </CommandList></Command>
      <Dialog.Close className="dialog-close" aria-label="Close search"><X size={16} /></Dialog.Close>
    </Dialog.Content></Dialog.Portal>
  </Dialog.Root>
}
