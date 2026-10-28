import { ArrowUp, Mail, MessageCircle, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { APK_URL, CONTACT_EMAIL, CONTACT_WHATSAPP, WHATSAPP_LINK, PRIVACY_URL, nav } from '../data/appContent'
import { Logo } from './ui'

export default function Footer() {
  const [top, setTop] = useState(false)
  useEffect(() => {
    const f = () => setTop(window.scrollY > 600)
    f()
    addEventListener('scroll', f, { passive: true })
    return () => removeEventListener('scroll', f)
  }, [])

  return (
    <footer className="bg-dg pb-8 pt-14 text-mint [&_a]:text-white">
      <div className="wrap grid gap-8 md:grid-cols-[1.3fr_1fr_1.1fr]">
        <div>
          <Logo light />
          <p className="mt-3 text-sm text-emerald-100 max-w-[36ch] leading-relaxed">
            Free Android app for roommates, hostel students, and friends in India to easily track daily expenses and settle bills with zero tension.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-white text-base mb-3">Quick Links</h4>
          <nav aria-label="Footer" className="grid gap-2 text-sm">
            {nav.map(([t, h]) => (
              <a key={h} href={h} className="hover:text-mint transition-colors">
                {t}
              </a>
            ))}
            <a href={APK_URL} rel="noopener noreferrer" className="hover:text-mint font-semibold transition-colors">
              Download Android APK
            </a>
          </nav>
        </div>
        <div className="grid gap-3 text-sm">
          <h4 className="font-bold text-white text-base mb-1">Direct Help & Contact</h4>
          <p className="text-xs text-emerald-100">
            Facing any problem in the app? Message or email developer Ankush Kumar directly:
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/20 px-3 py-2 text-white hover:bg-emerald-500/40 transition"
          >
            <MessageCircle size={18} className="text-mint shrink-0" />
            <span>WhatsApp: <strong>+91 {CONTACT_WHATSAPP}</strong></span>
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/20 px-3 py-2 text-white hover:bg-emerald-500/40 transition break-all"
          >
            <Mail size={18} className="text-mint shrink-0" />
            <span>Email: <strong>{CONTACT_EMAIL}</strong></span>
          </a>
          <p className="text-xs text-emerald-200/80 mt-1">
            {PRIVACY_URL ? <a href={PRIVACY_URL} className="underline">Privacy policy</a> : '100% private data for your group.'}
          </p>
        </div>
      </div>
      <div className="wrap mt-10 border-t border-white/20 pt-6 text-xs sm:text-sm text-emerald-200/90 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p>SplitMate is a digital hisab-kitab notebook. Pay your friends directly with Cash or UPI apps. Not a bank or financial adviser.</p>
        <p>© {new Date().getFullYear()} SplitMate · Made by Ankush Kumar</p>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xl hover:bg-emerald-700 transition hover:scale-105"
          aria-label="Help on WhatsApp"
        >
          <MessageCircle size={19} />
          <span className="hidden sm:inline">WhatsApp Help</span>
        </a>

        {top && (
          <button
            className="grid h-11 w-11 place-items-center rounded-full bg-g text-white shadow-xl hover:bg-emerald-500 transition-all"
            aria-label="Back to top"
            onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>
    </footer>
  )
}
