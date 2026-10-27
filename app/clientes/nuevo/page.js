import Link from "next/link";
import { crearCliente } from "../actions";

export default function NuevoClientePage() {
  return (
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Nuevo cliente</h1>

      <form action={crearCliente} className="bg-white p-6 rounded shadow flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          Nombre
          <input name="nombre" required className="border rounded px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1">
          Apellido
          <input name="apellido" required className="border rounded px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1">
          DNI
          <input name="dni" required className="border rounded px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1">
          Email
          <input name="email" type="email" className="border rounded px-3 py-2" />
        </label>
        <label className="flex flex-col gap-1">
          Teléfono
          <input name="telefono" className="border rounded px-3 py-2" />
        </label>

        <div className="flex gap-3">
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
            GUARDAR
          </button>
          <Link href="/clientes" className="px-4 py-2 text-gray-700 hover:underline">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}
