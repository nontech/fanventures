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
import Layout from '../components/landing_page_v2/Layout'
import Hero from '../components/landing_page_v2/sections/Hero'
import ContentCreators from '../components/landing_page_v2/sections/ContentCreators'
import Fans from '../components/landing_page_v2/sections/Fans'
import Benefits from '../components/landing_page_v2/sections/Benefits'
import CategoryCards from '../components/landing_page_v2/sections/JoinUs'
// import FAQ from '../components/landing_page_v2/sections/FAQ'
import Subscribe from '../components/landing_page_v2/sections/Subscribe'
import ContactUs from '../components/landing_page_v2/sections/ContactUs'
import SocialMedia from '../components/landing_page_v2/sections/SocialMedia'


const Page: NextPageWithLayout = () => {
  return (
    <div className="p-40">
      {/* Landing Page v1 */}
      {/* <Hero />
      <Metrics />
      <TrendingNow />
      <HowItWorks />
      <Benefits />
      <Subscribe /> */}

      {/* Landing Page v2 */}
      <Hero />
      <ContentCreators />
      <Fans />
      <Benefits />
      <CategoryCards />
      {/* <FAQ /> */}
      <Subscribe />
      <ContactUs />
      <SocialMedia />
    </div>
  )
}

// page level layout
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page