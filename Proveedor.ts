import { generadorDeId } from "./ids";



export class Proveedor {
    idsProveedores: number[] = [];
    private id: number;
    private nombre: string;
    private telefono: string;
  
    constructor(id:number, nombre: string, telefono: string) {
      this.id = generadorDeId(this.idsProveedores);
      this.nombre = nombre;
      this.telefono = telefono;
    }
  
    // Método para modificar los datos del proveedor
    modificar(nombre: string, telefono: string): void {
      this.nombre = nombre;
      this.telefono = telefono;
    }
  }