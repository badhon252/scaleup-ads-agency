"use client";

import * as React from "react";
import { NavItem } from "@/types/nav";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Logo } from "@/components/navbar/logo";
import { NavigationItem } from "@/components/navbar/nav-item";
import { MobileNav } from "@/components/navbar/mobile-nav";
import { SearchButton } from "@/components/navbar/search-button";

interface NavbarProps {
  items?: NavItem[];
}

export default function Navbar({ items }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto">
        <div className="mr-4 hidden md:flex">
          <Logo />
          <NavigationMenu className="ml-6">
            <NavigationMenuList>
              {items?.map((item) => (
                <NavigationItem key={item.title} item={item} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <SearchButton />
          </div>
          <nav className="flex items-center">
            <MobileNav items={items} />
          </nav>
        </div>
      </div>
    </header>
  );
}
