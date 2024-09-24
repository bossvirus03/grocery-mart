"use client";
import { useAppStore } from "@/store/app.store";
import Image from "next/image";
import { useState } from "react";
import { BsExclamationCircle, BsExclamationDiamond } from "react-icons/bs";
import { CiSaveDown2 } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoGiftOutline, IoMailOutline, IoPersonOutline } from "react-icons/io5";
import { LuMapPin, LuShieldCheck } from "react-icons/lu";

function ProfileSider() {
  const [info, setInfo] = useState<any>();
  const appStore = useAppStore();
  const coverPhotoUrl = appStore?.userData?.coverPhotoUrl || "";
  const avtUrl = appStore?.userData?.avatarUrl || "";
  const name = appStore?.userData?.name || "";
  console.log(`bg-[url('http://localhost:4324/view/image/${coverPhotoUrl}')]`);
  // useEffect(() => {
  //   const data = apiGetUseProfile("");
  //   setInfo({ ...data });
  // }, []);
  return (
    <div className="xl:max-w-[345px] w-full rounded-[20px] dark:bg-dark-primary bg-light-primary overflow-hidden">
      <div
        className="h-[246px] flex flex-col w-full justify-end"
        style={{
          backgroundImage: `url('http://localhost:4324/view/image/${coverPhotoUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center flex-col items-center pb-[20px] text-white">
          <Image
            src={`http://localhost:4324/view/image/${avtUrl}`}
            alt=""
            width={116}
            height={116}
            className="rounded-full border-[5px] border-gray-500 border-opacity-50"
          />
          <h1 className="mt-5 font-bold text-[18px]">{name}</h1>
          <p className="text-[15px]">Registered: 17th May 2022</p>
        </div>
      </div>
      <div className="p-[30px] flex flex-col gap-[30px]">
        <div>
          <h2 className="text-[18px]">Manage Account</h2>
          <ul className="mt-[17px]">
            <li className="flex items-center gap-[10px] font-[400] text-[15px] mt-3">
              <IoPersonOutline size={20} />
              Personal info
            </li>
            <li className="flex items-center gap-[10px] font-[400] text-[15px] mt-3">
              <LuMapPin size={20} />
              Addresses
            </li>
            <li className="flex items-center gap-[10px] font-[400] text-[15px] mt-3">
              <IoMailOutline size={20} />
              Communications & privacy
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[18px]">My items</h2>
          <ul className="mt-[17px]">
            <li className="flex items-center gap-[10px] font-[400] text-[15px] mt-3">
              <CiSaveDown2 size={20} />
              Reorder
            </li>
            <li className="flex items-center gap-[10px] font-[400] text-[15px] mt-3">
              <IoMdHeartEmpty size={20} />
              Lists
            </li>
            <li className="flex items-center gap-[10px] font-[400] text-[15px] mt-3">
              <IoGiftOutline size={20} />
              Registries
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[18px]">Subscriptions & plans</h2>
          <ul className="mt-[17px]">
            <li className="flex items-center gap-[10px] font-[400] text-[15px] mt-3">
              <LuShieldCheck size={20} />
              Protection plans
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[18px]">Customer Service</h2>
          <ul className="mt-[17px]">
            <li className="flex items-center gap-[10px] font-[400] text-[15px] mt-3">
              <BsExclamationDiamond />
              Help
            </li>
            <li className="flex items-center gap-[10px] font-[400] text-[15px] mt-3">
              <BsExclamationCircle />
              Terms of Use
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfileSider;
