"use client";

import { Link } from "@/i18n/routing";
import { currencyConversion } from "@/lib/utils";
import Image from "next/image";
import { Settings } from "react-slick";
import { useProductByGategoriesQuery } from "../../hooks/useProduct";
import { Product } from "../../schemas/product.schema";
import LoadingCard from "../LoadingCard/LoadingCard";

const settings: Settings = {
  dots: false,
  speed: 1200,
  autoplay: true,
  infinite: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
};

function BrowerCategories({ params }: { params: { locale: "vi" | "en" } }) {
  const { data, isPending } = useProductByGategoriesQuery();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] place-items-center">
      {/* <SSlider settings={settings} className="w-100%"> */}
      {!isPending
        ? data &&
          data.data.data.map((product: Product, index: number) => {
            return (
              <Link
                href={`/products/${product.id}`}
                key={index}
                className="w-full max-w-[413px] self-center"
              >
                <div className="dark:bg-dark-primary bg-light-primary p-[26px] flex justify-between items-center rounded-[16px] text-black-primary dark:text-white w-full">
                  <div className="w-[116px] h-[116px]">
                    <Image
                      src={product.images[0]}
                      width={116}
                      height={116}
                      alt="thumb"
                      className="w-full h-full object-contain rounded-[8px] dark:bg-dark bg-light"
                    />
                  </div>
                  <div className="ml-[20px] flex-1">
                    <h3 className="font-bold text-[22px] ">
                      {currencyConversion(product.price, params.locale)}
                    </h3>
                    <p className="line-clamp-2 font-[400] text-[14px]">
                      {product.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })
        : [...Array(3)].map((_, index) => (
            <div key={index}>
              <LoadingCard />
            </div>
          ))}
      {/* </SSlider> */}
    </div>
  );
}

export default BrowerCategories;
