import Image from "next/image"

export default function Hero() {
    return (
        <section id="inicio" className="bg-[#F7F4E9]">
            <div className="mx-auto max-w-screen-xl px-6 py-12 md:py-6">
                {/* Layout Mobile: Foto ao lado do nome */}
                <div className="md:hidden flex items-center gap-2 mb-6">
                    <div className="flex-1">
                        <span className="inline-block rounded-full bg-teal-100 text-teal-800 px-3 py-1 text-sm font-medium">
                            Psicologia Clínica
                        </span>
                        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
                            Ana Luiza — Psicóloga
                        </h1>
                    </div>
                    <div className="relative">
                        <Image
                            src="/images/desing2.jpg"
                            alt="Ana Luiza - Psicóloga"
                            width={180}
                            height={180}
                            className="rounded-xl object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Layout Desktop: Grid de 2 colunas */}
                <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
                    {/* Conteúdo do Hero */}
                    <div>
                        <span className="inline-block rounded-full bg-teal-100 text-teal-800 px-3 py-1 text-sm font-medium">
                            Psicologia Clínica
                        </span>
                        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                            Ana Luiza — Psicóloga
                        </h1>
                        <p className="mt-4 text-lg text-neutral-600">
                            Acolhimento, escuta qualificada e cuidado baseado em evidências para o seu bem-estar emocional.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="https://wa.me/00000000?text=Olá%20Ana%20Luiza!%20Vi%20sua%20página%20e%20gostaria%20de%20marcar%20uma%20consulta.%20Podemos%20conversar?"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-md bg-teal-600 px-5 py-3 text-white font-medium hover:bg-teal-700 transition-colors"
                            >
                                Agendar consulta
                            </a>
                            <a
                                href="#servicos"
                                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 text-neutral-800 font-medium hover:bg-neutral-50 transition-colors"
                            >
                                Ver serviços
                            </a>
                        </div>
                    </div>

                    {/* Foto da Ana Luiza */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <Image
                                src="/images/desing2.jpg"
                                alt="Ana Luiza - Psicóloga"
                                width={380}
                                height={320}
                                className="rounded-xl object-cover"
                                priority
                            />
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-100 rounded-full opacity-20"></div>
                        </div>
                    </div>
                </div>

                {/* Conteúdo Mobile: Descrição e botões */}
                <div className="md:hidden">
                    <p className="text-lg text-neutral-600 mb-16">
                        Acolhimento, escuta qualificada e cuidado baseado em evidências para o seu bem-estar emocional.
                    </p>
                    <div className="flex flex-col gap-3">
                        <a
                            href="#contato"
                            className="inline-flex items-center justify-center rounded-md bg-teal-600 px-5 py-3 text-white font-medium hover:bg-teal-700 transition-colors"
                        >
                            Agendar consulta
                        </a>
                        <a
                            href="#servicos"
                            className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 text-neutral-800 font-medium hover:bg-neutral-50 transition-colors"
                        >
                            Ver serviços
                        </a>
                    </div>
                </div>
            </div>

            {/* Transição em onda */}
            <div className="relative">
                <svg className="w-full h-16 text-neutral-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,60 C200,10 400,110 600,50 C800,-10 1000,90 1200,40 L1200,120 L0,120 Z" fill="currentColor"></path>
                </svg>
            </div>
        </section>
    )
}
