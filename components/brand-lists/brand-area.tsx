import React from 'react'
import client1 from '@/public/assets/client1.webp'
import client2 from '@/public/assets/client2.webp'
import client3 from '@/public/assets/client3.webp'
import client4 from '@/public/assets/client4.webp'
import client5 from '@/public/assets/client5.webp'
import client6 from '@/public/assets/client6.webp'
import BrandImg from './brand-img';

export default function BrandLists() {
  return (
    <div className=" brand-area container mx-auto text-center py-[140px]">
      <h1 className="text-md font-semibold uppercase py-8">
        We worked with global largest brands
      </h1>
      <div className="brand-list flex justify-between items-center">
        <BrandImg img={client1} />
        <BrandImg img={client2} />
        <BrandImg img={client3} />
        <BrandImg img={client4} />
        <BrandImg img={client5} />
        <BrandImg img={client6} />
      </div>
    </div>
  );
}
