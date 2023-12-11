'use client'
import { A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import Link from 'next/link'

export function TeamSlider() {
  return (
    <Swiper
      modules={[A11y, Autoplay]}
      spaceBetween={20}
      slidesPerView={6}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      effect="creative"
      navigation
      className="max-w-7xl"
    >
      {[...Array(20)].map((_, index) => (
        <SwiperSlide key={index}>
          <Link href="/" className="w-fit relative group">
            <div className="relative z-0 ">
              <img
                src="https://picsum.photos/200/300"
                alt=""
                width={200}
                height={250}
                className="rounded-[0.2rem] w-[185px] max-h-[265px] h-40 md:h-[265px]  object-cover relative z-0 shadow-md"
                data-testid="image"
              />

              <p className="relative z-0 font-semibold text-xs md:text-sm leading-4 text-zinc-500 pt-2 font-title px-2">
                Nome da Jogadora
              </p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
