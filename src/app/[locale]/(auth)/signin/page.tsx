import GoogleIcon from "@/assets/images/icon/Google.svg";
import LockIcon from "@/assets/images/icon/Lock.svg";
import MessageIcon from "@/assets/images/icon/Message.svg";
import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import CheckBox from "@/components/Input/CheckBox";
import Input from "@/components/Input/Input";
import Logo from "@/components/Logo/Logo";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Đăng nhập tài khoản  - Mua sắm Online | Grocery Mart",
  description: "Login account",
};

function page({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      <div className="flex-1 flex items-center justify-center dark:bg-bg-dark h-full">
        <div className="max-w-[460px] w-full text-center p-4">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <h1 className="font-[500] text-[1.875rem] mt-[3.12rem] dark:text-gray-dark text-black-primary">
            Hello Again!
          </h1>
          <p className="text-gray-light dark:text-gray-light text-[0.9375rem] font-[500] mt-[0.62rem]">
            Welcome back to sign in. As a returning customer, you have access to
            your previously saved all information.
          </p>
          <form action="" className="mt-[30px] w-full">
            <Input
              className="mt-[30px]"
              name="email"
              placeholder="Email"
              type="text"
              icon={<Icon svg={MessageIcon}/>}
            />
            <Input
              className="mt-[30px]"
              name="password"
              placeholder="Password"
              type="password"
              icon={<Icon svg={LockIcon} />}
            />
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center gap-2">
                <CheckBox />
                <p className="text-[15px] font-[500] text-gray-light dark:text-gray-dark">
                  Set as default card
                </p>
              </div>
              <div>
                <Link
                  className="text-[#0071DC] text-[15px] font-[500]"
                  href={"#"}
                >
                  Recovery Password
                </Link>
              </div>
            </div>
            <Button className="w-full mt-[50px]">Login</Button>
          </form>
          <Button
            dashed
            className="w-full mt-[30px] flex justify-center items-center gap-3"
          >
            <Image src={GoogleIcon} alt="icon" width={24} height={24} />
            Sign with Google
          </Button>
          <div className="flex justify-center mt-[108px]">
            <div className="flex gap-1">
              <p className="text-[15px] font-[400] text-gray-light dark:text-gray-dark text-center">
                Don’t have an account yet?
              </p>
              <Link
                href={`/${locale}/signup`}
                className="text-[#0071DC] text-[15px] font-[500]"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
