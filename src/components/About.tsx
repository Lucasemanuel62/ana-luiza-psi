export default function About() {
    return (
        <section id="sobre" className="bg-[#F3F1EC]">
            <div className="mx-auto max-w-screen-xl px-6 lg:py-20 grid md:grid-cols-12 gap-8">
                <div className="md:col-span-7 lg:flex lg:flex-col lg:gap-6">
                    <h2 className="text-4xl font-semibold text-[#1F2937]">Sobre mim</h2>
                    <p className="mt-4 text-[#374151] leading-7">
                        Atendo adolescentes e adultos em demandas como ansiedade, depressão, estresse, autoestima, relacionamentos
                        e desenvolvimento pessoal. Meu trabalho é pautado na escuta empática, acolhimento e construção conjunta de
                        estratégias para uma vida com mais sentido e equilíbrio.
                    </p>
                    <p className="mt-4 text-[#1F2937] font-medium leading-7">
                        Atendimento online com Gestalt-terapia, oferecendo um espaço de reflexões e acolhimento.
                    </p>

                    {/* Informações destacadas */}
                    <div className="mt-6 p-4 bg-[#EEF6F3] rounded-lg border-l-4 border-[#3EC6C6]">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-[#3EC6C6] font-medium">🔸</span>
                            <span className="text-[#1F2937] font-semibold">Psicóloga - CRP 00/0000</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-[#3EC6C6] font-medium">🔸</span>
                            <span className="text-[#1F2937] font-semibold">Atendimento online / Gestalt-terapia</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[#3EC6C6] font-medium">🔸</span>
                            <span className="text-[#1F2937] font-semibold">Um espaço de reflexões e acolhimento</span>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-5">
                    <div className="rounded-xl border border-[#E8E6E3] bg-white p-5 shadow-sm">
                        <h3 className="font-medium text-[#1F2937]">Informações</h3>
                        <ul className="mt-3 space-y-2 text-[#374151]">
                            <li>CRP: 00/0000</li>
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
