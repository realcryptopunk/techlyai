import '../styles/globals.css'
import Header from '../src/lib/components/Header'
import type { AppProps } from 'next/app'
import Layout from '../src/lib/components/layout/layout'
import * as React from 'react'
import theme from '../styles/customTheme/theme'
import Footer from '../src/lib/components/Footer'

import { ChakraProvider, Container } from '@chakra-ui/react'




function MyApp({ Component, pageProps }: AppProps) {
  return (

    <ChakraProvider theme={theme}>
     
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>

  )
}

export default MyApp
