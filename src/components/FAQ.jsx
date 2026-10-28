import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { faqs } from '../data/appContent'
import { Reveal } from './ui'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section">
      <div className="wrap max-w-[800px]">
        <Reveal className="text-center mb-8">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-semibold text-dg">
            <HelpCircle size={16} />
            <span>Got Questions?</span>
          </div>
          <h2 className="h2 text-dg">Frequently Asked Questions</h2>
          <p className="lead mx-auto text-gray-600">
            Simple and clear answers to everything you want to know about SplitMate.
          </p>
        </Reveal>

        <div className="rounded-3xl border border-bd bg-white p-4 sm:p-8 shadow-sm">
          {faqs.map(([q, a], i) => {
            const on = open === i
            return (
              <div key={q} className="border-b border-bd last:border-b-0">
                <h3>
                  <button
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left font-display text-base sm:text-lg font-bold text-ink hover:text-g"
                    aria-expanded={on}
                    aria-controls={`f${i}`}
                    onClick={() => setOpen(on ? -1 : i)}
                  >
                    <span>{q}</span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`shrink-0 text-g transition-transform duration-200 ${on ? 'rotate-180' : ''}`}
                    />
                  </button>
                </h3>
                <div
                  id={`f${i}`}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <p className={`overflow-hidden text-sm sm:text-base leading-relaxed text-gray-600 ${on ? 'pb-5' : ''}`}>
                    {a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
