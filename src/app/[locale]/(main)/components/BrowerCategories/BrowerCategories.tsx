"use client";

import SSlider from "@/components/Slider/SSlider";
import { Link } from "@/i18n/routing";
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

function BrowerCategories() {
  const { data, isPending } = useProductByGategoriesQuery();
  return (
    <div className="">
      <SSlider settings={settings} className="w-100%">
        {!isPending
          ? data &&
            data.data.data.map((product: Product, index: number) => {
              return (
                <Link
                  href={`/products/${product.id}`}
                  key={index}
                  className="max-w-[413px]"
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
                        {product.price}$
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
      </SSlider>
    </div>
  );
}

export default BrowerCategories;
