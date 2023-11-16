/* 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área */

class Rectangulo {
  //parametros
  constructor(ancho, alto) {
    this.alto = alto;
    this.ancho = ancho;
  }
  //metodos
  modificarPropiedades(ancho_modificado, alto_modificado) {
    this.alto = alto_modificado;
    this.ancho = ancho_modificado;
  }

  areaRectangulo() {
    if (isNaN(this.alto) || isNaN(this.alto)) {
      alert("Ingresa valores numericos");
    } else {
      const areaRectangulo = this.alto * this.ancho;
      document.write(`<h2>El AREA del rectangulo de base ${this.ancho} por altura ${this.alto} es: <h3>"${areaRectangulo}"</h3><hr>`);
    }
  }

  perimetroRectangulo() {
    if (isNaN(this.alto) || isNaN(this.alto)) {
      alert("Ingresa valores numericos");
    } else {
      const perimetroRectangulo = this.alto * 2 + this.ancho * 2;
      document.write(`<h2>La suma de los lados de su rectangulo da un PERIMETRO de:</h2> <h3>"${perimetroRectangulo}"</h3> <hr>`);
    }
  }

  mostrarPropiedades() {
    if (isNaN(this.alto) || isNaN(this.alto)) {
      document.write("<h3>Ingreso valores incorrectos");
    } else {
      document.write(`<h2>Su rectangulo tiene una base de ${this.ancho} y tiene una altura de ${this.alto} <br>`);
      document.write(`
    <table>
    <tbody>
    `);
      for (let indiceAltura = 1; indiceAltura <= this.alto; indiceAltura++) {
        document.write(`<tr>`);
        for (let indiceAncho = 1; indiceAncho <= this.ancho; indiceAncho++) {
          document.write(`
        <td>-<td>
        `);
        }
        document.write(`</tr>`);
      }
      document.write(`</tbody
    </table>`);
    }
  }
}
//Creando rectangulos:

const rectangulo1 = new Rectangulo(parseInt(prompt(`Ingrese el ancho de su rectangulo`)), parseInt(prompt(`Ingrese el alto de su rectangulo`)));
prompt;
rectangulo1.mostrarPropiedades();
rectangulo1.areaRectangulo();
rectangulo1.perimetroRectangulo();

document.write(`<hr> <h4>Con valores modificados <h4> <hr>`);
//modifico los valores
rectangulo1.modificarPropiedades(2, 3);
rectangulo1.areaRectangulo();
rectangulo1.perimetroRectangulo();
