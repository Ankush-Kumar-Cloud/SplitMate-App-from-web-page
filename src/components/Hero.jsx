import { DownloadButton } from './ui'

export function Phone({ src, alt }) {
  return (
    <div className="mx-auto aspect-[9/19] w-[min(260px,70vw)] overflow-hidden rounded-[38px] border-[9px] border-ink bg-bg shadow-2xl shadow-dg/40">
      <img src={src} alt={alt} loading="lazy" className="block h-full w-full object-cover object-top" />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="bg-[radial-gradient(60%_50%_at_85%_20%,#D1FAE5,transparent)] py-12 md:py-20">
      <div className="wrap grid items-center gap-12 md:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="mb-4 font-semibold text-g">Every expense. Fairly split. Stress-free.</p>
          <h1 className="font-extrabold text-dg text-[clamp(2.4rem,8vw,4.6rem)]">Split Expenses. Keep Friendships Simple.</h1>
          <p className="lead mt-5">Track shared expenses, organize group spending, and make splitting bills easier with SplitMate.</p>
          <div className="flex flex-wrap gap-3.5">
            <DownloadButton label="Download for Android" />
            <a className="btn btn-ghost" href="#features">Explore Features</a>
          </div>
        </div>
        <div className="animate-bob motion-reduce:animate-none">
          <Phone src="/shots/expenses.png" alt="SplitMate expenses screen for a Roommates group, showing per-member monthly totals" />
        </div>
      </div>
    </section>
  )
}
