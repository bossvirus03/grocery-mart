import Input from "@/components/Input/Input";
import { currencyConversion } from "@/lib/utils";
import useDebounce from "@/lib/utils/hooks/useDebounce";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ProductFromCart } from "../../schemas/product.schema";
import { apiUpdateCartItemQuantity } from "../../services/api";

function CartProduct({
  product,
  locale,
}: {
  product: ProductFromCart;
  locale: "vi" | "en";
}) {
  const [quantity, setQuantity] = useState<number | string>(product.quantity);
  const [fetching, setFetching] = useState(false);
  const debouncedSearchValue = useDebounce(quantity, 500);
  const fetchRef = useRef(0);
  useEffect(() => {
    if (debouncedSearchValue) {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setFetching(true);

      apiUpdateCartItemQuantity(product.id, debouncedSearchValue)
        .then((newOptions) => {
          if (fetchId !== fetchRef.current) {
            return;
          }
          setFetching(false);
        })
        .catch(() => {
          setFetching(false);
        });
    }
  }, [debouncedSearchValue]);
  return (
    <div className="flex border-b-2 dark:border-dark border-gray-primary w-full">
      <Image width={175} height={175} src={product.images[0]} alt="" />
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-[18px]">{product.name}</h2>
          <p className="my-4 text-[22px] font-bold">
            {currencyConversion(product.price, locale)}
          </p>
        </div>
        <p>
          {currencyConversion(product.price, locale)} |{" "}
          <span className="text-green-primary">In Stock</span>
        </p>
        <div>
          <h3>{product.agent.name}</h3>
          <Input
            value={quantity}
            type="number"
            onChange={(e) => {
              setQuantity(Number(e.target.value));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
