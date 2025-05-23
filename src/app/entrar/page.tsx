import Link from "next/link"
import { Button } from "@/components/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Acesse sua conta
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Ou{' '}
              <Link 
                href="/cadastro" 
                className="font-medium text-orange-600 hover:text-orange-500"
              >
                crie uma nova conta
              </Link>
            </p>
          </div>

          <div className="mt-8 bg-white py-8 px-6 shadow rounded-lg sm:px-10 border border-gray-200">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mail
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Senha
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Lembrar de mim
                  </label>
                </div>

                <div className="text-sm">
                  <Link 
                    href="/recuperar-senha" 
                    className="font-medium text-orange-600 hover:text-orange-500"
                  >
                    Esqueceu sua senha?
                  </Link>
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700"
                >
                  Entrar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}