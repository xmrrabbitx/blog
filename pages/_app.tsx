import { useEffect } from 'react';
import TagManager from 'react-gtm-module'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './components/Layout'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    TagManager.initialize({ gtmId: 'G-HJM66QB6ZL' });
  }, []);

  return <Layout>
            <Component {...pageProps} />
        </Layout>
}
