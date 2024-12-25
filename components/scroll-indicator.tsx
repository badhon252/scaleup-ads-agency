export function ScrollIndicator() {
  return (
    <div className="absolute  ">
      <div className="flex h-20 w-12 items-center justify-center rounded-full border-2 border-current opacity-20">
        <div className="h-4 w-0.5 animate-bounce rounded-full bg-current" />
      </div>
    </div>
  )
}

