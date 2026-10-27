-- Script de creacion de tablas - seguros.db
PRAGMA foreign_keys = ON;

CREATE TABLE cliente (
    id_cliente  INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre      TEXT NOT NULL,
    apellido    TEXT NOT NULL,
    dni         TEXT UNIQUE NOT NULL,
    email       TEXT,
    telefono    TEXT,
    activo      INTEGER NOT NULL DEFAULT 1 CHECK (activo IN (0, 1))
);

CREATE TABLE poliza (
    id_poliza      INTEGER PRIMARY KEY AUTOINCREMENT,
    numero_poliza  TEXT UNIQUE NOT NULL,
    id_cliente     INTEGER NOT NULL,
    fecha_inicio   DATE NOT NULL,
    fecha_fin      DATE NOT NULL,
    estado         TEXT NOT NULL DEFAULT 'ACTIVA'
                   CHECK (estado IN ('ACTIVA', 'VENCIDA', 'CANCELADA')),
    CHECK (fecha_fin >= fecha_inicio),
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);

CREATE TABLE cobertura (
    id_cobertura  INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre        TEXT UNIQUE NOT NULL,
    descripcion   TEXT
);

CREATE TABLE poliza_cobertura (
    id_poliza        INTEGER NOT NULL,
    id_cobertura     INTEGER NOT NULL,
    suma_asegurada   REAL NOT NULL CHECK (suma_asegurada > 0),
    PRIMARY KEY (id_poliza, id_cobertura),
    FOREIGN KEY (id_poliza)    REFERENCES poliza(id_poliza),
    FOREIGN KEY (id_cobertura) REFERENCES cobertura(id_cobertura)
);

CREATE TABLE pago (
    id_pago    INTEGER PRIMARY KEY AUTOINCREMENT,
    id_poliza  INTEGER NOT NULL,
    fecha      DATE NOT NULL,
    importe    REAL NOT NULL CHECK (importe > 0),
    estado     TEXT NOT NULL DEFAULT 'PAGADO'
               CHECK (estado IN ('PAGADO', 'PENDIENTE')),
    FOREIGN KEY (id_poliza) REFERENCES poliza(id_poliza)
);

CREATE TABLE siniestro (
    id_siniestro  INTEGER PRIMARY KEY AUTOINCREMENT,
    id_poliza     INTEGER NOT NULL,
    fecha         DATE NOT NULL,
    tipo          TEXT NOT NULL
                  CHECK (tipo IN ('FRACTURA', 'ESGUINCE', 'CAIDA',
                                  'ACCIDENTE_TRANSITO', 'LESION_DEPORTIVA')),
    descripcion   TEXT,
    estado        TEXT NOT NULL DEFAULT 'ABIERTO'
                  CHECK (estado IN ('ABIERTO', 'EN_REVISION', 'CERRADO')),
    FOREIGN KEY (id_poliza) REFERENCES poliza(id_poliza)
);

CREATE INDEX idx_poliza_cliente ON poliza(id_cliente);
CREATE INDEX idx_pago_poliza ON pago(id_poliza);
CREATE INDEX idx_siniestro_poliza ON siniestro(id_poliza);
