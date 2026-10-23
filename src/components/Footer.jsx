import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { APK_URL, CONTACT_EMAIL, PRIVACY_URL, nav } from '../data/appContent'
import { Logo } from './ui'

export default function Footer() {
  const [top, setTop] = useState(false)
  useEffect(() => { const f = () => setTop(window.scrollY > 600); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  return (
    <footer className="bg-dg pb-8 pt-14 text-mint [&_a]:text-white">
      <div className="wrap grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div><Logo light /><p className="mt-3">An Android app for tracking and splitting shared expenses.</p></div>
        <nav aria-label="Footer" className="grid gap-1.5">{nav.map(([t, h]) => <a key={h} href={h}>{t}</a>)}<a href={APK_URL} rel="noopener noreferrer">Download APK</a></nav>
        <div className="grid gap-2">
          <p>{CONTACT_EMAIL ? <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> : 'Contact: placeholder, to be added.'}</p>
          <p>{PRIVACY_URL ? <a href={PRIVACY_URL}>Privacy policy</a> : 'Privacy policy: placeholder, to be added.'}</p>
        </div>
      </div>
      <div className="wrap mt-8 border-t border-white/20 pt-6 text-sm">
        <p>SplitMate helps organize and track shared expenses. Verify balances before settling. It is not a bank, payment processor, or financial adviser.</p>
        <p className="mt-2">© {new Date().getFullYear()} SplitMate · Developed by Ankush Kumar</p>
      </div>
      {top && <button className="fixed bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-g text-white shadow-lg" aria-label="Back to top" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp /></button>}
    </footer>
  )
}
