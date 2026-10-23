import { DownloadButton, Reveal } from './ui'

export default function DownloadSection() {
  return (
    <section id="download" className="section">
      <div className="wrap">
        <Reveal className="grid justify-items-center gap-5 rounded-[2rem] bg-gradient-to-br from-dg to-g p-8 text-center text-white sm:p-16">
          <h2 className="max-w-[18ch] text-3xl font-extrabold sm:text-5xl">Start Splitting Expenses the Smarter Way.</h2>
          <p className="max-w-[50ch] opacity-90">The APK is hosted on Expo’s artifact domain (expo.dev). Install only apps from sources you trust.</p>
          <DownloadButton className="!min-h-[60px] !bg-white !text-dg text-xl hover:!bg-mint [&_small]:!bg-dg/10" />
        </Reveal>
      </div>
    </section>
  )
}
