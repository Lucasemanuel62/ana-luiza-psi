import Image from "next/image"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-transparent bg-white/80 backdrop-blur-md">
            <div className="w-full px-6 h-16 flex items-center justify-around">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <Image
                        src="/images/logo-ana-luiza1.png"
                        alt="Ana Luiza Logo"
                        width={100}
                        height={100}
                        className="hover:opacity-80 transition-opacity cursor-pointer"
                    />
                </div>

                {/* Navegação */}
                <nav className="hidden md:flex items-center gap-6 text-[1.2em] text-[#374151]">
                    <a href="#sobre" className="hover:text-[#3EC6C6] transition-colors">Sobre</a>
                    <a href="#servicos" className="hover:text-[#3EC6C6] transition-colors">Serviços</a>
                    <a href="#ajuda" className="hover:text-[#3EC6C6] transition-colors">Apoio</a>
                    <a href="#abordagem" className="hover:text-[#3EC6C6] transition-colors">Abordagem</a>
                    <a href="#contato" className="hover:text-[#3EC6C6] transition-colors">Contato</a>
                </nav>

                {/* Botão Agendar */}
               
            </div>
        </header>
    )
};