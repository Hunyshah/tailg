import React from "react";
import Image from "next/image";
import { BsYoutube, BsMicFill, BsCameraVideo, BsBell } from "react-icons/bs";
import { BiMenu, BiSearch } from "react-icons/bi";
type Props = {};

const Topnavigation = (props: Props) => {
  return (
    <div className="flex justify-between p-4 border-2 border-red-500">
      <div className="flex items-center gap-6">
        <BiMenu size={26} />
        <div className="flex items-center gap-1">
          {" "}
          <BsYoutube size={30} className="text-red-600" />
          <span className="text-xl font-bold">Youtube</span>
        </div>
      </div>
      <div className="hidden  min-w-[300px] md:flex md:items-center lg:w-[500px] lg:items-center ">
        <input
          type="text"
          placeholder="search"
          className="px-4 py-2 w-full  bg-zinc-900 border-[1px] border-zinc-600
           placeholder:text-zinc-400 focus:bg-zinc-500 rounded-xl focus:ring-sky-500"
        />
        <div className="flex items-center gap-1">
          <div className=" p-4  ">
            <BiSearch size={20} />
          </div>
          <div className="">
            <BsMicFill size={20} />
          </div>
        </div>
      </div>

      <div className="flex  gap-3">
        <div className="flex items-center p-2">
          <BsCameraVideo size={20} />
        </div>
        <div className="flex items-center p-2">
          <BsBell size={20} />
        </div>
        <div className="flex items-center">
          <Image
            src="https://images.unsplash.com/photo-1685957198326-92172d999300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
            alt="bestprofile"
            width={30}
            height={30}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Topnavigation;
