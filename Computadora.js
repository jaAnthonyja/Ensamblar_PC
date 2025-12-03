"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computadora = void 0;
class Computadora {
    constructor() {
        this.cpu = "";
        this.ram = "";
        this.almacenamiento = "";
        this.grafica = "";
        this.sistemaOperativo = "";
    }
    mostrarConfig() {
        return `
        CPU: ${this.cpu}
        RAM: ${this.ram}
        Almacenamiento: ${this.almacenamiento}
        Gráfica: ${this.grafica}
        Sistema Operativo: ${this.sistemaOperativo}
        `;
    }
}
exports.Computadora = Computadora;
