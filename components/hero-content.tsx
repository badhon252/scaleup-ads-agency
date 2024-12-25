import { Button } from '@/components/ui/button'
import { HERO_CONSTANTS } from '@/lib/constants/hero'
import { StarDecoration } from './star-decoration'
import type { ThemeVariant } from '@/types/theme'

interface HeroContentProps {
  onThemeToggle: () => void
  currentTheme: ThemeVariant
}

export function HeroContent({ onThemeToggle, currentTheme }: HeroContentProps) {
  return (
    <div className="relative container mx-auto px-4">
      <div className="pt-32 pb-20">
        <div className="max-w-xl">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-sm font-medium">{HERO_CONSTANTS.TITLE}</h2>
            <div className="h-[1px] w-12 bg-current opacity-20" />
          </div>
          
          <div className="relative">
            <h1 className="text-[12rem] font-bold leading-[0.85] tracking-tighter">
              {HERO_CONSTANTS.HEADING.LINE1}
              <br />
              {HERO_CONSTANTS.HEADING.LINE2}
            </h1>
            <StarDecoration />
          </div>
          
          <p className="text-lg mt-8 max-w-md text-muted-foreground">
            {HERO_CONSTANTS.DESCRIPTION}
          </p>

          <Button
            variant="outline"
            size="sm"
            className="mt-8"
            onClick={onThemeToggle}
          >
            {`Switch to ${currentTheme === 'light' ? 'Dark' : 'Light'} Theme`}
          </Button>
        </div>
      </div>
    </div>
  )
}

