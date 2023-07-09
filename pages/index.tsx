import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>this is homePage</div>
    </>
    // <>
    //   <p className="bg-slate-600 text-indigo-200 font-bold">
    //     {" "}
    //     Bsics information about who i want to achive the section{" "}
    //   </p>
    //   <div className="flex flex-col  items-center justify-center h-screen ">
    //     <h2 className=" text-fuchsia-300 text-2xl font-bold capitalize cursor-pointer">
    //       my name honey
    //     </h2>
    //     <h3> and now working on tailwind</h3>
    //   </div>
    //</>
  );
}
