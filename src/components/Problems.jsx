import { problems } from '../data/appContent'
import { Reveal } from './ui'
import { AlertCircle } from 'lucide-react'

export default function Problems() {
  return (
    <section id="problems" className="section bg-white/50" aria-labelledby="p-h">
      <div className="wrap grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
        <Reveal>
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
            <AlertCircle size={15} />
            <span>Sound Familiar?</span>
          </div>
          <h2 id="p-h" className="h2 text-dg">
            Why Manual Hisab-Kitab Causes Tension Among Friends
          </h2>
          <p className="lead text-gray-600">
            Living with roommates in a room or hostel, or travelling with friends? Keeping calculations in memory, rough diaries, or WhatsApp always leads to forgotten amounts and doubts.
          </p>
          <p className="text-sm font-medium text-g">
            SplitMate gives every shared expense one clean digital home so everyone stays happy.
          </p>
        </Reveal>
        <Reveal>
          <ul className="divide-y divide-bd rounded-3xl border border-bd bg-white p-6 shadow-sm">
            {problems.map(([t, d], i) => (
              <li key={t} className="py-4 first:pt-1 last:pb-1">
                <div className="flex items-start gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-red-50 text-xs font-bold text-red-600">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink text-base sm:text-lg">{t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mu">{d}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
