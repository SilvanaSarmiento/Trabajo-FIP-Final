export function generadorDeId(arreglodeId: number[]): number {
    let id: number = Math.floor(Math.random() * 1000);
    for (let i = 0; i < arreglodeId.length; i++) {
      if (arreglodeId[i] == id) {
        id = Math.floor(Math.random() * 1000);
      i = 0; // Reinicia la búsqueda si encuentra un ID duplicado
      }
    }
    arreglodeId.push(id); // Agrega el nuevo ID al arreglo
    return id;
  }