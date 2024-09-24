import ProfileDetail from "./components/ProfileDetail";
import ProfileSider from "./components/ProfileSider";

function page() {
  return (
    <div className="md:flex gap-[30px]">
      <ProfileSider />
      <ProfileDetail />
    </div>
  );
}

export default page;
