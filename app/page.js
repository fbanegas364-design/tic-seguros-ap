import { db } from "@/lib/db";
import Grafico from "./Grafico";

export const dynamic = "force-dynamic";

async function contar(sql) {
  const r = await db.execute(sql);
  return Number(r.rows[0].n);
}

async function lista(sql) {
  const r = await db.execute(sql);
  return r.rows.map((f) => ({ nombre: String(f.nombre), cantidad: Number(f.cantidad) }));
}

export default async function Dashboard() {
  const clientes = await contar("SELECT COUNT(*) AS n FROM cliente");
  const polizasActivas = await contar("SELECT COUNT(*) AS n FROM poliza WHERE estado = 'ACTIVA'");
  const abiertos = await contar("SELECT COUNT(*) AS n FROM siniestro WHERE estado = 'ABIERTO'");
  const cerrados = await contar("SELECT COUNT(*) AS n FROM siniestro WHERE estado = 'CERRADO'");

  const porEstado = await lista("SELECT estado AS nombre, COUNT(*) AS cantidad FROM poliza GROUP BY estado");
  const porTipo = await lista("SELECT tipo AS nombre, COUNT(*) AS cantidad FROM siniestro GROUP BY tipo");
  const porMes = await lista("SELECT substr(fecha, 1, 7) AS nombre, COUNT(*) AS cantidad FROM siniestro GROUP BY substr(fecha, 1, 7) ORDER BY nombre");

  const tarjetas = [
    ["Clientes", clientes],
    ["Pólizas activas", polizasActivas],
    ["Siniestros abiertos", abiertos],
    ["Siniestros cerrados", cerrados],
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {tarjetas.map(([titulo, valor]) => (
          <div key={titulo} className="bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-600">{titulo}</p>
            <p className="text-3xl font-bold">{valor}</p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <Grafico titulo="Pólizas por estado" datos={porEstado} color="#1d4ed8" />
        <Grafico titulo="Siniestros por tipo" datos={porTipo} color="#dc2626" />
        <Grafico titulo="Siniestros por mes" datos={porMes} color="#059669" />
      </div>
    </div>
  );
}
