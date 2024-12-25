import { NavigationItem } from '@/types/navigation'

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: 'HOME',
    href: '/',
  },
  {
    label: 'ABOUT',
    href: '/about',
  },
  {
    label: 'PAGES',
    href: '/pages',
    children: [
      { label: 'Agency', href: '/pages/agency' },
      { label: 'Agency Dark', href: '/pages/agency-dark' },
      { label: 'Digital Agency', href: '/pages/digital-agency' },
      { label: 'Creative Agency', href: '/pages/creative-agency' },
      { label: 'Startup Agency', href: '/pages/startup-agency' },
      { label: 'Modern Agency', href: '/pages/modern-agency' },
      { label: 'Personal Portfolio', href: '/pages/personal-portfolio' },
    ],
  },
  {
    label: 'SERVICES',
    href: '/services',
    children: [
      { label: 'Service', href: '/services' },
      { label: 'Service V2', href: '/services/v2' },
      { label: 'Service V3', href: '/services/v3' },
      { label: 'Service V4', href: '/services/v4' },
      { label: 'Service V5', href: '/services/v5' },
      { label: 'Service V6', href: '/services/v6' },
      { label: 'Service Details', href: '/services/details' },
    ],
  },
  {
    label: 'TEAM',
    href: '/team',
    children: [
      { label: 'Team', href: '/team' },
      { label: 'Team Details', href: '/team/details' },
      { label: 'Career', href: '/team/career' },
      { label: 'Job Details', href: '/team/job-details' },
    ],
  },
  {
    label: 'BLOG',
    href: '/blog',
    children: [
      { label: 'Blog', href: '/blog' },
      { label: 'Blog V2', href: '/blog/v2' },
      { label: 'Category', href: '/blog/category' },
      { label: 'Blog Details', href: '/blog/details' },
    ],
  },
  {
    label: 'CONTACT',
    href: '/contact',
  },
]

