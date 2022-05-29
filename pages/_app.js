import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { store } from "./api/store";
import { MoralisProvider } from "react-moralis";

const MORALIS_SERVER_URL = "https://jshyqqfghgpe.usemoralis.com:2053/server";
const MORALIS_APP_ID = "OAzaBFb2SaCOBy25zzOrdtdoSy1xu5hbrYrEf5LG";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider serverUrl={MORALIS_SERVER_URL} appId={MORALIS_APP_ID}>
      <Provider store={store}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </MoralisProvider>
  );
}

export default MyApp;
