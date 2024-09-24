"use client";
import { useAppStore } from "@/store/app.store";

function ProfileDetail() {
  const appStore = useAppStore();
  console.log(appStore?.userData?.email);
  return (
    <div className="dark:bg-dark-primary bg-light-primary w-full rounded-[20px] p-[30px] flex flex-col gap-[30px]">
      <div>
        <h1 className="text-[24px] font-bold">My Wallet</h1>
        <p className="font-[400] text-[15px] mt-1">Payment methods</p>
        <div>
          <ul className="flex gap-[30px] w-full">
            <li className="w-full h-[171px] flex justify-center items-center bg-blue-400 rounded-[10px]">
              Cart
            </li>
            <li className="w-full h-[171px] flex justify-center items-center bg-red-400 rounded-[10px]">
              Cart
            </li>
            <li className="w-full h-[171px] flex justify-center items-center bg-gray-400 rounded-[10px]">
              Cart
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="text-[24px] font-bold">Account Info</h1>
        <p className="font-[400] text-[15px] mt-1">
          Addresses, contact information and password
        </p>
        <div className="mt-4">
          <div>
            {/* <Image></Image> */}
            <div>
              <h3>Email Address</h3>
              <p>tarek97.ta@gmail.com</p>
            </div>
          </div>
          <div>
            {/* <Image></Image> */}
            <div>
              <h3>Phone number</h3>
              <p>+000 11122 2345 657</p>
            </div>
          </div>
          <div>
            {/* <Image></Image> */}
            <div>
              <h3>Add an address</h3>
              <p className="font-[400] text-[15px] mt-1">
                Bangladesh Embassy, Washington, DC 20008
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[24px] font-bold">Lists</h1>
        <p className="font-[400] text-[15px]">2 items - Primary</p>
        <div className="mt-[14px]"></div>
      </div>
    </div>
  );
}

export default ProfileDetail;
