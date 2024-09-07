"use client";
import Image from "next/image";
import LoadingCard from "../../components/LoadingCard/LoadingCard";
import { useGetProductsFromCart } from "../../hooks/useProduct";

function ListCart() {
  const { data, isPending } = useGetProductsFromCart();
  return (
    <div>
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
              <div>
                {data.data.data.map((product, index) => (
                  <div key={index}>
                    <div className="flex">
                      <Image
                        width={175}
                        height={175}
                        src={product.images[0]}
                        alt=""
                      />
                      <div>
                        <div className="flex justify-between items-center">
                          <h2>{product.name}</h2>
                          <p>${product.price}</p>
                        </div>
                        <p>
                          ${product.price}{" "}
                          <span className="text-green-primary">In Stock</span>
                        </p>
                        <div>
                          <h3>{product.agent.name}</h3>
                          <p>5</p>
                        </div>
                      </div>
                    </div>
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
