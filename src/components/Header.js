import { useState } from "react";

export default function Header() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <div className="w-100% h-10 flex flex-coljustify-around items-center font-open-sans tracking-widest bg-[#17408b] text-white font-bold ">
        <div
          className="flex flex-col gap-y-[4px] p-2 md:hidden"
          onClick={() => {
            setShowSideBar(true);
          }}
        >
          <div className="bg-white h-[2px] w-[16px]"></div>
          <div className="bg-white h-[2px] w-[16px]"></div>
          <div className="bg-white h-[2px] w-[16px]"></div>
        </div>
        <div className="hidden w-full md:flex">
          <a className="hover:bg-white hover:text-[#17408b] h-full flex justify-center items-center w-[100%] duration-300 cursor-pointer">
            Events
          </a>
          <a className="hover:bg-white hover:text-[#17408b] h-full flex justify-center items-center w-[100%] duration-300 cursor-pointer">
            Travel
          </a>
          <a className="hover:bg-white hover:text-[#17408b] h-full flex justify-center items-center w-[100%] duration-300 cursor-pointer">
            Teams
          </a>
          <a className="hover:bg-white hover:text-[#17408b] h-full flex justify-center items-center w-[100%] duration-300 cursor-pointer">
            Stats
          </a>
        </div>
      </div>
      <div
        className={
          showSideBar
            ? "absolute top-0 left-0 h-[100%] bg-[#17408b] w-[200px] z-50 text-white"
            : "hidden"
        }
      >
        <div className="flex flex-col gap-y-[4px] p-2 md:hidden">
          <div
            className="text-xl"
            onClick={() => {
              setShowSideBar(false);
            }}
          >
            x
          </div>
        </div>
        <div className="flex flex-col justify-start items-center h-[50%] py-3">
          <a className="hover:bg-white hover:text-[#17408b] py-3 flex justify-center items-center w-[100%] duration-300 cursor-pointer">
            Events
          </a>
          <a className="hover:bg-white hover:text-[#17408b] py-3 flex justify-center items-center w-[100%] duration-300 cursor-pointer">
            Travel
          </a>
          <a className="hover:bg-white hover:text-[#17408b] py-3 flex justify-center items-center w-[100%] duration-300 cursor-pointer">
            Teams
          </a>
          <a className="hover:bg-white hover:text-[#17408b] py-3 flex justify-center items-center w-[100%] duration-300 cursor-pointer">
            Stats
          </a>
        </div>
      </div>
    </>
  );
}
