import { Phone } from './Hero'
import { Reveal } from './ui'

const shots = [
  ['/shots/expenses.png', 'Expenses', 'Per-member totals and entries'],
  ['/shots/settlement.png', 'Settlement', 'Who pays whom, with Mark Paid'],
  ['/shots/splash.png', 'Launch screen', 'Split expenses. Stay even.'],
]

export default function AppPreview() {
  return (
    <section className="section border-y border-bd bg-white">
      <div className="wrap text-center">
        <Reveal><h2 className="h2">See the app</h2><p className="lead mx-auto">Real screenshots from SplitMate.</p></Reveal>
        <div className="mt-8 grid justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map(([s, t, d]) => (
            <figure key={t} className="grid gap-4"><Phone src={s} alt={`SplitMate ${t} screen`} /><figcaption><b>{t}</b><br /><span className="text-mu">{d}</span></figcaption></figure>
          ))}
        </div>
      </div>
    </section>
  )
}
