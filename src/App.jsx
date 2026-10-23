import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import AppPreview from './components/AppPreview'
import DownloadSection from './components/DownloadSection'
import Disclaimer from './components/Disclaimer'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (<><a className="skip" href="#main-content">Skip to content</a><Navbar /><main id="main-content"><Hero /><Problems /><Features /><HowItWorks /><AppPreview /><DownloadSection /><Disclaimer /><FAQ /></main><Footer /></>)
}
