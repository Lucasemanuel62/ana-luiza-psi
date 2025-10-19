export default function Contact() {
    return (
        <section id="contato" className="bg-neutral-50">
            <div className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
                <div className="rounded-xl border border-neutral-200 bg-white p-6 md:p-8">
                    <div className="md:flex md:items-center md:justify-between gap-6">
                        <div>
                            <h2 className="text-2xl font-semibold text-neutral-900">Agende sua consulta</h2>
                            <p className="mt-3 text-neutral-700">
                                Entre em contato para combinarmos o melhor horário. Atendimento presencial e online.
                            </p>
                        </div>
                        <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3">
                            <a
                                className="inline-flex items-center justify-center rounded-md bg-teal-600 px-5 py-3 text-white font-medium hover:bg-teal-700 transition-colors"
                                href="mailto:contato@analuiza.com"
                            >
                                Enviar e-mail
                            </a>
                            <a
                                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 text-neutral-800 font-medium hover:bg-neutral-50 transition-colors"
                                href="https://wa.me/558195943765?text=Olá%20Ana%20Luiza!%20Vi%20sua%20página%20e%20gostaria%20de%20marcar%20uma%20consulta.%20Podemos%20conversar?"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Falar no WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
