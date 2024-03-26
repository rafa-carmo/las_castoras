"use client";

import { corpoTecnicoMock } from "@/mocks/corpoTecnico";
import { jogadorasMock } from "@/mocks/jogadoras";
import Image from "next/image";
import { useState } from "react";
import type { Item } from "../TeamSlider";

export function TeamSection() {
  const [selectedPlayer, setSelectedPlayer] = useState<Item>(jogadorasMock[0]);
  return (
    <section className="pt-10 flex flex-col gap-10 border-t-4 border-black bg-primary-300/10">
      <h3 className="font-hero text-5xl md:text-7xl font-bold text-center  text-primary-500 drop-shadow-[0_1.2px_1.2px_var(--tw-shadow-color)] shadow-white/75">
        Nosso Time
      </h3>
      <div className="flex border-y-4 border-black">
        <div className="flex items-center flex-1 h-[48rem] relative bg-primary-300/25 overflow-hidden">
          <div className="absolute top-0 left-0 bg-secondary-600 rounded-r-full rounded-b-full pr-5 pb-5">
            <img
              src="/assets/logo.png"
              alt="Logo Las Castoras"
              className="pt-5 pl-5 w-20 h-20"
            />
          </div>
          <div className="absolute -z-10 top-0 left-0 right-0 bottom-0 opacity-25">
            <img
              src="/assets/novos_elementos/ArgentinaFlagCenter.png"
              alt="Bandeira Argentina"
              className="object-fill w-full h-full"
            />
          </div>
          <div className="flex-1 h-full">
            <img
              src={selectedPlayer.image}
              alt={selectedPlayer.name}
              className="object-contain w-full h-full shadow-filter"
            />
          </div>
          <div className="absolute -right-32 top-28 -rotate-90 flex items-center justify-center bg-zinc-200 py-2">
            <p className="p-2 text-lg font-bold font-hero border-r border-black">
              Comissão técnica
            </p>
            <p className="p-2  text-lg font-bold font-hero">Jogadoras</p>
          </div>
          <div className="flex-1 ">
            <div className="flex flex-col space-y-5 w-fit max-w-xl">
              <div className="flex flex-col items-center w-fit">
                <h3 className=" text-6xl md:text-8xl font-bold font-hero text-primary-500 text-center">
                  {selectedPlayer.name}
                </h3>
                <h4 className="text-2xl font-bold font-hero">
                  {selectedPlayer.assoc}
                </h4>
              </div>
              <hr className="border border-black" />
              <div>
                <h4 className="text-2xl font-bold text-center">Posição</h4>
              </div>
            </div>
          </div>
        </div>
        <aside className="w-full max-w-[32rem] h-[48rem] bg-sky-200 p-5 grid grid-cols-1 gap-x-5 border-l border-black relative">
          {jogadorasMock.map((jogadora) => (
            <>
              <button
                type="button"
                key={jogadora.name}
                className="text-2xl font-hero font-bold text-start flex items-end gap-5 transition-all duration-500 hover:text-primary-700 hover:scale-105"
                onClick={() => setSelectedPlayer(jogadora)}
              >
                <img
                  src={jogadora.image}
                  className="w-10 h-10 object-cover border rounded-full align-bottom"
                  alt={jogadora.name}
                />
                {jogadora.name}
              </button>
              <hr className="border border-black/25 mt-2" />
            </>
          ))}
        </aside>
      </div>
    </section>
  );
}
