import { HeroSlider } from '@/components/HeroSlider'
import { TeamSlider } from '@/components/TeamSlider'
import { corpoTecnicoMock } from '@/mocks/corpoTecnico'
import { heroCardsMock } from '@/mocks/home'
import { jogadorasMock } from '@/mocks/jogadoras'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="w-full min-h-[90vh] bg-[url('/assets/Plantel.jpeg')] bg-center bg-cover bg-no-repeat grid place-items-center grid-cols-2">
        <div className="container mx-auto md:max-w-[50%] pb-10 flex flex-col justify-end h-full gap-3 ">
          <HeroSlider {...heroCardsMock} />
        </div>
      </div>
      {/* Team */}
      <section className="py-10 w-full min-h-[90vh] container mx-auto">
        <TeamSlider title="Corpo Técnico" items={corpoTecnicoMock} />
        <TeamSlider title="Jogadoras" zoom items={jogadorasMock} />
      </section>
      {/* About */}
      <div className="w-full min-h-[90vh]"></div>
    </div>
  )
}
