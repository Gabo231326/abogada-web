import "./globals.css";
import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Martina Mansilla Marcos | Abogada en Osorno",
  description:
    "Abogada en Osorno especializada en Derecho Penal, Familia, Migración y Civil. Atención en Región de Los Lagos y todo Chile.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}