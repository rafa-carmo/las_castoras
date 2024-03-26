"use client";

import { news } from "@/mocks/news";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./card";

export function NewsSection() {
  return (
    <section className="py-10 flex flex-col gap-10 border-b-4 border-black bg-primary-300/10">
      <h3 className="font-hero text-5xl md:text-7xl font-bold text-center  text-primary-500 drop-shadow-[0_1.2px_1.2px_var(--tw-shadow-color)] shadow-black/75">
        Noticias
      </h3>

      <main>
        <div className="flex gap-5 w-full">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1800: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {news.map((item, key) => (
              <SwiperSlide key={`${item.title}-${key}`} className="py-5">
                <Card {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </section>
  );
}
