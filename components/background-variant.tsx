import type { ThemeVariant } from '@/types/theme'

interface BackgroundVariantProps {
  variant: ThemeVariant
  isActive: boolean
}

export function BackgroundVariant({ variant, isActive }: BackgroundVariantProps) {
  return (
    <div 
      className={`absolute inset-0 transition-opacity duration-700 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className={`absolute inset-0 ${variant === 'light' ? 'bg-white' : 'bg-[#111]'}`} />
      <div 
        className="absolute right-0 bottom-0 w-[70%] h-[70%]"
        style={{
          backgroundImage: `url('/${variant === 'light' ? 'office-space' : 'trading-dashboard'}.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to bottom right, transparent, black)',
          WebkitMaskImage: 'linear-gradient(to bottom right, transparent, black)'
        }}
      />
    </div>
  )
}

