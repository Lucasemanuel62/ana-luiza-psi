function Quote({ text, author }: { text: string; author: string }) {
    return (
        <figure className="rounded-xl border border-neutral-200 p-5 bg-white">
            <blockquote className="text-neutral-800">"{text}"</blockquote>
            <figcaption className="mt-3 text-sm text-neutral-600">— {author}</figcaption>
        </figure>
    );
}

export default function Testimonials() {
    return (
        <section id="depoimentos" className="bg-white">
            <div className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
                <h2 className="text-4xl font-semibold text-neutral-900">Depoimentos</h2>
                <p className="mt-3 text-neutral-700">Inclua aqui depoimentos de clientes (com autorização).</p>
                <div className="mt-6 grid md:grid-cols-3 gap-5">
                    <Quote text="Aprendi a me ouvir e respeitar meus limites." author="Cliente A" />
                    <Quote text="O acolhimento fez toda a diferença no meu processo." author="Cliente B" />
                    <Quote text="Me sinto mais confiante para lidar com desafios." author="Cliente C" />
                </div>
            </div>
        </section>
    )
}
