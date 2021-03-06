import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <>
      <header class="text-gray-600 body-font fixed w-full h-[9%] z-50 bg-[#fafafc] shadow-lg">
        <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center overflow-hidden">
          <a class="flex title-font font-medium items-center text-gray-900 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <Link href="/">
              <span class="ml-3 text-xl cursor-pointer">Gate Courses</span>
            </Link>
          </a>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900">Home</a>
            <a class="mr-5 hover:text-gray-900">Subjects</a>
          </nav>
        </div>
      </header>
      .
    </>
  );
}

export default Nav;
