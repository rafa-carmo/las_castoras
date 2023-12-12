'use client'
import { A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import Image from 'next/image'

export interface Item {
  name: string
  image: string
  assoc: string
}

interface TeamSliderProps {
  items: Item[]
  title: string
  zoom?: boolean
}

export function TeamSlider({ items, title, zoom }: TeamSliderProps) {
  return (
    <div>
      <div className="relative w-fit pb-5">
        <div className="absolute bottom-2 right-2 left-2 h-1 rounded-full bg-primary-500 contents-[' ']"></div>

        <h4 className="text-3xl font-bold font-sans text-center text-primary-500 drop-shadow-[0_1.2px_1.2px_var(--tw-shadow-color)] shadow-white/75">
          {title}
        </h4>
      </div>
      <div className="pt-10">
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
          className="max-w-[100vw]"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-fit max-w-[265px] relative group"
                title={item.name}
              >
                <div className="absolute top-0 left-0 w-[185px] h-3/6 contents-[' '] bg-primary-300 [clip-path:polygon(0%_0%,100%_0%,100%_100%)] overflow-hidden -z-10 group-hover:bg-primary-500 group-hover:h-[110%] transition-all duration-500 rounded-t"></div>
                <div className="absolute bottom-0 left-0 w-[185px] h-3/6 contents-[' '] bg-primary-300 [clip-path:polygon(0%_0%,100%_0%,100%_100%)] overflow-hidden rotate-180 -z-10 group-hover:bg-primary-500 group-hover:h-[110%] transition-all duration-500 rounded-b"></div>
                <div className="relative z-0 w-[185px] ">
                  <Image
                    src="/assets/Flag_of_Argentina.png"
                    width={32}
                    height={24}
                    className="absolute top-2 right-2 w-8 h-6 shadow"
                    alt=""
                  />
                  <Image
                    src="/assets/novos_elementos/logo_with_bg.png"
                    width={40}
                    height={40}
                    className="absolute top-2 left-1 w-10 h-10 shadow rounded-full"
                    alt=""
                  />
                  <Image
                    src={item.image}
                    alt={`item ${item.name}`}
                    width={200}
                    height={250}
                    className={`rounded-[0.2rem] w-[185px] max-h-[265px] h-full object-cover relative z-0 transition-all duration-300 ${
                      zoom && 'group-hover:scale-150'
                    } `}
                    data-testid="image"
                  />
                  <div className="absolute bottom-1 z-0 text-white pt-2 pb-1 px-2 text-center flex flex-col items-center w-full cursor-default">
                    <p className=" font-bold text-xs md:text-lg leading-2 [text-shadow:_0_0_10px_var(--tw-shadow-color)] shadow-black leading-3">
                      {item.name}
                    </p>
                    <p className="text-sm leading-3">({item.assoc})</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
