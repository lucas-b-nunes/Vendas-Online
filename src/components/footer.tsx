// components/footer.tsx
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">TechStore</h3>
            <p className="text-gray-400 mb-4">
              Sua loja de tecnologia com os melhores preços e produtos de qualidade.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/notebooks" className="text-gray-400 hover:text-white">
                  Notebooks
                </Link>
              </li>
              <li>
                <Link href="/smartphones" className="text-gray-400 hover:text-white">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link href="/hardware" className="text-gray-400 hover:text-white">
                  Hardware
                </Link>
              </li>
              <li>
                <Link href="/perifericos" className="text-gray-400 hover:text-white">
                  Periféricos
                </Link>
              </li>
              <li>
                <Link href="/monitores" className="text-gray-400 hover:text-white">
                  Monitores
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Atendimento</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link href="/ajuda" className="text-gray-400 hover:text-white">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="/trocas-devolucoes" className="text-gray-400 hover:text-white">
                  Trocas e Devoluções
                </Link>
              </li>
              <li>
                <Link href="/garantia" className="text-gray-400 hover:text-white">
                  Garantia
                </Link>
              </li>
              <li>
                <Link href="/entrega" className="text-gray-400 hover:text-white">
                  Entrega
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Sobre</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white">
                  Nossa História
                </Link>
              </li>
              <li>
                <Link href="/trabalhe-conosco" className="text-gray-400 hover:text-white">
                  Trabalhe Conosco
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidade" className="text-gray-400 hover:text-white">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-uso" className="text-gray-400 hover:text-white">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TechStore. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}