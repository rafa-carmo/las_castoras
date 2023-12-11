import { HeroSlider } from '@/components/HeroSlider'
import { TeamSlider } from '@/components/TeamSlider'
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
      {/* Team */}
      <section className="py-10 w-full min-h-[90vh] container mx-auto">
        <div className="relative w-fit pb-5">
          <div className="absolute bottom-2 right-2 left-2 h-1 rounded-full bg-primary-500 contents-[' ']"></div>

          <h4 className="text-3xl font-bold font-sans text-center text-primary-500 drop-shadow-[0_1.2px_1.2px_var(--tw-shadow-color)] shadow-white/75">
            Jogadoras
          </h4>
        </div>
        <div className="">
          <TeamSlider />
        </div>
      </section>
      {/* About */}
      <div className="w-full min-h-[90vh]"></div>
    </div>
  )
}
