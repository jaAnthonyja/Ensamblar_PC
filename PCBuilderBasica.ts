import { PCBuilder } from "./PCBuilder";
import { Computadora } from "./Computadora";

export class PCBuilderBasica implements PCBuilder {
    private pc: Computadora;

    constructor() {
        this.pc = new Computadora();
    }

    reiniciar(): void {
        this.pc = new Computadora();
    }

    construirCPU(): void {
        this.pc.cpu = "Intel i3";
    }

    construirRAM(): void {
        this.pc.ram = "8GB DDR4";
    }

    construirAlmacenamiento(): void {
        this.pc.almacenamiento = "SSD 240GB";
    }

    construirGrafica(): void {
        this.pc.grafica = "Integrada Intel UHD";
    }

    construirSO(): void {
        this.pc.sistemaOperativo = "Windows 10 Home";
    }

    obtenerResultado(): Computadora {
        return this.pc;
    }
}
