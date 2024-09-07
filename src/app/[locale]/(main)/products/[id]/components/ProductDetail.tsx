"use client";
import Button from "@/components/Button/Button";
import Icon from "@/components/Icon/Icon";
import Tabs, { TabItems } from "@/components/Tabs/Tabs";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaRegHeart } from "react-icons/fa";
import {
  useAddProductToCart,
  useGetProductDetail,
} from "../../../hooks/useProduct";
import StarIcon from "./../../../../../../assets/images/icon/StarIcon.svg";

function ProductDetail() {
  const params = useParams<{ id: string }>();
  const { data, isPending } = useGetProductDetail(params.id);
  const {
    addProductToCart,
    data: addProductToCartData,
    isPending: isAddProductToCartPending,
  } = useAddProductToCart();
  const tabItems: TabItems[] = [
    {
      key: "desc",
      label: <p>Description</p>,
      children: (
        <>
          <h2 className="font-[700] text-black-primary dark:text-white text-[24px]">
            Some Description about this product
          </h2>
          <p className="mt-5 min-h-[150px] p-6 bg-light-secondary dark:bg-dark-primary">
            {data?.data.description}
          </p>
        </>
      ),
    },
    { key: "feat", label: <p>Features</p> },
    {
      key: "review",
      label: <p>Review</p>,
      children: (
        <>
          <h2 className="font-[700] text-black-primary dark:text-white text-[24px]">
            What our customers are saying
          </h2>
        </>
      ),
    },
    { key: "similar", label: <p>Similar</p> },
  ];

  const handleAddProductToCart = (id: string) => {
    addProductToCart(id);
  };
  return (
    <div>
      {!isPending ? (
        <>
          {data && (
            <>
              <div className="flex ">
                <Image
                  src={data.data.images[0]}
                  alt=""
                  width={550}
                  height={550}
                />
                <div className="p-[60px] bg-light-primary dark:bg-dark-primary w-full">
                  <h1 className="text-[26px] dark:text-white ">
                    {data.data.name}
                  </h1>
                  <div className="flex w-full mt-5">
                    <div className="w-full">
                      <h2 className="flex items-center dark:text-white text-[18px]">
                        <Icon svg={StarIcon} size={19} />({data.data.star}) 1000
                        Reviews
                      </h2>
                    </div>
                    <div>
                      <div className="border rounded-[6px] border-gray-dark p-5">
                        <h2 className="text-[26px] dark:text-white">
                          ${data.data.price}
                        </h2>
                        <div className="flex justify-center items-center gap-5  mt-5">
                          <Button
                            onClick={() => handleAddProductToCart(params.id)}
                            className="w-[213px] h-[46px]"
                            type="button"
                          >
                            {isAddProductToCartPending
                              ? "Loading"
                              : "Add to Cart"}
                          </Button>
                          <Button className="h-[46px]" type="button" dashed>
                            <FaRegHeart size={24} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Tabs items={tabItems} />
              </div>
              <div></div>
            </>
          )}
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default ProductDetail;
