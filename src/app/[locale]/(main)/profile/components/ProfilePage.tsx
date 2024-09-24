"use client";
import { useState } from "react";
import AddCredit from "./AddCredit";
import EditPersonalInfo from "./EditPersonalInfo";
import ProfileDetail from "./ProfileDetail";
import ProfileSider from "./ProfileSider";

function ProfilePage() {
  const [page, setPage] = useState<"main" | "credit" | "info">("main");
  return (
    <div className="flex 2xl:flex-row flex-col gap-[30px]">
      <ProfileSider setPage={setPage} />
      {page == "main" && <ProfileDetail setPage={setPage} />}
      {page == "credit" && <AddCredit setPage={setPage} />}
      {page == "info" && <EditPersonalInfo setPage={setPage} />}
    </div>
  );
}

export default ProfilePage;
