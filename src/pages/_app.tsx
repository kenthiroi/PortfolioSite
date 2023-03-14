import '@/styles/globals.css'
import SideNav from '@/components/sideNav'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <SideNav/>
    <Component {...pageProps} />
  </>
}
