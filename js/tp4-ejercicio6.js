/* 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
● ISBN
● Título
● Autor
● Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad.
Crear el método mostrarLibro() para mostrar la información relativa al libro con el
siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”5
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas. */

class Libro {
  #isbn;
  #titulo;
  #autor;
  #nroPagina;
  constructor(isbn, titulo, autor, nroPagina) {
    this.#isbn = isbn;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#nroPagina = nroPagina;
  }

  // Métodos get y set para ISBN
  get isbn() {
    return this.#isbn;
  }
  set isbn(nuevo_isbn) {
    this.#isbn = nuevo_isbn;
  }

  // Métodos get y set para Título
  get titulo() {
    return this.#titulo;
  }
  set titulo(nuevo_titulo) {
    this.#titulo = nuevo_titulo;
  }

  // Métodos get y set para Autor
  get autor() {
    return this.#autor;
  }
  set autor(nuevo_autor) {
    this.#autor = nuevo_autor;
  }

  // Métodos get y set para Número de Páginas
  get nroPagina() {
    return this.#nroPagina;
  }
  set nroPagina(nuevo_nroPagina) {
    this.#nroPagina = nuevo_nroPagina;
  }

  mostrarlibro() {
    document.write(`<p>El libro "${this.titulo}" con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.nroPagina} páginas.</p><hr>`);
  }
}

const ojos_perro_siberiano = new Libro("978-1-234567-89-0", "Los ojos del perro siberiano", "Antonio Santa Ana", 300);
const planta_naranjalima = new Libro("899-123-3555", "Mi planta de naranjalima", "José Mauro de Vasconcelos", 400);

ojos_perro_siberiano.mostrarlibro();
planta_naranjalima.mostrarlibro();

if (ojos_perro_siberiano.nroPagina > planta_naranjalima.nroPagina) {
  document.write(
    `<p>El libro: "${ojos_perro_siberiano.titulo}" de ${ojos_perro_siberiano.nroPagina} páginas, es mas extenso que "${planta_naranjalima.titulo}" de ${planta_naranjalima.nroPagina} páginas.</p>`
  );
} else {
  document.write(
    `<p>El libro: "${planta_naranjalima.titulo}" de ${planta_naranjalima.nroPagina} páginas, es mas extenso que "${ojos_perro_siberiano.titulo}" de ${ojos_perro_siberiano.nroPagina} páginas.<p>`
  );
}
