// components/category-card.tsx
import Link from "next/link"
import { 
  Laptop, 
  Smartphone, 
  Cpu, 
  Mouse, 
  Monitor, 
  Armchair,
  LucideIcon 
} from "lucide-react"

interface CategoryCardProps {
  name: string
  icon: string
}

const iconMap: Record<string, LucideIcon> = {
  laptop: Laptop,
  smartphone: Smartphone,
  cpu: Cpu,
  mouse: Mouse,
  monitor: Monitor,
  armchair: Armchair,
}

export function CategoryCard({ name, icon }: CategoryCardProps) {
  const IconComponent = iconMap[icon] || Cpu
  const href = `/${name.toLowerCase().replace('ã', 'a').replace('é', 'e').replace(' ', '-')}`

  return (
    <Link href={href}>
      <div className="group flex flex-col items-center justify-center p-6 rounded-lg border bg-white hover:shadow-md transition-shadow">
        <div className="mb-3 p-3 rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors">
          <IconComponent className="h-6 w-6 text-orange-600" />
        </div>
        <h3 className="text-sm font-medium text-center group-hover:text-orange-600 transition-colors">
          {name}
        </h3>
      </div>
    </Link>
  )
}