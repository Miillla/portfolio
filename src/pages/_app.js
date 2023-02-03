// import "@/styles/globals.css";
import Theme from "@/styles/theme";

export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}
