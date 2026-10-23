import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/appContent'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section">
      <div className="wrap max-w-[760px]">
        <h2 className="h2">Frequently asked questions</h2>
        {faqs.map(([q, a], i) => {
          const on = open === i
          return (
            <div key={q} className="border-b border-bd">
              <h3>
                <button className="flex min-h-[56px] w-full items-center justify-between gap-4 py-4 text-left font-display text-lg font-semibold" aria-expanded={on} aria-controls={`f${i}`} onClick={() => setOpen(on ? -1 : i)}>
                  {q}<ChevronDown aria-hidden="true" className={`shrink-0 transition-transform ${on ? 'rotate-180' : ''}`} />
                </button>
              </h3>
              <div id={`f${i}`} role="region" className={`grid transition-[grid-template-rows] duration-300 ${on ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <p className={`overflow-hidden text-mu ${on ? 'pb-5' : ''}`}>{a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
