"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PCBuilderBasica = void 0;
const Computadora_1 = require("./Computadora");
class PCBuilderBasica {
    constructor() {
        this.pc = new Computadora_1.Computadora();
    }
    reiniciar() {
        this.pc = new Computadora_1.Computadora();
    }
    construirCPU() {
        this.pc.cpu = "Intel i3";
    }
    construirRAM() {
        this.pc.ram = "8GB DDR4";
    }
    construirAlmacenamiento() {
        this.pc.almacenamiento = "SSD 240GB";
    }
    construirGrafica() {
        this.pc.grafica = "Integrada Intel UHD";
    }
    construirSO() {
        this.pc.sistemaOperativo = "Windows 10 Home";
    }
    obtenerResultado() {
        return this.pc;
    }
}
exports.PCBuilderBasica = PCBuilderBasica;
