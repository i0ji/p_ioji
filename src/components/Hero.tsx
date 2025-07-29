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
      <div className="mx-auto flex h-[90%] max-w-screen-xl flex-wrap items-center justify-around">
        <Swiper
          modules={[Navigation]}
          
          slidesPerView={2}
          navigation
          pagination={{ type: "progressbar" }}
          className="relative h-[70] w-full max-w-screen-xl pt-10"
        >
          {heroData.map((item: heroModel) => (
            <SwiperSlide key={nanoid()} 
            style={{marginRight: '0!impoprtant'}}
            className="flex mr-0 justify-center">
              <Card data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
