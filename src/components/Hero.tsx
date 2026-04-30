import Image from "next/image"

export default function Hero() {
    return (
        <section id="inicio" className="flex flex-col items-center bg-[radial-gradient(circle_at_72%_28%,#d8e2d7_0,#e5d5cc_34%,#efe3dc_68%,#dac8bf_100%)]">
            <div className="max-w-screen-xl px-6 py-16 md:py-1">
                {/* Layout Mobile: Foto ao lado do nome */}
                <div className="md:hidden flex items-start gap-4 mb-6 px-5">
                    <div className="flex-1">
                        <span className="inline-block rounded-full border border-brand-100 bg-paper px-3 py-1 text-sm font-medium text-brand">
                            Psicologia Clínica
                            </span>
                        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
                            Ana Luiza — Psicóloga
                        </h1>
                    </div>
                    <div className="relative w-32 bottom-8 h-28">
                        <Image
                            src="/images/analuizadefinitivo.png"
                            alt="Ana Luiza - Psicóloga"
                            width={120}
                            height={120}
                            className="object-contain [mask-image:linear-gradient(to_bottom,black_86%,rgba(0,0,0,0.65)_94%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_86%,rgba(0,0,0,0.65)_94%,transparent_100%)]"
                            priority
                        />
                    </div>
                </div>

                {/* Layout Desktop: Grid de 2 colunas */}
                <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
                    {/* Conteúdo do Hero */}
                    <div>
                        <span className="inline-block rounded-full border border-brand-100 bg-paper px-3 py-1 text-sm font-medium text-brand">
                            Psicologia Clínica
                        </span>
                        <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                            Ana Luiza — Psicóloga
                        </h1>
                        <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
                            Acolhimento, escuta qualificada e cuidado baseado em evidências para o seu bem-estar emocional.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <a
                                href="https://wa.me/5581995943765?text=Ol%C3%A1%20Ana%20Luiza!%20Vi%20sua%20p%C3%A1gina%20e%20gostaria%20de%20marcar%20uma%20consulta.%20Podemos%20conversar?"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 font-medium text-white shadow-[0_14px_32px_rgba(166,75,95,0.28)] transition-colors hover:bg-brand-600"
                            >
                                Agendar consulta
                            </a>
                            <a href="#servicos" className="inline-flex items-center justify-center rounded-xl border border-line px-6 py-3 font-medium text-brand transition-colors hover:bg-brand-50 hover:text-ink">Ver serviços</a>
                        </div>
                    </div>

                    {/* Foto da Ana Luiza */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <Image
                                src="/images/analuizadefinitivo.png"
                                alt="Ana Luiza - Psicóloga"
                                width={500}
                                height={340}
                                className="object-contain [mask-image:linear-gradient(to_bottom,black_86%,rgba(0,0,0,0.65)_94%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_86%,rgba(0,0,0,0.65)_94%,transparent_100%)]"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Conteúdo Mobile: Descrição e botões */}
                <div className="md:hidden px-2">
                    <p className="mb-6 text-lg leading-8 text-ink">
                        Acolhimento, escuta qualificada e cuidado baseado em evidências para o seu bem-estar emocional.
                    </p>
                    <div className="flex flex-col gap-3">
                        <a
                            href="https://wa.me/5581995943765?text=Ol%C3%A1%20Ana%20Luiza!%20Vi%20sua%20p%C3%A1gina%20e%20gostaria%20de%20marcar%20uma%20consulta.%20Podemos%20conversar?"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-6 py-3 font-medium text-white shadow-[0_14px_32px_rgba(166,75,95,0.28)] transition-colors hover:bg-brand-600"
                        >
                            Agendar consulta
                        </a>
                        <a
                            href="#servicos"
                            className="inline-flex w-full items-center justify-center rounded-xl border border-line px-6 py-3 font-medium text-brand transition-colors hover:bg-brand-50 hover:text-ink"
                        >
                            Ver serviços
                        </a>
                    </div>
                </div>
            </div>

            {/* Transição em onda */}
            <div className="relative w-full overflow-x-hidden">
    <svg
        className="h-[88px] w-full sm:h-[108px] md:h-[128px]"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="about-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6f2839" />
        <stop offset="48%" stopColor="#a64b5f" />
        <stop offset="100%" stopColor="#789688" />
      </linearGradient>
    </defs>
    <path
      d="M0,48 C200,8 400,84 600,36 C800,-8 1000,74 1200,28 L1200,120 L0,120 Z"
      fill="url(#about-wave-gradient)"
    />
  </svg>
</div>
        </section>
    )
}
