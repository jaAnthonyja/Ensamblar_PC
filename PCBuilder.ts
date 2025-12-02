import { Computadora } from "./Computadora";

export interface PCBuilder {
    reiniciar(): void;
    construirCPU(): void;
    construirRAM(): void;
    construirAlmacenamiento(): void;
    construirGrafica(): void;
    construirSO(): void;
    obtenerResultado(): Computadora;
}
