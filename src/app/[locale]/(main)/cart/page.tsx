import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ListCart from "./components/ListCart";
import PreviewCartTotal from "./components/PreviewCartTotal";

function page({ params: { locale } }: { params: { locale: "en" | "vi" } }) {
  const path = ["Home", "Cart"];
  //   const t = useTranslations("Cart");
  return (
    <div>
      <Breadcrumb path={path} />
      <div className="flex gap-[30px]">
        <ListCart locale={locale} />
        <PreviewCartTotal />
      </div>
    </div>
  );
}

export default page;
