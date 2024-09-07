import FindProductImg from "@/assets/images/FindProducts.png";
import SSlider from "@/components/Slider/SSlider";
import Image from "next/image";
import { ReactNode } from "react";

function AuthLayout({
  children,
  locale,
}: {
  children: ReactNode;
  locale: string;
}) {
  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden">
        <SSlider>
          {/* Slide 1 */}
          <div className="bg-[#FAFAFD] dark:bg-[#171C28] w-[422px]">
            <div className="w-full h-[calc(100%-40px)] p-4">
              <div className="flex justify-center items-center flex-col">
                <Image
                  src={FindProductImg}
                  alt="Find Products"
                  width={424}
                  height={265}
                  className="mb-4"
                />
                <p className="text-[1.125rem] font-[500] text-black-primary dark:text-gray-dark text-center">
                  The best of luxury brand values, high quality <br />
                  products, and innovative services
                </p>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          {children}
        </SSlider>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center h-[100vh]">
        {/* left */}
        <div className="flex-1 flex items-center justify-center bg-[#FAFAFD] dark:bg-[#171C28] h-full w-full">
          <div className="flex flex-col items-center justify-center max-w-[422px] w-full p-4">
            <Image
              src={FindProductImg}
              alt="Find Products"
              width={422}
              height={261}
              className="mb-4"
            />
            <p className="text-[1.125rem] font-[500] text-black-primary dark:text-gray-dark text-center">
              The best of luxury brand values, high quality <br />
              products, and innovative services
            </p>
          </div>
        </div>
        {/* right */}
        {children}
      </div>
    </>
  );
}

export default AuthLayout;
