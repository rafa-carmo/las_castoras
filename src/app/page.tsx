import { Button } from "@/components/Global/button";
import { NewsSection } from "@/components/NewsSection";
import { TeamSection } from "@/components/TeamSection";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
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
      <NewsSection />

      <section className="bg-primary-700 w-full">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] place-items-center">
          <div className="flex flex-col items-start justify-center gap-10 h-full max-w-[600px] md:px-0 px-5 md:pt-0 pt-5">
            <h3 className="text-4xl md:text-5xl font-bold text-secondary-600 font-hero">
              Sigue a nuestro equipo en nuestras redes
            </h3>
            <div className="flex items-center justify-center w-full gap-3">
              <a
                href="https://www.instagram.com/lascastorasfutsal/"
                target="_blank"
                rel="noreferrer no-refer"
                title="instagram"
                className="p-2 border-2 border-transparent hover:border-secondary-600 hover:scale-110 transition-all duration-500 text-white rounded-lg"
              >
                <FaInstagram size={32} />
              </a>
              <a
                href="https://twitter.com/las_castoras"
                target="_blank"
                rel="noreferrer no-refer"
                title="twitter"
                className="p-2 border-2 border-transparent hover:border-secondary-600 hover:scale-110 transition-all duration-500 text-white rounded-lg"
              >
                <BsTwitterX size={32} />
              </a>
            </div>
          </div>
          <hr className="border-2 border-black w-full my-2 lg:hidden" />

          <div className="flex  gap-7 items-center justify-center flex-wrap py-10 lg:py-0">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((pic, key) => (
              <div key={pic} className="w-40">
                <img
                  src={`/assets/social/0${pic}.jpg`}
                  alt=""
                  className={`bg-white/75 px-2 pt-2 pb-8 overflow-hidden hover:scale-125 transition-all duration-500 ${
                    key % 2 === 0 ? "rotate-12" : "-rotate-12"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
