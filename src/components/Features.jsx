import { Receipt, Users, Scale, Search, BarChart3, UserCheck, CheckCircle2, Sparkles, QrCode } from 'lucide-react'
import { features } from '../data/appContent'
import { Reveal } from './ui'

const Icons = { Receipt, Users, Scale, Search, BarChart3, UserCheck, CheckCircle2, QrCode }

export default function Features() {
  return (
    <section id="features" className="section border-y border-bd bg-white">
      <div className="wrap">
        <Reveal className="text-center md:text-left">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-semibold text-dg">
            <Sparkles size={16} />
            <span>Built For Everyday Use</span>
          </div>
          <h2 className="h2 text-dg">Simple Features for Room & Group Hisab</h2>
          <p className="lead text-gray-600">
            Specially designed so anyone can use it easily without needing complicated accounting or calculator maths.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([i, t, d]) => {
            const Ic = Icons[i] || Receipt
            return (
              <Reveal key={t} className="h-full">
                <article className="group h-full rounded-3xl border border-bd bg-bg/60 p-6 transition hover:-translate-y-1 hover:border-g/40 hover:bg-white hover:shadow-xl">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint text-dg transition-colors group-hover:bg-dg group-hover:text-white">
                    <Ic size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mb-2 mt-4 text-lg font-bold text-ink sm:text-xl">{t}</h3>
                  <p className="text-sm leading-relaxed text-mu">{d}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
