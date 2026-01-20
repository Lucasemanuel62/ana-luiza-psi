export default function Footer() {
    return (
        <footer className="bg-white border-t border-neutral-200">
            <div className="mx-auto max-w-screen-xl px-6 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-neutral-600">© {new Date().getFullYear()} Ana Luiza — Psicóloga</p>
                    <nav className="flex gap-5 text-neutral-700">
                        <a href="#sobre" className="hover:text-neutral-900">Sobre</a>
                        <a href="#servicos" className="hover:text-neutral-900">Serviços</a>
                        <a href="#ajuda" className="hover:text-neutral-900">Ajuda</a>
                        <a href="#contato" className="hover:text-neutral-900">Contato</a>
                    </nav>
                </div>
                <div className="text-center md:text-right mt-4">
                    <p className="text-sm text-neutral-500">Desenvolvido por <a href="https://lucasemanuel62.github.io/portifolio/" target="_blank" rel="noopener noreferrer" className="font-medium text-teal-600 hover:text-teal-700 transition-colors">Lucas Emanuel</a></p>
                </div>
            </div>
        </footer>
    )
}
