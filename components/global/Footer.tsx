import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white w-full py-4">
      <div className="max-w-screen-xl px-4 mx-auto">
        <ul className="flex flex-wrap justify-center gap-20 max-w-screen-md mx-auto text-lg font-light">
          <li className="my-2">
            <Link
              className="cursor-pointer text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href={"/discover"}
            >
              Discover
            </Link>
          </li>
          <li className="my-2">
            <Link
              className="cursor-pointer text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href={"/help/faq"}
            >
              FAQ
            </Link>
          </li>
          <li className="my-2">
            <Link
              className="cursor-pointer text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href={"/help/privacy-policy"}
            >
              Privacy Policy
            </Link>
          </li>
          <li className="my-2">
            <Link
              className="cursor-pointer text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href={"/help"}
            >
              Help Center
            </Link>
          </li>
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto gap-20 items-center justify-center">
          <Link
            href={""}
            className="cursor-pointer text-gray-400 transition-colors duration-200 hover:text-gray-800"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl transition-colors duration-200 hover:text-gray-800"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
            </svg>
          </Link>
          <Link
            href={""}
            className="cursor-pointer text-gray-400 transition-colors duration-200 hover:text-gray-800"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-xl transition-colors duration-200 hover:text-gray-800"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
            </svg>
          </Link>
        </div>
        <div className="text-center text-gray-500 pt-10 sm:pt-12 font-light flex items-center justify-center">
          Copyright @ 2007 Twin-Queen
        </div>
      </div>
    </footer>
  );
};

export default Footer;
