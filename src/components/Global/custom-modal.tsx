'use client'

import { useModal } from '@/providers/modal-provider'
import { ReactNode } from 'react'

interface CustomModalProps {
  children: ReactNode
}

export function CustomModal({ children }: CustomModalProps) {
  const { isOpen, setClose } = useModal()

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-zinc-400/50 p-10 z-40 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      />
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 z-50 transition-all duration-500 md:=x ${
          isOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-0 pointer-events-none'
        }`}
      >
        <button
          className={`fixed top-0 left-0 right-0 bottom-0 p-10 z-40 ${
            isOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
          onClick={setClose}
        />
        <div className="relative w-full h-full grid place-items-center z-50 pointer-events-none">
          <div className="w-screen px-10 md:max-w-[900px] md:max-h-[700px] md:h-fit h-screen pointer-events-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
