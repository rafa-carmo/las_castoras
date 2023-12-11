import { HeroSlider } from '@/components/HeroSlider'
import { heroCardsMock } from '@/mocks/home'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="w-full min-h-[90vh] bg-[url('/assets/Plantel.jpeg')] bg-center bg-cover bg-no-repeat grid place-items-center grid-cols-2">
        <div className="container mx-auto md:max-w-[50%] pb-10 flex flex-col justify-end h-full gap-3 ">
          <HeroSlider {...heroCardsMock} />
        </div>
      </div>

      {/* About */}
      <div className="w-full min-h-[90vh]"></div>
    </div>
  )
}
