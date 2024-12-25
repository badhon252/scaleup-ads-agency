import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SearchButton() {
  return (
    <Button variant="ghost" className="w-9 px-0">
      <Search className="h-4 w-4" />
      <span className="sr-only">Search</span>
    </Button>
  );
}
