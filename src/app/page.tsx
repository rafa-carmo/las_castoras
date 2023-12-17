import { HeroSlider } from '@/components/HeroSlider'
import { TeamSlider } from '@/components/TeamSlider'
import { corpoTecnicoMock } from '@/mocks/corpoTecnico'
import { heroCardsMock } from '@/mocks/home'
import { jogadorasMock } from '@/mocks/jogadoras'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="w-full md:min-h-[90vh] h-96 md:h-full bg-[url('/assets/Plantel.jpeg')] bg-center bg-contain md:bg-cover bg-no-repeat grid place-items-center grid-cols-2">
        <div className="container mx-auto md:max-w-[50%] pb-10 flex flex-col justify-end h-full gap-3 px-5 md:px-0 pt-52">
          <HeroSlider {...heroCardsMock} />
        </div>
      </div>
      {/* Team */}
      <section className="py-10 w-full min-h-[90vh] container mx-auto">
        <TeamSlider title="Corpo Técnico" zoom items={corpoTecnicoMock} />
        <TeamSlider title="Jogadoras" zoom items={jogadorasMock} />
      </section>
      {/* About */}
      <div className="w-full min-h-[90vh]"></div>
    </div>
  )
}
