import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";
import "../css/tailwind.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
