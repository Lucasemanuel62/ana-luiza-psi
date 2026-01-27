export default function Contact() {
    return (
        <section id="contato" className="bg-[#F3F1EC]">
            <div className="mx-auto max-w-screen-xl px-6 py-16 md:py-20">
                <div className="rounded-xl border border-[#E8E6E3] bg-white p-6 md:p-8 shadow-sm">
                    <div className="md:flex md:items-center md:justify-between gap-6">
                        <div>
                            <h2 className="text-4xl font-semibold text-[#1F2937]">Agende sua consulta</h2>
                            <p className="mt-3 text-[#374151]">
                                Entre em contato para combinarmos o melhor horário. Atendimento presencial e online.
                            </p>
                        </div>
                        <div className="mt-6 md:mt-0 flex flex-col sm:flex-row gap-3">
                            <a
                                className="inline-flex items-center justify-center rounded-xl bg-[#3EC6C6] px-6 py-3 text-white font-medium hover:bg-[#2fb0b0] transition-colors shadow-md"
                                href="mailto:contato@analuiza.com"
                            >
                                Enviar e-mail
                            </a>
                            <a
                                className="inline-flex items-center justify-center rounded-xl border border-[#3EC6C6] px-6 py-3 text-[#3EC6C6] font-medium hover:bg-[#EEF6F3] hover:text-[#1F2937] transition-colors"
                                href="https://wa.me/0000000000?text=Olá%20Ana%20Luiza!%20Vi%20sua%20página%20e%20gostaria%20de%20marcar%20uma%20consulta.%20Podemos%20conversar?"
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
