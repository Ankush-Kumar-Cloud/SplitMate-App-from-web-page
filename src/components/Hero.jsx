import { DownloadButton } from './ui'
import { CheckCircle, ShieldCheck, Smartphone } from 'lucide-react'

export function Phone({ src, alt, className = '' }) {
  return (
    <div className={`mx-auto aspect-[9/19] w-[min(290px,80vw)] overflow-hidden rounded-[38px] border-[9px] border-ink bg-white shadow-2xl shadow-dg/30 transition-transform hover:scale-[1.01] ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="block h-full w-full object-cover object-top" />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[radial-gradient(60%_50%_at_85%_20%,#D1FAE5,transparent)] py-12 md:py-20">
      <div className="wrap grid items-center gap-12 md:grid-cols-[1.1fr_.9fr]">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3.5 py-1.5 text-xs font-semibold text-dg sm:text-sm">
            <Smartphone size={16} />
            <span>100% Free Android App for Roommates & Friends</span>
          </div>

          <h1 className="font-extrabold text-dg text-[clamp(2.2rem,6.5vw,4.2rem)] leading-[1.15]">
            Split Room Expenses Without Any Headache.
          </h1>

          <p className="lead mt-5 text-gray-700">
            No more fights or confusion over sabzi, gas cylinder, ration, milk, or room rent. SplitMate remembers every rupee, divides the bill equally, and tells you exactly who has to pay whom.
          </p>

          <div className="flex flex-wrap gap-3.5">
            <DownloadButton label="Download Free Android App" />
            <a className="btn btn-ghost" href="#screens">See Screenshots</a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-bd/70 pt-6 text-sm text-mu">
            <div className="flex items-center gap-1.5">
              <CheckCircle size={17} className="text-g" />
              <span>100% Free Forever</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={17} className="text-g" />
              <span>No Bank Account Needed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle size={17} className="text-g" />
              <span>Direct Cash / UPI Settlement</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="animate-bob motion-reduce:animate-none">
            <Phone
              src="/screens/dashboard.png"
              alt="SplitMate Roommates Expense Dashboard showing member spending like MR. John, Mr. Yag and food expenses like sabzi and gas cylinder"
            />
          </div>
          <p className="mt-4 text-xs font-medium text-mu sm:text-sm">
            Actual screenshot: Roommates Group (Oct '26 Total ₹3,274)
          </p>
        </div>
      </div>
    </section>
  )
}
