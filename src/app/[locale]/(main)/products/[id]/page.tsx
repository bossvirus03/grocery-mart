import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ProductDetail from "./components/ProductDetail";

function page() {
  return (
    <div className="">
      <Breadcrumb path={["Home", "Product", "Apple Watch"]} />
      <ProductDetail />
    </div>
  );
}

export default page;
