export default function Footer() {
    return (
        <footer className="border-t border-line bg-paper">
            <div className="mx-auto max-w-screen-xl px-6 py-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-ink">© {new Date().getFullYear()} Ana Luiza — Psicóloga</p>
                    <nav className="flex gap-5 text-muted">
                        <a href="#sobre" className="hover:text-brand">Sobre</a>
                        <a href="#servicos" className="hover:text-brand">Serviços</a>
                        <a href="#ajuda" className="hover:text-brand">Ajuda</a>
                        <a href="#contato" className="hover:text-brand">Contato</a>
                    </nav>
                </div>
                <div className="text-center md:text-right mt-4">
                    <p className="text-sm text-muted">Desenvolvido por <a href="https://lucasemanuel62.github.io/portifolio/" target="_blank" rel="noopener noreferrer" className="font-medium text-brand transition-colors hover:text-brand-600">Lucas Emanuel</a></p>
                </div>
            </div>
        </footer>
    )
}
