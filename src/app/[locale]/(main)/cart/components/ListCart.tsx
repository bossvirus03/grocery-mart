"use client";
import LoadingCard from "../../components/LoadingCard/LoadingCard";
import { useGetProductsFromCart } from "../../hooks/useProduct";
import CartProduct from "./CartProduct";

function ListCart({ locale }: { locale: "vi" | "en" }) {
  const { data, isPending } = useGetProductsFromCart();
  console.log(data);
  return (
    <div className="w-full">
      <div>
        {isPending ? (
          [...Array(4)].map((_, index) => (
            <div key={index}>
              <LoadingCard />
            </div>
          ))
        ) : (
          <>
            {data && (
              <div className="bg-white dark:bg-dark-primary rounded-[20px]">
                {data.data.data.map((product, index) => (
                  <div key={index} className="p-[30px] ">
                    <CartProduct product={product} locale={locale} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
        <div></div>
      </div>
    </div>
  );
}

export default ListCart;
