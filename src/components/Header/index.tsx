import Image from 'next/image'
import { Button } from './Button'

const menuLinks = [
  {
    url: '/',
    children: 'Inicio',
  },
  {
    url: '#time',
    children: 'Time',
  },
  {
    url: '#sobre',
    children: 'Sobre',
  },
]
export function Header() {
  return (
    <header className="w-full py-3">
      <div className="w-full flex items-center justify-between container mx-auto">
        <div className="flex items-center flex-col" title="Las Castoras">
          <Image
            src="/assets/logo.png"
            alt="Las castoras logo"
            width={50}
            height={50}
          />
          <h1 className="text-lg font-bold font-sans -m-2 pointer-events-none shadow-white [text-shadow:_0_0_5px_var(--tw-shadow-color)]">
            Las Castoras
          </h1>
        </div>
        <ul className="flex gap-5 md:gap-7">
          {menuLinks.map((link) => (
            <li key={link.url}>
              <Button {...link} />
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
