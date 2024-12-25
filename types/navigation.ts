export interface MenuItem {
  label: string
  href: string
  children?: MenuItem[]
}

export interface NavigationItem extends MenuItem {
  children?: NavigationItem[]
}

