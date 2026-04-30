import Reveal from "./Reveal";

function ApproachItem({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="h-full rounded-xl border border-white/20 bg-paper/95 p-5 shadow-[0_18px_44px_rgba(48,37,38,0.16)]">
            <h3 className="font-medium text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{desc}</p>
        </div>
    );
}

export default function Approach() {
    return (
        <section id="abordagem" className="bg-[#792E40]">
            <div className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
                <h2 className="text-4xl font-semibold text-white">Como trabalho</h2>
                <p className="mt-4 max-w-2xl text-white/85">
                    A partir da abordagem Gestalt trabalho o foco no "aqui e agora": atenção à experiência
                    presente, às sensações, emoções e formas de contato. A Gestalt estimula a consciência
                    (awareness), a responsabilidade pessoal e o uso de experiências/experimentos terapêuticos
                    para integrar partes não resolvidas e promover autonomia.
                </p>

                <div className="mt-6 grid gap-5 md:grid-cols-3">
                    <Reveal>
                        <ApproachItem
                            title="Escuta acolhedora"
                            desc="Um espaço seguro para ser você, com respeito e empatia."
                        />
                    </Reveal>
                    <Reveal>
                        <ApproachItem
                            title="Baseado em evidências"
                            desc="Práticas da Psicologia científica, como TCC e abordagens integrativas."
                        />
                    </Reveal>
                    <Reveal>
                        <ApproachItem
                            title="Plano personalizado"
                            desc="Juntas(os), definimos objetivos e estratégias alinhadas à sua realidade."
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
