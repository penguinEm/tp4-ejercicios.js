/* 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y
el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato"
que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente,
crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus
métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. */

class Animal {
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

  emitr_sonido() {
    document.write(`<p> Animal emitidiendo sonido </p>`);
  }
}

class Perro extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
    this.sonido = "ladrar";
  }

  emitir_sonido() {
    document.write(`<h4> A ${this.nombre} de ${this.edad} añitos, le gusta ${this.sonido}  </h4>`);
  }
}

class Gato extends Animal {
  constructor(nombre, edad) {
    super(nombre, edad);
    this.sonido = "ronronear";
  }

  emitir_sonido() {
    document.write(`<h2> A ${this.nombre} de ${this.edad} añitos, le gusta ${this.sonido}  </h2>`);
  }
}

const gato1 = new Gato("Michi", 2);
const perro1 = new Perro("Firulais", 1.5);

gato1.emitir_sonido();
perro1.emitir_sonido();
