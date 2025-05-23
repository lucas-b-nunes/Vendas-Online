// components/featured-products.tsx
import { ProductCard } from "@/components/product-card"

const featuredProducts = [
  {
    id: "featured-1",
    name: "MacBook Pro M3 14\"",
    price: 8999.90,
    image: "/placeholder.svg?height=300&width=300",
    discount: 15
  },
  {
    id: "featured-2",
    name: "iPhone 15 Pro Max",
    price: 7499.90,
    image: "/placeholder.svg?height=300&width=300",
    discount: 12
  },
  {
    id: "featured-3",
    name: "Samsung Galaxy S24 Ultra",
    price: 6299.90,
    image: "/placeholder.svg?height=300&width=300",
    discount: 20
  },
  {
    id: "featured-4",
    name: "Dell XPS 13 Plus",
    price: 5799.90,
    image: "/placeholder.svg?height=300&width=300",
    discount: 18
  },
  {
    id: "featured-5",
    name: "iPad Pro 12.9\" M2",
    price: 4999.90,
    image: "/placeholder.svg?height=300&width=300",
    discount: 10
  },
  {
    id: "featured-6",
    name: "Surface Pro 9",
    price: 4299.90,
    image: "/placeholder.svg?height=300&width=300",
    discount: 25
  },
  {
    id: "featured-7",
    name: "Gaming Mouse Logitech G Pro X",
    price: 299.90,
    image: "/placeholder.svg?height=300&width=300",
    discount: 30
  },
  {
    id: "featured-8",
    name: "Teclado Mecânico Corsair K95",
    price: 899.90,
    image: "/placeholder.svg?height=300&width=300",
    discount: 22
  }
]

export function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {featuredProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          discount={product.discount}
        />
      ))}
    </div>
  )
}