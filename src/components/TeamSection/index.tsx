'use client'

import { corpoTecnicoMock } from '@/mocks/corpoTecnico'
import { jogadorasMock } from '@/mocks/jogadoras'
import { useAnimation } from 'framer-motion'
import { useState } from 'react'
import type { Item } from '../TeamSlider'
import { PlayerInfo } from './player'

export function TeamSection() {
  const [selectedPlayer, setSelectedPlayer] = useState<Item>(jogadorasMock[0])
  const [sectionTeam, setSectionTeam] = useState<Item[]>(jogadorasMock)
  const controls = useAnimation()

  async function changePlayer(player: Item) {
    await controls.start('hidden')
    setSelectedPlayer(player)
    await controls.start('visible')
  }
  return (
    <section className="pt-10 flex flex-col gap-10 border-t-4 border-black bg-primary-300/10">
      <h3 className="font-hero text-5xl md:text-7xl font-bold text-center  text-primary-500 drop-shadow-[0_1.2px_1.2px_var(--tw-shadow-color)] shadow-white/75">
        Nosso Time
      </h3>
      <div className="flex md:flex-row flex-col border-y-4 border-black">
        <div className="flex items-center flex-1 h-[48rem] relative bg-primary-300/25 overflow-hidden">
          <div className="absolute top-0 left-0 bg-secondary-600 rounded-r-full rounded-b-full md:pr-5 md:pb-5">
            <img
              src="/assets/logo.png"
              alt="Logo Las Castoras"
              className="md:pt-5 md:pl-5 w-14 h-14 md:w-20 md:h-20"
            />
          </div>

          <div className="absolute -z-10 top-0 left-0 right-0 bottom-0 opacity-25">
            <img
              src="/assets/novos_elementos/ArgentinaFlagCenter.png"
              alt="Bandeira Argentina"
              className="object-fill w-full h-full"
            />
          </div>
          <div className="absolute z-10 md:-right-32 md:top-28 md:-rotate-90 md:bottom-auto bottom-0 flex items-center justify-center bg-primary-700 md:py-2 rounded-t-sm text-white md:gap-0 gap-1">
            <button
              type="button"
              onClick={() => setSectionTeam(corpoTecnicoMock)}
              className="md:p-2 px-2 text-lg font-bold font-hero border-r border-black"
            >
              Comissão técnica
            </button>
            <button
              type="button"
              onClick={() => {
                setSectionTeam(jogadorasMock)
              }}
              className="md:p-2 px-2  text-lg font-bold font-hero"
            >
              Jogadoras
            </button>
          </div>
          <div className="flex w-full h-[35rem] items-center justify-center md:flex-row flex-col">
            <PlayerInfo
              image={selectedPlayer.image}
              name={selectedPlayer.name}
              assoc={selectedPlayer.assoc}
              controls={controls}
            />
          </div>
        </div>
        <aside className="w-full max-w-[32rem] h-[48rem] bg-sky-200  border-l border-black relative">
          <div className="p-5 grid grid-cols-1 max-h-[48rem] gap-x-5 overflow-y-auto">
            {sectionTeam.map((jogadora) => (
              <>
                <button
                  type="button"
                  key={jogadora.name}
                  className="text-2xl font-hero font-bold text-start flex items-end gap-5 transition-all duration-500 hover:text-primary-700 hover:scale-105 py-0.5"
                  onClick={() => changePlayer(jogadora)}
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
          </div>
        </aside>
      </div>
    </section>
  )
}
