import { PCBuilder } from "./PCBuilder";
import { Computadora } from "./Computadora";

export class PCBuilderGamer implements PCBuilder {
    private pc: Computadora;

    constructor() {
        this.pc = new Computadora();
    }

    reiniciar(): void {
        this.pc = new Computadora();
    }

    construirCPU(): void {
        this.pc.cpu = "AMD Ryzen 7";
    }

    construirRAM(): void {
        this.pc.ram = "32GB DDR5";
    }

    construirAlmacenamiento(): void {
        this.pc.almacenamiento = "SSD NVMe 1TB";
    }

    construirGrafica(): void {
        this.pc.grafica = "NVIDIA RTX 4070";
    }

    construirSO(): void {
        this.pc.sistemaOperativo = "Windows 11 Pro";
    }

    obtenerResultado(): Computadora {
        return this.pc;
    }
}
