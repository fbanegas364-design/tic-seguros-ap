-- Consultas SQL - seguros.db

-- 1. Mostrar todos los clientes
SELECT * FROM cliente;

-- 2. Clientes ordenados alfabeticamente por apellido
SELECT * FROM cliente ORDER BY apellido, nombre;

-- 3. Clientes cuyo apellido comienza con A
SELECT * FROM cliente WHERE apellido LIKE 'A%';

-- 4. Buscar una poliza por numero
SELECT * FROM poliza WHERE numero_poliza = 'POL-2026-0001';

-- 5. Cantidad de clientes
SELECT COUNT(*) AS total_clientes FROM cliente;

-- 6. Cantidad de polizas activas
SELECT COUNT(*) AS polizas_activas FROM poliza WHERE estado = 'ACTIVA';

-- 7. Cantidad de siniestros
SELECT COUNT(*) AS total_siniestros FROM siniestro;

-- 8. Promedio de pagos
SELECT ROUND(AVG(importe), 2) AS promedio_pagos FROM pago;

-- JOIN 1: Cliente + Poliza
SELECT c.apellido, c.nombre, p.numero_poliza, p.fecha_inicio, p.fecha_fin, p.estado
FROM cliente c
JOIN poliza p ON p.id_cliente = c.id_cliente
ORDER BY c.apellido;

-- JOIN 2: Poliza + Siniestro
SELECT p.numero_poliza, s.fecha, s.tipo, s.descripcion, s.estado AS estado_siniestro
FROM poliza p
JOIN siniestro s ON s.id_poliza = p.id_poliza
ORDER BY s.fecha DESC;

-- JOIN 3: Cliente + Poliza + Siniestro
SELECT c.apellido, c.nombre, p.numero_poliza, s.fecha, s.tipo, s.estado AS estado_siniestro
FROM cliente c
JOIN poliza p ON p.id_cliente = c.id_cliente
JOIN siniestro s ON s.id_poliza = p.id_poliza
ORDER BY c.apellido, s.fecha;
