import "@/styles/globals.css";
import RootLayout from "@/Layout";





export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
     
      <Component {...pageProps} />
    </RootLayout>
  );
}
