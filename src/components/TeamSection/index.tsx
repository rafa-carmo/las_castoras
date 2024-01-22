'use client'

import { jogadorasMock } from '@/mocks/jogadoras'
import Image from 'next/image'
import { useState } from 'react'
import { Item } from '../TeamSlider'
import { corpoTecnicoMock } from '@/mocks/corpoTecnico'

export function TeamSection() {
  const [selectedPlayer, setSelectedPlayer] = useState<Item | null>(null)
  return (
    <section className="py-10 flex flex-col gap-10 px-10">
      <h3 className="font-hero text-3xl font-bold text-center text-primary-500 drop-shadow-[0_1.2px_1.2px_var(--tw-shadow-color)] shadow-white/75">
        Nosso Time
      </h3>
      <div className="flex">
        <div className="flex flex-col gap-5 flex-1 ">
          <div>
            <h3 className="text-2xl font-bold font-hero text-primary-500">
              Corpo Técnico
            </h3>
            <div className="flex-1 flex gap-5 flex-wrap">
              {corpoTecnicoMock.map((item) => (
                <div
                  key={item.name}
                  className="w-fit max-w-[265px] relative group overflow-hidden"
                  title={item.name}
                  onClick={() => setSelectedPlayer(item)}
                >
                  <div className="absolute top-0 left-0 w-[185px] h-3/6 contents-[' '] bg-primary-300 [clip-path:polygon(0%_0%,100%_0%,100%_100%)] overflow-hidden -z-10 group-hover:bg-primary-500 group-hover:h-[110%] transition-all duration-500 rounded-t"></div>
                  <div className="absolute bottom-0 left-0 w-[185px] h-3/6 contents-[' '] bg-primary-300 [clip-path:polygon(0%_0%,100%_0%,100%_100%)] overflow-hidden rotate-180 -z-10 group-hover:bg-primary-500 group-hover:h-[110%] transition-all duration-500 rounded-b"></div>
                  <div className="relative z-0 w-[185px] h-[265px]">
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
                      className={`rounded-[0.2rem] w-[185px] max-h-[265px] h-full object-cover relative z-0 transition-all duration-300`}
                      data-testid="image"
                    />
                    <div className="absolute bottom-0 z-0 left-0 right-0">
                      <div className="relative bottom-0 z-0 text-white pt-2 pb-1 px-2 text-center flex flex-col items-center w-full cursor-default">
                        <div
                          className="absolute -z-10 top-0 left-0 bottom-0 right-0 bg-primary-300 object-cover contents-[' '] cardPattern"
                          style={{
                            WebkitMaskImage: "url('/assets/splash.svg')",
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskSize: 'cover',
                          }}
                        ></div>
                        <p className=" font-bold text-xs md:text-base leading-2 [text-shadow:_0_0_10px_var(--tw-shadow-color)] shadow-black leading-3">
                          {item.name}
                        </p>
                        <p className="text-xs leading-3">({item.assoc})</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold font-hero text-primary-500">
              Jogadoras
            </h3>
            <div className="flex-1 flex gap-5 flex-wrap">
              {jogadorasMock.map((item) => (
                <div
                  key={item.name}
                  className="w-fit max-w-[265px] relative group overflow-hidden"
                  title={item.name}
                  onClick={() => setSelectedPlayer(item)}
                >
                  <div className="absolute top-0 left-0 w-[185px] h-3/6 contents-[' '] bg-primary-300 [clip-path:polygon(0%_0%,100%_0%,100%_100%)] overflow-hidden -z-10 group-hover:bg-primary-500 group-hover:h-[110%] transition-all duration-500 rounded-t"></div>
                  <div className="absolute bottom-0 left-0 w-[185px] h-3/6 contents-[' '] bg-primary-300 [clip-path:polygon(0%_0%,100%_0%,100%_100%)] overflow-hidden rotate-180 -z-10 group-hover:bg-primary-500 group-hover:h-[110%] transition-all duration-500 rounded-b"></div>
                  <div className="relative z-0 w-[185px] h-[265px]">
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
                      className={`rounded-[0.2rem] w-[185px] max-h-[265px] h-full object-cover relative z-0 transition-all duration-300`}
                      data-testid="image"
                    />
                    <div className="absolute bottom-0 z-0 left-0 right-0">
                      <div className="relative bottom-0 z-0 text-white pt-2 pb-1 px-2 text-center flex flex-col items-center w-full cursor-default">
                        <div
                          className="absolute -z-10 top-0 left-0 bottom-0 right-0 bg-primary-300 object-cover contents-[' '] cardPattern"
                          style={{
                            WebkitMaskImage: "url('/assets/splash.svg')",
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskSize: 'cover',
                          }}
                        ></div>
                        <p className=" font-bold text-xs md:text-base leading-2 [text-shadow:_0_0_10px_var(--tw-shadow-color)] shadow-black leading-3">
                          {item.name}
                        </p>
                        <p className="text-xs leading-3">({item.assoc})</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`w-2/6 opacity-100 h-full bg-primary-500 transition-all duration-300 min-h-[9rem] sticky top-0`}
        >
          <div
            className={`text-white left-0 right-0 h-36 flex items-center justify-center font-hero text-xl absolute -z-0 transition-all duration-500 ${
              selectedPlayer ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Selecione uma Jogadora para ver os detalhes
          </div>
          <div
            className={`opacity-0 ${
              selectedPlayer && 'opacity-100'
            } transition-opacity duration-500`}
          >
            {selectedPlayer && (
              <>
                <button
                  className="absolute top-5 right-5"
                  onClick={() => setSelectedPlayer(null)}
                >
                  X
                </button>
                <div className="flex items-center justify-center">
                  <h3>
                    Detalhes da Jogadora <b>{selectedPlayer.name}</b>
                  </h3>
                  <Image
                    src={selectedPlayer.image}
                    alt={`item ${selectedPlayer.name}`}
                    width={200}
                    height={250}
                    className={`rounded-[0.2rem] w-[185px] max-h-[265px] h-full object-cover relative z-0 transition-all duration-300`}
                    data-testid="image"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
