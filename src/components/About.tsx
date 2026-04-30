import Reveal from "./Reveal";

export default function About() {
    return (
        <section id="sobre" className="bg-[linear-gradient(90deg,#6f2839_0%,#a64b5f_48%,#789688_100%)]">
            <div className="mx-auto grid max-w-screen-xl gap-10 px-6 py-16 md:grid-cols-12 md:items-start md:py-20">
                <Reveal className="md:col-span-7">
                    <span className="inline-block w-fit rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-white/90">
                        Cuidado psicológico
                    </span>

                    <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight text-white md:text-5xl">
                        Escuta qualificada para atravessar o que você vive
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-white/86">
                        Atendo adultos em demandas como ansiedade, depressão, estresse, autoestima,
                        relacionamentos e desenvolvimento pessoal. Meu trabalho é pautado na escuta empática,
                        acolhimento e construção conjunta de estratégias para uma vida com mais sentido e equilíbrio.
                    </p>

                    <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white">
                        Atendimento online com Gestalt-terapia, oferecendo um espaço de reflexões e acolhimento.
                    </p>

                </Reveal>

                <div className="md:col-span-5 md:pt-12">
                    <Reveal>
                        <div className="rounded-xl border border-white/25 bg-paper/95 p-6 shadow-[0_20px_55px_rgba(48,37,38,0.18)]">
                            <h3 className="text-lg font-semibold text-ink">Informações</h3>
                            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted md:text-base">
                                <li><span className="font-semibold text-ink">CRP:</span> 05/75904</li>
                                <li><span className="font-semibold text-ink">Abordagem:</span> Gestalt-terapia</li>
                                <li><span className="font-semibold text-ink">Modalidade:</span> Online</li>
                                <li><span className="font-semibold text-ink">Especialidade:</span> Acolhimento e reflexões</li>
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
