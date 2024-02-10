import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import React, { useEffect } from "react";

import { useGetBusDetailsMutation } from "@/services/dashboard";

const Details = ({ id }) => {
  const [getBusDetails, { data, isLoading }] =
    useGetBusDetailsMutation();
  console.log(id);
  console.log(data);
  useEffect(() => {
    getBusDetails({ busId: id });
  }, [id, getBusDetails]);


  return (
    <div className="max-w-[1640px] mx-auto p-4 h-screen overflow-y-scroll">
      <span className="flex gap-2">
        <Link href="/dashboard" className="py-2" title="Back to dashboard">
          <GoArrowLeft className="w-8 h-8" /> {""}
        </Link>
        <h2 className="text-lg font-semibold mb-1 leading-none md:leading-[3rem]">
          Details
        
        </h2>
      </span>
      <div className="mt-6 px-6">
        <div className="">
          <img src={data?.busImage} alt="Bus" />
          <p>Plate Number: {data?.plateNumber}</p>
          <p>Manufacturer: {data?.manufacturer}</p>
          <p>Model: {data?.model}</p>
          <p>Year: {data?.year}</p>
          <p>Capacity: {data?.capacity}</p>
          <p>Destination: {data?.destination}</p>
          <p>Distance: {data?.distance}</p>
          <p>Duration: {data?.duration}</p>
          <p>Price: {data?.price}</p>
          <p>Ratings: {data?.ratings}</p>
          <p>Status: {data?.busStatus}</p>
        </div>{" "}
      </div>
    </div>
  );
};

export default Details;
