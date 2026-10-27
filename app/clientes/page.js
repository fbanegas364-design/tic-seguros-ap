import Link from "next/link";
import { db } from "@/lib/db";
import { cambiarEstadoCliente } from "./actions";

export const dynamic = "force-dynamic";

export default async function ClientesPage({ searchParams }) {
  const { q } = await searchParams;
  const busqueda = q ? `%${q}%` : "%";

  const resultado = await db.execute({
    sql: `SELECT * FROM cliente
          WHERE nombre LIKE ? OR apellido LIKE ? OR dni LIKE ?
          ORDER BY apellido, nombre`,
    args: [busqueda, busqueda, busqueda],
  });
  const clientes = resultado.rows;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Clientes</h1>
        <Link
          href="/clientes/nuevo"
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          + Nuevo cliente
        </Link>
      </div>

      <form className="mb-4 flex gap-2">
        <input
          type="text"
          name="q"
          defaultValue={q || ""}
          placeholder="Buscar por nombre, apellido o DNI"
          className="border rounded px-3 py-2 w-80 bg-white"
        />
        <button className="bg-gray-700 text-white px-4 py-2 rounded">
          Buscar
        </button>
      </form>

      <table className="w-full bg-white rounded shadow text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3">Apellido</th>
            <th className="p-3">Nombre</th>
            <th className="p-3">DNI</th>
            <th className="p-3">Email</th>
            <th className="p-3">Teléfono</th>
            <th className="p-3">Estado</th>
            <th className="p-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((c) => (
            <tr key={c.id_cliente} className="border-t">
              <td className="p-3">{c.apellido}</td>
              <td className="p-3">{c.nombre}</td>
              <td className="p-3">{c.dni}</td>
              <td className="p-3">{c.email}</td>
              <td className="p-3">{c.telefono}</td>
              <td className="p-3">{c.activo === 1 ? "Activo" : "Baja"}</td>
              <td className="p-3 flex gap-3 items-center">
                <Link
                  href={`/clientes/${c.id_cliente}`}
                  className="text-blue-700 hover:underline"
                >
                  Editar
                </Link>
                <form action={cambiarEstadoCliente}>
                  <input type="hidden" name="id_cliente" value={c.id_cliente} />
                  <input
                    type="hidden"
                    name="activo"
                    value={c.activo === 1 ? 0 : 1}
                  />
                  <button className="text-red-600 hover:underline">
                    {c.activo === 1 ? "Dar de baja" : "Reactivar"}
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {clientes.length === 0 && (
        <p className="mt-4 text-gray-600">No se encontraron clientes.</p>
      )}
    </div>
  );
}
