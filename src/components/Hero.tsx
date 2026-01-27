import Image from "next/image"

export default function Hero() {
    return (
        <section id="inicio" className="bg-gradient-to-br from-[#EEF6F3] via-[#E7F9F8] to-[#3EC6C6] items-center flex flex-col">
            <div className="max-w-screen-xl px-6 py-16 md:py-1">
                {/* Layout Mobile: Foto ao lado do nome */}
                <div className="md:hidden flex items-start gap-4 mb-6 px-5">
                    <div className="flex-1">
                        <span className="inline-block rounded-full bg-[#F3F1EC] text-[#1F2937] px-3 py-1 text-sm font-medium border border-[#D8EAE7]">
                            Psicologia Clínica
                            </span>
                        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#1F2937]">
                            Ana Luiza — Psicóloga
                        </h1>
                    </div>
                    <div className="relative w-32 bottom-8 h-28">
                        <Image
                            src="/images/desing3.png"
                            alt="Ana Luiza - Psicóloga"
                            width={140}
                            height={140}
                            className=" rounded-xl object-cover [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]
                            [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
                            priority
                        />
                    </div>
                </div>

                {/* Layout Desktop: Grid de 2 colunas */}
                <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
                    {/* Conteúdo do Hero */}
                    <div>
                        <span className="inline-block rounded-full bg-[#F3F1EC] text-[#1F2937] px-3 py-1 text-sm font-medium border border-[#D8EAE7]">
                            Psicologia Clínica
                        </span>
                        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#1F2937] sm:text-5xl">
                            Ana Luiza — Psicóloga
                        </h1>
                        <p className="mt-4 text-lg text-[#374151]">
                            Acolhimento, escuta qualificada e cuidado baseado em evidências para o seu bem-estar emocional.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="https://wa.me/5581995943765?text=Olá%20Ana%20Luiza!%20Vi%20sua%20página%20e%20gostaria%20de%20marcar%20uma%20consulta.%20Podemos%20conversar?"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-xl bg-[#3EC6C6] px-6 py-3 text-white font-medium hover:bg-[#2fb0b0] transition-colors shadow-md"
                            >
                                Agendar consulta
                            </a>
                            <a href="#servicos" className="inline-flex items-center justify-center rounded-xl border border-[#3EC6C6] px-6 py-3 text-[#3EC6C6] font-medium hover:bg-[#EEF6F3] hover:text-[#1F2937] transition-colors">Ver serviços</a>
                        </div>
                    </div>

                    {/* Foto da Ana Luiza */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <Image
                                src="/images/desing3.png"
                                alt="Ana Luiza - Psicóloga"
                                width={500}
                                height={340}
                                className=" rounded-xl object-cover [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]
                                [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Conteúdo Mobile: Descrição e botões */}
                <div className="md:hidden px-2">
                    <p className="text-lg text-[#1F2937] mb-6">
                        Acolhimento, escuta qualificada e cuidado baseado em evidências para o seu bem-estar emocional.
                    </p>
                    <div className="flex flex-col gap-3">
                        <a
                            href="#contato"
                            className="inline-flex w-full items-center justify-center rounded-xl bg-[#3EC6C6] px-6 py-3 text-white font-medium hover:bg-[#2fb0b0] transition-colors shadow-md"
                        >
                            Agendar consulta
                        </a>
                        <a
                            href="#servicos"
                            className="inline-flex w-full items-center justify-center rounded-xl border border-[#3EC6C6] px-6 py-3 text-[#3EC6C6] font-medium hover:bg-[#EEF6F3] hover:text-[#1F2937] transition-colors"
                        >
                            Ver serviços
                        </a>
                    </div>
                </div>
            </div>

            {/* Transição em onda */}
            <div className="relative w-full overflow-x-hidden">
    <svg
        className="w-full h-[120px] sm:h-[160px] md:h-[200px]"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0,60 C200,10 400,110 600,50 C800,-10 1000,90 1200,40 L1200,120 L0,120 Z"
      fill="currentColor"
            className="text-[#F3F1EC]"
    />
  </svg>
</div>
        </section>
    )
}
