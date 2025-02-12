"use client";

import "swiper/css";
import "swiper/css/effect-fade";

import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function LeftSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  // اسلایدهای استخراج شده از HTML
  const slides = products;

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="max-w-[calc(100%_/_3)] h-[435px]   relative   ">
      {/* Custom Dots */}
      <div className="flex items-center justify-center gap-1 h-4 absolute bottom-2 z-[100] w-full ">
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
        // modules={[EffectFade]}
        // effect="fade"
        className="rounded-lg"
        loop={true}
        onSlideChange={handleSlideChange}
        speed={500}
        // fadeEffect={{
        //   crossFade: true,
        // }}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        // spaceBetween={20}
        slidesPerView={1}
        // breakpoints={{
        //   640: {
        //     slidesPerView: 1,
        //   },
        //   768: {
        //     slidesPerView: 2,
        //   },
        //   1024: {
        //     slidesPerView: 3,
        //   },
        // }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white border-[2px] h-[435px] space-y-[20px] p-[16px] !pt-0  rounded-[15px] border-[#F2F2F2] overflow-hidden flex items-center w-full  flex-col ">
              <div className=" bg-[#EF3A4F] w-full rounded-b-[15px] text-center pt-[9px] pb-[7px] ">
                <h3 className=" text-white font-semibold ">تخیفی های ویژه</h3>
              </div>
              <div className=" text-center flex items-center " dir="ltr">
                <span className="text-[#EF3A4F] text-[16px] ">امروز</span>

                <h4 className=" text-gray-300 text-[16px] ">تخفیف های ویژه</h4>
              </div>
              <img
                src={product.image_url}
                alt={product.title}
                className="w-auto h-[174px] object-cover"
              />
              <div className="p-4" dir="rtl">
                <h3 className="text-xl font-normal text-center mb-2 text-[#151515] text-[16px] ">
                  {product.title}
                </h3>

                <div className="mt-2 text-center">
                  <span className="line-through text-gray-400 mr-2 text-[12px] ">
                    {product.original_price}
                  </span>
                  <span className="text-[#EF3A4F] font-bold">
                    {product.discounted_price}
                  </span>

                  <span className="text-gray-400 font-bold">
                    {product.currency}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export const products = [
  {
    id: "1",
    discount_percent: "17% تخفیف",
    title: "ماشین لباسشویی پاکشوما",
    image_url:
      "https://pre-websites.ir/elementor/multivendor/wp-content/uploads/2022/09/product15-new.jpg",
    original_price: "18,570,000",
    discounted_price: "15,460,000",
    currency: "تومان",
  },
  {
    id: "2",
    discount_percent: "29% تخفیف",
    title: "شامپو مولتی ویتامین مو گلرنگ",
    image_url:
      "https://pre-websites.ir/elementor/multivendor/wp-content/uploads/2022/09/product7-new.jpg",
    original_price: "53,000",
    discounted_price: "37,600",
    currency: "تومان",
  },
  {
    id: "3",
    discount_percent: "39% تخفیف",
    title: "هندزفری بلوتوثی لیتو",
    image_url:
      "https://pre-websites.ir/elementor/multivendor/wp-content/uploads/2022/09/product6-new.jpg",
    original_price: "2,435,000",
    discounted_price: "1,495,000",
    currency: "تومان",
  },
  {
    id: "4",
    discount_percent: "26% تخفیف",
    title: "زعفران درجه یک مصطفوی",
    image_url:
      "https://pre-websites.ir/elementor/multivendor/wp-content/uploads/2022/09/product5-new.jpg",
    original_price: "257,700",
    discounted_price: "190,000",
    currency: "تومان",
  },
  {
    id: "5",
    discount_percent: "19% تخفیف",
    title: "ماکارونی پنه ریگاته زر ماکارون",
    image_url:
      "https://pre-websites.ir/elementor/multivendor/wp-content/uploads/2022/09/product4-new.jpg",
    original_price: "23,800",
    discounted_price: "19,200",
    currency: "تومان",
  },
  {
    id: "6",
    discount_percent: "56% تخفیف",
    title: "هندزفری بلوتوثی طرح ایرپاد",
    image_url:
      "https://pre-websites.ir/elementor/multivendor/wp-content/uploads/2022/09/product2-new.jpg",
    original_price: "189,000",
    discounted_price: "83,700",
    currency: "تومان",
  },
];
