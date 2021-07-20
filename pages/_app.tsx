
import { Store, StoreProvider } from 'easy-peasy';
import store from '../store'

import '../styles/reset.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
// let mainStore = window !== undefined ? store : null

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <StoreProvider store={store as Store}>
      <div>
        <Component {...pageProps} />
        <style jsx global>{`
              html,
              body {
                font-weight: 400;
                line-height: 1.2;
                font-family: 'Asap', sans-serif;
                zoom: 0.95;
              }

              * {
                box-sizing: border-box;
              }
            `
          }
        </style>
      </div>
    </StoreProvider>
  )
}
export default MyApp
