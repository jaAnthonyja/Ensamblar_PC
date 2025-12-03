"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ensamblador = void 0;
class Ensamblador {
    asignarBuilder(builder) {
        this.builder = builder;
    }
    ensamblarBasica() {
        this.builder.reiniciar();
        this.builder.construirCPU();
        this.builder.construirRAM();
        this.builder.construirAlmacenamiento();
        this.builder.construirGrafica();
        this.builder.construirSO();
    }
    ensamblarGamer() {
        this.builder.reiniciar();
        this.builder.construirCPU();
        this.builder.construirRAM();
        this.builder.construirAlmacenamiento();
        this.builder.construirGrafica();
        this.builder.construirSO();
    }
}
exports.Ensamblador = Ensamblador;
