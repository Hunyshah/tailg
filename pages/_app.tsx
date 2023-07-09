import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Sidenavigation from "./components/sidenavigation";
import Topnavigation from "./components/topnavigation";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className=" bg-zinc-900 text-white flex flex-col border-2 border-green-400 h-screen">
        <Topnavigation />
        <div className=" flex flex-1 border-2 border-yellow-300">
          <Sidenavigation />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
