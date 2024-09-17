"use client";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import LoadingCard from "../../components/LoadingCard/LoadingCard";
import { useGetSavedProducts } from "../hooks/useSaveProduct";
import CardFavoriteProduct from "./CardFavoriteProduct";

function ListFavoriteProduct({ locale }: { locale: "vi" | "en" }) {
  const { data, isPending } = useGetSavedProducts();
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  console.log(selectedProducts);

  // Handle selecting all products
  const handleSelectAll = () => {
    if (!selectAll) {
      const allProductIds = data?.data.data.map((product) => product.id) || [];
      setSelectedProducts(allProductIds);
    } else {
      setSelectedProducts([]);
    }
    setSelectAll(!selectAll);
  };

  // Handle selecting individual product
  const handleSelectProduct = (productId: string) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  return (
    <div>
      {!isPending ? (
        <div className="">
          <p className="font-[400]">{data && data?.data.data.length} items</p>
          <Input
            className="w-[18.5px] h-[18.5px] my-[30px]"
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAll}
          />
          {data &&
            data?.data.data.map((product) => (
              <div
                key={product.id}
                className="flex gap-5 border-b-2 dark:border-dark-secondary border-gray-primary pb-[30px]"
              >
                <Input
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => handleSelectProduct(product.id)}
                />
                <CardFavoriteProduct locale={locale} product={product} />
              </div>
            ))}
          <div className="flex justify-between items-center mt-[30px]">
            <Link
              href={"#"}
              className="flex gap-2 items-center text-[18px] dark:text-gray-dark text-black-primary"
            >
              <IoIosArrowBack />
              Continue Shopping
            </Link>
            <Button className="rounded-full px-[40px] py-[18px] h-[68px]">
              All Check Out
            </Button>
          </div>
        </div>
      ) : (
        <LoadingCard />
      )}
    </div>
  );
}

export default ListFavoriteProduct;
