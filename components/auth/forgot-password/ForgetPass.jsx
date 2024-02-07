"use client";
import { Form, message } from "antd";
import Link from "next/link";
import { CustomInput as Input } from "@/lib/AntdComponent";
import { useRouter } from "next/navigation";
import { useForgetPassMutation } from "@/services/auth";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
const ForgetPass = () => {
  const [data, setData] = useState("");
  const route = useRouter();
  const [forgetPass, { isLoading }] = useForgetPassMutation();
  const handleforgetPass = () => {
    forgetPass({email:data})
      .unwrap()
      .then((res) => {
        console.log(res);
        message.success(res.message);
        route.replace("/reset-password");
      })
      .catch((err) => {
        console.log(err);
        message.error(
          err?.data?.error || err?.message || "something went wrong"
        );
      });
  };
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
          <Form onFinish={handleforgetPass}>
            <div className="mb-6">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700 mb-3"
              >
                Email{" "}
              </label>

              <Input
                className="w-full "
                placeholder="Email"
                size="large"
                required
                type="email"
                name="email"
                value={data}
                onChange={(e) => setData(e.target.value)}
                id="Email"
              />
            </div>
            <button
              disabled={isLoading}
              className="w-full my-4 text-white focus:outline-none font-bold rounded-xl text-md px-5 py-2.5 text-center bg-blue-600 hover:duration-300 focus:shadow-outline"
            >
              {isLoading ? <LoadingOutlined size={30} /> : "Recover Password"}
            </button>
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
