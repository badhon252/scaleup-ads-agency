import React from 'react'
import Link from 'next/link';

export default function SocialLinks({ title, link }: { title: string, link: string }) {
  return (
    <div className="inline text-sm border  p-2 rounded-full hover:bg-black hover:text-white transition-colors duration-500">
      <Link href={link} className="inline-block m-4">
        <p className="uppercase inline-block text-sm font-bold">{title}</p>{" "}
      </Link>
    </div>
  );
}
