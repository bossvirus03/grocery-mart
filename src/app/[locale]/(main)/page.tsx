// import BannerImg from "@/assets/images/Banner.png";
import SSlider from "@/components/Slider/SSlider";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Settings } from "react-slick";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const settings: Settings = {
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
    <div className="h-[calc(100vh-110px)] flex gap-y-10 flex-col">
      <div className="mt-10 overflow-hidden">
        <SSlider settings={settings} className="w-100%">
          <Link href={"#"} className="max-h-[455px] bg-red-400">
            <Image
              className="w-full max-h-[455px] max-w-[1340px] object-contain rounded-5"
              alt="banner-image"
              src="/Banner.png"
              width={335}
              height={166}
            />
          </Link>
          <Link href={"#"}>
            <Image
              className="w-full max-h-[455px] max-w-[1340px] object-contain rounded-5"
              alt="banner-image"
              src="/Banner.png"
              width={335}
              height={166}
            />
          </Link>
        </SSlider>
      </div>
      <div>
        <h2>Browse Categories</h2>
        <div></div>
      </div>
    </div>
  );
}
