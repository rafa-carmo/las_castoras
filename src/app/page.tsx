import { Button } from "@/components/Global/button";
import { TeamSection } from "@/components/TeamSection";
import { WaveDivider } from "./divider";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="w-full md:min-h-[90vh] h-96 md:h-full bg-[url('/assets/Plantel.jpeg')] bg-center bg-contain md:bg-cover bg-no-repeat grid">
        <div className="h-full flex items-end justify-end">
          <div className="flex-1 flex flex-col items-center justify-center gap-5 w-full md:pt-10 pb-24 md:px-0 px-5 relative z-10">
            <h1 className=" text-white font-bold font-hero text-3xl md:text-7xl max-w-screen-sm md:max-w-2xl text-center uppercase shadow-none shadow-secondary-600 drop-shadow-[0_1.4px_1.4px_var(--tw-shadow-color)]">
              Venha fazer parte de nosso time
            </h1>
            <Button>Saiba Como</Button>
          </div>
        </div>
      </div>
      <div className="relative h-fit z-0">
        <WaveDivider
          height={100}
          className="absolute -top-[150px] right-0 left-0 w-full z-50 h-[150px]"
        />
      </div>

      <section className="bg-primary-700 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[90vh] place-items-center">
          <aside className="flex flex-col items-start justify-center gap-10 h-full max-w-[600px] md:px-0 px-5 md:pt-0 pt-5">
            <h3 className="text-4xl md:text-5xl font-bold text-secondary-600 font-hero">
              La Seleccion Argentina Femenina de futsal para personas sordas
            </h3>
            <p className="text-lg font-semibold text-white">
              Necesitan de nuestra ayuda para viajar al Mundial de Brasil de la
              disciplina y tienen poco tiempo para lograr el objetivo de cubrir
              los costos del viaje.
            </p>
            <div className="flex items-center justify-center w-full">
              <Button>Veja Mais</Button>
            </div>
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
      <div className="w-full min-h-[90vh]"> </div>
    </div>
  );
}
