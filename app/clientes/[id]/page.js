import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { editarCliente } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditarClientePage({ params }) {
  const { id } = await params;

  const resultado = await db.execute({
    sql: "SELECT * FROM cliente WHERE id_cliente = ?",
    args: [id],
  });
  const c = resultado.rows[0];
  if (!c) notFound();

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Editar cliente</h1>

      <form action={editarCliente} className="bg-white p-6 rounded shadow flex flex-col gap-4">
        <input type="hidden" name="id_cliente" value={c.id_cliente} />
        <label className="flex flex-col gap-1">
          Nombre
          <input name="nombre" defaultValue={c.nombre} required className="border rounded px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1">
          Apellido
          <input name="apellido" defaultValue={c.apellido} required className="border rounded px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1">
          DNI
          <input name="dni" defaultValue={c.dni} required className="border rounded px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1">
          Email
          <input name="email" type="email" defaultValue={c.email || ""} className="border rounded px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1">
          Teléfono
          <input name="telefono" defaultValue={c.telefono || ""} className="border rounded px-3 py-2" />
        </label>

        <div className="flex gap-3">
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
            GUARDAR CAMBIOS
          </button>
          <Link href="/clientes" className="px-4 py-2 text-gray-700 hover:underline">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}
