import { Veterinaria } from "./Veterinaria";
import { generadorDeId } from "./ids";

export class Cliente extends Veterinaria{
  idsClientes: number[] = [];
  telefono: string;
  esVIP: boolean;
  visitas: number;
 

  constructor(id: number, nombre: string,direccion:string, telefono: string, esVIP:boolean, visitas:number) {
  super(id, nombre,direccion);
  this.telefono = telefono;
  this.esVIP = esVIP; // Debería tomar el valor de esVIP
  this.visitas = visitas; // No reiniciar visitas a 0
  this.id = generadorDeId(this.idsClientes); // Asigna el ID generado
}

// Método para agregar visitas y actualizar el estado VIP
agregarVisita(): void {
  this.visitas++;
   if (this.visitas >= 5) {
    this.esVIP = true;
  }
}

// Método para modificar los datos del cliente
modificar(nombre: string, telefono: string): void {
  this.nombre = nombre;
 this.telefono = telefono;
}
}