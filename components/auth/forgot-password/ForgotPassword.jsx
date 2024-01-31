"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const route = useRouter();

  return (
    <div className="min-h-screen flex flex-col  max-w-[1640px] bg-[#FAFAFA]">
      <div className=" mx-auto w-full px-3 py-6">
        <nav className="py-4 px-8 flex justify-between text-xl">
          <Link href="/">Logo</Link>
          <p>
            {" "}
            ← Back to{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </p>
        </nav>
        <main className=" flex flex-col items-center justify-center bg-white w-full md:w-[559px] mx-auto mt-4 p-6">
          <h1 className="font-semibold text-2xl mb-2 text-[#000000]">
            Forgot your Password?
          </h1>
          <p className=" text-gray-700 text-[18px]">Enter your email</p>
          <form className="w-full space-y-5 mt-4">
            <div className="w-full flex flex-col items-start justify-start gap-[0.4rem]">
              <label
                htmlFor="email"
                className="text-[#181336] text-sm font-[500]"
              >
                Email Address
              </label>
              <input
                className="w-full p-2 border rounded-md"
                placeholder="Email Address"
                id="email"
                type="email"
                name="email"
                required
              />
            </div>
            <button
              type="primary"
              onClick={() => route.push("/reset-password")}
              className="!h-[3rem] bg-black text-white rounded-md hover:bg-white hover:text-black hover:border border-black transition duration-200 w-full"
            >
              Continue
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default ForgotPassword;
