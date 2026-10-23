import { ShieldCheck } from 'lucide-react'
import { PRIVACY_URL } from '../data/appContent'

export default function Disclaimer() {
  return (
    <section className="section border-y border-bd bg-white" aria-labelledby="d-h">
      <div className="wrap grid gap-10 md:grid-cols-2">
        <div>
          <h2 id="d-h" className="mb-3 font-display text-2xl font-extrabold">Disclaimer</h2>
          <p>SplitMate is intended to help users organize and track shared expenses. Users should verify expense calculations and balances before settling accounts. SplitMate does not guarantee repayment by other users. The application does not itself constitute a bank, payment processor, or financial adviser. Features and availability may change between versions.</p>
        </div>
        <div id="privacy">
          <h2 className="mb-3 flex items-center gap-2 font-display text-2xl font-extrabold"><ShieldCheck size={22} aria-hidden="true" /> Privacy and security</h2>
          <p className="mb-3">Never share your password with anyone, and avoid entering sensitive information that the app does not need. Use a password you do not use elsewhere.</p>
          <p className="text-mu">{PRIVACY_URL ? <a href={PRIVACY_URL}>Privacy policy</a> : 'Privacy policy: placeholder, to be completed before public launch.'}</p>
        </div>
      </div>
    </section>
  )
}
