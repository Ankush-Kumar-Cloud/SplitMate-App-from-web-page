import { MessageCircle, Mail, PhoneCall, HelpCircle, HeartHandshake } from 'lucide-react'
import { CONTACT_EMAIL, CONTACT_WHATSAPP, WHATSAPP_LINK } from '../data/appContent'
import { Reveal } from './ui'

export default function SupportSection() {
  return (
    <section id="support" className="section bg-gradient-to-b from-white to-emerald-50/50">
      <div className="wrap">
        <Reveal className="text-center max-w-[700px] mx-auto">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-semibold text-dg sm:text-sm">
            <HeartHandshake size={16} />
            <span>Direct Developer Support</span>
          </div>
          <h2 className="h2 text-dg">Facing Any Problem in the App?</h2>
          <p className="lead mx-auto text-gray-600">
            If you face any difficulty, bug, error, or have questions while using SplitMate, contact us directly. We are always happy to help!
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-[900px] mx-auto">
          {/* WhatsApp Card */}
          <Reveal className="h-full">
            <div className="flex h-full flex-col justify-between rounded-3xl border-2 border-emerald-500/30 bg-white p-7 shadow-lg shadow-emerald-500/5 transition hover:-translate-y-1 hover:border-emerald-500 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-500 text-white shadow-md shadow-emerald-500/30">
                    <MessageCircle size={28} />
                  </span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-dg">
                    Fastest Reply
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-bold text-ink">WhatsApp Support</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Message us on WhatsApp for any app issue, installation problem, or advice on how to use SplitMate.
                </p>
                <div className="mt-4 flex items-center gap-2 text-lg font-bold text-dg">
                  <PhoneCall size={18} className="text-emerald-600" />
                  <span>+91 {CONTACT_WHATSAPP}</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-bd">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[50px] w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 font-bold text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700 transition"
                >
                  <MessageCircle size={20} />
                  <span>Chat on WhatsApp ({CONTACT_WHATSAPP})</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Email Card */}
          <Reveal className="h-full">
            <div className="flex h-full flex-col justify-between rounded-3xl border border-bd bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-g/40 hover:shadow-xl">
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-dg text-white shadow-md">
                    <Mail size={28} />
                  </span>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                    Direct Email
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-bold text-ink">Email Developer</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Send screenshots of errors or detailed messages directly to Ankush Kumar.
                </p>
                <div className="mt-4 flex items-center gap-2 text-base font-semibold text-dg break-all">
                  <Mail size={18} className="text-g shrink-0" />
                  <span>{CONTACT_EMAIL}</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-bd">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=SplitMate%20App%20Issue%20or%20Feedback`}
                  className="btn btn-ghost flex min-h-[50px] w-full items-center justify-center gap-2 rounded-2xl border-2 border-bd text-ink hover:border-dg hover:text-dg font-bold transition"
                >
                  <Mail size={20} />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-8 text-center text-xs sm:text-sm text-mu">
          <p>
            Developed with dedication by <strong>Ankush Kumar</strong> · We respond to all users so your hisab-kitab runs smoothly!
          </p>
        </Reveal>
      </div>
    </section>
  )
}
