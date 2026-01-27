import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ana Luiza — Psicóloga | Gestalt-terapia Online",
  description:
    "Psicóloga CRP 00/0000 especializada em Gestalt-terapia. Atendimento online com acolhimento, escuta qualificada e cuidado baseado em evidências para seu bem-estar emocional.",
  keywords:
    "psicóloga, gestalt-terapia, atendimento online, psicologia clínica, CRP 00/0000",
  authors: [{ name: "Ana Luiza" }],
  icons: {
    // O Next usa automaticamente src/app/icon.png e apple-icon.png, mas mantemos referências com versionamento para bust de cache
    icon: "/images/logo-ana-luiza1.png?v=2",
    shortcut: "/images/logo-ana-luiza1.png?v=2",
    apple: "/images/logo-ana-luiza1.png?v=2",
  },
  openGraph: {
    title: "Ana Luiza — Psicóloga | Gestalt-terapia Online",
    description:
      "Psicóloga CRP 00/0000 especializada em Gestalt-terapia. Atendimento online com acolhimento e escuta qualificada.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
