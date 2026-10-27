"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function crearCliente(formData) {
  const nombre = formData.get("nombre");
  const apellido = formData.get("apellido");
  const dni = formData.get("dni");
  const email = formData.get("email");
  const telefono = formData.get("telefono");

  await db.execute({
    sql: "INSERT INTO cliente (nombre, apellido, dni, email, telefono) VALUES (?, ?, ?, ?, ?)",
    args: [nombre, apellido, dni, email, telefono],
  });

  revalidatePath("/clientes");
  redirect("/clientes");
}

export async function editarCliente(formData) {
  const id = formData.get("id_cliente");
  const nombre = formData.get("nombre");
  const apellido = formData.get("apellido");
  const dni = formData.get("dni");
  const email = formData.get("email");
  const telefono = formData.get("telefono");

  await db.execute({
    sql: "UPDATE cliente SET nombre = ?, apellido = ?, dni = ?, email = ?, telefono = ? WHERE id_cliente = ?",
    args: [nombre, apellido, dni, email, telefono, id],
  });

  revalidatePath("/clientes");
  redirect("/clientes");
}

export async function cambiarEstadoCliente(formData) {
  const id = formData.get("id_cliente");
  const activo = formData.get("activo");

  await db.execute({
    sql: "UPDATE cliente SET activo = ? WHERE id_cliente = ?",
    args: [activo, id],
  });

  revalidatePath("/clientes");
}
