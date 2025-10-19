import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ana Luiza — Psicóloga | Gestalt-terapia Online",
  description: "Psicóloga CRP 05/75904 especializada em Gestalt-terapia. Atendimento online com acolhimento, escuta qualificada e cuidado baseado em evidências para seu bem-estar emocional.",
  keywords: "psicóloga, gestalt-terapia, atendimento online, psicologia clínica, CRP 05/75904",
  authors: [{ name: "Ana Luiza" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Ana Luiza — Psicóloga | Gestalt-terapia Online",
    description: "Psicóloga CRP 05/75904 especializada em Gestalt-terapia. Atendimento online com acolhimento e escuta qualificada.",
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
