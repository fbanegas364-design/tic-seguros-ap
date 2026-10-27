import Link from "next/link";
import { db } from "@/lib/db";
import { cancelarPoliza } from "./actions";

export const dynamic = "force-dynamic";

export default async function PolizasPage({ searchParams }) {
  const { q } = await searchParams;
  const busqueda = q ? `%${q}%` : "%";

  const resultado = await db.execute({
    sql: `SELECT p.id_poliza, p.numero_poliza, p.fecha_inicio, p.fecha_fin, p.estado,
                 c.apellido || ', ' || c.nombre AS cliente
          FROM poliza p
          JOIN cliente c ON c.id_cliente = p.id_cliente
          WHERE p.numero_poliza LIKE ? OR c.apellido LIKE ? OR c.nombre LIKE ?
          ORDER BY p.numero_poliza`,
    args: [busqueda, busqueda, busqueda],
  });
  const polizas = resultado.rows;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Pólizas</h1>
        <Link
          href="/polizas/nueva"
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          + Nueva póliza
        </Link>
      </div>

      <form className="mb-4 flex gap-2">
        <input
          type="text"
          name="q"
          defaultValue={q || ""}
          placeholder="Buscar por número o cliente"
          className="border rounded px-3 py-2 w-80 bg-white"
        />
        <button className="bg-gray-700 text-white px-4 py-2 rounded">Buscar</button>
      </form>

      <table className="w-full bg-white rounded shadow text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3">N° póliza</th>
            <th className="p-3">Cliente</th>
            <th className="p-3">Inicio</th>
            <th className="p-3">Vencimiento</th>
            <th className="p-3">Estado</th>
            <th className="p-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {polizas.map((p) => (
            <tr key={p.id_poliza} className="border-t">
              <td className="p-3">{p.numero_poliza}</td>
              <td className="p-3">{p.cliente}</td>
              <td className="p-3">{p.fecha_inicio}</td>
              <td className="p-3">{p.fecha_fin}</td>
              <td className="p-3">{p.estado}</td>
              <td className="p-3 flex gap-3 items-center">
                <Link href={`/polizas/${p.id_poliza}`} className="text-blue-700 hover:underline">
                  Editar
                </Link>
                {p.estado !== "CANCELADA" && (
                  <form action={cancelarPoliza}>
                    <input type="hidden" name="id_poliza" value={p.id_poliza} />
                    <button className="text-red-600 hover:underline">Cancelar</button>
                  </form>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {polizas.length === 0 && (
        <p className="mt-4 text-gray-600">No se encontraron pólizas.</p>
      )}
    </div>
  );
}
