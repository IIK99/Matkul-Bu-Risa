"use client";

import Link from "next/link";
import NavbarHome from "@/components/navbarhome";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebookF } from "react-icons/fa";

export default function Page() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordShown(!isPasswordShown);
  };
  return (
    <>
      <NavbarHome />
      <audio autoPlay loop hidden>
        <source src="/audios/rg.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <div
        className=" bg-cover bg-no-repeat bg-center z-0"
        style={{ backgroundImage: "url('/images/hp.jpg')" }}
      >
        <div className="flex flex-col justify-center items-center min-h-screen text-sm pt-5">
          <div className="flex flex-col max-[440px] p-5 rounded-xl bg-black bg-opacity-70">
            <h1 className=" text-3xl font-semibold text-white">
              Create a new account
            </h1>
            <p className="  text-[#989898] text-[13px]">
              By registering, you can make payments and book the tickets you
              want.
            </p>

            <div className=" font-bold mt-5 text-white">First Name</div>
            <input
              className=" p-2 bg-[#F3F4F6] rounded-lg "
              placeholder="First name"
              // onChange={(e) => formik.setFieldValue("first_name", e.target.value)}
              id="first_name"
              // value={formik.values.first_name}
            ></input>
            {/* <div className=" my-1 text-red-500">{formik.errors.first_name}</div> */}

            <div className=" font-bold mt-3 text-white">Last Name</div>
            <input
              className=" p-2 bg-[#F3F4F6] rounded-lg "
              placeholder="Last name"
              // onChange={(e) => formik.setFieldValue("last_name", e.target.value)}
              id="last_name"
              // value={formik.values.last_name}
            ></input>
            {/* <div className=" my-1 text-red-500">{formik.errors.last_name}</div> */}

            <div className=" font-bold mt-3 text-white">Email</div>
            <input
              type="email"
              className="p-2  bg-[#F3F4F6] rounded-lg "
              placeholder="ticketing@mail.com"
              // onChange={formik.handleChange}
              id="email"
              // value={formik.values.email}
            ></input>
            {/* <div className=" my-1 text-red-500">{formik.errors.email}</div> */}

            <div className=" font-bold mt-3 text-white">Password</div>
            <div className="p-2 flex bg-[#F3F4F6] rounded-lg w-full">
              <input
                type={isPasswordShown ? "text" : "password"}
                id="password"
                className="w-full  bg-[#F3F4F6] outline-none"
              />
              <button
                onClick={togglePasswordVisibility}
                type="button"
                className="ml-2"
              >
                {isPasswordShown ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <div className=" font-bold mt-3 text-white">Re-Type Password</div>
            <div className="p-2 flex bg-[#F3F4F6] rounded-lg w-full">
              <input
                type={isPasswordShown ? "text" : "password"}
                id="password"
                className="w-full  bg-[#F3F4F6] outline-none"
              />
              <button
                onClick={togglePasswordVisibility}
                type="button"
                className="ml-2"
              >
                {isPasswordShown ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg shadow hover:bg-black-800 transition">
                <FaGoogle className="text-xl" />
                <span className="text-sm font-medium">
                  Register with Google
                </span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#0d2dfd] text-white rounded-lg shadow hover:bg-[#1877F2] transition">
                <FaFacebookF className="text-xl" />
                <span className="text-sm font-medium">
                  Register with Facebook
                </span>
              </button>
            </div>
            <p className=" mt-5 text-[#989898] text-[13px]">
              By registering, you agree to the Terms of Service and Privacy
              Policy of Yuk Baca Buku Yuk
            </p>
            <div className=" mt-4 text-xs text-white">
              Already have an account?{" "}
              <Link href="/auth/login" className=" text-[#FF0000] font-bold">
                Login
              </Link>
            </div>
            <button
              className="rounded-lg mt-2 text-white bg-[#FF0000] h-16 font-semibold text-lg hover:underline hover:bg-[#690003]"
              // onClick={formik.handleSubmit}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
