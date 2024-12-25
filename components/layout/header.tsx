"use client";

import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavMenu } from "@/components/navigation/nav-menu";
import { NAVIGATION_ITEMS } from "@/lib/constants/navigation";
import { NavLink } from "@/components/navigation/nav-link";
import Image from 'next/image';
import logo from "@/public/assets/logo-black.webp";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm w-full">
      <div className="container mx-auto px-[50px] py-[10px]">
        
        <div className="flex h-20 items-center justify-between navbar-menu">
          <Link href="/" className="text-xl font-bold">
            <Image src={logo} alt="Axtra Logo"  />
          </Link>

          <div className="hidden md:block navbar">
            <NavMenu />
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4">
                  {NAVIGATION_ITEMS.map((item) => (
                    <NavLink key={item.label} href={item.href}>
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
