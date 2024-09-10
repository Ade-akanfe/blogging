"use client";

import Search from "@/assets/search";

function HeaderComponent() {
  return (
    <div className="w-full h-auto relative bg-gradient-to-b bg-red-950 py-8 ">
      <div className="w-full h-full relative z-30 flex justify-between items-center flex-row">
        <div className="font-bold text-xl w-4/12 text-center animate md:text-4xl">
          <span className="cursor-pointer">A</span>
          <span className="cursor-pointer">D</span>
          <span className="cursor-pointer">E</span>
          <span className="cursor-pointer">M</span>
          <span className="cursor-pointer">O</span>
          <span className="cursor-pointer">L</span>
          <span className="cursor-pointer">A</span>
        </div>
        <nav className="w-3/5 md:w-2/12">
          <ul className="flex w-full flex-row justify-end gap-4 md:gap-0 md:justify-evenly text-white items-center">
            <li className="animate w-2/12 md:w-auto cursor-pointer font-bold text-base md:text-2xl h-auto">
              Post
            </li>
            <li className="animate w-2/12 md:w-auto cursor-pointer font-bold text-xl md:text-2xl h-auto ">
              <Search />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeaderComponent;
