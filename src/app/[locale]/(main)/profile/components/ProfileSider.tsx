"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { apiGetUseProfile } from "../api";

function ProfileSider() {
  const [info, setInfo] = useState<any>();
  useEffect(() => {
    const data = apiGetUseProfile("");
    setInfo({ ...data });
  }, []);
  return (
    <div className="w-[335px] md:w-[345px] rounded-[20px]">
      <div>
        <Image src={""} alt="" width={116} height={116}></Image>
        <h1>Imran Khan</h1>
        <p>Registered: 17th May 2022</p>
      </div>
      <div>
        <h2>Manage Account</h2>
        <ul>
          <li>Personal info</li>
          <li>Addresses</li>
          <li>Communications & privacy</li>
        </ul>
        <ul>
          <h2>My items</h2>
          <li>Reorder</li>
          <li>Lists</li>
          <li>Registries</li>
        </ul>
        <ul>
          <h2>Subscriptions & plans</h2>
          <li>Protection plans</li>
        </ul>
        <ul>
          <h2>Customer Service</h2>
          <li>Help</li>
          <li>Terms of Use</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileSider;
