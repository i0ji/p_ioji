import heroData from "data/data";

import { Card } from "./ui";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore from "swiper/core";

export default function Hero() {
  SwiperCore.use([Pagination]);

  return (
    <section
      id="hero"
      className="flex h-screen w-full snap-start items-center justify-center border-l-purple-950 bg-gradient-to-br from-cyan-800 from-5%"
    >
      <div className="mx-auto flex h-[90%] w-full flex-wrap items-center justify-around">
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          navigation
          pagination={{ type: "progressbar" }}
          className="relative h-[70] w-full max-w-[80vw] pt-10"
        >
          {heroData.map((item: heroModel) => (
            <SwiperSlide key={nanoid()} className="h-ull">
              <Card data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
