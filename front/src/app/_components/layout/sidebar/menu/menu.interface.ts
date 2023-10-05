import { icons } from 'lucide-react'

export interface IMenu {
  link: string
  name: string
  icon: keyof typeof icons
}
