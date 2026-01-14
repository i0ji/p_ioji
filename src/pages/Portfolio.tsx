import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio: React.FC = () => {
  return (
    <div className="p-10">
      <h2 className="mb-6 text-3xl font-bold">Мои проекты</h2>
      <div className="h-64 w-full max-w-2xl overflow-hidden rounded-xl bg-gray-800">
        <Swiper className="h-full">
          <SwiperSlide className="flex items-center justify-center bg-blue-500 text-2xl text-white">
            Проект 1
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-purple-500 text-2xl text-white">
            Проект 2
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-green-500 text-2xl text-white">
            Проект 3
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Portfolio;
