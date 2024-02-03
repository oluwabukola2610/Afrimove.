"use client";
import Link from "next/link";
import OtpInput from "react18-input-otp";
import { useState } from "react";
import { useValidateOtpMutation } from "@/services/auth";
import { LoadingOutlined } from "@ant-design/icons";
import { Form, message } from "antd";
import { useRouter } from "next/navigation";

const SignupOtp = () => {
  const route = useRouter();
  const [code, setCode] = useState("");
  const email = localStorage.getItem("email");
  const [validateOtp, { isLoading }] = useValidateOtpMutation();
  const handleOtp = () => {
    validateOtp({ otp: code, email })
      .unwrap()
      .then((res) => {
        message.success(res.message);
        route.replace("/login");
      })
      .catch((err) => {
        console.log(err);
        message.error(
          err?.data?.message || err?.message || "something went wrong"
        );
      });
  };
  return (
    <div className="max-w-[1640px] mx-auto py-5 px-6 md:px-20  h-screen overflow-y-auto">
      <Link href="/" className="py-3 font-semibold text-[25px]">
        AfriMove<span className="text-blue-500">.</span>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-x-10 mt-8 md:mt-20">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold md:text-4xl md:font-extrabold">
            OTP Verification
          </h1>
          <p className="text-grayText font-light text-xl py-4">
            A code has been sent to your email{" "}
          </p>
        </div>
        <div className="p-6 w-full lg:max-w-md shadow-md space-y-3 rounded-md border bg-white/80 flex flex-col items-center justify-center">
          <Form
            onFinish={handleOtp}
            className="!space-y-6 flex flex-col !justify-center items-center"
          >
            <h1 className="text-xl font-semibold text-center">
              Kindly enter your OTP <br /> to verify account
            </h1>
            <OtpInput
              value={code}
              onChange={(otp) => setCode(otp)}
              numInputs={4}
              separator={<span style={{ width: "20px" }}></span>}
              isInputNum={true}
              shouldAutoFocus={true}
              inputStyle={{
                border: "1px solid #CFD3DB",
                borderRadius: "8px",
                width: "50px",
                height: "50px",
                fontSize: "12px",
                color: "#000",
                fontWeight: "800",
                caretColor: "blue",
                margin: "4px",
              }}
              focusStyle={{
                border: "1px solid #DEE3EB",
                outline: "none",
              }}
            />
            <button
              disabled={isLoading}
              className="w-full my-4 text-white focus:outline-none font-bold rounded-xl text-md px-5 py-2.5 text-center bg-blue-600 hover:duration-300 focus:shadow-outline"
            >
              {isLoading ? <LoadingOutlined size={30} /> : "Submit"}
            </button>
          </Form>
          {/* {timerComplete ? (
            <p className="py-4 text-sm text-grayText ">
              Didn’t get the code?{" "}
              <button
                className="text-primary text-sm font-bold"
                disabled={isLoading}
                onClick={handleResendOtp}
              >
                Resend
              </button>
            </p>
          ) : ( */}
          <p className="py-4 text-sm text-grayText">Resend code in 30secs</p>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default SignupOtp;
