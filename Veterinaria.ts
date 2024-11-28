import { RedVeterinarias } from "./RedDeVeterinarias";
import { generadorDeId } from "./ids";


export class Veterinaria {
  protected idsVeterinarias: number[] = [];
  protected id: number;
  protected nombre: string;
  protected direccion: string;

  constructor(id: number, nombre: string, direccion: string) {
    this.id = generadorDeId(this.idsVeterinarias);
    this.nombre = nombre;
    this.direccion = direccion;
  }

  public getIdsVeterinarias(): number[] {
    return this.idsVeterinarias;
  }


  public getId(): number {
    return this.id;
  }

  public getNombre(): string {
    return this.nombre;
  }


  public getDireccion(): string {
    return this.direccion;
  }

  // Método para modificar los datos de la sucursal
  modificar(nombre: string, direccion: string): void {
    this.nombre = nombre;
    this.direccion = direccion;
  }
}