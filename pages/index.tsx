// import React from "react"
// import { GetStaticProps } from "next"
// import Layout from "../components/landing_page/Layout"
// import Post, { PostProps } from "../components/landing_page/Post"

// export const getStaticProps: GetStaticProps = async () => {
//   const feed = [
//     {
//       id: "1",
//       title: "Prisma is the perfect ORM for Next.js",
//       content: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
//       published: false,
//       author: {
//         name: "Nikolas Burk",
//         email: "burk@prisma.io",
//       },
//     },
//   ]
//   return { 
//     props: { feed }, 
//     revalidate: 10 
//   }
// }

// type Props = {
//   feed: PostProps[]
// }

// const Blog: React.FC<Props> = (props) => {
//   return (
//     <Layout>
//       <div className="page">
//         <h1>Public Feed</h1>
//         <main>
//           {props.feed.map((post) => (
//             <div key={post.id} className="post">
//               <Post post={post} />
//             </div>
//           ))}
//         </main>
//       </div>
//       <style jsx>{`
//         .post {
//           background: white;
//           transition: box-shadow 0.1s ease-in;
//         }

//         .post:hover {
//           box-shadow: 1px 1px 3px #aaa;
//         }

//         .post + .post {
//           margin-top: 2rem;
//         }
//       `}</style>
//     </Layout>
//   )
// }

// export default Blog

import type { ReactElement } from 'react'
import Layout from '../components/landing_page/Layout'
import type { NextPageWithLayout } from './_app'

import Hero from '../components/landing_page/sections/Hero'
import Metrics from '../components/landing_page/sections/Metrics'
import TrendingNow from '../components/landing_page/sections/TrendingNow'
import HowItWorks from '../components/landing_page/sections/HowItWorks'
import Benefits from '../components/landing_page/sections/Benefits'
import Subscribe from '../components/landing_page/sections/Subscribe'

const Page: NextPageWithLayout = () => {
  return (
    <div className="p-40">
      <Hero />
      <Metrics />
      <TrendingNow />
      <HowItWorks />
      <Benefits />
      <Subscribe />
    </div>
  )
}

// page level layout
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page