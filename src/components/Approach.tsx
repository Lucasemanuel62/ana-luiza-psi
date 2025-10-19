function ApproachItem({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="rounded-xl border border-neutral-200 p-5 bg-white">
            <h3 className="font-medium text-neutral-900">{title}</h3>
            <p className="mt-2 text-neutral-700 text-sm leading-6">{desc}</p>
        </div>
    );
}

export default function Approach() {
    return (
        <section id="abordagem" className="bg-neutral-50">
            <div className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
                <h2 className="text-4xl font-semibold text-neutral-900">Como trabalho</h2>
                <div className="mt-6 grid md:grid-cols-3 gap-5">
                    <ApproachItem title="Escuta acolhedora" desc="Um espaço seguro para ser você, com respeito e empatia." />
                    <ApproachItem title="Baseado em evidências" desc="Práticas da Psicologia científica, como TCC e abordagens integrativas." />
                    <ApproachItem title="Plano personalizado" desc="Juntas(os), definimos objetivos e estratégias alinhadas à sua realidade." />
                </div>
            </div>
        </section>
    )
}
