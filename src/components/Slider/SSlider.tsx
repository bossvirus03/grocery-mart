"use client";
import ArrowRightIcon from "@/assets/images/icon/ArrowRight.svg";
import Image from "next/image";
import { ReactNode, useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface SSliderProps {
  // infinite?: boolean;
  // dots?: boolean;
  // arrows?: boolean;
  // speed?: number;
  // slidesToShow?: number;
  // slidesToScroll?: number;
  children?: ReactNode;
  className?: string;
  settings?: Settings;
}

const SSlider: React.FC<SSliderProps> = ({ children, className, settings }) => {
  const sliderRef = useRef<Slider>(null);

  const sliderSettings: Settings = {
    ...settings,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <div
          className="slick-dots-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul>{dots}</ul>
          <button
            className="slick-next-button pl-2"
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Next Slide"
          >
            <Image
              className=""
              src={ArrowRightIcon}
              alt="icon"
              width={25}
              height={16}
            />
          </button>
        </div>
      </div>
    ),
    customPaging: () => <div className="ft-slick__dots--custom"></div>,
  };

  return (
    <Slider ref={sliderRef} className={className} {...sliderSettings}>
      {children}
    </Slider>
  );
};

export default SSlider;
