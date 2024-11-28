import { generadorDeId } from "./ids";

export class Proveedor {
  private idsProveedores: number[] = [];
  private id: number;
  private nombre: string;
  private telefono: string;

  constructor(id: number, nombre: string, telefono: string) {
    this.id = generadorDeId(this.idsProveedores);
    this.nombre = nombre;
    this.telefono = telefono;
  }

  public getIdsProveedores(): number[] {
    return this.idsProveedores;
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