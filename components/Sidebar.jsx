import Link from "next/link";
import React from "react";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const Sidebar = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white text-black border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-red-900 text-white p-3 rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href="/">
            <div className="bg-gray-900 text-white p-3 cursor-pointer my-4 rounded-lg inline-block hover:bg-gray-500">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/customers">
            <div className="bg-gray-900 text-white p-3 cursor-pointer my-4 rounded-lg inline-block hover:bg-gray-500">
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="bg-gray-900 text-white p-3 cursor-pointer my-4 rounded-lg inline-block hover:bg-gray-500">
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
          <Link href="/settings">
            <div className="bg-gray-900 text-white p-3 cursor-pointer my-4 rounded-lg inline-block hover:bg-gray-500">
              <FiSettings size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
