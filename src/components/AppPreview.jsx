import { useState } from 'react'
import { Phone } from './Hero'
import { Reveal } from './ui'
import { CheckCircle2, ChevronRight, Sparkles, QrCode } from 'lucide-react'

const screensData = [
  {
    id: 'groups',
    tab: '1. Your Groups Dashboard',
    title: 'Your Groups & Easy QR / Code Joining',
    src: '/screens/groups.png',
    alt: 'SplitMate Your Groups dashboard showing Roomates group with 4 members, group code 66ZBJC, QR Scan, and Join buttons',
    points: [
      'Your Groups Home: See all your groups in one place (e.g. Roomates, 4 members).',
      '📷 QR Scanner: Tap "Scan" to instantly join your friends with a quick camera scan.',
      '👥 Join by 6-Digit Code: Roommates can easily join by entering the group code (like 66ZBJC).',
      '➕ Create New Group: Tap "+ New" anytime to create a group for your room, mess, or trip.',
    ],
    simpleNote: 'The main home screen: easily create room groups or join friends in seconds with a 6-digit code or QR scan.',
    badge: '⭐ Main Home Screen',
  },
  {
    id: 'dashboard',
    tab: '2. Kharcha Dashboard',
    title: 'Daily Kharcha & Member Totals',
    src: '/screens/dashboard.png',
    alt: 'SplitMate Expense Dashboard showing Roommates group total ₹3,274, MR. John ₹1,125, and daily items like Pani, Shem, Soyabin and Gass 2kg',
    points: [
      'Top cards show how much each roommate spent this month (MR. John ₹1,125, Mr. Yag ₹595, Mr. Kish ₹1,234).',
      'Shows exact items with price: e.g. "Pani, Shem, Soyabin ₹75", "Gass 2kg ₹140".',
      'One tap on the big green (+) button to add any new expense.',
      'Includes Edit and Delete buttons for every expense entry.',
    ],
    simpleNote: 'Everything your room buys is listed clearly under each person’s name.',
    badge: 'Expense List',
  },
  {
    id: 'monthly',
    tab: '3. Mahine Ka Hisab',
    title: 'Monthly Summary & Equal Share',
    src: '/screens/monthly-summary.png',
    alt: 'SplitMate Monthly Summary screen showing Group Total ₹3,274, Per Person share ₹819, and Green/Red balance for each member',
    points: [
      'Total Group Expense: shows the full month spend (₹3,274 for 4 members).',
      'Per Person Share: divides equally (₹819 per person) automatically.',
      'Green (+₹) badge: shows members who spent more and will GET money back (+₹307, +₹416).',
      'Red (-₹) badge: shows members who spent less and NEED to pay (-₹223).',
    ],
    simpleNote: 'See in 1 second who has to pay and who will get money back. No calculator needed!',
    badge: 'Equal Share',
  },
  {
    id: 'activity',
    tab: '4. Roz Ka Kharcha',
    title: 'Daily Timeline of Every Purchase',
    src: '/screens/activity.png',
    alt: 'SplitMate Activity Timeline screen showing day-by-day expenses for gobi, onion, salt, chat masala, and 2kg gas cylinder',
    points: [
      'Date-wise history: see what was bought on Tuesday 27 Oct, Monday 26 Oct, Sunday 25 Oct.',
      'Records daily essentials: Gobi & onion (₹35), Salt (₹32), Chat masala (₹10), Gas refill (₹200).',
      'Tags each item with category like [Food] with exact time (e.g. 10:43 pm).',
      'Mentions sharing details (e.g. "Partition with Mr. Yag").',
    ],
    simpleNote: 'Full date-wise passbook of daily sabzi, milk, spices, and cylinder bills.',
    badge: 'Daily Passbook',
  },
  {
    id: 'settlement',
    tab: '5. Hisab Chuta',
    title: 'Direct Settlement (Who Pays Whom)',
    src: '/screens/settlement.png',
    alt: 'SplitMate Settlement screen showing Anjum Akhtar pays Naushad ₹179 and ANKUSH pays Naushad ₹79 with Mark Paid button',
    points: [
      'Minimum Payments: avoids everyone sending money to everyone else.',
      'Direct instructions: "Anjum Akhtar pays Naushad ₹179", "ANKUSH pays Naushad ₹79".',
      '1-Tap "Mark Paid" button: tap it when your friend pays you in Cash or via PhonePe / GPay / Paytm.',
      'No middleman: 100% of the money is paid directly between friends.',
    ],
    simpleNote: 'Clear hisab with minimum transactions so nobody pays an extra rupee.',
    badge: 'Settle Up',
  },
]

export default function AppPreview() {
  const [activeTab, setActiveTab] = useState(0)
  const active = screensData[activeTab]

  return (
    <section id="screens" className="section border-y border-bd bg-white">
      <div className="wrap">
        <Reveal className="text-center">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-semibold text-dg sm:text-sm">
            <Sparkles size={16} />
            <span>Real Android Screenshots (5 Key Screens)</span>
          </div>
          <h2 className="h2 text-dg">See Exactly How SplitMate Works</h2>
          <p className="lead mx-auto text-gray-600">
            From creating your room group and scanning QR codes to daily expenses, equal sharing, and settlement.
          </p>
        </Reveal>

        {/* Tab Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {screensData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition ${
                activeTab === idx
                  ? 'bg-dg text-white shadow-md'
                  : 'bg-bg text-ink hover:bg-emerald-50 hover:text-dg'
              }`}
            >
              {item.tab}
            </button>
          ))}
        </div>

        {/* Featured Interactive Spotlight */}
        <div className="mt-10 rounded-3xl border border-bd bg-bg/60 p-6 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_1.1fr]">
            <div className="flex justify-center">
              <Phone
                src={active.src}
                alt={active.alt}
                className="shadow-xl"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-g">
                  Screen {activeTab + 1} of {screensData.length}
                </span>
                <span className="rounded-full bg-emerald-200/80 px-2.5 py-0.5 text-[0.7rem] font-bold text-dg">
                  {active.badge}
                </span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-extrabold text-dg sm:text-3xl">
                {active.title}
              </h3>
              <p className="mt-3 rounded-xl bg-white p-3.5 text-sm font-medium text-emerald-950 border border-emerald-100 shadow-sm leading-relaxed">
                💡 {active.simpleNote}
              </p>

              <ul className="mt-5 space-y-3">
                {active.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-700">
                    <CheckCircle2 size={18} className="shrink-0 text-g mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a href="#download" className="btn btn-primary text-sm sm:text-base !py-2.5">
                  Download This App Free
                </a>
                <button
                  onClick={() => setActiveTab((activeTab + 1) % screensData.length)}
                  className="btn btn-ghost text-sm sm:text-base !py-2.5"
                >
                  <span>Next Screen</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Screen Overview Cards */}
        <div className="mt-16">
          <h3 className="text-center font-display text-xl font-bold text-dg sm:text-2xl mb-8">
            Browse All 5 App Screens
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {screensData.map((item, idx) => (
              <article
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`cursor-pointer rounded-2xl border p-3.5 text-center transition hover:-translate-y-1 hover:shadow-lg ${
                  activeTab === idx
                    ? 'border-g bg-emerald-50/60 shadow-md ring-2 ring-g/30'
                    : 'border-bd bg-white'
                }`}
              >
                <div className="mx-auto aspect-[9/19] w-[125px] overflow-hidden rounded-[18px] border-[5px] border-ink bg-white shadow-md mb-3">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="block h-full w-full object-cover object-top"
                  />
                </div>
                <h4 className="font-bold text-ink text-xs sm:text-sm line-clamp-1">{item.tab}</h4>
                <p className="mt-1 text-[0.75rem] text-mu line-clamp-2">{item.simpleNote}</p>
                <span className="mt-2 inline-block text-[0.7rem] font-bold text-g">
                  {activeTab === idx ? '● Currently Selected' : 'Tap to View'}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
