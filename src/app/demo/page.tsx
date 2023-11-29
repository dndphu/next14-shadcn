"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";

const DemoPage = () => {
  return (
    <div className="p-4">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Array.from({ length: 5 }, (x, i) => (
          <SwiperSlide key={i}>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={400}
              height={250}
              priority
            />
          </SwiperSlide>
        ))
        }
      </Swiper>
    </div>
  );
};
export default DemoPage;
