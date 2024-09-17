import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ListFavoriteProduct from "./components/ListFavoriteProduct";

function page({ params: { locale } }: { params: { locale: "vi" | "en" } }) {
  const path = ["Home", "Favorite"];
  return (
    <div>
      <Breadcrumb path={path} />
      <div className="bg-light-primary dark:bg-dark-primary p-[30px] rounded-[20px]">
        <h1>Favourite List</h1>
        <ListFavoriteProduct locale={locale} />
      </div>
    </div>
  );
}

export default page;
