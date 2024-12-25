import Link from "next/link";
import { NavItem } from "@/types/nav";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface NavItemProps {
  item: NavItem;
  onSelect?: () => void;
}

export function NavigationItem({ item, onSelect }: NavItemProps) {
  if (item.items) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            {item.items.map((subItem) => (
              <li key={subItem.title}>
                {subItem.items ? (
                  <div className="mb-4">
                    <h4 className="mb-2 text-sm font-medium leading-none">
                      {subItem.title}
                    </h4>
                    <ul className="grid gap-2">
                      {subItem.items.map((subSubItem) => (
                        <li key={subSubItem.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={subSubItem.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              onClick={onSelect}
                            >
                              {subSubItem.title}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={subItem.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      onClick={onSelect}
                    >
                      {subItem.title}
                    </Link>
                  </NavigationMenuLink>
                )}
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <Link href={item.href} legacyBehavior passHref>
        <NavigationMenuLink
          className={navigationMenuTriggerStyle()}
          onClick={onSelect}
        >
          {item.title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
