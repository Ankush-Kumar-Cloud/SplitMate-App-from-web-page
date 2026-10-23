import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/appContent'
import { DownloadButton, Logo } from './ui'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-bd bg-bg/85 backdrop-blur-md">
      <div className="wrap flex h-[68px] items-center justify-between">
        <Logo />
        <nav id="menu" aria-label="Main" className={`${open ? 'flex' : 'hidden md:flex'} absolute inset-x-0 top-[68px] flex-col gap-4 border-b border-bd bg-white p-6 md:static md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}>
          {nav.map(([t, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="font-medium text-ink no-underline hover:text-g">{t}</a>)}
          <DownloadButton className="!min-h-[44px]" />
        </nav>
        <button className="p-2 md:hidden" aria-expanded={open} aria-controls="menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}
