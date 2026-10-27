import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Seguros de Accidentes Personales",
  description: "Sistema de gestión de seguros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">
        <nav className="bg-blue-800 text-white px-6 py-4 flex gap-6 items-center">
          <span className="font-bold text-lg">Seguros AP</span>
          <Link href="/" className="hover:underline">Inicio</Link>
          <Link href="/clientes" className="hover:underline">Clientes</Link>
          <Link href="/polizas" className="hover:underline">Pólizas</Link>
          <Link href="/siniestros" className="hover:underline">Siniestros</Link>
        </nav>
        <main className="max-w-5xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
