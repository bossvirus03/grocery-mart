"use client";
import { Link } from "@/i18n/routing";
import { BsCart2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import LocalSwitcher from "../Button/LocalSwitcher";
import SearchInput from "../Input/SearchInput";
import Logo from "../Logo/Logo";

function Header({ locale }: { locale: string }) {
  return (
    <header className="bg-light-primary dark:bg-dark-primary">
      <div className="container flex justify-between items-center h-[110px] px-[50px] py-[30px]">
        <Link href={`/home`}>
          <Logo />
        </Link>
        <nav className="flex ">
          <ul className="flex gap-5">
            <li>
              <a
                href="#"
                className="text-sm font-medium flex justify-center items-center gap-1"
              >
                Departments
                <IoIosArrowDown size={12} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium flex justify-center items-center gap-1"
              >
                Grocery
                <IoIosArrowDown size={12} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm font-medium flex justify-center items-center gap-1"
              >
                Beauty
                <IoIosArrowDown size={12} />
              </a>
            </li>
          </ul>
        </nav>
        <SearchInput />
        <div className="flex justify-center items-center gap-5">
          <LocalSwitcher />
          <div className="h-[50px] flex md:w-[226px] rounded-[8px] justify-between items-center bg-white dark:bg-dark px-5">
            <Link href={"/products/saved"}>
              <FaRegHeart size={24} />
            </Link>
            <div className="w-[1px] h-[24px] bg-gray-300 mx-4 rounded-full" />
            <Link href={"/cart"} className="">
              <BsCart2 size={24} />
            </Link>
          </div>
          <div className="size-[50px] flex justify-center items-center bg-white dark:bg-dark rounded-[8px]">
            <Link href={`/${locale}/profile`}>AVT</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
