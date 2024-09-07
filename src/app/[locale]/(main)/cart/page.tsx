import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ListCart from "./components/ListCart";

function page() {
  const path = ["Home", "Cart"];
  //   const t = useTranslations("Cart");
  return (
    <div>
      <Breadcrumb path={path} />
      <div>
        <ListCart />
        <div></div>
      </div>
    </div>
  );
}

export default page;
