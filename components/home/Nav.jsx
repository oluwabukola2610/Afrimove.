"use client";
import { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [state, setState] = useState(false);

  const toggleMenu = () => {
    setState(!state);
  };

  return (
    <header className="bg-[#F2F4F7] border-b border-gray-200 fixed top-0 w-full z-50">
      {" "}
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-gray-800 text-2xl font-semibold">
            AfriMove<span className="text-blue-500">.</span>
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="text-blue-500 bg-blue-100 border border-blue-300  px-6 py-2 rounded-full block"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full block"
          >
            Sign up
          </Link>
        </div>
        <div className="flex md:hidden items-center">
          <button
            className="menu-btn text-gray-500 hover:text-gray-800"
            onClick={toggleMenu}
          >
            {state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h18M3 6h18M3 18h18"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <nav className={`md:hidden ${state ? "block z-10" : "hidden"}`}>
        <ul className="container mx-auto py-3 px-4 space-y-2">
          <Link
            href="/login"
            className="text-blue-500 bg-blue-100 border border-blue-300  px-4 py-2 rounded-full block"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full block"
          >
            Sign up
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
