import { steps } from '../data/appContent'
import { Reveal } from './ui'
import { DownloadButton } from './ui'
import { CheckCircle2, ShieldCheck } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section id="how" className="section bg-white/40">
      <div className="wrap">
        <Reveal>
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-semibold text-dg">
            <CheckCircle2 size={16} />
            <span>Easy 2-Minute Setup</span>
          </div>
          <h2 className="h2 text-dg">How to Use SplitMate on Your Phone</h2>
          <p className="lead text-gray-600">
            Installing and using SplitMate is as simple as sending a WhatsApp message. Follow these 4 easy steps:
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([t, d], i) => (
            <Reveal key={t} className="h-full">
              <div className="relative flex h-full flex-col rounded-3xl border border-bd bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-dg font-display text-base font-bold text-white mb-4">
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold text-ink mb-2">{t}</h3>
                <p className="text-sm leading-relaxed text-mu">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <ShieldCheck size={26} className="text-g shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-dg text-sm sm:text-base">First time installing an APK file?</h4>
                <p className="text-xs sm:text-sm text-gray-700 mt-0.5">
                  When you open the downloaded file, Android may ask: <em>&ldquo;Allow installs from this source&rdquo;</em>. Simply switch it on and tap <strong>Install</strong>. The app is completely safe and free.
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <DownloadButton label="Download APK Now" className="!min-h-[44px] text-sm" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
