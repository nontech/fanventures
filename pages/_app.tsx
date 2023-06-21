import { AppProps } from "next/app";

// These styles apply to every route in the application
import '../globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  );
};

export default App;
