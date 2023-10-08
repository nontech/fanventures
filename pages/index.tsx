import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

// Components -> Landing page
// import Layout from '../components/landing_page/Layout'
// import Hero from '../components/landing_page/sections/Hero'
// import Metrics from '../components/landing_page/sections/Metrics'
// import TrendingNow from '../components/landing_page/sections/TrendingNow'
// import HowItWorks from '../components/landing_page/sections/HowItWorks'
// import Benefits from '../components/landing_page/sections/Benefits'
// import Subscribe from '../components/landing_page/sections/Subscribe'

// Components -> Landing page V2

// This layout just consists children and not navbar or footer
// Navbar & Footer as separate components, not inside Layout
import Layout from '../components/landing_page_v2/Layout'
// Section 1
import Navbar from '../components/landing_page_v2/sections/Navbar'
// Section 2
import Hero from '../components/landing_page_v2/sections/Hero'
// Section 3: Sneak Peek (Image file)
import SneakPeek from '../components/landing_page_v2/sections/SneakPeek'
// Section 4: Platform Benefits
import Benefits from '../components/landing_page_v2/sections/Benefits'
// Section 5
import ContactUs from '../components/landing_page_v2/sections/ContactUs'
// Section 6: Contains social media links & subscribe
import Footer from '../components/landing_page_v2/sections/Footer'

const Page: NextPageWithLayout = () => {
  return (
    <div className="pr-40 pl-40">
      {/* Landing Page v1 */}
      {/* <Hero />
      <Metrics />
      <TrendingNow />
      <HowItWorks />
      <Benefits />
      <Subscribe /> */}

      {/* Landing Page v2 */}
      <Navbar />
      <Hero />
      <SneakPeek />
      <Benefits />
      <ContactUs />
      <Footer />
    </div>
  )
}

// page level layout
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page