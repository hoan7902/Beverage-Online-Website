import { Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <>
      <Head>
        <title>Jucify</title>
        <link rel="icon" href="/icon-glass-tea.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </>
  );
}
