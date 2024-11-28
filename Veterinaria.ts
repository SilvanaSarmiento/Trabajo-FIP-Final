import { RedVeterinarias } from "./RedVeterinaria";
import { generadorDeId } from "./ids";


export class Veterinaria {
  idsVeterinarias: number[] = [];
  id:number;
  nombre: string;
  direccion: string;

  constructor(id: number, nombre: string, direccion: string) {
    this.id = generadorDeId(this.idsVeterinarias);
    this.nombre = nombre;
    this.direccion = direccion;
    }

  // Método para modificar los datos de la sucursal
  modificar(nombre: string, direccion: string): void {
    this.nombre = nombre;
    this.direccion = direccion;
  }
}