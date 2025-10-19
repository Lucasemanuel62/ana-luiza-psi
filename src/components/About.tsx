export default function About() {
    return (
        <section id="sobre" className="bg-neutral-50">
            <div className="mx-auto max-w-screen-xl px-6 lg:py-20 grid md:grid-cols-12 gap-8">
                <div className="md:col-span-7 lg:flex lg:flex-col lg:gap-6">
                    <h2 className="text-4xl font-semibold text-neutral-900">Sobre mim</h2>
                    <p className="mt-4 text-neutral-700 leading-7">
                        Atendo adolescentes e adultos em demandas como ansiedade, depressão, estresse, autoestima, relacionamentos
                        e desenvolvimento pessoal. Meu trabalho é pautado na escuta empática, acolhimento e construção conjunta de
                        estratégias para uma vida com mais sentido e equilíbrio.
                    </p>
                    <p className="mt-4 text-neutral-700 font-medium leading-7">
                        Atendimento online com Gestalt-terapia, oferecendo um espaço de reflexões e acolhimento.
                    </p>

                    {/* Informações destacadas */}
                    <div className="mt-6 p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-teal-600 font-medium">🔸</span>
                            <span className="text-teal-800 font-semibold">Psicóloga - CRP 05/75904</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-teal-600 font-medium">🔸</span>
                            <span className="text-teal-800 font-semibold">Atendimento online / Gestalt-terapia</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-teal-600 font-medium">🔸</span>
                            <span className="text-teal-800 font-semibold">Um espaço de reflexões e acolhimento</span>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-5">
                    <div className="rounded-xl border border-neutral-200 bg-white p-5">
                        <h3 className="font-medium text-neutral-900">Informações</h3>
                        <ul className="mt-3 space-y-2 text-neutral-700">
                            <li>CRP: 05/75904</li>
                            <li>Abordagem: Gestalt-terapia</li>
                            <li>Modalidade: Online</li>
                            <li>Especialidade: Acolhimento e reflexões</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
