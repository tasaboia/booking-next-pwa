import React from "react";
import App, { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("Service worker registered: ", registration);
          })
          .catch((registrationError) => {
            console.log(
              "Service worker registration failed: ",
              registrationError
            );
          });
      });
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
