import { ShieldCheck, Info } from 'lucide-react'
import { PRIVACY_URL } from '../data/appContent'

export default function Disclaimer() {
  return (
    <section className="section border-y border-bd bg-white" aria-labelledby="d-h">
      <div className="wrap grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-bd bg-bg/50 p-6">
          <h2 id="d-h" className="mb-3 flex items-center gap-2 font-display text-xl sm:text-2xl font-extrabold text-dg">
            <Info size={22} className="text-g shrink-0" aria-hidden="true" />
            Important Note on Payments
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700">
            SplitMate is a digital notebook to organize and record shared expenses between friends and roommates.
            SplitMate is <strong>not a bank or payment processor</strong>, and it never connects to your bank account or cuts money.
            You settle payments directly with your friends via <strong>Cash or your preferred UPI app</strong> (PhonePe, Google Pay, Paytm). Please verify calculations with your group members before settling.
          </p>
        </div>

        <div id="privacy" className="rounded-2xl border border-bd bg-bg/50 p-6">
          <h2 className="mb-3 flex items-center gap-2 font-display text-xl sm:text-2xl font-extrabold text-dg">
            <ShieldCheck size={22} className="text-g shrink-0" aria-hidden="true" />
            Your Privacy & Safety
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-gray-700 mb-3">
            Your expense details are safe with your group. Never share your account password with anyone, and never enter sensitive information like bank passwords, ATM PINs, or OTPs. SplitMate will never ask for bank or card details.
          </p>
          <p className="text-xs sm:text-sm text-mu">
            {PRIVACY_URL ? (
              <a href={PRIVACY_URL} className="text-g font-semibold underline">Read Privacy Policy</a>
            ) : (
              'SplitMate respects user privacy and data security.'
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
