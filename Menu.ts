import { RedVeterinarias } from "./RedVeterinaria";
import { Veterinaria } from "./Veterinaria";
import { generadorDeId } from "./ids";
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedor";

import readlineSync from "readline-sync";
const red = new RedVeterinarias();

function mostrarMenu() {
  console.log(`
  === Menu Principal ===
  1. Ver Sucursales  
  2. Dar de alta nueva Sucursal
  3. Dar de baja Sucursal
  4. Modificar datos de Sucursal
  5. Ver Clientes
  6. Dar de alta Cliente 
  7. Dar de baja Cliente
  8. Modificar datos Cliente
  9. Ver Pacientes
  10. Dar de alta Paciente
  11. Dar de baja Paciente
  12. Modificar datos Paciente
  13. Ver Proveedores
  14. Dar de alta Proveedor
  15. Dar de baja Proveedor
  16. Modificar Proveedor
  17. Salir
   `);

   const opcion = readlineSync.question("Seleccione una opcion: ");

   switch (opcion) {
     
     case "1":
       console.log("Lista de Sucursales:");
       red.mostrarListaDeVeterinarias();
       break;
     case "2":
       const nombreSucursal = readlineSync.question("Ingrese el nombre de la sucursal: ");
       const direccionSucursal = readlineSync.question("Ingrese la direccion de la sucursal: ");
       red.altaSucursal(nombreSucursal, direccionSucursal);
       console.log("Sucursal agregada con éxito.");
       break;
     case "3":
       const idSucursalBaja = readlineSync.questionInt("Ingrese el ID de la sucursal a dar de baja: ");
       red.bajaSucursal(idSucursalBaja);
       console.log("Sucursal dada de baja con éxito.");
       break;
     case "4":
       const idSucursalMod = readlineSync.questionInt("Ingrese el ID de la sucursal a modificar: ");
       const nuevoNombreSucursal = readlineSync.question("Ingrese el nuevo nombre de la sucursal: ");
       const nuevaDireccionSucursal = readlineSync.question("Ingrese la nueva direccion de la sucursal: ");
       red.modificarSucursal(idSucursalMod, nuevoNombreSucursal, nuevaDireccionSucursal);
       console.log("Sucursal modificada con éxito.");
       break;
 
// Opciones para Clientes
    case "5":
      console.log("Lista de Clientes:");
      red.mostrarClientes();
      break;
    case "6":
      const nombreCliente = readlineSync.question("Ingrese el nombre del cliente: ");
      const direccionCliente= readlineSync.question("Ingrese la direccion del cliente: ")
      const telefonoCliente = readlineSync.question("Ingrese el teléfono del cliente: ");
      red.altaCliente(nombreCliente, direccionCliente, telefonoCliente);
      console.log("Cliente agregado con éxito.");
      break;
    case "7":
      const idClienteBaja = readlineSync.questionInt("Ingrese el ID del cliente a dar de baja: ");
      red.bajaCliente(idClienteBaja);
      console.log("Cliente dado de baja con éxito.");
      break;
    case "8":
      const idClienteMod = readlineSync.questionInt("Ingrese el ID del cliente a modificar: ");
      const nuevoNombreCliente = readlineSync.question("Ingrese el nuevo nombre del cliente: ");
      const nuevoTelefonoCliente = readlineSync.question("Ingrese el nuevo teléfono del cliente: ");
      red.modificarCliente(idClienteMod, nuevoNombreCliente, nuevoTelefonoCliente);
      console.log("Cliente modificado con éxito.");
      break;

       // Opciones para Pacientes
    case "9":
      console.log("Lista de Pacientes:");
      red.mostrarPacientes();
      break;
    case "10":
      const nombreMascota = readlineSync.question("Ingrese el nombre del paciente: ");
      const especieMascota = readlineSync.question("Ingrese la especie del paciente (perro, gato, u otra): ");
      const idPropietarioMascota = readlineSync.questionInt("Ingrese el ID del propietario: ");
      red.altaPaciente( nombreMascota, especieMascota, idPropietarioMascota);
      console.log("Paciente agregado con éxito.");
      break;
    case "11":
      const idMascotaBaja = readlineSync.questionInt("Ingrese el ID del paciente a dar de baja: ");
      red.bajaPaciente(idMascotaBaja);
      console.log("Paciente dado de baja con éxito.");
      break;
    case "12":
      const idMascotaMod = readlineSync.questionInt("Ingrese el ID del paciente a modificar: ");
      const nuevoNombreMascota = readlineSync.question("Ingrese el nuevo nombre del paciente: ");
      const nuevaEspecieMascota = readlineSync.question("Ingrese la nueva especie del paciente: ");
      red.modificarPaciente(idMascotaMod, nuevoNombreMascota, nuevaEspecieMascota);
      console.log("Paciente modificado con éxito.");
      break;

       // Opciones para Proveedores
    case "13":
      console.log("Lista de Proveedores:");
      red.mostrarProveedores();
      break;
    case "14":
      const nombreProveedor = readlineSync.question("Ingrese el nombre del proveedor: ");
      const telefonoProveedor = readlineSync.question("Ingrese el teléfono del proveedor: ");
      red.altaProveedor(nombreProveedor, telefonoProveedor);
      console.log("Proveedor agregado con éxito.");
      break;
    case "15":
      const idProveedorBaja = readlineSync.questionInt("Ingrese el ID del proveedor a dar de baja: ");
      red.bajaProveedor(idProveedorBaja);
      console.log("Proveedor dado de baja con éxito.");
      break;
    case "16":
      const idProveedorMod = readlineSync.questionInt("Ingrese el ID del proveedor a modificar: ");
      const nuevoNombreProveedor = readlineSync.question("Ingrese el nuevo nombre del proveedor: ");
      const nuevoTelefonoProveedor = readlineSync.question("Ingrese el nuevo teléfono del proveedor: ");
      red.modificarProveedor(idProveedorMod, nuevoNombreProveedor, nuevoTelefonoProveedor);
      console.log("Proveedor modificado con éxito.");
      break;

    case "17":
      console.log("¡Gracias por usar el sistema!");
      return; // Sale del programa
    default:
      console.log("Opción no válida. Intente de nuevo.");
    }
   mostrarMenu();
  }
  
  // Inicia el programa
  mostrarMenu();