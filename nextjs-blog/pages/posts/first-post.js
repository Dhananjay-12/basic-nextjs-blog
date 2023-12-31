import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

import AppLayout from "../../components/AppLayout";

function FirstPost() {
  return (
    <AppLayout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </AppLayout>
  );
}

export default FirstPost;
