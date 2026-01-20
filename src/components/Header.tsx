import Image from "next/image"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto max-w-screen-xl px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/images/logo-ana-luiza.png"
                        alt="Ana Luiza Logo"
                        width={55}
                        height={55}
                        className="hover:opacity-80 transition-opacity cursor-pointer"
                    />
                </div>

                {/* Navegação */}
                <nav className="hidden md:flex items-center gap-8 text-slate-600">
                    <a href="#sobre" className="hover:text-slate-800 transition-colors">Sobre</a>
                    <a href="#servicos" className="hover:text-slate-800 transition-colors">Serviços</a>
                    <a href="#ajuda" className="hover:text-slate-800 transition-colors">Como posso te ajudar?</a>
                    <a href="#abordagem" className="hover:text-slate-800 transition-colors">Abordagem</a>
                    <a href="#contato" className="hover:text-slate-800 transition-colors">Contato</a>
                </nav>

                {/* Botão Agendar */}
                <a
                    href="https://wa.me/00000000000?text=Olá%20Ana%20Luiza!%20Vi%20sua%20página%20e%20gostaria%20de%20marcar%20uma%20consulta.%20Podemos%20conversar?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-2.5 text-white text-sm font-medium hover:bg-teal-700 transition-all duration-200 shadow-sm"
                >
                    Agendar
                </a>
            </div>
        </header>
    )
};