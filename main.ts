import { Ensamblador } from "./Ensamblador";
import { PCBuilderBasica } from "./PCBuilderBasica";
import { PCBuilderGamer } from "./PCBuilderGamer";

const ensamblador = new Ensamblador();

// Construir PC Básica
const builderBasico = new PCBuilderBasica();
ensamblador.asignarBuilder(builderBasico);
ensamblador.ensamblarBasica();
const pcBasica = builderBasico.obtenerResultado();

console.log("PC Bási.mostrarConfig());

// Construir PC Gamer
const builderGamer = new PCBuilderGamer();
ensamblador.asignarBca:");
console.log(pcBasicauilder(builderGamer);
ensamblador.ensamblarGamer();
const pcGamer = builderGamer.obtenerResultado();

console.log("PC Gamer:");
console.log(pcGamer.mostrarConfig());
