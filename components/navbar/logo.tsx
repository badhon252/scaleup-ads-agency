import Link from "next/link";
import Image from "next/image";

import logo from "@/public/assets/logo-black.webp";


export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src={logo} alt="Axtra Logo"  />
    </Link>
  );
}
