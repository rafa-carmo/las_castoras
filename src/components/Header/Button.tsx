import { ReactNode } from 'react'
interface ButtonProps {
  url: string
  children: ReactNode
}

export function Button({ url, children }: ButtonProps) {
  return (
    <a
      href={url}
      className="hover:text-primary-300 border-b-2 border-transparent hover:border-primary-300 transition-all duration-500 font-semibold pb-1 [text-shadow:_0_0_5px_var(--tw-shadow-color)] hover:shadow-black/10"
    >
      {children}
    </a>
  )
}
