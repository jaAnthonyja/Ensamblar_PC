"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ensamblador_1 = require("./Ensamblador");
const PCBuilderBasica_1 = require("./PCBuilderBasica");
const PCBuilderGamer_1 = require("./PCBuilderGamer");
const ensamblador = new Ensamblador_1.Ensamblador();
// --------------------------
// Construir PC Básica
// --------------------------
const builderBasico = new PCBuilderBasica_1.PCBuilderBasica();
ensamblador.asignarBuilder(builderBasico);
ensamblador.ensamblarBasica();
const pcBasica = builderBasico.obtenerResultado();
console.log("=== PC Básica ===");
console.log(pcBasica.mostrarConfig());
// --------------------------
// Construir PC Gamer
// --------------------------
const builderGamer = new PCBuilderGamer_1.PCBuilderGamer();
ensamblador.asignarBuilder(builderGamer);
ensamblador.ensamblarGamer();
const pcGamer = builderGamer.obtenerResultado();
console.log("=== PC Gamer ===");
console.log(pcGamer.mostrarConfig());
