import { generadorDeId } from "./ids";


export class Paciente {
  private idsPacientes: number[] = [];
  private id: number;
  private nombre: string;
  private especie: string;
  private idPropietario: number;


  constructor(id: number, nombre: string, especie: string, idPropietario: number) {
    this.id = generadorDeId(this.idsPacientes);
    this.nombre = nombre;
    this.especie = (especie === "perro" || especie === "gato") ? especie : "exótica";
    this.idPropietario = idPropietario;
  }

  public getIdsPacientes(): number[] {
    return this.idsPacientes;
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

  public getIdPropietario(): number {
    return this.idPropietario;
  }
  // Método para modificar los datos de la mascota
  modificar(nombre: string, especie: string): void {
    this.nombre = nombre;
    this.especie = (especie === "perro" || especie === "gato") ? especie : "exótica";
  }
}
