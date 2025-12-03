"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PCBuilderGamer = void 0;
const Computadora_1 = require("./Computadora");
class PCBuilderGamer {
    constructor() {
        this.pc = new Computadora_1.Computadora();
    }
    reiniciar() {
        this.pc = new Computadora_1.Computadora();
    }
    construirCPU() {
        this.pc.cpu = "AMD Ryzen 7";
    }
    construirRAM() {
        this.pc.ram = "32GB DDR5";
    }
    construirAlmacenamiento() {
        this.pc.almacenamiento = "SSD NVMe 1TB";
    }
    construirGrafica() {
        this.pc.grafica = "NVIDIA RTX 4070";
    }
    construirSO() {
        this.pc.sistemaOperativo = "Windows 11 Pro";
    }
    obtenerResultado() {
        return this.pc;
    }
}
exports.PCBuilderGamer = PCBuilderGamer;
