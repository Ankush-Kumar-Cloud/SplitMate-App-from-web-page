import { problems } from '../data/appContent'
import { Reveal } from './ui'

export default function Problems() {
  return (
    <section className="section" aria-labelledby="p-h">
      <div className="wrap grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
        <Reveal>
          <h2 id="p-h" className="h2">Shared money gets blurry fast</h2>
          <p className="lead">SplitMate gives shared expenses one organized home, so the numbers stop living in memory and group chats.</p>
        </Reveal>
        <Reveal>
          <ul className="border-t border-dashed border-mu">
            {problems.map(([t, d]) => <li key={t} className="grid gap-0.5 border-b border-dashed border-mu py-4"><b>{t}</b><span className="text-mu">{d}</span></li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
