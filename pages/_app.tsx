// import { AppProps } from "next/app";

// // These styles apply to every route in the application
// import '../globals.css'

// const App = ({ Component, pageProps }: AppProps) => {
//   return (
//     <Component {...pageProps} />
//   );
// };

// export default App;

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

// These styles apply to every route in the application
import '../globals.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<PageTransitionEvent, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}