export interface NavItem {
  title: string;
  href: string;
  dropdownItems?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: "ABOUT",
    href: "/about",
  },
  {
    title: "PAGES",
    href: "/pages",
    dropdownItems: [
      { title: "Service", href: "/service" },
      { title: "Service Dark", href: "/service-dark" },
      { title: "Service V2", href: "/service-v2" },
      { title: "Service V2 Dark", href: "/service-v2-dark" },
      { title: "Service V3", href: "/service-v3" },
      { title: "Service V3 Dark", href: "/service-v3-dark" },
    ],
  },
  {
    title: "SERVICES",
    href: "/services",
    dropdownItems: [
      { title: "Digital Marketing", href: "/digital-marketing" },
      { title: "Design Studio", href: "/design-studio" },
      { title: "Digital Agency", href: "/digital-agency" },
      { title: "Creative Agency", href: "/creative-agency" },
      { title: "Startup Agency", href: "/startup-agency" },
      { title: "Modern Agency", href: "/modern-agency" },
    ],
  },
  {
    title: "TEAM",
    href: "/team",
    dropdownItems: [
      { title: "Team", href: "/team" },
      { title: "Team Details", href: "/team-details" },
    ],
  },
  {
    title: "BLOG",
    href: "/blog",
    dropdownItems: [
      { title: "Blog", href: "/blog" },
      { title: "Blog V2", href: "/blog-v2" },
      { title: "Category", href: "/category" },
      { title: "Blog Details", href: "/blog-details" },
    ],
  },
  {
    title: "CONTACT",
    href: "/contact",
  },
];
