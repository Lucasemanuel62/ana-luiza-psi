export default function Contact() {
    return (
        <section id="contato" className="bg-ivory">
            <div className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
                <div className="rounded-xl border border-line bg-paper p-6 shadow-[0_22px_60px_rgba(48,37,38,0.10)] md:p-8">
                    <div className="gap-6 md:flex md:items-center md:justify-between">
                        <div>
                            <h2 className="text-4xl font-semibold text-ink">Agende sua consulta</h2>
                            <p className="mt-3 text-muted">
                                Entre em contato para combinarmos o melhor horário. Atendimento presencial e online.
                            </p>
                        </div>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0">
                            <a
                                className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 font-medium text-white shadow-[0_14px_32px_rgba(166,75,95,0.24)] transition-colors hover:bg-brand-600"
                                href="https://wa.me/5581995943765?text=Ol%C3%A1%20Ana%20Luiza!%20Vi%20sua%20p%C3%A1gina%20e%20gostaria%20de%20marcar%20uma%20consulta.%20Podemos%20conversar?"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Falar no WhatsApp
                            </a>
                            <a
                                className="inline-flex items-center justify-center rounded-xl border border-line px-6 py-3 font-medium text-brand transition-colors hover:bg-brand-50 hover:text-ink"
                                href="mailto:contato@analuiza.com"
                            >
                                Enviar e-mail
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
