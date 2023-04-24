import { useState } from "react";
import AppProvider from "../contexts/AppProvider";
import { ReloadContext } from "../contexts/ReloadContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [reload, setReload] = useState(false);

  return (
    <ReloadContext.Provider value={{ reload, setReload }}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ReloadContext.Provider>
  );
}

export default MyApp;
