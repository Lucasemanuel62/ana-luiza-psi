function ServiceCard({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="rounded-xl border border-neutral-200 p-5 bg-white">
            <h3 className="font-medium text-neutral-900">{title}</h3>
            <p className="mt-2 text-neutral-700 text-sm leading-6">{desc}</p>
        </div>
    );
}

export default function Services() {
    return (
        <section id="servicos" className="bg-white">
            <div className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
                <h2 className="text-2xl font-semibold text-neutral-900">Serviços</h2>
                <p className="mt-3 text-neutral-700">Atendimento humanizado e focado nas suas necessidades.</p>

                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <ServiceCard title="Psicoterapia Individual" desc="Processo terapêutico para autoconhecimento, manejo de emoções e saúde mental." />
                    <ServiceCard title="Terapia de Casal" desc="Cuidado com a comunicação, vínculos e resolução de conflitos." />
                    <ServiceCard title="Atendimento Online" desc="Sessões por vídeo com a mesma qualidade e sigilo do presencial." />
                    <ServiceCard title="Orientação Profissional" desc="Apoio em escolhas de carreira e transições de trabalho." />
                </div>
            </div>
        </section>
    )
}
