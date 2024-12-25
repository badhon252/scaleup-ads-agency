export function StarDecoration() {
  return (
    <div className="absolute top-0 right-0 transform translate-x-full -translate-y-1/2">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M8 0L10.2947 5.80376L16 6.72949L12 11.2525L12.9389 16L8 13.8038L3.06107 16L4 11.2525L0 6.72949L5.70533 5.80376L8 0Z" 
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

