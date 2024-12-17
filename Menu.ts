import { RedVeterinarias } from "./RedDeVeterinarias";
import { Veterinaria } from "./Veterinaria";
import { generadorDeId } from "./Ids";
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedor";

import readlineSync from "readline-sync";
const red = new RedVeterinarias();

function mostrarMenuPrincipal() {
  console.log(`
  === Menú Principal ===
  1. Sucursales🏥
  2. Clientes👪
  3. Pacientes🐾
  4. Proveedores📃
  5. Salir❌
  `);

  const opcion = readlineSync.question("Seleccione una opcion: ");

  switch (opcion) {
    case "1":
      mostrarMenuSucursales();
      break;
    case "2":
      mostrarMenuClientes();
      break;
    case "3":
      mostrarMenuPacientes();
      break;
    case "4":
      mostrarMenuProveedores();
      break;
    case "5":
      console.log("👋 ¡Gracias por usar el sistema!");
      return; // Termina el programa
    default:
      console.log("❌Opcion no valida. Intente de nuevo.");
  }

  // Regresa al menú principal
  mostrarMenuPrincipal();
}

// Submenú de Sucursales
function mostrarMenuSucursales() {
  console.log(`
  === Menú de Sucursales ===
  1. Mostrar lista de sucursales
  2. Dar de alta nueva sucursal
  3. Dar de baja sucursal
  4. Modificar datos de sucursal
  5. Volver al menú principal
  `);

  const opcion = readlineSync.question("Seleccione una opcion: ");

  switch (opcion) {
    case "1":
      red.mostrarListaDeVeterinarias();
      break;
    case "2":
      const nombreSucursal = readlineSync.question("Ingrese el nombre de la sucursal: ");
      const direccionSucursal = readlineSync.question("Ingrese la direccion de la sucursal: ");
      red.altaSucursal(nombreSucursal, direccionSucursal);
      console.log("✔ Sucursal agregada con exito.");
      break;
    case "3":
      const idSucursalBaja = readlineSync.questionInt("Ingrese el ID de la sucursal a dar de baja: ");
      red.bajaSucursal(idSucursalBaja);
      console.log("✔ Sucursal dada de baja con exito.");
      break;
    case "4":
      const idSucursalMod = readlineSync.questionInt("Ingrese el ID de la sucursal a modificar: ");
      const nuevoNombreSucursal = readlineSync.question("Ingrese el nuevo nombre de la sucursal: ");
      const nuevaDireccionSucursal = readlineSync.question("Ingrese la nueva direccion de la sucursal: ");
      red.modificarSucursal(idSucursalMod, nuevoNombreSucursal, nuevaDireccionSucursal);
      console.log("✔ Sucursal modificada con exito.");
      break;
    case "5":
      return; // Vuelve al menú principal
    default:
      console.log("Opcion no valida. Intente de nuevo.");
  }

  mostrarMenuSucursales(); // Regresa al submenú de sucursales
}

// Submenú de Clientes
function mostrarMenuClientes() {
  console.log(`
  === Menú de Clientes ===
  1. Mostrar lista de clientes
  2. Dar de alta cliente
  3. Dar de baja cliente
  4. Modificar datos de cliente
  5. Agregar Visitas de Cliente
  6. Volver al menú principal
  `);

  const opcion = readlineSync.question("Seleccione una opcion: ");

  switch (opcion) {
    case "1":
      red.mostrarClientes();
      break;
    case "2":
      const nombreCliente = readlineSync.question("Ingrese el nombre del cliente: ");
      const direccionCliente = readlineSync.question("Ingrese la direccion del cliente: ");
      const telefonoCliente = readlineSync.question("Ingrese el telefono del cliente: ");
      red.altaCliente(nombreCliente, direccionCliente, telefonoCliente);
      console.log("✔ Cliente agregado con exito.");
      break;
    case "3":
      const idClienteBaja = readlineSync.questionInt("Ingrese el ID del cliente a dar de baja: ");
      red.bajaCliente(idClienteBaja);
      console.log("✔ Cliente dado de baja con exito.");
      break;
    case "4":
      const idClienteMod = readlineSync.questionInt("Ingrese el ID del cliente a modificar: ");
      const nuevoNombreCliente = readlineSync.question("Ingrese el nuevo nombre del cliente: ");
      const nuevoTelefonoCliente = readlineSync.question("Ingrese el nuevo telefono del cliente: ");
      red.modificarCliente(idClienteMod, nuevoNombreCliente, nuevoTelefonoCliente);
      console.log("✔ Cliente modificado con exito.");
      break;
      case "5":
        red.registrarVisitasCliente()
        break;
    case "6":
      return; // Vuelve al menú principal
    default:
      console.log("❌ Opcion no valida. Intente de nuevo.");
  }

  mostrarMenuClientes(); // Regresa al submenú de clientes
}

// Submenú de Pacientes
function mostrarMenuPacientes() {
  console.log(`
  === Menú de Pacientes ===
  1. Mostrar lista de pacientes
  2. Dar de alta paciente
  3. Dar de baja paciente
  4. Modificar datos de paciente
  5. Volver al menú principal
  `);

  const opcion = readlineSync.question("Seleccione una opcion: ");

  switch (opcion) {
    case "1":
      red.mostrarPacientes();
      break;
    case "2":
      const nombrePaciente = readlineSync.question("Ingrese el nombre del paciente: ");
      const especiePaciente = readlineSync.question("Ingrese la especie del paciente: ");
      const idPropietario = readlineSync.questionInt("Ingrese el ID del propietario: ");
      red.altaPaciente(nombrePaciente, especiePaciente, idPropietario);
      console.log("✔ Paciente agregado con exito.");
      break;
    case "3":
      const idPacienteBaja = readlineSync.questionInt("Ingrese el ID del paciente a dar de baja: ");
      red.bajaPaciente(idPacienteBaja);
      console.log("Paciente dado de baja con exito.");
      break;
    case "4":
      const idPacienteMod = readlineSync.questionInt("Ingrese el ID del paciente a modificar: ");
      const nuevoNombrePaciente = readlineSync.question("Ingrese el nuevo nombre del paciente: ");
      const nuevaEspeciePaciente = readlineSync.question("Ingrese la nueva especie del paciente: ");
      red.modificarPaciente(idPacienteMod, nuevoNombrePaciente, nuevaEspeciePaciente);
      console.log("✔ Paciente modificado con exito.");
      break;
    case "5":
      return; // Vuelve al menú principal
    default:
      console.log("❌ Opción no válida. Intente de nuevo.");
  }

  mostrarMenuPacientes(); // Regresa al submenú de pacientes
}

// Submenú de Proveedores
function mostrarMenuProveedores() {
  console.log(`
  === Menú de Proveedores ===
  1. Mostrar lista de proveedores
  2. Dar de alta proveedor
  3. Dar de baja proveedor
  4. Modificar datos de proveedor
  5. Volver al menú principal
  `);

  const opcion = readlineSync.question("Seleccione una opcion: ");

  switch (opcion) {
    case "1":
      red.mostrarProveedores();
      break;
    case "2":
      const nombreProveedor = readlineSync.question("Ingrese el nombre del proveedor: ");
      const telefonoProveedor = readlineSync.question("Ingrese el telefono del proveedor: ");
      red.altaProveedor(nombreProveedor, telefonoProveedor);
      console.log("✔ Proveedor agregado con exito.");
      break;
    case "3":
      const idProveedorBaja = readlineSync.questionInt("Ingrese el ID del proveedor a dar de baja: ");
      red.bajaProveedor(idProveedorBaja);
      console.log("✔ Proveedor dado de baja con exito.");
      break;
    case "4":
      const idProveedorMod = readlineSync.questionInt("Ingrese el ID del proveedor a modificar: ");
      const nuevoNombreProveedor = readlineSync.question("Ingrese el nuevo nombre del proveedor: ");
      const nuevoTelefonoProveedor = readlineSync.question("Ingrese el nuevo telefono del proveedor: ");
      red.modificarProveedor(idProveedorMod, nuevoNombreProveedor, nuevoTelefonoProveedor);
      console.log("✔ Proveedor modificado con exito.");
      break;
    case "5":
      return; // Vuelve al menú principal
    default:
      console.log("❌Opción no valida. Intente de nuevo.");
  }

  mostrarMenuProveedores(); // Regresa al submenú de proveedores
}

// Inicia el programa
mostrarMenuPrincipal();