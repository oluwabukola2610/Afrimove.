"use client"
import Details from "@/components/dashboard-componemt/dashboard/details/Details";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { id } = useParams() || {}; 
  return <Details id={id}/>;
};

export default page;
