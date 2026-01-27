export default function Help() {
    return (
        <section id="ajuda" className="bg-[#F3F1EC]">
            <div className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
                <div className="md:flex md:items-start md:justify-between gap-10">
                    <div className="md:max-w-2xl">
                        <h2 className="text-4xl font-semibold text-[#1F2937]">
                            Como posso te ajudar?
                        </h2>
                        <p className="mt-4 text-[#374151] leading-7">
                            A psicoterapia é um espaço de acolhimento e escuta qualificada para
                            compreender o que você está vivendo, fortalecer recursos emocionais
                            e construir caminhos possíveis com mais clareza e equilíbrio.
                        </p>
                        <p className="mt-4 text-[#374151] leading-7">
                            Atendo adolescentes e adultos em demandas como ansiedade,
                            depressão, estresse, autoestima, dificuldades nos relacionamentos,
                            luto e momentos de transição. O processo é conduzido com ética,
                            sigilo e respeito ao seu ritmo.
                        </p>
                    </div>

                    <div className="mt-8 md:mt-0 md:w-[420px]">
                        <div className="rounded-xl border border-[#E8E6E3] bg-[#EEF6F3] p-6">
                            <h3 className="text-lg font-medium text-[#1F2937]">
                                O que você pode esperar
                            </h3>
                            <ul className="mt-4 space-y-3 text-[#374151]">
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#3EC6C6]" />
                                    <span>
                                        Um espaço seguro para falar sobre sentimentos, pensamentos e
                                        experiências, sem julgamentos.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#3EC6C6]" />
                                    <span>
                                        Clareza sobre padrões e gatilhos, com estratégias práticas
                                        para o dia a dia.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#3EC6C6]" />
                                    <span>
                                        Construção conjunta de objetivos terapêuticos e um plano
                                        alinhado à sua realidade.
                                    </span>
                                </li>
                            </ul>
                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <a href="#contato" className="inline-flex items-center justify-center rounded-xl bg-[#3EC6C6] px-6 py-3 text-white font-medium hover:bg-[#2fb0b0] transition-colors shadow-md">Quero conversar</a>
                                <a href="#servicos" className="inline-flex items-center justify-center rounded-xl border border-[#3EC6C6] px-6 py-3 text-[#3EC6C6] font-medium hover:bg-[#EEF6F3] hover:text-[#1F2937] transition-colors">Ver serviços</a>
                            </div>
                            <p className="mt-3 text-xs text-[#374151]">
                                Em caso de urgência/emergência, procure atendimento imediato na
                                rede de saúde da sua cidade.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

