export default function Help() {
    return (
        <section id="ajuda" className="bg-[#EFE3DC]">
            <div className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
                <div className="md:flex md:items-start md:justify-between gap-10">
                    <div className="md:max-w-2xl">
                        <h2 className="text-4xl font-semibold text-ink">
                            Como posso te ajudar?
                        </h2>
                        <p className="mt-4 text-muted leading-7">
                            A psicoterapia é um espaço de acolhimento e escuta qualificada para
                            compreender o que você está vivendo, fortalecer recursos emocionais
                            e construir caminhos possíveis com mais clareza e equilíbrio.
                        </p>
                        <p className="mt-4 text-muted leading-7">
                            Atendo adolescentes e adultos em demandas como ansiedade,
                            depressão, estresse, autoestima, dificuldades nos relacionamentos,
                            luto e momentos de transição. O processo é conduzido com ética,
                            sigilo e respeito ao seu ritmo.
                        </p>
                    </div>

                    <div className="mt-8 md:mt-0 md:w-[420px]">
                        <div className="rounded-xl border border-line bg-paper p-6 shadow-sm">
                            <h3 className="text-lg font-medium text-ink">
                                O que você pode esperar
                            </h3>
                            <ul className="mt-4 space-y-3 text-muted">
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage" />
                                    <span>
                                        Um espaço seguro para falar sobre sentimentos, pensamentos e
                                        experiências, sem julgamentos.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage" />
                                    <span>
                                        Clareza sobre padrões e gatilhos, com estratégias práticas
                                        para o dia a dia.
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage" />
                                    <span>
                                        Construção conjunta de objetivos terapêuticos e um plano
                                        alinhado à sua realidade.
                                    </span>
                                </li>
                            </ul>
                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <a href="#contato" className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 font-medium text-white shadow-[0_14px_32px_rgba(166,75,95,0.24)] transition-colors hover:bg-brand-600">Quero conversar</a>
                                <a href="#servicos" className="inline-flex items-center justify-center rounded-xl border border-line px-6 py-3 font-medium text-brand transition-colors hover:bg-brand-50 hover:text-ink">Ver serviços</a>
                            </div>
                            <p className="mt-3 text-xs text-muted">
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

