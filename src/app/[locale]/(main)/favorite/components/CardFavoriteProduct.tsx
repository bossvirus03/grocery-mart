import Button from "@/components/Button/Button";
import { currencyConversion } from "@/lib/utils";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Product } from "../../schemas/product.schema";

function CardFavoriteProduct({
  locale,
  product,
}: //   key,
{
  locale: "vi" | "en";
  product: Product;
  //   key: string | number;
}) {
  return (
    <div className="flex gap-[30px] w-full">
      <Image
        src={product.images[0]}
        width={144}
        height={144}
        alt={product.name}
      />
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-[22px]">{product.name}</h2>
          <h2 className="text-[22px] font-[700]">
            {currencyConversion(product.price, locale)}
          </h2>
        </div>
        <div className="my-4">
          <p>{currencyConversion(product.price, locale)}</p>
          <span className="text-green-primary">In Stock</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-[25px]">
            <Button
              dashed
              className="flex justify-center items-center gap-2 border-none font-[500]"
            >
              <FaHeart className="text-red-500" /> Save
            </Button>
            <Button
              dashed
              className="flex justify-center items-center gap-2 border-none font-[500]"
            >
              <MdDeleteOutline size={24} /> Delete
            </Button>
          </div>
          <Button className="h-[68px] rounded-full px-[40px] py-[18px]">
            Check Out
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardFavoriteProduct;
