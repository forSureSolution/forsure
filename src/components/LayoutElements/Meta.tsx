import Head from 'next/head'

interface MetaProp {
    title?: string;
}

const Meta = ({title='ForSure'}:MetaProp) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <meta name="description" content="Software Solution Provider" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  )
}

export default Meta