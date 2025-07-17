"use client";
import "swiper/css";
import "swiper/css/effect-fade";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CircleArrowLeft } from "lucide-react";

export default function DigiSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const slides = digiItems;
  const products = [...digiItems, ...digiItems];
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const SeeAllSlide = () => (
    <div className="flex flex-col items-center bg-white justify-center h-[254px] rounded-l-[15px] ml-5">
      <div className="flex fill-[#19bfd3] text-[#19bfd3]">
        <CircleArrowLeft size={32} />
      </div>
      <div>مشاهده همه</div>
    </div>
  );

  return (
    <div className="w-full mx-auto relative isolate">
      <style>
        {`
          .swiper-slide:not(.swiper-slide-active) {
              opacity: 1 !important;
          }
        `}
      </style>
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={5}
        className="rounded-lg relative z-[10]"
        onSlideChange={handleSlideChange}
        speed={500}
        modules={[Navigation, Pagination, FreeMode]}
        freeMode={{
          enabled: true,
          sticky: false,
        }}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={8}
        dir="rtl"
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 8,
          },
        }}
      >
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center gap-y-3 text-white">
            <img
              src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg"
              alt="ddd"
              className="size-[88px]"
            />
            <div>12:20:20</div>
            <img
              src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazing.svg"
              alt="aa"
              className="size-[80px]"
            />
            <div>مشاهده همه</div>
          </div>
        </SwiperSlide>
        {products.map((product, index) => {
          return (
            <SwiperSlide
              key={index}
              className="relative"
              aria-label={`Slide ${index + 1}`}
            >
              <div
                className={cn(
                  "bg-white border-[2px] space-y-[20px] p-[16px] !pt-0 h-[254px] z-[1000] border-[#F2F2F2] overflow-hidden flex items-center w-full flex-col",
                  index === 0 && "rounded-r-[15px]"
                )}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="w-auto h-[132px] object-cover"
                />
                <div className="" dir="rtl">
                  <h3 className="text-[12px] font-normal text-center mb-2 text-[#62666d]">
                    {product.title}
                  </h3>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-[#3f4064] text-[12px]">
                      {product.final_price}
                    </div>
                    <div className="bg-[#EF3A4F] text-[12px] text-white p-1 rounded-full font-bold">
                      {product.discount}
                    </div>
                  </div>
                  <div className="text-[#3f4064] mr-2 text-[12px]">
                    {product.original_price}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <SwiperSlide>
          <SeeAllSlide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export const digiItems = [
  {
    title: "کیسه زباله پترو کلین مدل اقتصادی بسته 20 عددی",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/f082ca23bb35de9c73f8b5c28ad766e0c646f570_1705733049.jpg",
    discount: "40٪",
    final_price: "54,000",
    original_price: "89,900",
    link: "/product/dkp-14160848/",
  },
  {
    title: "مایع سفیدکننده غلیظ سطوح دامستوس مدل Snow White حجم 750 میلی لیتر",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/1b0842945c35ede4eb99fe9ac99fff6cfca137d9_1659519611.jpg",
    discount: "19٪",
    final_price: "48,000",
    original_price: "59,400",
    link: "/product/dkp-113800/",
  },
  {
    title: "اسپری چند منظوره سیف مدل Baking Soda حاوی جوش شیرین وزن 750 گرم",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/cc482fb65687e53ca33df76b5f86ba5cdaddd7a1_1704873159.jpg",
    discount: "19٪",
    final_price: "83,000",
    original_price: "102,600",
    link: "/product/dkp-9095788/",
  },
  {
    title: "دستمال توالت فول تایم مدل رولی بسته 24 عددی",
    image:
      "https://dkstatics-public.digikala.com/digikala-products/24119e7acddfe78db5c6c50c143a8af1e2fb18f8_1671955744.jpg",
    discount: "20٪",
    final_price: "316,000",
    original_price: "393,900",
    link: "/product/dkp-10249533/",
  },
];
