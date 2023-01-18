import Head from 'next/head';


export default function Layout({ children }) {
  return (
    <>
      <Head><div>
        <title>Para Cuando?</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </div>
      </Head>


      <h1>Layout</h1>
      <main>{children}</main>
      
    </>
  );
}