"use client";

import "swiper/css";
import "swiper/css/effect-fade";

import { EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function CustomThumbSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  // اسلایدهای استخراج شده از HTML
  const slides = [
    {
      id: "71338e5",
      className: "elementor-repeater-item-71338e5",
      image:
        "https://pre-websites.ir/elementor/multivendor/wp-content/uploads/2023/07/Hero-Purple-min-1.png",
    },
    {
      id: "41be30f",
      className: "elementor-repeater-item-41be30f",
      image:
        "https://pre-websites.ir/elementor/multivendor/wp-content/uploads/2023/07/Hero-Red.png",
    },
    {
      id: "71f6731",
      className: "elementor-repeater-item-71f6731",
      image:
        "https://pre-websites.ir/elementor/multivendor/wp-content/uploads/2023/07/Hero-Yellow-min-1.png",
    },
  ];

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="max-w-[calc(2_*_100%_/_3)] h-[435px]   relative isolate ">
      {/* Custom Dots */}
      <div className="flex items-center justify-center gap-3  absolute top-[0px]  right-[9.25rem] z-[100] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="167"
          height="48"
          viewBox="0 0 167 48"
          fill="none"
          className=" absolute  "
        >
          <path
            d="M9.45585 0C4.50967 0 0.5 4.00967 0.5 8.95585C0.5 13.0893 3.3288 16.6858 7.34586 17.6596L10.289 18.3731C14.4779 19.3886 17.875 22.4432 19.3282 26.5011L23.4667 38.0573C25.6024 44.0208 31.254 48 37.5885 48L132.494 48C138.942 48 144.668 43.8795 146.717 37.7659L149.9 28.268C151.236 24.2785 154.205 21.0445 158.066 19.3716L161.363 17.9425C164.785 16.4597 167 13.0864 167 9.35697C167 4.18926 162.811 0 157.643 0L9.45585 0Z"
            fill="white"
          ></path>
        </svg>

        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => swiperRef?.slideToLoop(index)}
            className={cn(
              "relative transition-all duration-300 rounded-full bg-black/60  ",
              "hover:bg-black/80",
              activeIndex === index
                ? " opacity-100 bg-[#EF3A4F] h-2 w-6 "
                : "size-2 opacity-50",
              index === 0 && "origin-left-center",
              index === 1 && "origin-center-center",

              index === 2 && "origin-right-center"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      {/* Main Slider */}
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={10}
        modules={[EffectFade]}
        effect="fade"
        className="rounded-lg"
        loop={true}
        onSlideChange={handleSlideChange}
        speed={500}
        fadeEffect={{
          crossFade: true,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className={cn(
              slide.className,
              "relative aspect-[16/10] overflow-hidden"
            )}
          >
            {/* اضافه کردن کلاس‌های elementor و افکت ken burns */}
            {/* <div
              className={cn(
                "swiper-slide-bg absolute inset-0 w-full h-full transition-transform duration-[8000ms]",
                activeIndex === slides.findIndex((s) => s.id === slide.id) &&
                  "elementor-ken-burns--active scale-110"
              )}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            /> */}

            <img
              src={slide.image}
              alt={`aaa`}
              className="w-full h-[435px] object-cover rounded-[20px] "
            />
            {/* <img src={slide.image} alt="img" className=" size-[300px] " /> */}
            {/* محتوای اسلاید با انیمیشن fadeInUp */}
            <div className="swiper-slide-inner relative z-10">
              <div
                className={cn(
                  "swiper-slide-contents",
                  activeIndex === slides.findIndex((s) => s.id === slide.id) &&
                    "animate-fadeInUp"
                )}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper {
          overflow: hidden;
        }

        .swiper-slide {
          transition: opacity 0.3s ease;
        }

        .swiper-slide:not(.swiper-slide-active) {
          opacity: 0 !important;
        }

        .swiper-slide-active {
          z-index: 1;
        }

        /* انیمیشن fadeInUp */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 50px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }

        /* افکت Ken Burns */
        .elementor-ken-burns--active {
          transition: transform 8s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        }
      `}</style>
    </div>
  );
}

{
  /* <svg xmlns="http://www.w3.org/2000/svg" width="167" height="48" viewBox="0 0 167 48" fill="none"><path d="M9.45585 0C4.50967 0 0.5 4.00967 0.5 8.95585C0.5 13.0893 3.3288 16.6858 7.34586 17.6596L10.289 18.3731C14.4779 19.3886 17.875 22.4432 19.3282 26.5011L23.4667 38.0573C25.6024 44.0208 31.254 48 37.5885 48L132.494 48C138.942 48 144.668 43.8795 146.717 37.7659L149.9 28.268C151.236 24.2785 154.205 21.0445 158.066 19.3716L161.363 17.9425C164.785 16.4597 167 13.0864 167 9.35697C167 4.18926 162.811 0 157.643 0L9.45585 0Z" fill="white"></path></svg> */
}
