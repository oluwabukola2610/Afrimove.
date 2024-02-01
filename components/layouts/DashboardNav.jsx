"use client"
import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Avatar, Dropdown, Menu } from "antd";

const DashboardNav = () => {
  const menu = (
    <Menu>
      <Menu.Item key="logout" className="font-semibold text-lg hover:bg-gray-200">
        Logout
      </Menu.Item>
    </Menu>
  );

  // Function to format the current date as "Month Day, Year"
  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
  };

  return (
    <>
      <nav className="flex justify-between items-center px-5 py-3  border-b  border-b-gray-100 bg-[#FAFAFA] ">
        <h1 className="text-[20px] font-semibold">
          AfriMove<span className="text-blue-500">.</span>
        </h1>
        <div className="flex space-x-5 items-center ">
          <div className="hidden lg:flex relative ">
            <span className="absolute inset-y-0 start-0 grid w-10 place-content-center ">
              <CiSearch className="text-gray-400 " />
            </span>
            <input
              type="text"
              placeholder="Search.."
              className="w-full md:w-[320px] text-[16px] rounded-[24px] placeholder:text-gray-400 border-gray-200 border py-3 pe-0  sm:text-sm pl-8 ring-0  bg-transparent"
            />
          </div>
          <span className="w-full items-center space-x-3 hidden lg:flex">
            <MdOutlineCalendarMonth size={18} />
            <p className="font-medium">{getCurrentDate()}</p>
          </span>
          <div className="hidden lg:flex p-2 items-center border border-gray-200 rounded-full">
            <IoNotificationsOutline size={18} />
          </div>
          <Dropdown overlay={menu} placement="bottomRight">
            <div className="flex gap-2 justify-between items-center px-[12px] py-[6px] rounded-[8px] bg-success-5">
              <Avatar size={40} src="" />
              <div>
                <h2 className="text-[#2E2E3A] font-semibold capitalize">
                  ok ok
                </h2>
                <p className="text-[#9A9AAF] text-[0.75rem] font-light text-center">
                  ok@gmail.com
                </p>
              </div>
            </div>
          </Dropdown>
          <label htmlFor="my-drawer-2" className="flex md:hidden  px-3">
            <CgMenuRightAlt size="25" className=" text-blue-600" />
          </label>
        </div>
      </nav>
    </>
  );
};

export default DashboardNav;
