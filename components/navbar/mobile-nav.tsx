import Link from "next/link";
import { NavItem } from "@/types/nav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

interface MobileNavProps {
  items?: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="w-9 px-0 md:hidden">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[80vw] sm:w-[400px]">
        <nav className="flex flex-col space-y-4">
          {items?.map((item) => (
            <div key={item.title} className="space-y-2">
              <Link
                href={item.href}
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
              {item.items && (
                <div className="ml-4 space-y-1">
                  {item.items.map((subItem) => (
                    <div key={subItem.title} className="space-y-2">
                      <Link
                        href={subItem.href}
                        className="block text-sm text-muted-foreground hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.title}
                      </Link>
                      {subItem.items && (
                        <div className="ml-4 space-y-1">
                          {subItem.items.map((subSubItem) => (
                            <Link
                              key={subSubItem.title}
                              href={subSubItem.href}
                              className="block text-sm text-muted-foreground hover:text-primary"
                              onClick={() => setIsOpen(false)}
                            >
                              {subSubItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
