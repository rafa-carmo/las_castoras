'use client'
import { A11y, Autoplay, EffectCreative } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Slide, SlideProps } from './Slide'

import 'swiper/css'
import 'swiper/css/effect-creative'

export interface HeroSliderProps {
  slides: SlideProps[]
}
export function HeroSlider({ slides }: HeroSliderProps) {
  return (
    <Swiper
      modules={[A11y, EffectCreative, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      effect="creative"
      creativeEffect={{
        prev: {
          shadow: true,
          translate: ['-100%', 0, -1],
          opacity: 0,
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      navigation
      className="max-w-[500px] w-[90vw] px-5 md:px-0"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={`slide-${index}-${slide.title}`}>
          <Slide {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
