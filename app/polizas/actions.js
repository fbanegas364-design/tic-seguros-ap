"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function crearPoliza(formData) {
  await db.execute({
    sql: "INSERT INTO poliza (numero_poliza, id_cliente, fecha_inicio, fecha_fin, estado) VALUES (?, ?, ?, ?, ?)",
    args: [
      formData.get("numero_poliza"),
      formData.get("id_cliente"),
      formData.get("fecha_inicio"),
      formData.get("fecha_fin"),
      formData.get("estado"),
    ],
  });

  revalidatePath("/polizas");
  redirect("/polizas");
}

export async function editarPoliza(formData) {
  await db.execute({
    sql: "UPDATE poliza SET numero_poliza = ?, id_cliente = ?, fecha_inicio = ?, fecha_fin = ?, estado = ? WHERE id_poliza = ?",
    args: [
      formData.get("numero_poliza"),
      formData.get("id_cliente"),
      formData.get("fecha_inicio"),
      formData.get("fecha_fin"),
      formData.get("estado"),
      formData.get("id_poliza"),
    ],
  });

  revalidatePath("/polizas");
  redirect("/polizas");
}

export async function cancelarPoliza(formData) {
  await db.execute({
    sql: "UPDATE poliza SET estado = 'CANCELADA' WHERE id_poliza = ?",
    args: [formData.get("id_poliza")],
  });

  revalidatePath("/polizas");
}
