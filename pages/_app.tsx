import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Layout from '../src/lib/components/layout/layout'
import * as React from 'react'
import theme from '../styles/customTheme/theme'
import Footer from '../src/lib/components/Footer'
import Heropage from '../src/lib/components/Heropage'


import { ChakraProvider } from '@chakra-ui/react'




function MyApp({ Component, pageProps }: AppProps) {
  return (

    <ChakraProvider theme={theme}>
   
      <Layout >
     
        <Component {...pageProps} />


      </Layout>
    
    </ChakraProvider>

  )
}

export default MyApp
