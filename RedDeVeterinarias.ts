import { Veterinaria } from "./Veterinaria";
import { generadorDeId } from "./Ids";
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedor";
import readlineSync from "readline-sync";

export class RedVeterinarias {
    private veterinarias: Veterinaria[] = [];
    private idsVeterinarias: number[] = [];
    private clientes: Cliente[] = [];
    private idsClientes: number[] = [];
    private mascotas: Paciente[] = [];
    private idsPacientes: number[] = [];
    private proveedores: Proveedor[] = [];
    private idsProveedores: number[] = [];
  
    constructor() {
  
      this.veterinarias.push(new Veterinaria(generadorDeId(this.idsVeterinarias), "Centro Veterinario", "España 3254"));
      this.veterinarias.push(new Veterinaria(generadorDeId(this.idsVeterinarias), "Veterinaria Olavarria", "Av. Del Valle 4568",));
  
     this.clientes.push(new Cliente(generadorDeId(this.idsClientes), "Juan Pérez", "Colon 3454", "555-1234", false, 2));
     this.clientes.push(new Cliente(generadorDeId(this.idsClientes), "Ana López", "Pringles 6523", "555-5678", true, 6));

     const cliente1 = new Cliente(this.idsClientes[0], "Juan Pérez", "Colon 3454", "555-1234", false, 2);
     const cliente2 = new Cliente(this.idsClientes[1], "Ana López", "Pringles 6523", "555-5678", true, 6);
      // Agregar mascotas de ejemplo
      this.mascotas.push(new Paciente(this.idsClientes[0], "Firulais", "perro", cliente1));
      this.mascotas.push(new Paciente(this.idsClientes[1], "Mish", "gato", cliente2));

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
    get getidsClientes(): number[] {
      return this.idsClientes;
    }
    get getMascotas(): Paciente[] {
      return this.mascotas;
    }
    get getidsMascotas(): number[] {
      return this.idsPacientes;
    }
    get getProveedores(): Proveedor[] {
      return this.proveedores;
    }
    get getidsProveedores(): number[] {
      return this.idsProveedores;
    }
  
    //Metodos para Gestionar Sucursales
    mostrarListaDeVeterinarias(): void {
      this.veterinarias.forEach((vet, index) => {
        console.log(`${index + 1}. ID: ${vet.getId()}, Nombre: ${vet.getNombre()}, Dirección: ${vet.getDireccion()}`);
      });
    }
  
   altaSucursal(nombre: string, direccion: string): void {
  const idSucursal = generadorDeId(this.idsVeterinarias);
  const nuevaSucursal = new Veterinaria(idSucursal, nombre, direccion);
  this.veterinarias.push(nuevaSucursal);
  console.log(`Sucursal ${nombre} agregada con ID: ${idSucursal}`);
}

    modificarSucursal(id: number, nombre: string, direccion: string): void {
      const sucursal = this.veterinarias.find(s => s.getId() === id);
      if (sucursal) {
        sucursal.modificar(nombre, direccion);
      }
    }
  
    bajaSucursal(id: number): void {
      this.veterinarias = this.veterinarias.filter(s => s.getId() !== id);
      console.log(`Sucursal con ID: ${id} ha sido eliminada.`);
    }
  
    //Métodos para gestionar los clientes
    mostrarClientes(): void {
        if (this.clientes.length === 0) {
          console.log("No hay clientes registrados.");
          return;
        }
       console.log("Clientes:");
        this.clientes.forEach((cliente, index) => {
          console.log(
            `${index + 1}. ID: ${cliente.getId()}, Nombre: ${cliente.getNombre()}, Dirección: ${cliente.getDireccion()}, Teléfono: ${cliente.getTelefono()}, Es VIP: ${cliente.getEsVIP()}, Visitas: ${cliente.getVisitas()}`
          );
        });
      }
  
    altaCliente(nombre: string, direccion: string, telefono: string): void {
      const idCliente = generadorDeId(this.idsClientes);
      const nuevoCliente = new Cliente(idCliente, nombre, direccion, telefono, false, 0,);
      this.clientes.push(nuevoCliente);
      console.log(`Cliente ${nombre} agregado con ID: ${idCliente}`);
    }
  
    modificarCliente(id: number, nombre: string, telefono: string): void {
      const cliente = this.clientes.find(c => c.getId() === id);
      if (cliente) {
        cliente.modificar(nombre, telefono);
      }
    }
  
    bajaCliente(id: number): void {
      this.clientes = this.clientes.filter(c => c.getId() !== id);
    }

    registrarVisitasCliente(): void {
      const idCliente = parseInt(readlineSync.question('ID del cliente: '));
  
      // Buscar al cliente en la lista global
      const cliente = this.clientes.find(c => c.getId() === idCliente);
  
      if (!cliente) {
        console.log(`Cliente con ID ${idCliente} no encontrado.`);
        return; // Salir del método
      }
  
      const agregarVisitas = parseInt(readlineSync.question('Numero de visitas a agregar: '));
  
      // Agregar visitas al cliente
      for (let i = 0; i < agregarVisitas; i++) {
        cliente.agregarVisita();
      }
  
      // Mostrar estado actualizado
      console.log(`El cliente ${cliente.getNombre()} ahora tiene ${cliente.getVisitas()} visitas.`);
      if (cliente.getEsVIP()) {
        console.log('Este cliente es ahora VIP.');
      }
    }
  
  
    // Métodos para gestionar las mascotas
    mostrarPacientes(): void {
        console.log("Pacientes:");
        this.mascotas.forEach((mascota, index) => {
          console.log(
            `${index + 1}. ID: ${mascota.getId()}, Nombre: ${mascota.getNombre()}, Especie: ${mascota.getEspecie()}, Propietario: ${mascota.getPropietario().getNombre()}`
          );
        });
    }
  
    altaPaciente(nombre: string, especie: string, idPropietario: number): void {
      // Buscar al propietario en la lista de clientes
      const propietario = this.clientes.find(cliente => cliente.getId() === idPropietario);
      
      if (!propietario) {
        console.log("Propietario no encontrado. Asegúrese de que el ID sea correcto.");
        return;
      }
    
      // Verificar si ya existe un paciente con el mismo ID
      const existePaciente = this.mascotas.find(mascota => mascota.getId() === idPropietario);
      if (existePaciente) {
        console.log(`El cliente con ID ${idPropietario} ya tiene un paciente asignado.`);
        return;
      }
    
      // Crear el nuevo paciente usando el ID del propietario
      const nuevoPaciente = new Paciente(idPropietario, nombre, especie, propietario);
    
      // Agregar el paciente a la lista
      this.mascotas.push(nuevoPaciente);
    
      console.log(`Paciente ${nombre} agregado con éxito. ID: ${idPropietario}. Propietario: ${propietario.getNombre()}`);
    }
    
    
    modificarPaciente(id: number, nombre: string, especie: string): void {
      const mascota = this.mascotas.find(m => m.getId() === id);
      if (mascota) {
        mascota.modificar(nombre, especie);
      }
    }
  
    bajaPaciente(id: number): void {
      this.mascotas = this.mascotas.filter(m => m.getId() !== id);
    }
  
  
    // Métodos para gestionar las sucursales
    mostrarProveedores(): void {
      console.log("Proveedores:");
      this.proveedores.forEach((proveedor, index) => {
        console.log(`${index + 1}. ID: ${proveedor.getId()} Nombre: ${proveedor.getNombre()}, Teléfono: ${proveedor.getTelefono()}`);
      });
    }
  
    altaProveedor(nombre: string, telefono: string): void {
      const idProveedor = generadorDeId(this.idsProveedores);
      const nuevoProveedor = new Proveedor(idProveedor, nombre, telefono);
      this.proveedores.push(nuevoProveedor);
      console.log(`Proveedor ${nombre} agregado con ID: ${idProveedor}`)
    }
  
    modificarProveedor(id: number, nombre: string, telefono: string): void {
      const proveedor = this.proveedores.find(p => p.getId() === id);
      if (proveedor) {
        proveedor.modificar(nombre, telefono);
      }
    }
  
    bajaProveedor(id: number): void {
      this.proveedores = this.proveedores.filter(p => p.getId() !== id);
    }
  }