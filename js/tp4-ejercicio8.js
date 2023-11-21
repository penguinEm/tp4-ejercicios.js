/* 8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y
"profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la
clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos
"saludar" y "despedirse". */

class Persona {
  #nombre;
  #edad;
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  get nombre() {
    return this.#nombre;
  }

  set nombre(nuevo_nombre) {
    this.#nombre = nuevo_nombre.toUpperCase();
  }
  get edad() {
    return this.#edad;
  }

  set edad(nueva_edad) {
    this.#edad = parseInt(nueva_edad);
  }

  //metodos
  saludar() {
    if (isNaN(this.edad) || !isNaN(this.nombre)) {
      document.write(`<h3>Ingrese sus datos de manera correcta<h3>`);
    } else {
      document.write(`<h2> Hola ${this.nombre}, tienes "${this.edad}" años.</h2>`);
    }
  }

  despedirse() {
    if (isNaN(this.edad) || !isNaN(this.nombre)) {
      document.write("");
    } else {
      document.write(`<h3> Hasta pronto ${this.nombre}.</h3>`);
    }
  }
}

const persona1 = new Persona(prompt(`Ingrese su nombre`), prompt(`Ingrese su edad`));
persona1.saludar();
persona1.despedirse();
