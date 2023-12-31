import React from "react";
import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
// import {}

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* left side */}
      <div className=" flex items-center ">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl">
          Uber <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Deleivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* searchinput */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          className="bg-transparent p-2 w-full focus:outline-none"
          name=""
          id=""
          placeholder="Search foods..."
        />
      </div>
      {/* card ntn */}

      <div>
        <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
          <BsFillCartFill className="mr-2"></BsFillCartFill> Cart
        </button>
      </div>

      {/* mobile menu */}
      {/* overlay */}
      {nav ? (
        <div className=" bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-500"></div>
      ) : (
        ""
      )}

      {/* side bar menu */}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500"
        }
      >
        <AiOutlineClose
        onClick={()=> setNav(!nav)}
          size={30}
          className=" absolute right-3 top-4 cursor-pointer"
        ></AiOutlineClose>

        <h2 className="text-2xl p-4">
          Uber <span className="font-bold">Eats</span>
        </h2>

        <nav>
          <ul className="flex flex-col  p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={24} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={24} className="mr-4" />
              Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={24} className="mr-4" />
              Wallets
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={24} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={24} className="mr-4" />
              Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={24} className="mr-4" />
              Best One
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={24} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
