import DigiSwiper from "@/components/digi-swiper";
import LeftSlider from "@/components/left-side";
import Slider from "@/components/slider";

export default function Home() {
  return (
    <>
      <div className=" flex items-center justify-center py-4  mt-8 w-full gap-x-4 container mx-auto bg-[#EF3A4F] rounded-lg ">
        {/* <LeftSlider /> */}
        {/* <Slider /> */}
        <DigiSwiper />
        {/* <Counter /> */}
      </div>

      <div className=" flex items-center justify-center py-4  mt-8 w-full gap-x-4 container mx-auto  rounded-lg ">
        <LeftSlider />
        <Slider />
      </div>
    </>
  );
}
