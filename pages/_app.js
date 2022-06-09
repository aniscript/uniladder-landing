import "../public/assets/css/styles.css";
import "../public//assets/css/globals.css";
import Head from "next/head";
import { ToastProvider } from "react-toast-notifications";

function MyApp({ Component, pageProps }) {
  return (
    <ToastProvider autoDismiss autoDismissTimeout={4000} placement="top-center">
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="title, meta, nextjs" />
        <meta name="author" content="Uniladder" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default MyApp;
