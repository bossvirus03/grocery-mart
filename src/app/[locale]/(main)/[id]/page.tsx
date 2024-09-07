import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ProductDetail from "../products/[id]/components/ProductDetail";

function page() {
  return (
    <div className="">
      <Breadcrumb path={["Home", "Product", "Apple Watch"]} />
      <ProductDetail />
    </div>
  );
}

export default page;
