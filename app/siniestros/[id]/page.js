import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { editarSiniestro } from "../actions";

export const dynamic = "force-dynamic";

export default async function EditarSiniestroPage({ params }) {
  const { id } = await params;
  const r = await db.execute({ sql: "SELECT * FROM siniestro WHERE id_siniestro = ?", args: [id] });
  const s = r.rows[0];
  if (!s) notFound();

  const pr = await db.execute(
    `SELECT p.id_poliza, p.numero_poliza, c.apellido || ', ' || c.nombre AS cliente
     FROM poliza p JOIN cliente c ON c.id_cliente = p.id_cliente
     ORDER BY p.numero_poliza`
  );
  const polizas = pr.rows;

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Editar siniestro</h1>
      <form action={editarSiniestro} className="bg-white p-6 rounded shadow flex flex-col gap-4">
        <input type="hidden" name="id_siniestro" value={s.id_siniestro} />
        <label className="flex flex-col gap-1">
          Póliza
          <select name="id_poliza" defaultValue={s.id_poliza} className="border rounded px-3 py-2">
            {polizas.map((p) => (
              <option key={p.id_poliza} value={p.id_poliza}>
                {p.numero_poliza} - {p.cliente}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          Fecha
          <input name="fecha" type="date" defaultValue={s.fecha} required className="border rounded px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1">
          Tipo
          <select name="tipo" defaultValue={s.tipo} className="border rounded px-3 py-2">
            <option>FRACTURA</option>
            <option>ESGUINCE</option>
            <option>CAIDA</option>
            <option>ACCIDENTE_TRANSITO</option>
            <option>LESION_DEPORTIVA</option>
          </select>
        </label>
        <label className="flex flex-col gap-1">
          Descripción
          <textarea name="descripcion" defaultValue={s.descripcion || ""} className="border rounded px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1">
          Estado
          <select name="estado" defaultValue={s.estado} className="border rounded px-3 py-2">
            <option>ABIERTO</option>
            <option>EN_REVISION</option>
            <option>CERRADO</option>
          </select>
        </label>
        <div className="flex gap-3">
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">GUARDAR CAMBIOS</button>
          <Link href="/siniestros" className="px-4 py-2 text-gray-700 hover:underline">Cancelar</Link>
        </div>
      </form>
    </div>
  );
}
