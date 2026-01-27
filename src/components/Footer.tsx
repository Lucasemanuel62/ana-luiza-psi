export default function Footer() {
    return (
        <footer className="bg-white border-t border-transparent">
            <div className="mx-auto max-w-screen-xl px-6 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#1F2937]">© {new Date().getFullYear()} Ana Luiza — Psicóloga</p>
                    <nav className="flex gap-5 text-[#374151]">
                        <a href="#sobre" className="hover:text-[#3EC6C6]">Sobre</a>
                        <a href="#servicos" className="hover:text-[#3EC6C6]">Serviços</a>
                        <a href="#ajuda" className="hover:text-[#3EC6C6]">Ajuda</a>
                        <a href="#contato" className="hover:text-[#3EC6C6]">Contato</a>
                    </nav>
                </div>
                <div className="text-center md:text-right mt-4">
                    <p className="text-sm text-[#374151]">Desenvolvido por <a href="https://lucasemanuel62.github.io/portifolio/" target="_blank" rel="noopener noreferrer" className="font-medium text-[#3EC6C6] hover:text-[#2fb0b0] transition-colors">Lucas Emanuel</a></p>
                </div>
            </div>
        </footer>
    )
}
