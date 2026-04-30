"use client";
import React from "react";
import Image from "next/image";
import Reveal from "./Reveal";

export default function Services() {
    const services = [
        {
            title: "Psicoterapia Individual",
            desc: "Espaço de acolhimento para autoconhecimento, manejo emocional e saúde mental.",
            img: "/images/terapia-individual11.png",
            alt: "Psicoterapia Individual",
        },
        {
            title: "Terapia de Casal",
            desc: "Atendimento focado na comunicação, fortalecimento do vínculo e resolução de conflitos.",
            img: "/images/terapia-casal1.png",
            alt: "Terapia de Casal",
        },
        {
            title: "Atendimento Online",
            desc: "Sessões por vídeo com sigilo, conforto e a mesma qualidade do presencial.",
            img: "/images/terapia-online1.png",
            alt: "Atendimento Online",
        },
        {
            title: "Orientação Profissional",
            desc: "Apoio nas escolhas de carreira, propósito e transições no mundo do trabalho.",
            img: "/images/orientacao-profissional1.png",
            alt: "Orientação Profissional",
        },
    ];

    return (
        <section id="servicos" className="bg-ivory py-16 md:py-20">
            <div className="max-w-screen-xl mx-auto px-6">
                <h2 className="text-4xl font-semibold text-ink">Serviços</h2>
                <p className="mt-2 text-muted">
                    Acolhimento psicológico com ética, empatia e cuidado com sua história.
                </p>

                <div className="mt-10 grid gap-6 grid-cols-2 lg:grid-cols-4">
                    {services.map((serv, i) => {
                        const total = services.length;
                        const baseDelay = 0.48; // seconds between items
                        const delay = (total - i - 1) * baseDelay; // right-to-left stagger
                        return (
                            <Reveal key={serv.title} className="" direction="left" delay={delay}>
                                <div className="flex h-full flex-col items-center rounded-xl border border-line bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-[0_18px_44px_rgba(48,37,38,0.12)]">
                                <Image
                                    src={serv.img}
                                    alt={serv.alt}
                                    width={160}
                                    height={160}
                                    className="object-contain rounded-md"
                                    priority={false}
                                />
                                <h3 className="text-lg font-medium text-ink">{serv.title}</h3>
                                <p className="mt-2 text-sm text-muted leading-relaxed">{serv.desc}</p>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
