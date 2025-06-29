"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebookF } from "react-icons/fa";
import NavbarHome from "@/components/navbarhome";

export default function Page() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <>
      <NavbarHome />
      <audio autoPlay loop hidden>
        <source src="/audios/lg.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <div
        className="bg-cover bg-no-repeat bg-center min-h-screen"
        style={{ backgroundImage: "url('/images/hr.jpg')" }}
      >
        <div className="flex flex-col justify-center items-center min-h-screen text-sm px-4 sm:px-6 py-8">
          <div className="flex flex-col w-full max-w-md p-6 rounded-xl bg-black bg-opacity-70 shadow-lg">
            <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-1">
              Enter your account
            </h1>
            <p className="text-[#989898] text-[13px] mb-4">
              To continue your access, you must first login
            </p>

            <label className="font-bold text-white mt-2">Email</label>
            <input
              type="email"
              placeholder="yukbacayuk@mail.com"
              className="p-3 bg-[#F3F4F6] rounded-lg mt-1"
            />

            <label className="font-bold text-white mt-5">Password</label>
            <div className="p-3 flex items-center bg-[#F3F4F6] rounded-lg w-full mt-1">
              <input
                type={isPasswordShown ? "text" : "password"}
                id="password"
                className="w-full bg-[#F3F4F6] outline-none"
              />
              <button
                onClick={togglePasswordVisibility}
                type="button"
                className="ml-2 text-gray-700"
              >
                {isPasswordShown ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <div className="mt-4 text-xs text-white">
              Don’t have an account?{" "}
              <Link href="/auth/register" className="text-[#FF0000] font-bold">
                Register
              </Link>
            </div>

            <button className="rounded-lg mt-4 text-white bg-[#FF0000] h-12 font-semibold text-lg hover:underline hover:bg-[#690003] transition">
              Sign in
            </button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mt-4">
              <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-black rounded-lg shadow hover:bg-gray-200 transition w-full">
                <FaGoogle className="text-xl" />
                <span className="text-sm font-medium">Login with Google</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#0d2dfd] text-white rounded-lg shadow hover:bg-[#1877F2] transition w-full">
                <FaFacebookF className="text-xl" />
                <span className="text-sm font-medium">Login with Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
