import '@/styles/globals.css'
import React,{Fragment} from 'react'
export default function App({ Component, pageProps }) {
  return <Component{...pageProps} />
}
