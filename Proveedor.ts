import { generadorDeId } from "./Ids";

export class Proveedor {
  private id: number;
  private nombre: string;
  private telefono: string;

  constructor(id: number, nombre: string, telefono: string) {
    this.id= id;
    this.nombre = nombre;
    this.telefono = telefono;
  }


  public getId(): number {
    return this.id;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getTelefono(): string {
    return this.telefono;
  }
  // Método para modificar los datos del proveedor
  modificar(nombre: string, telefono: string): void {
    this.nombre = nombre;
    this.telefono = telefono;
  }
}