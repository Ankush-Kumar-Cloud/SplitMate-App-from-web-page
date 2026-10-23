import { steps } from '../data/appContent'
import { Reveal } from './ui'

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="wrap">
        <Reveal>
          <h2 className="h2">How to use SplitMate</h2>
          <p className="lead">New to APKs? Android only asks for a permission because the app does not come from the Play Store. Install only APKs you trust.</p>
        </Reveal>
        <ol className="mt-10 grid gap-6">
          {steps.map(([t, d], i) => (
            <li key={t} className="relative pl-14 after:absolute after:bottom-[-1.4rem] after:left-[1.2rem] after:top-11 after:w-0.5 after:bg-bd last:after:hidden">
              <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full bg-dg font-semibold text-white">{i + 1}</span>
              <Reveal><h3 className="text-xl font-semibold">{t}</h3><p className="max-w-[60ch] text-mu">{d}</p></Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
