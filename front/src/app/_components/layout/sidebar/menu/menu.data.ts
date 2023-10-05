import { IMenu } from './menu.interface'

export const MENU: IMenu[] = [
  {
    link: '/dashboard',
    name: 'Dashboard',
    icon: 'LayoutDashboard',
  },
  {
    link: '/courses',
    name: 'Courses',
    icon: 'BookOpen',
  },
  {
    link: '/routine',
    name: 'Routine',
    icon: 'CalendarRange',
  },
  {
    link: '/exam',
    name: 'Exam',
    icon: 'CalendarSearch',
  },
  {
    link: '/results',
    name: 'Results',
    icon: 'FileText',
  },
  {
    link: '/students',
    name: 'Students',
    icon: 'Users',
  },
  {
    link: '/message',
    name: 'Message',
    icon: 'MessageSquare',
  },
  {
    link: '/notice-board',
    name: 'Notice Board',
    icon: 'ClipboardList',
  },
  {
    link: '/live-class',
    name: 'Live Class',
    icon: 'Radio',
  },
]
