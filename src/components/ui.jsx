import { useEffect, useRef, useState } from 'react'
import { Download } from 'lucide-react'
import { APK_URL } from '../data/appContent'

export function DownloadButton({ label = 'Download APK', className = '' }) {
  return (
    <a className={`btn btn-primary ${className}`} href={APK_URL} rel="noopener noreferrer">
      <Download size={20} aria-hidden="true" />
      <span>{label}</span>
      <small className="rounded-full bg-white/25 px-2 py-0.5 text-[0.7rem] font-semibold">Android APK</small>
    </a>
  )
}

export function Reveal({ children, className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return setShown(true)
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`}>{children}</div>
}

export const Logo = ({ light = false }) => (
  <a href="#home" aria-label="SplitMate home" className={`flex items-center gap-2 font-display text-[1.3rem] font-extrabold no-underline ${light ? 'text-white' : 'text-dg'}`}>
    <img src="/logo.png" alt="" width="34" height="34" className="rounded-lg" /> SplitMate
  </a>
)
