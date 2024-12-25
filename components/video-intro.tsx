'use client'

import { Play } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

export function VideoIntro() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm rounded-full p-4 hover:bg-primary/10 transition-colors">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Play className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="pr-4">
            <p className="text-xs font-medium">WATCH</p>
            <p className="text-sm font-bold">VIDEO INTRO</p>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0">
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/your-video-id"
            title="Video Intro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

