export class Computadora {
    cpu: string = "";
    ram: string = "";
    almacenamiento: string = "";
    grafica: string = "";
    sistemaOperativo: string = "";

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
