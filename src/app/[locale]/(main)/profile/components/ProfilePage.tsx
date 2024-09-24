"use client";
import { useState } from "react";
import AddCredit from "./AddCredit";
import EditPersonalInfo from "./EditPersonalInfo";
import ProfileDetail from "./ProfileDetail";
import ProfileSider from "./ProfileSider";

function ProfilePage() {
  const [page, setPage] = useState<"main" | "credit" | "info">("main");
  return (
    <div className="md:flex gap-[30px]">
      <ProfileSider setPage={setPage} />
      {page == "main" && <ProfileDetail />}
      {page == "credit" && <AddCredit />}
      {page == "info" && <EditPersonalInfo />}
    </div>
  );
}

export default ProfilePage;
