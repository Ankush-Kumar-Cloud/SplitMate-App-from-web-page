import { Receipt, Users, Scale, Search, BarChart3, UserCheck, CheckCircle2 } from 'lucide-react'
import { features } from '../data/appContent'
import { Reveal } from './ui'

const Icons = { Receipt, Users, Scale, Search, BarChart3, UserCheck, CheckCircle2 }

export default function Features() {
  return (
    <section id="features" className="section border-y border-bd bg-white">
      <div className="wrap">
        <Reveal><h2 className="h2">What SplitMate does</h2></Reveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([i, t, d]) => { const Ic = Icons[i]; return (
            <Reveal key={t} className="h-full">
              <article className="h-full rounded-3xl border border-bd bg-bg p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint text-dg"><Ic size={22} aria-hidden="true" /></span>
                <h3 className="mb-1 mt-4 text-xl font-semibold">{t}</h3>
                <p className="text-mu">{d}</p>
              </article>
            </Reveal>
          )})}
        </div>
      </div>
    </section>
  )
}
