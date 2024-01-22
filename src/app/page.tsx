import { TeamSection } from '@/components/TeamSection'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="w-full md:min-h-[90vh] h-96 md:h-full bg-[url('/assets/Plantel.jpeg')] bg-center bg-contain md:bg-cover bg-no-repeat grid">
        <div className="h-full flex items-end justify-end">
          <div className="flex-1 flex flex-col items-center justify-center gap-5 w-full pt-10 pb-24">
            <h1 className=" text-white font-bold font-hero text-7xl max-w-2xl text-center uppercase shadow-none shadow-secondary-600 drop-shadow-[0_1.4px_1.4px_var(--tw-shadow-color)]">
              Venha fazer parte de nosso time
            </h1>
            <button className="font-hero text-xl uppercase text-white bg-secondary-600/75 hover:bg-secondary-600 hover:scale-110 transition-all duration-500 py-2 px-4">
              Saiba Como
            </button>
          </div>
          {/* <div className="flex text-white relative z-10 pb-10">Teste</div> */}
        </div>
        {/* <div className="container mx-auto md:max-w-[50%] pb-10 flex flex-col justify-end h-full gap-3 px-5 md:px-0 pt-52">
          <HeroSlider {...heroCardsMock} />
        </div> */}
      </div>
      <div className="relative h-24 z-0">
        <img
          src="/assets/wave.webp"
          alt=""
          className="absolute -top-24 right-0 left-0 w-full z-0"
        />
      </div>
      {/* Team */}
      <TeamSection />
      {/* <section className="py-10 flex flex-col">
        <div className="flex gap-5">
          <div className="flex flex-col">
            <h3 className="text-3xl font-bold font-sans text-center text-primary-500 drop-shadow-[0_1.2px_1.2px_var(--tw-shadow-color)] shadow-white/75">
              Nome da Jogadora
            </h3>
            <img
              src="/assets/novos_elementos/Placas sem fundo/1.png"
              alt="Jogadora cover"
              className="h-96 "
            />
          </div>
        </div>
        <div className=" w-full min-h-[90vh] container mx-auto flex gap-1">
          <div className="flex-1">
            <TeamSlider
              title="Corpo Técnico"
              zoom
              items={corpoTecnicoMock}
              sliderProps={{
                slidesPerView: 2,
              }}
            />
          </div>
          <div className="flex-1">
            <TeamSlider
              title="Jogadoras"
              zoom
              items={jogadorasMock}
              sliderProps={{
                slidesPerView: 2.5,
              }}
            />
          </div>
        </div>
      </section> */}
      {/* About */}
      <div className="w-full min-h-[90vh]"></div>
    </div>
  )
}
