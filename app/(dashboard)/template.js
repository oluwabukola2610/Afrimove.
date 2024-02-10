"use client";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { useGetUserQuery } from "@/services/auth";
import { useGetBusQuery } from "@/services/dashboard";

const template = ({ children }) => {
  const { isLoading } = useGetUserQuery();
  const { isLoading: isFetchDashboard } = useGetBusQuery();
  return (
    <>
      {isLoading && isFetchDashboard ? (
        <div className="relative h-screen flex items-center justify-center bg-[#FAFAFA]">
          <div className="fixed top-0 left-0 px-6 py-4">
          <h1 className="text-[25px] font-semibold">
          AfriMove<span className="text-blue-500">.</span>
        </h1>            </div>
          <div className="fixed inset-0 bg-black opacity-50 z-50" />
          <div className="w-16 h-16 border-t-4 border-black border-solid rounded-full animate-spin z-50" />
        </div>
      ) : (
        <DashboardLayout>{children}</DashboardLayout>
      )}
    </>
  );
};

export default template;
