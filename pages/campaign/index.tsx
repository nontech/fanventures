import type { ReactElement } from 'react'
import Layout from '../../components/campaign/create/Layout'
import type { NextPageWithLayout } from '../_app'
import React from 'react'

const Page: NextPageWithLayout = () => {
  return <p> Campaign Page </p>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page