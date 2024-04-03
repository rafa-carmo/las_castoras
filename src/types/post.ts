import { postIcons } from '@/components/Modals/post'

export interface ModalPost {
  title: string
  content: string
  cover: string
  links: [
    {
      type: keyof typeof postIcons
      url: string
    },
  ]
  createdAt: string
}
