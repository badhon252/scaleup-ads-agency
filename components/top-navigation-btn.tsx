'use client'
import React from 'react'
import { Button } from './ui/button'
import {  ArrowUp } from "lucide-react";
export default function TopNavigationButton() {
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

  return (
      <div className="fixed bottom-6 right-6 z-[999999999] border rounded-full bg-black text-white">
        <Button
          variant="ghost"
          size="icon"
          className="w-10 h-10 text-white hover:text-white/80 transition-colors rounded-full bg-white/5 hover:bg-white/10"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
  )
}
