import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <h1 className="text-xl sm:text-2xl font-bold tracking-wider text-foreground">UNICORN</h1>
      <p className="text-xs sm:text-sm tracking-widest text-primary -mt-1">SLAVE</p>
    </div>
  )
}
