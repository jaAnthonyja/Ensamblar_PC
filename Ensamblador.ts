import { PCBuilder } from "./PCBuilder";

export class Ensamblador {
    private builder!: PCBuilder;

    asignarBuilder(builder: PCBuilder) {
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
