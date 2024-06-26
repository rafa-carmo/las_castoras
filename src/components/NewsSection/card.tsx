'use client'

import { useModal } from '@/providers/modal-provider'
import { Button } from '../Global/button'
import { CustomModal } from '../Global/custom-modal'
import { ModalPost } from '../Modals/post'
import { ModalPost as ModalPostType } from '@/types/post'
import DOMPurify from 'isomorphic-dompurify'

interface CardProps {
  title: string
  content: string
  cover: string
  links: ModalPostType['links']
  createdAt: string
}

export function Card({ cover, content, title, links, createdAt }: CardProps) {
  const { setOpen } = useModal()

  function openPost() {
    setOpen(
      <CustomModal>
        <ModalPost
          title={title}
          content={content}
          cover={cover}
          links={links}
          createdAt={createdAt}
        />
      </CustomModal>,
    )
  }
  function sanitize(html: string) {
    return DOMPurify.sanitize(html, { USE_PROFILES: { html: false } })
  }
  return (
    <article className="w-full md:w-[42rem] flex items-center justify-center gap-3 px-2 md:px-0">
      <div className="w-48 h-48 overflow-hidden">
        <img src={cover} alt={title} className="object-contain" />
      </div>
      <div className="w-2/4 h-48 flex flex-col gap-3">
        <header>
          <h3 className="text-lg font-bold font-hero line-clamp-2 cursor-default">
            {title}
          </h3>
        </header>
        <p className="line-clamp-3 cursor-default">{sanitize(content)}</p>
        <div className="w-full flex items-center justify-center">
          <div className="w-full md:w-2/4 flex justify-center">
            <Button size="sm" variant="ghost" onClick={openPost}>
              Veja Mais
            </Button>
          </div>
        </div>
      </div>
      <footer>
        <span className="sr-only">
          <time dateTime="2015-05-16 19:00" />
        </span>
      </footer>
    </article>
  )
}
