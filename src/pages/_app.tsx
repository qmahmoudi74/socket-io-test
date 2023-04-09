import AppChakraProvider from "@/providers/AppChakraProvider";
import type { AppProps } from "next/app";
import type { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppChakraProvider>
      <Component {...pageProps} />
    </AppChakraProvider>
  );
};

export default App;
