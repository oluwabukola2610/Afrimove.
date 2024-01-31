"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PasswordReset = () => {
  const route = useRouter();

  return (
    <div className="min-h-screen flex flex-col  max-w-[1640px] bg-[#FAFAFA]">
      <div className=" mx-auto w-full px-3 py-6">
        <nav className="py-4 px-8 flex justify-between text-xl">
          <Link href="/">Logo</Link>
          <p>
            {" "}
            ← Back to{" "}
            <Link href="/" className="underline">
              Home
            </Link>
          </p>
        </nav>
        <main className=" flex flex-col items-center justify-center bg-white w-full md:w-[559px] mx-auto mt-4 p-6">
          <h1 className="font-semibold text-2xl mb-2 text-[#000000]">
            Reset your Password
          </h1>
          <p className=" text-gray-700 text-[18px]">Enter your new password</p>
          <form className="w-full space-y-5 mt-4">
            <div className="w-full flex flex-col items-start justify-start gap-[0.4rem]">
              <label
                htmlFor="newPassword"
                className="text-[#181336] text-sm font-[500]"
              >
                New Password
              </label>
              <input
                className="w-full p-2 border rounded-md"
                placeholder="Enter your new password"
                id="newPassword"
                type="password"
                name="newPassword"
                required
              />
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-[0.4rem]">
              <label
                htmlFor="confirmNewPassword"
                className="text-[#181336] text-sm font-[500]"
              >
                Confirm New Password
              </label>
              <input
                className="w-full p-2 border rounded-md"
                placeholder="Confirm your new password"
                id="confirmNewPassword"
                type="password"
                name="confirmNewPassword"
                required
              />
            </div>
            <button
              type="primary"
              onClick={() => route.push("/login")}
              className="!h-[3rem] bg-black text-white rounded-md hover:bg-white hover:text-black hover:border border-black transition duration-200 w-full"
            >
              Submit
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default PasswordReset;
