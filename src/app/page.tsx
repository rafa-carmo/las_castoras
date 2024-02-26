import { TeamSection } from '@/components/TeamSection'
import { WaveDivider } from './divider'

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
            <button className="font-hero text-xl uppercase text-white rounded bg-secondary-600 hover:bg-secondary-600 hover:scale-110 transition-all duration-500 py-2 px-4">
              Saiba Como
            </button>
          </div>
        </div>
      </div>
      <div className="relative h-fit z-0">
        <WaveDivider
          height={100}
          className="absolute -top-[150px] right-0 left-0 w-full z-50 h-[150px]"
        />
      </div>

      <section className="bg-primary-300/25 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[90vh] place-items-center">
          <aside className="flex flex-col items-start justify-center gap-10 h-full max-w-[600px]">
            <h3 className="text-5xl font-bold text-secondary-600 font-hero">
              La Seleccion Argentina Femenina de futsal para personas sordas
            </h3>
            <p className="text-lg">
              Necesitan de nuestra ayuda para viajar al Mundial de Brasil de la
              disciplina y tienen poco tiempo para lograr el objetivo de cubrir
              los costos del viaje.
            </p>
          </aside>
          <aside className="py-10">
            <div className="border-4 border-secondary-600 rounded-lg overflow-hidden w-fit">
              <video
                width="320"
                height="240"
                controls
                preload="none"
                muted
                autoPlay
                loop
              >
                <source src="/assets/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </aside>
        </div>
      </section>
      {/* Team */}
      <TeamSection />

      {/* About */}
      <div className="w-full min-h-[90vh]"></div>
    </div>
  )
}
