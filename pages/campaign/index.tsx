import type { ReactElement } from 'react'
import Layout from '../../components/campaign/create/Layout'
import type { NextPageWithLayout } from '../_app'
import React from 'react'

const Page: NextPageWithLayout = () => {
  // content of this page - handled by <SideNav> inside <Layout>
  return <></>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page