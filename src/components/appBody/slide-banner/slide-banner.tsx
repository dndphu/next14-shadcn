"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import Image from "next/image";
import './styles.css'
const SlideBanner = () => {
  const imgs = [
    {
      id: 1,
      img: "/slideBanner/gearvn-dai-tiec-rog-san-qua-toi.webp",
    },
    { id: 2, img: "/slideBanner/gearvn-laptop-gaming.webp" },
    { id: 3, img: "/slideBanner/gearvn-nam-moi-phai-toi-asus-moi.webp" },
    { id: 4, img: "/slideBanner/laptop-doanh-nhan.webp" },
    { id: 5, img: "/slideBanner/winter-sale.webp" },
  ];
  return (
    <>
      <Swiper
        className="w-full h-full  rounded-md"
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[EffectFade, Navigation]}
        effect={"fade"}
        navigation={true}
      >
        {imgs.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full rounded-md"
          >
            <Image
              src={item.img}
              alt={"img-" + index}
              className="h-full"
              width={1000}
              height={500}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export { SlideBanner };
