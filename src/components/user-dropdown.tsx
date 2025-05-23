"use client"

import { User } from "lucide-react"
import { Button } from "@/components/button"
import { useState } from "react"
import Link from "next/link"

export function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-700 hover:text-orange-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <User className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            href="/minha-conta"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700"
            onClick={() => setIsOpen(false)}
          >
            Minha Conta
          </Link>
          <Link
            href="/entrar"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700"
            onClick={() => setIsOpen(false)}
          >
            Entrar
          </Link>
          <button
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700"
            onClick={() => {
              // Adicione sua lógica de logout aqui
              setIsOpen(false)
            }}
          >
            Sair
          </button>
        </div>
      )}
    </div>
  )
}