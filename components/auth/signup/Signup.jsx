"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Form, message } from "antd";
import {
  CustomInput as Input,
  CustomPasswordInput as PasswordInput,
} from "@/lib/AntdComponent";
import { LoadingOutlined } from "@ant-design/icons";
import { useRegisterMutation } from "@/services/auth";
import { passwordSchema } from "@/lib/PasswordSchema";
import { useRouter } from "next/navigation";

const Signup = () => {
  const route = useRouter();
  const [validationError, setValidationError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [register, { isLoading }] = useRegisterMutation();
  const handleRegister = () => {
    if (!validationError) {
      register(formData)
        .unwrap()
        .then((res) => {
          message.success(res.message);
          route.replace("/otp");
        })
        .catch((err) => {
          message.error(
            err?.data?.message || err?.message || "something went wrong"
          );
        });
    }

    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "password") {
      passwordSchema
        .validate({ password: value })
        .then(() => setValidationError(""))
        .catch((error) => setValidationError(error.message));
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src="https://images.unsplash.com/photo-1568286353270-72b907e129bb?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="/">
              <span className="sr-only">Home</span>
              <svg
                className="h-8 sm:h-10"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome!
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Create an account to continue
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                href="/"
              >
                <span className="sr-only">Home</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome!
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Create an account to continue
              </p>
            </div>
            <Form onFinish={handleRegister}>
              <div className="mt-8 grid grid-cols-6 gap-6 border py-10 px-5 rounded-lg shadow-md">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-gray-700 mb-3"
                  >
                    First Name
                  </label>

                  <Input
                    className="w-full "
                    placeholder="First Name"
                    id="firstname"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    size="large"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-gray-700 mb-3"
                  >
                    Last Name
                  </label>

                  <Input
                    className="w-full "
                    placeholder="Last Name"
                    id="lastname"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    size="large"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700 mb-3"
                  >
                    {" "}
                    Email{" "}
                  </label>

                  <Input
                    className="w-full "
                    placeholder="Email"
                    size="large"
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    id="email-address"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="password"
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
                    value={formData.password}
                    onChange={handleChange}
                    required
                    size="large"
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

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our {""}
                    <a href="#" className="text-gray-700 underline">
                      terms and conditions
                    </a>
                    {""} and {""}
                    <a href="#" className="text-gray-700 underline">
                      privacy policy
                    </a>
                    .
                  </p>
                </div>

                <div className="col-span-6 space-y-2 sm:items-center sm:gap-4">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full my-4 text-white focus:outline-none font-bold rounded-xl text-md px-5 py-2.5 text-center bg-blue-600 hover:duration-300 focus:shadow-outline"
                  >
                    {isLoading ? (
                      <LoadingOutlined size={30} />
                    ) : (
                      "Create Account"
                    )}
                  </button>

                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account? {""}
                    <Link href="/login" className="text-gray-700 underline">
                      Login
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </Form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Signup;
