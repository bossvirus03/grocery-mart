import SSlider from "@/components/Slider/SSlider";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { PiOptionBold } from "react-icons/pi";
import { Settings } from "react-slick";
import BrowerCategories from "../components/BrowerCategories/BrowerCategories";
import SuggestedProducts from "../components/Suggestion/SuggestedProducts";

function HomePage() {
  const t = useTranslations("HomePage");
  const settings: Settings = {
    touchMove: true,
    dots: false,
    infinite: true,
    arrows: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="min-h-[calc(100vh-110px)] flex gap-y-10 flex-col">
      <div className="mt-10 overflow-hidden">
        <SSlider settings={settings} className="w-100%">
          <Link href={"#"} className="max-h-[455px]">
            <Image
              className="w-full max-h-[455px] max-w-[1340px] object-contain rounded-5"
              alt="banner-image"
              src="/Banner.png"
              width={1340}
              height={455}
            />
          </Link>
          <Link href={"#"} className="max-h-[455px]">
            <Image
              className="w-full max-h-[455px] max-w-[1340px] object-contain rounded-5"
              alt="banner-image"
              src="/Banner.png"
              width={1340}
              height={455}
            />
          </Link>
        </SSlider>
      </div>
      <div>
        <div className="mb-5">
          <h2 className="text-[24px] font-[700]">Browse Categories</h2>
        </div>
        <div>
          <BrowerCategories />
        </div>
      </div>
      <div>
        <div className="mb-5 flex justify-between">
          <h2 className="text-[24px] font-[700]">Suggestion Today</h2>
          <button className="p-2 flex justify-center items-center gap-1 dark:bg-dark-primary bg-light-primary rounded-[6px]">
            Filter <PiOptionBold size={24} />
          </button>
        </div>
        <SuggestedProducts />
      </div>
    </div>
  );
}
export default HomePage;
