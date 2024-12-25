export interface NavItem {
  title: string;
  href: string;
  items?: NavItem[];
}

export interface NavItems {
  mainNav: NavItem[];
}
