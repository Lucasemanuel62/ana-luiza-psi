"use client";
import React from "react";
import Image from "next/image";

export default function Services() {
    const services = [
        {
            title: "Psicoterapia Individual",
            desc: "Espaço de acolhimento para autoconhecimento, manejo emocional e saúde mental.",
            img: "/images/terapia-individual1.png",
            alt: "Psicoterapia Individual",
        },
        {
            title: "Terapia de Casal",
            desc: "Atendimento focado na comunicação, fortalecimento do vínculo e resolução de conflitos.",
            img: "/images/terapia-casal.png",
            alt: "Terapia de Casal",
        },
        {
            title: "Atendimento Online",
            desc: "Sessões por vídeo com sigilo, conforto e a mesma qualidade do presencial.",
            img: "/images/terapia-online.png",
            alt: "Atendimento Online",
        },
        {
            title: "Orientação Profissional",
            desc: "Apoio nas escolhas de carreira, propósito e transições no mundo do trabalho.",
            img: "/images/orientacao-profissional.png",
            alt: "Orientação Profissional",
        },
    ];

    return (
        <section id="servicos" className="bg-[#F7F4E9] py-16 md:py-20">
            <div className="max-w-screen-xl mx-auto px-6">
                <h2 className="text-4xl font-semibold text-neutral-900">Serviços</h2>
                <p className="mt-2 text-neutral-600">
                    Acolhimento psicológico com ética, empatia e cuidado com sua história.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((serv) => (
                        <div
                            key={serv.title}
                            className="flex flex-col text-center items-center p-6 border border-neutral-200 rounded-xl bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                        >
                            <Image
                                src={serv.img}
                                alt={serv.alt}
                                width={160}
                                height={160}
                                className="object-contain rounded-md"
                                priority={false}
                            />
                            <h3 className="text-lg font-medium text-neutral-900">{serv.title}</h3>
                            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{serv.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

