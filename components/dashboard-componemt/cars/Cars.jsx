"use client";
import { useState } from "react";
import { Switch } from "antd";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { BiWalk } from "react-icons/bi";
import { useGetBusQuery } from "@/services/dashboard";
import Link from "next/link";

const Cars = () => {
  const { data: cars, isLoading } = useGetBusQuery();
  const [searchQuery, setSearchQuery] = useState("");
  const [availableOnly, setAvailableOnly] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case "available":
        return "bg-green-200 text-green-600 font-medium";
      case "unavailable":
        return "bg-red-100 text-red-600 font-medium";
      case "en-route":
        return "bg-yellow-100 text-yellow-600 font-medium";
      case "booked":
        return "bg-blue-100 text-blue-600 font-medium";
      default:
        return "";
    }
  };
  const filteredCars = cars?.filter((car) => {
    const matchesSearch = car.destination
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesAvailability = !availableOnly || car.busStatus === "available";
    return matchesSearch && matchesAvailability;
  });

  return (
    <div className="max-w-[1640px] mx-auto p-4 h-screen overflow-y-scroll">
      <header className="mb-5 flex flex-col space-y-4">
        <p className="text-lg font-medium">Filter by:</p>
        <div className="flex relative ">
          <span className="absolute inset-y-0 start-0 grid w-10 place-content-center ">
            <CiSearch size={20} className="text-gray-500 " />
          </span>
          <input
            type="text"
            placeholder="destination.."
            className="w-full md:w-[320px] text-[15px] focus:outline-none rounded-[24px] placeholder:text-gray-500 border-gray-200 border py-2 pe-0   pl-8 ring-0  bg-transparent "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex space-x-3 items-center">
          <p className="font-semibold uppercase text-[14px]">
            Available now only
          </p>
          <Switch
            checked={availableOnly}
            onChange={(checked) => setAvailableOnly(checked)}
          />
        </div>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-5">
        {filteredCars?.map((car) => (
          <Link
            key={car._id}
            href={`/cars/${car.busId}`}
            as={`/cars/${car.busId}`}
            className="border border-gray-200 p-4 rounded-md bg-white shadow-sm flex flex-col space-y-3"
          >
            <div className="flex justify-between items-center ">
              <div className="space-x-4 items-center flex">
                <div className="border p-1 rounded-lg flex items-center space-x-1">
                  <FaStar className="text-yellow-500" />
                  <p className="font-semibold">
                    {car.ratings}{" "}
                    <span className="text-xs font-extralight">(112)</span>
                  </p>
                </div>
                <span
                  className={`${getStatusColor(
                    car.busStatus
                  )} text-xs p-1 inline-block rounded-md capitalize`}
                >
                  {car.busStatus}
                </span>
              </div>
              <div className="flex items-center">
                <BiWalk className=" text-gray-500" />
                <p className="text-sm font-medium"> {car.distance}</p>
              </div>
            </div>
            <img src={car.busImage} className="w-full h-auto  rounded-md" />
            <div className="">{car.model}</div>
            <span className="flex items-center justify-between">
              <p className="text-xl font-semibold"> {car.destination}</p>
              <p className=" font-semibold">₦{car.price}</p>
            </span>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Cars;
