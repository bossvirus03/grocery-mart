"use client";
import useLogout from "@/app/[locale]/(main)/hooks/useLogout";
import { useMenuQuery } from "@/app/[locale]/(main)/hooks/useMenu";
import { apiSeachProductName } from "@/app/[locale]/(main)/services/api";
import envConfiguration from "@/config/envConfiguration";
import { Link } from "@/i18n/routing";
import { breakpoints } from "@/lib/utils";
import { useAppStore } from "@/store/app.store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { FaCartArrowDown, FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoIosArrowDown, IoIosLogOut } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import LocalSwitcher from "../Button/LocalSwitcher";
import Dropdown from "../Dropdown/Dropdown";
import Logo from "../Logo/Logo";
import { MenuItems } from "../Menu/Menu";
import DeboundSelect from "../Select/DeboundSelect";

function Header({ locale }: { locale: "vi" | "en" }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  const accessToken = localStorage.getItem(
    envConfiguration.NEXT_PUBLIC_TOKEN_KEY
  );
  const { logoutUser } = useLogout(accessToken);

  const appStore = useAppStore();
  const avtUrl = appStore?.userData?.avatarUrl || "";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoints.lg);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { data, isPending } = useMenuQuery();

  async function fetchProducts(productName: string): Promise<string[]> {
    return apiSeachProductName(productName).then((res) =>
      res.data.data.map((item) => {
        return item;
      })
    );
  }
  const handleLogout = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    logoutUser();
  };
  const actionMenu: MenuItems[] = [
    {
      key: "profile",
      label: <Link href={`/profile`}>Profile</Link>,
      icon: <FaRegUser />,
    },
    {
      key: "cart",
      label: <Link href={`/cart`}>Cart</Link>,
      icon: <FaCartArrowDown size={20} />,
    },
    {
      key: "language",
      label: <LocalSwitcher />,
      icon: <IoLanguage />,
    },
    {
      key: "favorite",
      label: <Link href={`/favorite`}>Saved</Link>,
      icon: <FaRegHeart size={20} />,
    },
    {
      key: "logout",
      label: (
        <button type="submit" onClick={(e: any) => handleLogout(e)}>
          Logout
        </button>
      ),
      icon: <IoIosLogOut className="text-red-primary" size={20} />,
    },
  ];

  return (
    <header className="bg-light-primary dark:bg-dark-primary">
      {/* Desktop header */}
      {!isMobile ? (
        <div className="container flex justify-between items-center h-[110px] px-[50px] py-[30px]">
          <Link href={`/home`}>
            <Logo />
          </Link>
          <nav className="flex">
            <ul className="flex gap-5">
              {!isPending ? (
                data &&
                data?.data.data.map((menu, index: number) => (
                  <li key={index}>
                    <Dropdown
                      placement="bottom"
                      menu={menu.category.map((category) => ({
                        key: category.id,
                        label: <p className="font-medium">{category.name}</p>,
                        children: category.items.map((item) => ({
                          key: item.id,
                          label: (
                            <Link href={`#`} className="font-[400]">
                              {item.name}
                            </Link>
                          ),
                        })),
                      }))}
                      trigger={["click", "hover"]}
                      useGrid
                    >
                      <p className="text-sm font-medium flex justify-center items-center gap-1 py-3">
                        {menu.name}
                        <IoIosArrowDown size={12} />
                      </p>
                    </Dropdown>
                  </li>
                ))
              ) : (
                <div
                  role="status"
                  className="w-full space-y-2.5 animate-pulse max-w-lg"
                >
                  <div className="flex items-center w-full max-w-[480px]">
                    <div className="h-2.5 ms-3 bg-gray-200 rounded-full dark:bg-gray-700 min-w-[80px]"></div>
                    <div className="h-2.5 ms-3 bg-gray-300 rounded-full dark:bg-gray-600 min-w-[80px]"></div>
                    <div className="h-2.5 ms-3 bg-gray-300 rounded-full dark:bg-gray-600 min-w-[80px]"></div>
                  </div>
                </div>
              )}
            </ul>
          </nav>
          {/* <SearchInput locale={locale} select /> */}
          <DeboundSelect locale={locale} fetchOptions={fetchProducts} />
          <div className="flex justify-center items-center gap-5">
            <div className="h-[50px] flex md:w-[226px] rounded-[8px] justify-between items-center bg-white dark:bg-dark px-5">
              <Link
                href={"/favorite"}
                className="flex gap-[10px] justify-center items-center"
              >
                <FaRegHeart size={24} /> {appStore.userData?.saved_items_count}
              </Link>
              <div className="w-[1px] h-[24px] bg-gray-300 mx-4 rounded-full" />
              <Link
                href={"/cart"}
                className="flex gap-[10px] justify-center items-center"
              >
                <BsCart2 size={24} /> {appStore.userData?.cart_items_count}
              </Link>
            </div>
            <Dropdown
              className="relative size-[50px] flex items-center justify-center "
              menu={actionMenu}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <Image
                src={`http://localhost:4324/view/image/${avtUrl}`}
                className="cursor-pointer rounded-lg w-full h-full"
                width={100}
                height={100}
                alt="avatar"
              />
            </Dropdown>
          </div>
        </div>
      ) : (
        // Mobile header
        <div className="container flex justify-between items-center h-[110px] px-[50px] py-[30px]">
          <Dropdown menu={actionMenu} trigger={["click"]}>
            hello
          </Dropdown>
          <Link href={`/home`}>
            <Logo />
          </Link>
          <Dropdown
            className="relative size-[50px] flex items-center justify-center"
            menu={actionMenu}
            trigger={["click"]}
            placement="bottomLeft"
          >
            <div className="cursor-pointer">AVT</div>
          </Dropdown>
        </div>
      )}
    </header>
  );
}

export default Header;
