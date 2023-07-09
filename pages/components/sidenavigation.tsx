import React from "react";
import { IconType } from "react-icons";
import { TfiYoutube } from "react-icons/tfi";
import { HiHome } from "react-icons/hi";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};

type IconsType = {
  icons: IconType;
  name: string;
  pathname: string;
};
const iconNames: Array<IconsType> = [
  {
    icons: HiHome,
    name: "Home",
    pathname: "/",
  },
  {
    icons: TfiYoutube,
    name: "shorts",
    pathname: "/shorts",
  },
];

const Sidenavigation = (props: Props) => {
  const pathName = usePathname();
  const router = useRouter();
  console.log(pathName + "<><><><><>");
  const handleClick = (item: IconsType) => {
    router.push(item.pathname);
  };
  return (
    <div className="border-2 border-indigo-400 p-[1px]">
      {iconNames.map((item) => {
        return (
          <div
            className={` flex flex-col cursor-pointer ${
              item.pathname === pathName && "bg-slate-500"
            }  gap-2 p-3 items-center `}
            onClick={() => {
              handleClick(item);
              console.log(item);
            }}
          >
            {<item.icons size={30} />}
            <span className="text-xs">{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Sidenavigation;
