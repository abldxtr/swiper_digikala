"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CustomDotSlider() {
  // Sample data for slides
  const slides = [
    {
      id: 1,
      //   image: "/placeholder.svg?height=500&width=800",
      title: "اسلاید اول",
    },
    {
      id: 2,
      //   image: "/placeholder.svg?height=500&width=800",
      title: "اسلاید دوم",
    },
    {
      id: 3,
      //   image: "/placeholder.svg?height=500&width=800",
      title: "اسلاید سوم",
    },
    {
      id: 4,
      //   image: "/placeholder.svg?height=500&width=800",
      title: "اسلاید چهارم",
    },
    {
      id: 5,
      //   image: "/placeholder.svg?height=500&width=800",
      title: "اسلاید پنجم",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Swiper
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} custom-pagination-bullet"></span>`,
        }}
        modules={[Navigation, Pagination]}
        className="rounded-lg custom-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative aspect-[16/10]">
              {/* <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                className="w-full h-full object-cover"
              /> */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <h3 className="text-xl font-bold">{slide.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .custom-slider {
          --swiper-pagination-bottom: 16px;
          --swiper-pagination-bullet-size: 8px;
          --swiper-pagination-bullet-inactive-opacity: 1;
          --swiper-pagination-bullet-horizontal-gap: 6px;
        }

        .custom-pagination-bullet {
          background-color: white !important;
          opacity: 0.5 !important;
          transition: all 0.3s ease !important;
          transform: scale(1) !important;
        }

        .custom-pagination-bullet-active {
          opacity: 1 !important;
          transform: scale(1.5) !important;
        }

        /* اضافه کردن سایه برای بهتر دیده شدن نقطه‌ها روی تصاویر روشن */
        .swiper-pagination-bullet {
          box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
