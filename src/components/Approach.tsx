import Reveal from "./Reveal";

function ApproachItem({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="rounded-xl border border-[#E8E6E3] p-5 bg-white shadow-sm">
            <h3 className="font-medium text-[#1F2937]">{title}</h3>
            <p className="mt-2 text-[#374151] text-sm leading-6">{desc}</p>
        </div>
    );
}

export default function Approach() {
    return (
        <section id="abordagem" className="bg-purple-50">
            <div className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
                <h2 className="text-4xl font-semibold text-[#1F2937]">Como trabalho</h2>
                <p className="mt-4 text-[#374151] max-w-2xl">A partir da abordagem Gestalt trabalho o foco no "aqui e agora": atenção à experiência presente, às sensações, emoções e formas de contato. A Gestalt estimula a consciência (awareness), a responsabilidade pessoal e o uso de experiências/experimentos terapêuticos para integrar partes não resolvidas e promover autonomia.</p>

                <div className="mt-6 grid md:grid-cols-3 gap-5">
                    <Reveal><ApproachItem title="Escuta acolhedora" desc="Um espaço seguro para ser você, com respeito e empatia." /></Reveal>
                    <Reveal><ApproachItem title="Baseado em evidências" desc="Práticas da Psicologia científica, como TCC e abordagens integrativas." /></Reveal>
                    <Reveal><ApproachItem title="Plano personalizado" desc="Juntas(os), definimos objetivos e estratégias alinhadas à sua realidade." /></Reveal>
                </div>
            </div>
        </section>
    )
}
