"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function Grafico({ titulo, datos, color }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-semibold mb-2">{titulo}</h2>
      <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer>
          <BarChart data={datos}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nombre" fontSize={11} />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="cantidad" fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
