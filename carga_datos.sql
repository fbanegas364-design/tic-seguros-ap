-- Script de carga de datos - seguros.db
PRAGMA foreign_keys = ON;

-- cliente (10 filas)
INSERT INTO cliente (id_cliente, nombre, apellido, dni, email, telefono, activo) VALUES (1, 'Lucía', 'Almada', '30123456', 'lucia.almada@mail.com', '11 5555-0101', 1);
INSERT INTO cliente (id_cliente, nombre, apellido, dni, email, telefono, activo) VALUES (2, 'Martín', 'Benítez', '28456789', 'martin.benitez@mail.com', '11 5555-0102', 1);
INSERT INTO cliente (id_cliente, nombre, apellido, dni, email, telefono, activo) VALUES (3, 'Carolina', 'Acosta', '33789012', 'caro.acosta@mail.com', '11 5555-0103', 1);
INSERT INTO cliente (id_cliente, nombre, apellido, dni, email, telefono, activo) VALUES (4, 'Federico', 'Domínguez', '27345678', 'fede.dominguez@mail.com', '11 5555-0104', 1);
INSERT INTO cliente (id_cliente, nombre, apellido, dni, email, telefono, activo) VALUES (5, 'Valeria', 'Ferreyra', '35234567', 'vale.ferreyra@mail.com', '11 5555-0105', 1);
INSERT INTO cliente (id_cliente, nombre, apellido, dni, email, telefono, activo) VALUES (6, 'Nicolás', 'Gómez', '31567890', 'nico.gomez@mail.com', '11 5555-0106', 1);
INSERT INTO cliente (id_cliente, nombre, apellido, dni, email, telefono, activo) VALUES (7, 'Sofía', 'Herrera', '36890123', 'sofia.herrera@mail.com', '11 5555-0107', 0);
INSERT INTO cliente (id_cliente, nombre, apellido, dni, email, telefono, activo) VALUES (8, 'Gonzalo', 'López', '29012345', 'gonzalo.lopez@mail.com', '11 5555-0108', 1);
INSERT INTO cliente (id_cliente, nombre, apellido, dni, email, telefono, activo) VALUES (9, 'Camila', 'Moreno', '38123456', 'camila.moreno@mail.com', '11 5555-0109', 1);
INSERT INTO cliente (id_cliente, nombre, apellido, dni, email, telefono, activo) VALUES (10, 'Joaquín', 'Pereyra', '34456789', 'joaquin.pereyra@mail.com', '11 5555-0110', 1);

-- cobertura (5 filas)
INSERT INTO cobertura (id_cobertura, nombre, descripcion) VALUES (1, 'Muerte accidental', 'Indemnización a los beneficiarios por fallecimiento a causa de un accidente');
INSERT INTO cobertura (id_cobertura, nombre, descripcion) VALUES (2, 'Invalidez permanente', 'Indemnización por pérdida total o parcial y permanente de capacidad física');
INSERT INTO cobertura (id_cobertura, nombre, descripcion) VALUES (3, 'Asistencia médica', 'Gastos médico-farmacéuticos derivados de un accidente');
INSERT INTO cobertura (id_cobertura, nombre, descripcion) VALUES (4, 'Gastos de sepelio', 'Reintegro de gastos de servicio de sepelio');
INSERT INTO cobertura (id_cobertura, nombre, descripcion) VALUES (5, 'Renta diaria por internación', 'Monto diario durante la internación por accidente');

-- poliza (10 filas)
INSERT INTO poliza (id_poliza, numero_poliza, id_cliente, fecha_inicio, fecha_fin, estado) VALUES (1, 'POL-2026-0001', 1, '2026-01-01', '2026-12-31', 'ACTIVA');
INSERT INTO poliza (id_poliza, numero_poliza, id_cliente, fecha_inicio, fecha_fin, estado) VALUES (2, 'POL-2026-0002', 2, '2026-02-01', '2027-01-31', 'ACTIVA');
INSERT INTO poliza (id_poliza, numero_poliza, id_cliente, fecha_inicio, fecha_fin, estado) VALUES (3, 'POL-2026-0003', 3, '2026-03-15', '2027-03-14', 'ACTIVA');
INSERT INTO poliza (id_poliza, numero_poliza, id_cliente, fecha_inicio, fecha_fin, estado) VALUES (4, 'POL-2025-0004', 4, '2025-06-01', '2026-05-31', 'VENCIDA');
INSERT INTO poliza (id_poliza, numero_poliza, id_cliente, fecha_inicio, fecha_fin, estado) VALUES (5, 'POL-2025-0005', 5, '2025-09-01', '2026-08-31', 'VENCIDA');
INSERT INTO poliza (id_poliza, numero_poliza, id_cliente, fecha_inicio, fecha_fin, estado) VALUES (6, 'POL-2026-0006', 6, '2026-04-01', '2027-03-31', 'ACTIVA');
INSERT INTO poliza (id_poliza, numero_poliza, id_cliente, fecha_inicio, fecha_fin, estado) VALUES (7, 'POL-2026-0007', 7, '2026-05-10', '2027-05-09', 'CANCELADA');
INSERT INTO poliza (id_poliza, numero_poliza, id_cliente, fecha_inicio, fecha_fin, estado) VALUES (8, 'POL-2026-0008', 8, '2026-06-01', '2027-05-31', 'ACTIVA');
INSERT INTO poliza (id_poliza, numero_poliza, id_cliente, fecha_inicio, fecha_fin, estado) VALUES (9, 'POL-2026-0009', 9, '2026-07-01', '2027-06-30', 'ACTIVA');
INSERT INTO poliza (id_poliza, numero_poliza, id_cliente, fecha_inicio, fecha_fin, estado) VALUES (10, 'POL-2026-0010', 10, '2026-08-01', '2027-07-31', 'ACTIVA');

-- poliza_cobertura (24 filas)
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (1, 1, 5000000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (1, 2, 5000000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (1, 3, 500000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (2, 1, 3000000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (2, 3, 300000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (3, 1, 4000000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (3, 2, 4000000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (3, 4, 200000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (4, 2, 2500000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (4, 3, 250000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (5, 1, 3000000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (5, 5, 8000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (6, 1, 6000000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (6, 2, 6000000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (6, 3, 600000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (7, 1, 2000000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (7, 4, 150000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (8, 2, 3500000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (8, 3, 350000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (9, 1, 4500000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (9, 3, 450000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (9, 5, 10000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (10, 1, 5500000.0);
INSERT INTO poliza_cobertura (id_poliza, id_cobertura, suma_asegurada) VALUES (10, 2, 5500000.0);

-- pago (15 filas)
INSERT INTO pago (id_pago, id_poliza, fecha, importe, estado) VALUES (1, 1, '2026-01-05', 18500.0, 'PAGADO');
INSERT INTO pago (id_pago, id_poliza, fecha, importe, estado) VALUES (2, 1, '2026-02-05', 18500.0, 'PAGADO');
INSERT INTO pago (id_pago, id_poliza, fecha, importe, estado) VALUES (3, 1, '2026-03-05', 18500.0, 'PAGADO');
INSERT INTO pago (id_pago, id_poliza, fecha, importe, estado) VALUES (4, 2, '2026-02-03', 12000.0, 'PAGADO');
INSERT INTO pago (id_pago, id_poliza, fecha, importe, estado) VALUES (5, 2, '2026-03-03', 12000.0, 'PENDIENTE');
INSERT INTO pago (id_pago, id_poliza, fecha, importe, estado) VALUES (6, 3, '2026-03-16', 15800.0, 'PAGADO');
INSERT INTO pago (id_pago, id_poliza, fecha, importe, estado) VALUES (7, 4, '2025-06-02', 14200.0, 'PAGADO');
INSERT INTO pago (id_pago, id_poliza, fecha, importe, estado) VALUES (8, 4, '2025-12-01', 14200.0, 'PAGADO');
INSERT INTO pago (id_pago, id_poliza, fecha, importe, estado) VALUES (9, 5, '2025-09-02', 11000.0, 'PAGADO');
INSERT INTO pago (id_pago, id_poliza, fecha, importe, estado) VALUES (10, 6, '2026-04-02', 22500.0, 'PAGADO');
INSERT INTO pago (id_pago, id_poliza, fecha, importe, estado) VALUES (11, 6, '2026-05-04', 22500.0, 'PAGADO');
INSERT INTO pago (id_pago, id_poliza, fecha, importe, estado) VALUES (12, 7, '2026-05-11', 9800.0, 'PAGADO');
INSERT INTO pago (id_pago, id_poliza, fecha, importe, estado) VALUES (13, 8, '2026-06-02', 16300.0, 'PAGADO');
INSERT INTO pago (id_pago, id_poliza, fecha, importe, estado) VALUES (14, 9, '2026-07-02', 19900.0, 'PAGADO');
INSERT INTO pago (id_pago, id_poliza, fecha, importe, estado) VALUES (15, 10, '2026-08-03', 24000.0, 'PENDIENTE');

-- siniestro (10 filas)
INSERT INTO siniestro (id_siniestro, id_poliza, fecha, tipo, descripcion, estado) VALUES (1, 1, '2026-02-14', 'CAIDA', 'Caída en la vía pública con golpe en la rodilla', 'CERRADO');
INSERT INTO siniestro (id_siniestro, id_poliza, fecha, tipo, descripcion, estado) VALUES (2, 1, '2026-06-20', 'ESGUINCE', 'Esguince de tobillo al bajar una escalera', 'ABIERTO');
INSERT INTO siniestro (id_siniestro, id_poliza, fecha, tipo, descripcion, estado) VALUES (3, 2, '2026-04-08', 'FRACTURA', 'Fractura de muñeca izquierda por caída en bicicleta', 'EN_REVISION');
INSERT INTO siniestro (id_siniestro, id_poliza, fecha, tipo, descripcion, estado) VALUES (4, 3, '2026-05-22', 'ACCIDENTE_TRANSITO', 'Colisión leve en moto con lesiones en el hombro', 'CERRADO');
INSERT INTO siniestro (id_siniestro, id_poliza, fecha, tipo, descripcion, estado) VALUES (5, 4, '2025-10-11', 'LESION_DEPORTIVA', 'Rotura de fibras en partido de fútbol amateur', 'CERRADO');
INSERT INTO siniestro (id_siniestro, id_poliza, fecha, tipo, descripcion, estado) VALUES (6, 5, '2026-02-03', 'CAIDA', 'Caída en el hogar con traumatismo de cadera', 'CERRADO');
INSERT INTO siniestro (id_siniestro, id_poliza, fecha, tipo, descripcion, estado) VALUES (7, 6, '2026-07-15', 'ESGUINCE', 'Esguince de rodilla durante actividad recreativa', 'ABIERTO');
INSERT INTO siniestro (id_siniestro, id_poliza, fecha, tipo, descripcion, estado) VALUES (8, 8, '2026-09-09', 'FRACTURA', 'Fractura de clavícula por caída en patio', 'ABIERTO');
INSERT INTO siniestro (id_siniestro, id_poliza, fecha, tipo, descripcion, estado) VALUES (9, 9, '2026-09-28', 'ACCIDENTE_TRANSITO', 'Atropello con contusiones múltiples', 'EN_REVISION');
INSERT INTO siniestro (id_siniestro, id_poliza, fecha, tipo, descripcion, estado) VALUES (10, 10, '2026-10-05', 'LESION_DEPORTIVA', 'Luxación de hombro jugando al rugby', 'ABIERTO');

