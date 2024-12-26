import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/logo-black.webp";


export function Logo() {
  return (
    <Link href="/" className="relative z-50">
      <div className="flex items-center">
        <Image src={logo} alt="logo" width={150} height={150} /> 
      </div>
    </Link>
  );
}
