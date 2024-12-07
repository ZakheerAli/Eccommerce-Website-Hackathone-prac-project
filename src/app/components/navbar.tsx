"use client";

import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuBtn = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="bg-black h-[48px] w-full text-white flex items-center px-2 py-2 ">
        <div className=" xs:w-full md:w-[80%] xs:text-center md:text-end">
          {" "}
          <p className="xs:w-full xs:text-[10px] md:text-[14px] md:w-[70%] text-[#FAFAFA]">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <span className="underline">ShopNow</span>
          </p>
        </div>
        <div className=" text-[#FAFAFA] xs:hidden md:block">
          <p className="text-[14px]">
            English<i className="ri-arrow-down-s-line"></i>
          </p>
        </div>
      </div>
      <nav className=" border-b-[1px] bg-white  border-gray-300 font-[Poppins] flex xs:py-3 xs:px-3 md:pt-6 md:px-16 items-center justify-around">
        <div>
          <h2 className="text-[24px] font-bold">EXCLUSIVE</h2>
        </div>
        {/* Hamburger Menu for Small Screens */}
        <button
          className="block md:hidden xs:ml-3"
          onClick={menuBtn}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            open ? "block" : "hidden"
          } md:flex space-y-4 md:space-y-0 md:space-x-6 md:items-center`}
        >
          <Link href="/" className="block px-4 py-2 hover:underline rounded">
            Home
          </Link>
          <Link
            href="./contact"
            className="block px-4 py-2 hover:underline rounded"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 hover:underline rounded"
          >
            About
          </Link>
          <Link
            href="/signup"
            className="block px-4 py-2 hover:underline rounded"
          >
            Sign Up
          </Link>
        </div>
        <div className="flex items-center  w-[350px] h-[40px] xs:gap-3 md:gap-7">
          <div className="flex items-center  md:gap-[34px] h-[38px] md:w-[280px] py-6 px-4 md:bg-[#F5F5F5] rounded-xl">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="xs:hidden md:block w-[200px] text-[12px] bg-[#F5F5F5]"
            />
            <Link href="/not-found.tsx">
            <i className="ri-search-line  text-2xl cursor-pointer hover:font-bold"></i></Link>
            
          </div>
          <div className="flex gap-6 text-2xl">
            <Link href="./wishlist">
              
              <i className="ri-heart-3-line cursor-pointer hover:text-red-600 hover:font-bold  "></i>
            </Link>
            <Link href="./cart">
              <i className="ri-shopping-cart-2-line cursor-pointer  hover:text-red-600 hover:font-bold"></i>
            </Link>
           
          </div>
        </div>
      </nav>
    </div>
  );
}
