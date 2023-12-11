import Link from 'next/link'

export interface SlideProps {
  title: string
  description: string
  button: {
    text?: string
    url: string
  }
}

export function Slide({ title, description, button }: SlideProps) {
  return (
    <div className="bg-zinc-900/50 p-5 rounded-md flex flex-col gap-3 max-w-[500px]">
      <h3 className="text-3xl font-semibold text-zinc-100 line-clamp-2">
        {title}
      </h3>
      <p className="text-xl font-semibold text-zinc-300 line-clamp-3">
        {description}
      </p>
      <div className="w-full flex justify-end ">
        <Link
          href={button.url}
          className="bg-primary-300 hover:bg-primary-500 hover:outline-secondary-600 outline-2 outline-transparent px-4 py-2 rounded text-white font-bold uppercase text-xs transition-all duration-500"
        >
          {button.text || 'Saiba mais'}
        </Link>
      </div>
    </div>
  )
}
