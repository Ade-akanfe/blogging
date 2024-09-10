"use client";

import Search from "@/assets/search";
import Link from "next/link";

function HeaderComponent() {
  return (
    <div className="w-full h-14 lg:h-20 relative bg-gradient-to-b bg-red-950 ">
      <div className="w-full h-full relative z-30 flex justify-between items-center flex-row">
        <div className="font-bold text-lg w-4/12 text-center animate lg:text-4xl">
          <span className="cursor-pointer">A</span>
          <span className="cursor-pointer">D</span>
          <span className="cursor-pointer">E</span>
          <span className="cursor-pointer">M</span>
          <span className="cursor-pointer">O</span>
          <span className="cursor-pointer">L</span>
          <span className="cursor-pointer">A</span>
        </div>
        <nav className="w-3/5 lg:w-2/12">
          <ul className="flex w-full flex-row justify-end gap-4 lg:gap-0 lg:justify-evenly text-white items-center">
            <li className="animate w-2/12 lg:w-auto cursor-pointer font-bold text-base lg:text-2xl h-auto">
              <Link href={"/new"}>Post</Link>
            </li>
            <li className=" w-2/12 lg:w-auto cursor-pointer font-bold text-xl lg:text-2xl h-5 lg:h-7 flex items-center ">
              <Link href={"/about"} className="animate h-full flex items-center">
                <Search />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeaderComponent;
