"use client";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import LocalSwitcher from "../Button/LocalSwitcher";
import SearchInput from "../Input/SearchInput";
import Logo from "../Logo/Logo";

function Header({ locale }: { locale: string }) {
  return (
    <header className="bg-[#EEE] dark:bg-bg-primary">
      <div className="container flex justify-between items-center h-[110px] px-[50px] py-[30px]">
        <Link href={`/${locale}`}>
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
          <div className="size-[50px] flex justify-center items-center bg-[#fff] dark:bg-bg-dark rounded-[8px]">
            AVT
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
