import { useTheme } from "@/contexts/theme-context";
import { cn } from "@/lib/utils";

export function HeroBackground() {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-700",
          theme === "light" ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-white" />
        <div
          className="absolute right-0 bottom-0 h-[70%] w-[70%]"
          style={{
            backgroundImage: "url('/images/office-space.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to bottom right, transparent, black)",
            WebkitMaskImage:
              "linear-gradient(to bottom right, transparent, black)",
          }}
        />
      </div>
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-700",
          theme === "dark" ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="absolute inset-0 bg-[#111]" />
        <div
          className="absolute right-0 bottom-0 h-[70%] w-[70%]"
          style={{
            backgroundImage: "url('/images/trading-dashboard.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to bottom right, transparent, black)",
            WebkitMaskImage:
              "linear-gradient(to bottom right, transparent, black)",
          }}
        />
      </div>
    </>
  );
}
