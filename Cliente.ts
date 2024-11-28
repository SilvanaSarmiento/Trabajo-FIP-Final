import { Veterinaria } from "./Veterinaria";
import { generadorDeId } from "./ids";

export class Cliente extends Veterinaria {
  private idsClientes: number[] = [];
  private telefono: string;
  private esVIP: boolean;
  private visitas: number;

  constructor(id: number, nombre: string, direccion: string, telefono: string, esVIP: boolean, visitas: number) {
    super(id, nombre, direccion);
    this.telefono = telefono;
    this.esVIP = esVIP; 
    this.visitas = visitas; 
    this.id = generadorDeId(this.idsClientes); // Asigna el ID generado
  }

  public getIdsClientes(): number[] {
    return this.idsClientes;
  }

  public getTelefono(): string {
    return this.telefono;
  }

  public getEsVIP(): boolean {
    return this.esVIP;
  }

  public getVisitas(): number {
    return this.visitas;
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