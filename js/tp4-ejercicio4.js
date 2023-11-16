/* 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar
las propiedades código, nombre y precio, además del método imprime datos, el
cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores
de los tres objetos instanciados. */

class Producto {
  constructor(nombre, codigo, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimir_datos() {
    document.write(`<h2>Detalles de ${this.nombre}</h2>
  <ul>
    <li>Código: ${this.codigo}</li>
    <li>Precio: ${this.precio}</li>
  </ul>`);
  }
}

const samsung_s = new Producto("Samsung-S", "A04-123", "$250.000");
const motorola_m1 = new Producto("Motorola M1", "B03-123", "$200.000");
const iphone_xs = new Producto("Samsung-S", "C01-123", "$1.230.000");


const celulares = [samsung_s, motorola_m1, iphone_xs];

celulares[0].imprimir_datos();
celulares[1].imprimir_datos();
celulares[2].imprimir_datos();

