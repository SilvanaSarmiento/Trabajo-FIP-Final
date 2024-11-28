import { Veterinaria } from "./Veterinaria";
import { generadorDeId } from "./ids";
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedor";


export class RedVeterinarias {
  private veterinarias: Veterinaria[] = [];
  private idsVeterinarias: number []=[];
  private clientes: Cliente[] = [];
  private idsClientes: number [] = [];
  private mascotas: Paciente[] = [];
  private idsPacientes: number []=[];
  private proveedores: Proveedor[] = [];
  private idsProveedores: number[]=[];

constructor() {
  
   this.veterinarias.push(new Veterinaria(generadorDeId(this.idsVeterinarias), "Centro Veterinario", "España 3254"));
   this.veterinarias.push(new Veterinaria(generadorDeId(this.idsVeterinarias), "Veterinaria Olavarria", "Av. Del Valle 4568",));

   this.clientes.push(new Cliente(generadorDeId(this.idsClientes), "Juan Pérez", "Colon 3454", "555-1234", true, 6, ));
   this.clientes.push(new Cliente(generadorDeId(this.idsClientes), "Ana López", "Pringles 6523", "555-5678", false, 2, ))

    // Agregar mascotas de ejemplo
    this.mascotas.push(new Paciente(generadorDeId(this.idsPacientes), "Firulais", "perro", 1 ));
    this.mascotas.push(new Paciente(generadorDeId(this.idsPacientes), "Mish", "gato", 2));

    this.proveedores.push(new Proveedor(generadorDeId(this.idsProveedores), "Proveedor A", "555-1111"));
    this.proveedores.push(new Proveedor(generadorDeId(this.idsProveedores), "Proveedor B", "555-2222"));
}

get getVeterinarias(): Veterinaria[] {
  return this.veterinarias;
}

get getidsVeterinarias(): number[] { 
  return this.idsVeterinarias;
}

get getClientes(): Cliente[] {
  return this.clientes;
}
get getidsClientes(): number[]{
  return this.idsClientes;
}
get getMascotas(): Paciente[] {
  return this.mascotas;
}
get getidsMascotas(): number[]{
  return this.idsPacientes;
}
get getProveedores(): Proveedor[] {
  return this.proveedores;
}
get getidsProveedores(): number[]{
  return this.idsProveedores;
}

//Metodos para Gestionar Sucursales
mostrarListaDeVeterinarias(): void {
  this.veterinarias.forEach((vet, index) => {
  console.log(`${index + 1}. ID: ${vet.id}, Nombre: ${vet.nombre}, Dirección: ${vet.direccion}`);
  });
}

altaSucursal(nombre: string, direccion: string): void {
  const idsVeterinarias= generadorDeId(this.idsVeterinarias)
  const nuevaSucursal = new Veterinaria(idsVeterinarias, nombre, direccion,);
   this.veterinarias.push(nuevaSucursal);
   console.log(`Sucursal ${nombre} agregado con ID: ${idsVeterinarias}`);
 }

 modificarSucursal(id: number, nombre: string, direccion: string): void {
  const sucursal = this.veterinarias.find(s => s.id === id);
  if (sucursal) {
    sucursal.modificar(nombre, direccion);
  }
}

bajaSucursal(id: number): void {
  this.veterinarias = this.veterinarias.filter(s => s.id !== id);
}

//Métodos para gestionar los clientes
mostrarClientes(): void {
  console.log("Clientes:");
  this.clientes.forEach((cliente, index) => {
    console.log(`${index + 1}. ID: ${cliente.id}, Nombre: ${cliente.nombre}, Dirección: ${cliente.direccion}, Teléfono: ${cliente.telefono}, Es VIP: ${cliente.esVIP} Visitas: ${cliente.visitas}`);
  });
}

altaCliente(nombre: string, direccion:string, telefono: string): void {
  const idCliente = generadorDeId(this.idsClientes);
  const nuevoCliente = new Cliente(idCliente, nombre, direccion, telefono, true, 7, );
 this.clientes.push(nuevoCliente);
 console.log(`Cliente ${nombre} agregado con ID: ${idCliente}`);
}

modificarCliente(id: number, nombre: string, telefono: string): void {
   const cliente = this.clientes.find(c => c.id === id);
   if (cliente) {
     cliente.modificar(nombre, telefono);
   }
 }

 bajaCliente(id: number): void {
   this.clientes = this.clientes.filter(c => c.id !== id);
 }

// Métodos para gestionar las mascotas
mostrarPacientes(): void {
  console.log("Pacientes:");
  this.mascotas.forEach((mascota, index) => {
    console.log (`${index + 1}. ID: ${mascota.id} Nombre: ${mascota.nombre}, Especie: ${mascota.especie}, idPropietario: ${mascota.idPropietario}`
    );
  });
}

altaPaciente( nombre: string, especie: string, idPropietario: number): void {
  const idPaciente = generadorDeId(this.idsPacientes);
   const nuevaMascota = new Paciente (idPaciente, nombre, especie, idPropietario);
   this.mascotas.push(nuevaMascota);
   console.log(`Paciente ${nombre} agregado con ID: ${idPaciente}`)
 }

 modificarPaciente(id: number, nombre: string, especie: string): void {
   const mascota = this.mascotas.find(m => m.id === id);
   if (mascota) {
     mascota.modificar(nombre, especie);
   }
 }

 bajaPaciente(id: number): void {
   this.mascotas = this.mascotas.filter(m => m.id !== id);
 }                         

 
// Métodos para gestionar las sucursales
 mostrarProveedores(): void {
  console.log("Proveedores:");
  this.proveedores.forEach((proveedor, index) => {
    console.log(`${index + 1}. ID: ${proveedor.id} Nombre: ${proveedor.nombre}, Teléfono: ${proveedor.telefono}`);
  });
}

altaProveedor(nombre: string, telefono: string): void {
  const idProveedor = generadorDeId(this.idsProveedores);
   const nuevoProveedor = new Proveedor(idProveedor, nombre, telefono);
   this.proveedores.push(nuevoProveedor);
   console.log(`Proveedor ${nombre} agregado con ID: ${idProveedor}`)
 }

 modificarProveedor(id: number, nombre: string, telefono: string): void {
   const proveedor = this.proveedores.find(p => p.id === id);
   if (proveedor) {
     proveedor.modificar(nombre, telefono);
   }
 }

 bajaProveedor(id: number): void {
   this.proveedores = this.proveedores.filter(p => p.id !== id);
 }
}