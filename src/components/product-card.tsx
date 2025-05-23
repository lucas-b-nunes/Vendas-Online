// components/product-card.tsx
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart } from "lucide-react"
import { Button } from "@/components/button"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  discount?: number
}

export function ProductCard({ id, name, price, image, discount }: ProductCardProps) {
  const discountedPrice = discount ? price * (1 - discount / 100) : price
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(discountedPrice)

  const originalPrice = discount ? new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price) : null

  return (
    <div className="group relative rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
      {discount && (
        <div className="absolute top-2 left-2 z-10 rounded-md bg-red-500 px-2 py-1 text-xs font-bold text-white">
          -{discount}%
        </div>
      )}

      <button className="absolute top-2 right-2 z-10 rounded-full bg-white p-2 shadow-sm hover:bg-gray-50 transition-colors">
        <Heart className="h-4 w-4 text-gray-600" />
      </button>

      <Link href={`/produto/${id}`}>
        <div className="aspect-square overflow-hidden rounded-md bg-gray-100 mb-4">
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium line-clamp-2 group-hover:text-orange-600 transition-colors">
            {name}
          </h3>

          <div className="flex flex-col gap-1">
            {originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {originalPrice}
              </span>
            )}
            <span className="text-lg font-bold text-orange-600">
              {formattedPrice}
            </span>
          </div>
        </div>
      </Link>

      <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
        <ShoppingCart className="mr-2 h-4 w-4" />
        Adicionar ao Carrinho
      </Button>
    </div>
  )
}