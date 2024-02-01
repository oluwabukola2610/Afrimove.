"use client";
import { Form } from "antd";
import Link from "next/link";
import {
  CustomButton as Button,
  CustomInput as Input,
} from "@/lib/AntdComponent";
import { useRouter } from "next/navigation";
const ForgetPass = () => {
  const route = useRouter();
  return (
    <div className="max-w-[1640px] mx-auto py-5 px-6 md:px-20 h-screen overflow-y-auto">
      <Link href="/" className="py-3 font-semibold text-[25px]">
        AfriMove<span className="text-blue-500">.</span>
      </Link>
      <div className="flex flex-col items-center justify-center mt-10 md:mt-16 lg:mt-24 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold md:text-4xl md:font-extrabold">
            Forgot Password{" "}
          </h1>
          <p className="text-grayText font-light text-xl py-4">
            Kindly enter your registered email to reset your passsword{" "}
          </p>
        </div>
        <div className="p-6 w-full lg:max-w-md shadow-md rounded-md border bg-white/80">
          <Form>
            <div className="mb-6">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700 mb-3"
              >
                {" "}
                Email{" "}
              </label>

              <Input
                className="w-full "
                placeholder="Email Address"
                id="email"
                type="email"
                name="email"
                required
              />
            </div>
            <Button
              onClick={() => route.push("/reset-password")}
              className="!h-[3rem]  w-full !border-blue-600 !bg-blue-600 !text-white !font-semibold !mb-4"
            >
              Recover Password
            </Button>
            <Link href="/login" className="font-bold py-4  text-center text-sm">
              Return to Login
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
