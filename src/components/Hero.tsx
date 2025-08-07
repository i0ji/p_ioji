import { useState, useEffect } from "react";

import { heroData } from "data/data";

import { HeroCard } from "ui/index";
import { nanoid } from "nanoid";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export default function Hero() {
  SwiperCore.use([Navigation, Pagination]);
  const [, setIsMobile] = useState(false);

  useEffect(() => {
    function checkScreen() {
      setIsMobile(window.innerWidth < 768);
    }
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section
      id="hero"
      className="flex h-screen w-full snap-start flex-col items-center justify-center border-l-purple-950 bg-gradient-to-br from-cyan-800 from-5% pt-10 2xl:flex-row"
    >
      <Swiper
        className="w-full"
        modules={[Pagination]}
        loop={false}
        //LATER customize styles
        pagination={{
          type: "progressbar",
          clickable: false,
        }}
        spaceBetween={5}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
        }}
        slidesPerView={"auto"}
        slidesPerGroup={1}
      >
        {heroData.map((item: heroModel) => (
          <SwiperSlide key={nanoid()}>
            <HeroCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
