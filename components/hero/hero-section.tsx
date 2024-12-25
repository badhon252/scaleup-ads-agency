'use client'
import { useTheme } from "@/contexts/theme-context";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "./scroll-indicator";
// import { VideoIntro } from "./video-intro";

export default function HeroSection() {
  const { toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative container mx-auto px-4">
        <div className="pb-20 pt-32">
          <div className="max-w-xl">
            <div className="mb-4 flex items-center gap-4">
              <h2 className="text-sm font-medium">DIGITAL</h2>
              <div className="h-[1px] w-12 bg-current opacity-20" />
            </div>

            <div className="flex justify-between w-full">
              <h1 className="text-[12rem] font-bold leading-[0.85] tracking-tighter">
                MARK
              </h1>
              <div className="video-intro">Watch Video intro</div>

              {/* <div className="absolute -translate-y-1/2 translate-x-full right-0 top-0">
                <div className="relative h-8 w-8">
                  <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0L10.2947 5.80376L16 6.72949L12 11.2525L12.9389 16L8 13.8038L3.06107 16L4 11.2525L0 6.72949L5.70533 5.80376L8 0Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                </div>
              </div> */}
            </div>

            <p className="mt-8 max-w-md text-lg text-muted-foreground">
              Static and dynamic secure code review can prevent a day before
              your product is even released. We can integrate with your dev
              environment
            </p>

            <Button
              variant="outline"
              size="sm"
              className="mt-8"
              onClick={toggleTheme}
            >
              Switch Theme
            </Button>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </div>
  );
}
