"use client";

import "@/public/styles/hero.css";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NAVIGATION_ITEMS } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {NAVIGATION_ITEMS.map((item) => (
          <NavigationMenuItem key={item.label}>
            {item.children ? (
              <>
                <NavigationMenuTrigger className="text-sm font-medium">
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex justify-between nav-menu-list">
                    {item.children.map((child) => (
                      <ListItem
                        key={child.label}
                        title={child.label}
                        href={child.href}
                      /> 
                    ))} 
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary"
                  )}
                >
                  {item.label}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink>
        <a
          ref={ref}
          className={cn(
            " ",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="lmx-[40px] ine-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
