import { Cliente } from "./Cliente";

export class Paciente {
  private id: number;
  private nombre: string;
  private especie: string;
  private propietario: Cliente;

  constructor(id: number, nombre: string, especie: string, propietario: Cliente) {
    this.id = id; // El ID recibido como parámetro
    this.nombre = nombre;
    this.especie = (especie === "perro" || especie === "gato") ? especie : "exótica";
    this.propietario = propietario;
  }

  public getId(): number {
    return this.id;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getEspecie(): string {
    return this.especie;
  }

  public getPropietario(): Cliente {
    return this.propietario;
  }

  public modificar(nombre: string, especie: string): void {
    this.nombre = nombre;
    this.especie = (especie === "perro" || especie === "gato") ? especie : "exótica";
  }
}
