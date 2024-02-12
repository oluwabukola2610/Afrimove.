import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import React, { useEffect } from "react";
import { useGetBusDetailsMutation } from "@/services/dashboard";
import { FaStar } from "react-icons/fa";
import { Spin } from "antd";

const Details = ({ id }) => {
  const [getBusDetails, { data, isLoading }] = useGetBusDetailsMutation();
  console.log(id);
  console.log(data);
  useEffect(() => {
    getBusDetails({ busId: id });
  }, [id, getBusDetails]);

  return (
    <div className="max-w-[1640px] mx-auto p-4 h-screen overflow-y-scroll">
      <span className="flex gap-2">
        <Link href="/cars" className="py-2" title="Back">
          <GoArrowLeft className="w-8 h-8" /> {""}
        </Link>
        <h2 className="text-2xl font-semibold mb-1 leading-none md:leading-[3rem]">
          Details
        </h2>
      </span>
      {isLoading && (
        <div className="flex justify-center my-4 w-full h-full">
          <Spin size="large" tip="Loading.." fullscreen={true} />
        </div>
      )}
      {!isLoading && (
        <div className="mt-6 px-6">
          <div className="grid grid-cols-1 md:grid-cols-[450px_1fr] gap-[30px] items-center">
            <img
              src={data?.busImage}
              alt="Bus"
              className="md:w-[400px] md:h-[500px] w-full"
            />
            <div className="flex flex-col max-w-xl space-y-4">
              <span className="flex items-center justify-between px-4">
                <p className=" font-medium text-lg">Plate Number: </p>
                <p className="font-semibold text-lg text-gray-500">
                  {data?.plateNumber}
                </p>{" "}
              </span>
              <span className="flex items-center justify-between px-4">
                <p className="font-semibold text-lg">Manufacturer: </p>{" "}
                <p className="font-semibold text-lg text-gray-500">
                  {data?.manufacturer}
                </p>
              </span>
              <span className="flex items-center justify-between px-4">
                <p className="font-semibold text-lg">Model: </p>{" "}
                <p className="font-semibold text-lg text-gray-500">
                  {data?.model}
                </p>
              </span>
              <span className="flex items-center justify-between px-4">
                <p className="font-semibold text-lg">Year: </p>{" "}
                <p className="font-semibold text-lg text-gray-500">
                  {" "}
                  {data?.year}
                </p>
              </span>
              <span className="flex items-center justify-between px-4">
                <p className="font-semibold text-lg">Capacity: </p>{" "}
                <p className="font-semibold text-lg text-gray-500">
                  {data?.capacity}
                </p>
              </span>

              <span className="flex items-center justify-between px-4">
                <p className="font-semibold text-lg">Destination:</p>{" "}
                <p className="font-semibold text-lg text-gray-500">
                  {data?.destination}
                </p>
              </span>

              <span className="flex items-center justify-between px-4">
                <p className="font-semibold text-lg">Distance </p>{" "}
                <p className="font-semibold text-lg text-gray-500">
                  {data?.distance}
                </p>
              </span>
              <span className="flex items-center justify-between px-4">
                <p className="font-semibold text-lg">Ratings: </p>{" "}
                <div className=" p-1 rounded-lg flex items-center space-x-1">
                  <FaStar className="text-yellow-500" />
                  <p className="font-semibold">{data?.ratings}</p>
                </div>
              </span>
              <span className="flex items-center justify-between px-4">
                <p className="font-semibold text-lg">Status: </p>{" "}
                <p className="font-semibold text-lg text-gray-500 capitalize">
                  {" "}
                  {data?.busStatus}
                </p>
              </span>
              <span className="flex items-center justify-between px-4">
                <p className="font-semibold text-lg">Price: </p>{" "}
                <p className="font-semibold text-lg text-gray-500">
                  ₦{data?.price}
                </p>
              </span>
              {data?.busStatus !== "booked" && (
                <div className="flex justify-end">
                  <button className="my-4 text-white focus:outline-none font-bold rounded-xl text-md px-5 py-2.5 text-center bg-blue-500 hover:duration-300 focus:shadow-outline">
                    Book Now
                  </button>
                </div>
              )}
            </div>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default Details;
