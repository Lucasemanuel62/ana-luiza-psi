import Image from "next/image"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-line/70 bg-white backdrop-blur-md">
            <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <Image
                        src="/images/logoanaluiza.png"
                        alt="Ana Luiza Logo"
                        width={100}
                        height={100}
                        className="hover:opacity-80 transition-opacity cursor-pointer"
                    />
                </div>

                {/* Navegação */}
                <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
                    <a href="#sobre" className="hover:text-brand transition-colors">Sobre</a>
                    <a href="#servicos" className="hover:text-brand transition-colors">Serviços</a>
                    <a href="#ajuda" className="hover:text-brand transition-colors">Apoio</a>
                    <a href="#abordagem" className="hover:text-brand transition-colors">Abordagem</a>
                    <a href="#contato" className="rounded-full bg-brand px-5 py-2.5 text-white shadow-sm transition-colors hover:bg-brand-600">Contato</a>
                </nav>

                {/* Botão Agendar */}
               
            </div>
        </header>
    )
};
