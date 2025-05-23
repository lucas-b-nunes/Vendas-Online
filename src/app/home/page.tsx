import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/button"
import { ProductCard } from "@/components/product-card"
import { CategoryCard } from "@/components/category-card"
import { FeaturedProducts } from "@/components/featured-products"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                {/* Hero Banner */}
                <section className="relative">
                    <div className="bg-gradient-to-r from-orange-600 to-orange-500 py-12 md:py-24">
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="grid items-center gap-6 md:grid-cols-2 md:gap-12">
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl">
                                            Tecnologia de ponta com os melhores preços
                                        </h1>
                                        <p className="max-w-[600px] text-white md:text-xl">
                                            Encontre os melhores produtos de tecnologia com preços imbatíveis e entrega rápida para todo o
                                            Brasil.
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                        <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                                            Ver ofertas
                                        </Button>
                                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                            Explorar categorias
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <Image
                                        alt="Produtos de tecnologia"
                                        className="rounded-lg object-cover"
                                        src="./init.png"
                                        width={600}
                                        height={400}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="py-12">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="mb-8 text-2xl font-bold tracking-tight">Categorias Populares</h2>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                            <CategoryCard name="Notebooks" icon="laptop" />
                            <CategoryCard name="Smartphones" icon="smartphone" />
                            <CategoryCard name="Hardware" icon="cpu" />
                            <CategoryCard name="Periféricos" icon="mouse" />
                            <CategoryCard name="Monitores" icon="monitor" />
                            <CategoryCard name="Cadeiras Gamer" icon="armchair" />
                        </div>
                    </div>
                </section>

                {/* Featured Products */}
                <section className="py-12 bg-gray-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold tracking-tight">Ofertas em Destaque</h2>
                            <Link href="/ofertas" className="text-orange-600 hover:underline">
                                Ver todas
                            </Link>
                        </div>
                        <FeaturedProducts />
                    </div>
                </section>

                {/* New Arrivals */}
                <section className="py-12">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold tracking-tight">Lançamentos</h2>
                            <Link href="/lancamentos" className="text-orange-600 hover:underline">
                                Ver todos
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            <ProductCard
                                id="1"
                                name="Notebook Gamer Avançado"
                                price={5999.9}
                                image="/placeholder.svg?height=300&width=300"
                                discount={10}
                            />
                            <ProductCard
                                id="2"
                                name="Smartphone Ultra 5G"
                                price={3499.9}
                                image="/placeholder.svg?height=300&width=300"
                                discount={5}
                            />
                            <ProductCard
                                id="3"
                                name="Monitor Curvo 32'"
                                price={2199.9}
                                image="/placeholder.svg?height=300&width=300"
                            />
                            <ProductCard
                                id="4"
                                name="Placa de Vídeo RTX 4070"
                                price={4899.9}
                                image="/placeholder.svg?height=300&width=300"
                                discount={8}
                            />
                        </div>
                    </div>
                </section>

                {/* Brands */}
                <section className="py-12 bg-gray-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="mb-8 text-2xl font-bold tracking-tight">Marcas Parceiras</h2>
                        <div className="flex flex-wrap items-center justify-center gap-8">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="flex h-16 w-32 items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                                    <Image
                                        alt={`Brand ${i}`}
                                        className="max-h-full max-w-full object-contain"
                                        src={`/placeholder.svg?height=60&width=120&text=Marca ${i}`}
                                        width={120}
                                        height={60}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
