export interface NavigationItem {
  title: string;
  href: string;
  children?: NavigationItem[];
}

export const navigationData: NavigationItem[] = [
  {
    title: "HOME",
    href: "/",
    children: [
      { title: "Digital Marketing", href: "/digital-marketing" },
      { title: "Design Studio", href: "/design-studio" },
      { title: "Digital Agency", href: "/digital-agency" },
      { title: "Creative Agency", href: "/creative-agency" },
      { title: "Startup Agency", href: "/startup-agency" },
      { title: "Modern Agency", href: "/modern-agency" },
    ],
  },
  {
    title: "ABOUT",
    href: "/about",
  },
  {
    title: "PAGES",
    href: "/pages",
    children: [
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
    children: [
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
    children: [
      { title: "Team", href: "/team" },
      { title: "Team Details", href: "/team-details" },
    ],
  },
  {
    title: "BLOG",
    href: "/blog",
    children: [
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
