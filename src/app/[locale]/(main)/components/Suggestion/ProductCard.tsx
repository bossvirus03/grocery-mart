import Icon from "@/components/Icon/Icon";
import { currencyConversion } from "@/lib/utils";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import StarIcon from "./../../../../../assets/images/icon/StarIcon.svg";

function ProductCard({
  product,
  params: { locale },
}: {
  product: any;
  params: { locale: "vi" | "en" };
}) {
  return (
    <>
      <div className="rounded-[20px] flex flex-col dark:bg-dark-primary bg-white md:min-w-[312px] max-w-[333px] md:min-h-[458px] p-4 gap-4">
        <div className="w-[280px] h-[280px] relative">
          <Image
            className="w-full h-full object-contain rounded-[8px]"
            src={product.images[0]}
            alt="thumb"
            width={280}
            height={280}
          />
          <button className="absolute w-[50px] h-[50px] flex justify-center items-center bg-light dark:bg-dark rounded-full right-0 bottom-0">
            <FaRegHeart size={24} />
            {/* <FaHeart size={24} /> */}
          </button>
        </div>
        <div className="mt-4">
          <h3 className="dark:text-white text-black-primary text-[16px] capitalize ">
            {product.name}
          </h3>
          <p className="text-[15px] text-gray-light font-[400]">
            {product.category}
          </p>
        </div>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-black-primary dark:text-white ">
            {currencyConversion(product.price, locale)}
          </span>
          <span className="flex justify-center items-center gap-2">
            <p className="dark:text-white text-[16px] text-black-primary">
              {product.star}
            </p>
            <Icon svg={StarIcon} size={19} />
          </span>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
