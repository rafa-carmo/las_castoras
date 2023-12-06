import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="w-full min-h-[90vh] bg-[url('/assets/bg-hero.jpeg')] bg-center bg-cover bg-no-repeat grid place-items-center grid-cols-2">
        <div className="container mx-auto md:max-w-[50%] pb-10 flex flex-col justify-end h-full gap-3">
          <h3 className="text-3xl font-semibold text-zinc-300">Title</h3>
          <p className="text-xl font-semibold text-zinc-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="w-full flex justify-end ">
            <button className="bg-primary-300 hover:bg-primary-500 hover:outline-secondary-600 outline-2 outline-transparent px-4 py-2 rounded text-white font-bold uppercase text-xs transition-all duration-500">
              Veja mais
            </button>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="w-full min-h-[90vh]"></div>
    </div>
  )
}
