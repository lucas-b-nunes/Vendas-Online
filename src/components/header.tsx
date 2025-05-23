"use client"

import Link from "next/link"
import { Search, ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/button"
import { useState } from "react"
import { UserDropdown } from "@/components/user-dropdown"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-4xl font-bold text-orange-700 hover:text-orange-800 transition-colors">
              TechStore
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/notebooks" className="text-base font-medium text-gray-800 hover:text-orange-700 transition-colors">
                Notebooks
              </Link>
              <Link href="/smartphones" className="text-base font-medium text-gray-800 hover:text-orange-700 transition-colors">
                Smartphones
              </Link>
              <Link href="/hardware" className="text-base font-medium text-gray-800 hover:text-orange-700 transition-colors">
                Hardware
              </Link>
              <Link href="/perifericos" className="text-base font-medium text-gray-800 hover:text-orange-700 transition-colors">
                Periféricos
              </Link>
              <Link href="/ofertas" className="text-base font-medium text-orange-700 hover:text-orange-800 transition-colors">
                Ofertas
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex relative">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-80 pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-800 placeholder-gray-400"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>

            <Button variant="ghost" size="icon" className="lg:hidden text-gray-700 hover:text-orange-700">
              <Search className="h-4 w-4" />
            </Button>

            <UserDropdown />

            <Button variant="ghost" size="icon" className="relative text-gray-700 hover:text-orange-700">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-orange-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-700 hover:text-orange-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4 bg-white">
            <nav className="flex flex-col gap-4 px-4">
              <Link href="/notebooks" className="text-sm font-medium text-gray-800 hover:text-orange-700 transition-colors">
                Notebooks
              </Link>
              <Link href="/smartphones" className="text-sm font-medium text-gray-800 hover:text-orange-700 transition-colors">
                Smartphones
              </Link>
              <Link href="/hardware" className="text-sm font-medium text-gray-800 hover:text-orange-700 transition-colors">
                Hardware
              </Link>
              <Link href="/perifericos" className="text-sm font-medium text-gray-800 hover:text-orange-700 transition-colors">
                Periféricos
              </Link>
              <Link href="/ofertas" className="text-sm font-medium text-orange-700 hover:text-orange-800 transition-colors">
                Ofertas
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}