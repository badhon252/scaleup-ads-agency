export function ScrollIndicator() {
  return (
    <div className="absolute bottom-40 animate-bounce">
      <div className="flex h-20 w-10 items-center justify-center rounded-full border-2 border-current opacity-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-move-down"
        >
          <path d="M8 18L12 22L16 18" />
          <path d="M12 2V22" />
        </svg>
      </div>
    </div>
  );
}

