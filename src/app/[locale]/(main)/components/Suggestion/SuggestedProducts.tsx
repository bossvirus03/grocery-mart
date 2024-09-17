"use client";
import { Link } from "@/i18n/routing";
import { useSuggestedProduct } from "../../hooks/useProduct";
import { Product } from "../../schemas/product.schema";
import LoadingCard from "../LoadingCard/LoadingCard";
import ProductCard from "../Products/ProductCard";

function SuggestedProducts({ params }: { params: { locale: "vi" | "en" } }) {
  const { data, isPending } = useSuggestedProduct();
  const products = data?.data.data;
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[30px] place-items-center">
      {!isPending
        ? products &&
          products.map((product: Product, index: number) => {
            return (
              <Link key={index} href={`products/${product.id}`}>
                <ProductCard params={params} product={product}></ProductCard>
              </Link>
            );
          })
        : [...Array(9)].map((_, index) => (
            <div key={index}>
              <LoadingCard />
            </div>
          ))}
    </div>
  );
}

export default SuggestedProducts;
