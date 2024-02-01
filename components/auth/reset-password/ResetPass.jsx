"use client";
import { Form } from "antd";
import Link from "next/link";
import {
  CustomButton as Button,
  CustomPasswordInput as PasswordInput,
} from "@/lib/AntdComponent";
import { useRouter } from "next/navigation";
const ResetPass = () => {
  const route = useRouter();
  return (
    <div className="max-w-[1640px] mx-auto py-5 px-6 md:px-20 h-screen overflow-y-auto">
      <Link href="/" className="py-3 font-semibold text-[25px]">
        AfriMove<span className="text-blue-500">.</span>
      </Link>
      <div className="flex flex-col items-center justify-center mt-10 md:mt-16 lg:mt-24 space-y-6">
        <div className="text-center ">
          <h1 className="text-3xl font-bold md:text-4xl md:font-extrabold">
            Reset Password{" "}
          </h1>
          <p className="text-grayText font-light text-xl py-4">
            Create a unique password to keep your account protected{" "}
          </p>
        </div>
        <div className="p-6 w-full lg:max-w-md shadow-md rounded-md border bg-white/80">
          <Form>
            <div className="mb-4">
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-gray-700 mb-3"
              >
                {" "}
                Password{" "}
              </label>

              <PasswordInput
                className="w-full"
                placeholder="Enter your password"
                id="password"
                type="password"
                name="password"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-gray-700 mb-3"
              >
                {" "}
                Confirm Pasword
              </label>

              <PasswordInput
                className="w-full"
                placeholder="Enter your password"
                id="password"
                type="password"
                name="password"
                required
              />
            </div>
            <Button
              onClick={() => route.push("/login")}
              className="!h-[3rem]  w-full !border-blue-600 !bg-blue-600 !text-white !font-semibold !mb-4"
            >
              Reset Password
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
