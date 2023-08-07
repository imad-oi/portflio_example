import Nav from '@components/Nav';
import Head from 'next/head';

import '@styles/globals.css';

export const metaData = {
    title: 'Imad-Oissafe-full-stack',
    description: 'Imad Oissafe full stack developer portfolio',
}

const Rootlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <Head>
        {/* <title>Imad-Oissafe-full-stack</title>
        <meta
          name="description"
          content="Imad Oissafe full stack developer portfolio"
        /> */}
        <meta http-equiv="Content-Security-Policy" content="worker-src 'self' blob:" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <body >
        <div className='main'>
          <div className='gradient'/>
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}

export default Rootlayout