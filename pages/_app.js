import "@/styles/globals.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/geologica";

import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      forcedTheme="dark"
      enableSystem
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
