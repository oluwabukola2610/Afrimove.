"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarData } from "./SidebarData";

const SideBar = () => {
  const router = usePathname();
  return (
    <div className="drawer-side z-10">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <aside className="flex flex-col  space-y-8 w-[5.4rem] h-screen overflow-hidden shadow-xl bg-[#F7F8FA] border-r border-r-gray-200 py-2 overflow-y-scroll">
        <div className="flex flex-col gap-[35px] mt-20">
          {SidebarData.map((data, index) => (
            <Link href={data.key} key={index}>
              <div className="relative flex items-center justify-between">
                <div
                  className={`${
                    router === data.key
                      ? "border-r-[3px]  border-r-blue-500 h-full w-full flex justify-center"
                      : "flex justify-center h-full w-full"
                  }`}
                >
                 <div
                    className={`tooltip tooltip-top z-[1] font-medium ${
                      router === data.key ? "text-blue-500" : "text-gray-400"
                    }`}
                    data-tip={data.label}
                  >
                    {data.icon}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* <div className="flex flex-col gap-[25px] py-2 items-center mt-auto ">
          <ArrowRight />
          <Setting2 />
          <Logout />
        </div> */}
      </aside>
    </div>
  );
};

export default SideBar;
