"use client";
import { useResetPassMutation } from "@/services/auth";
import { Alert, Form, message } from "antd";
import Link from "next/link";
import {
  CustomInput as Input,
  CustomPasswordInput as PasswordInput,
} from "@/lib/AntdComponent";
import { passwordSchema } from "@/lib/PasswordSchema";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
const ResetPass = () => {
  const route = useRouter();

  const [resetPass, { isLoading }] = useResetPassMutation();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
    passwordOtp: "",
  });
  const [validationError, setValidationError] = useState("");
  const [confirmValidation, setConfirmValidation] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      passwordSchema
        .validate({ password: value })
        .then(() => setValidationError(""))
        .catch((error) => setValidationError(error.message));
    } else if (name === "confirmPassword") {
      if (value !== formData.password)
        setConfirmValidation("Passwords must match");
      else setConfirmValidation(""); // Clear the validation message if passwords match
    }
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    if (!validationError && !confirmValidation) {
      resetPass({
        password: formData.password,
        code: formData.passwordOtp,
      })
        .unwrap()
        .then((res) => {
          message.success(res.message);
          route.replace("/login");
        })
        .catch((err) => {
          console.log(err);
          message.error(
            err?.data?.error || err?.message || "something went wrong"
          );
        });
    }
  };

  return (
    <div className="max-w-[1640px] mx-auto py-5 px-6 md:px-20 h-screen overflow-y-auto">
      <Link href="/" className="py-3 font-semibold text-[25px]">
        AfriMove<span className="text-blue-500">.</span>
      </Link>
      <div className="flex flex-col items-center justify-center mt-10 md:mt-16 lg:mt-24 space-y-6">
        {confirmValidation && (
          <Alert message={confirmValidation} type="error" showIcon />
        )}{" "}
        <div className="text-center ">
          <h1 className="text-3xl font-bold md:text-4xl md:font-extrabold">
            Reset Password
          </h1>
          <p className="text-grayText font-light text-xl py-4">
            Create a unique password to keep your account protected
          </p>
        </div>
        <div className="p-6 w-full lg:max-w-md shadow-md rounded-md border bg-white/80">
          <Form onFinish={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="pass-otp"
                className="block text-sm font-medium text-gray-700 mb-3"
              >
                Password Otp
              </label>
              <Input
                className="w-full "
                placeholder="password-otp"
                size="large"
                required
                type="text"
                name="passwordOtp"
                value={formData.passwordOtp}
                onChange={handleChange}
                id="pass-otp"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700 mb-3"
              >
                Password
              </label>
              <PasswordInput
                className="w-full"
                placeholder="Enter your password"
                id="newPassword"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {formData.password && validationError && (
                <ul className="bg-white rounded-[5px] p-[3%]">
                  <li className="flex items-center gap-[0.5rem]">
                    <span
                      className={`h-[13px] w-[13px] rounded-full ${
                        /^(.{8,})$/.test(formData.password)
                          ? "bg-black"
                          : "bg-slate-300"
                      }`}
                    ></span>
                    <p className="text-[#252B33] text-[12px] font-[400]">
                      A minimum of 8 characters
                    </p>
                  </li>
                  <li className="flex items-center gap-[0.5rem]">
                    <span
                      className={`h-[13px] w-[13px] rounded-full ${
                        /.*[a-zA-Z].*/.test(formData.password)
                          ? "bg-black"
                          : "bg-slate-300"
                      }`}
                    ></span>
                    <p className="text-[#252B33] text-[12px] font-[400]">
                      At least one letter
                    </p>
                  </li>
                  <li className="flex items-center gap-[0.5rem]">
                    <span
                      className={`h-[13px] w-[13px] rounded-full ${
                        /.*[0-9].*/.test(formData.password)
                          ? "bg-black"
                          : "bg-slate-300"
                      }`}
                    ></span>
                    <p className="text-[#252B33] text-[12px] font-[400]">
                      At least one number
                    </p>
                  </li>
                  <li className="flex items-center gap-[0.5rem]">
                    <span
                      className={`h-[13px] w-[13px] rounded-full ${
                        /[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
                          ? "bg-black"
                          : "bg-slate-300"
                      }`}
                    ></span>
                    <p className="text-[#252B33] text-[12px] font-[400]">
                      At least one special character
                    </p>
                  </li>
                </ul>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-3"
              >
                Confirm Password
              </label>
              <PasswordInput
                className="w-full"
                placeholder="Enter your password"
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="w-full my-4 text-white focus:outline-none font-bold rounded-xl text-md px-5 py-2.5 text-center bg-blue-600 hover:duration-300 focus:shadow-outline"
            >
              {isLoading ? <LoadingOutlined size={30} /> : "Reset Password"}
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
