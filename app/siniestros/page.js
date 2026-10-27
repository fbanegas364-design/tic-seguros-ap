import Link from "next/link";
import { db } from "@/lib/db";
import { cerrarSiniestro } from "./actions";

export const dynamic = "force-dynamic";

export default async function SiniestrosPage({ searchParams }) {
  const { q } = await searchParams;
  const busqueda = q ? `%${q}%` : "%";

  const resultado = await db.execute({
    sql: `SELECT s.id_siniestro, s.fecha, s.tipo, s.descripcion, s.estado,
                 p.numero_poliza,
                 c.apellido || ', ' || c.nombre AS cliente
          FROM siniestro s
          JOIN poliza p ON p.id_poliza = s.id_poliza
          JOIN cliente c ON c.id_cliente = p.id_cliente
          WHERE p.numero_poliza LIKE ? OR c.apellido LIKE ? OR s.tipo LIKE ?
          ORDER BY s.fecha DESC`,
    args: [busqueda, busqueda, busqueda],
  });
  const siniestros = resultado.rows;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Siniestros</h1>
        <Link
          href="/siniestros/nuevo"
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          + Nuevo siniestro
        </Link>
      </div>

      <form className="mb-4 flex gap-2">
        <input
          type="text"
          name="q"
          defaultValue={q || ""}
          placeholder="Buscar por póliza, cliente o tipo"
          className="border rounded px-3 py-2 w-80 bg-white"
        />
        <button className="bg-gray-700 text-white px-4 py-2 rounded">Buscar</button>
      </form>

      <table className="w-full bg-white rounded shadow text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3">Fecha</th>
            <th className="p-3">Póliza</th>
            <th className="p-3">Cliente</th>
            <th className="p-3">Tipo</th>
            <th className="p-3">Descripción</th>
            <th className="p-3">Estado</th>
            <th className="p-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {siniestros.map((s) => (
            <tr key={s.id_siniestro} className="border-t">
              <td className="p-3">{s.fecha}</td>
              <td className="p-3">{s.numero_poliza}</td>
              <td className="p-3">{s.cliente}</td>
              <td className="p-3">{s.tipo}</td>
              <td className="p-3">{s.descripcion}</td>
              <td className="p-3">{s.estado}</td>
              <td className="p-3 flex gap-3 items-center">
                <Link href={`/siniestros/${s.id_siniestro}`} className="text-blue-700 hover:underline">
                  Editar
                </Link>
                {s.estado !== "CERRADO" && (
                  <form action={cerrarSiniestro}>
                    <input type="hidden" name="id_siniestro" value={s.id_siniestro} />
                    <button className="text-red-600 hover:underline">Cerrar</button>
                  </form>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {siniestros.length === 0 && (
        <p className="mt-4 text-gray-600">No se encontraron siniestros.</p>
      )}
    </div>
  );
}
