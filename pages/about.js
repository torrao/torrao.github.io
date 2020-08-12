import Head from "next/head";

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/">
          <h1 className="title">About!</h1>
        </Link>
      </main>
    </div>
  );
}
