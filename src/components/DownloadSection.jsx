import { DownloadButton, Reveal } from './ui'
import { CheckCircle2 } from 'lucide-react'

export default function DownloadSection() {
  return (
    <section id="download" className="section">
      <div className="wrap">
        <Reveal className="grid justify-items-center gap-6 rounded-[2.5rem] bg-gradient-to-br from-dg via-dg to-g p-8 text-center text-white shadow-2xl sm:p-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-mint backdrop-blur-sm">
            Free Android APK Download
          </div>

          <h2 className="max-w-[20ch] font-display text-3xl font-extrabold sm:text-5xl leading-tight">
            Make Your Room & Group Hisab 100% Tension-Free.
          </h2>

          <p className="max-w-[52ch] text-base sm:text-lg text-emerald-50 opacity-95 leading-relaxed">
            Download SplitMate directly to your Android phone today. Track daily expenses for sabzi, ration, gas cylinder, room rent, and trips with all your friends.
          </p>

          <div className="mt-2">
            <DownloadButton
              label="Download Free Android APK"
              className="!min-h-[60px] !bg-white !text-dg text-lg sm:text-xl font-bold shadow-xl hover:!bg-mint [&_small]:!bg-dg/10"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-3 text-xs sm:text-sm text-emerald-100">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-mint" /> 100% Free Forever
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-mint" /> Safe & Virus-Free
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-mint" /> Settle by Cash or UPI
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
