import Link from "next/link";
import { db } from "@/lib/db";
import { crearPoliza } from "../actions";

export const dynamic = "force-dynamic";

export default async function NuevaPolizaPage() {
  const resultado = await db.execute(
    "SELECT id_cliente, apellido, nombre, dni FROM cliente WHERE activo = 1 ORDER BY apellido, nombre"
  );
  const clientes = resultado.rows;

  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Nueva póliza</h1>

      <form action={crearPoliza} className="bg-white p-6 rounded shadow flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          Número de póliza
          <input name="numero_poliza" placeholder="POL-2026-0011" required className="border rounded px-3 py-2" />
        </label>

        <label className="flex flex-col gap-1">
          Cliente
          <select name="id_cliente" required className="border rounded px-3 py-2">
            <option value="">Seleccioná un cliente</option>
            {clientes.map((c) => (
              <option key={c.id_cliente} value={c.id_cliente}>
                {c.apellido}, {c.nombre} (DNI {c.dni})
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1">
          Fecha de inicio
          <input name="fecha_inicio" type="date" required className="border rounded px-3 py-2" />
        </label>

        <label className="flex flex-col gap-1">
          Fecha de vencimiento
          <input name="fecha_fin" type="date" required className="border rounded px-3 py-2" />
        </label>

        <label className="flex flex-col gap-1">
          Estado
          <select name="estado" defaultValue="ACTIVA" className="border rounded px-3 py-2">
            <option value="ACTIVA">ACTIVA</option>
            <option value="VENCIDA">VENCIDA</option>
            <option value="CANCELADA">CANCELADA</option>
          </select>
        </label>

        <div className="flex gap-3">
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
            GUARDAR
          </button>
          <Link href="/polizas" className="px-4 py-2 text-gray-700 hover:underline">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}
