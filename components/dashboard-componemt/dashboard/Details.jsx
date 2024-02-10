import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import React from "react";
import { useGetBusQuery } from "@/services/dashboard";

const Details = () => {

  return (
    <div className="max-w-[1640px] mx-auto p-4 h-screen overflow-y-scroll">
      <span className="flex gap-2">
        <Link href="/dashboard" className="py-2" title="Back to dasjhboard">
          <GoArrowLeft className="w-8 h-8" /> {""}
        </Link>
        <h2 className="text-lg font-semibold mb-1 leading-none md:leading-[3rem]">
          Details-
          <span className="font-normal text-[1.3rem] text-[#7C8493]">ok</span>
        </h2>
      </span>
    </div>
  );
};

export default Details;
