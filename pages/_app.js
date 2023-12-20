import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  console.log(getLayout);
  return getLayout(<Component {...pageProps} />);
}
