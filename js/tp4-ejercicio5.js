/* 5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico de esta
generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
 */

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.dni = dni;
    this.año_nacimiento = 2023 - this.edad;
  }
  obtener_sexo() {
    if (this.sexo === "H") {
      return "Hombre";
    } else if (this.sexo === "M") {
      return "Mujer";
    } else {
      return "Sin definir";
    }
  }
  mostrar_generacion() {
    switch (true) {
      case this.edad >= 75:
        document.write(`
      <h2>Pertenece a Silent Generation: "Los niños de la posguerra" 1930 - 1948 </h2>
      <ul>
        <li>Naciste en ${this.año_nacimiento}, tu edad es: ${this.edad} años</li>
        <li>El indice de poblacion fue de: 6.300.000</li>
        <li>Circunstancia histórica: Conflictos bélicos</li>
        <li>Rasgo caracteristico: Austeridad</li>
      </ul>  
        `);
        break;
      case this.edad >= 55 && this.edad <= 74:
        document.write(`
      <h2>Pertenece a Baby Boom Generation 1949 - 1968 </h2>
      <ul>
        <li>Naciste en ${this.año_nacimiento}, tu edad es: ${this.edad} años</li>
        <li>El indice de poblacion fue de: 12.200.000</li>
        <li>Circunstancia histórica: Paz y explosión demográfica</li>
        <li>Rasgo caracteristico: Ambición</li>
      </ul>  
        `);
        break;
      case this.edad >= 43 && this.edad <= 54:
        document.write(`
      <h2>Pertenece a Generación X 1969 - 1980 </h2>
      <ul>
        <li>Naciste en ${this.año_nacimiento}, tu edad es: ${this.edad} años</li>
        <li>El indice de poblacion fue de: 9.300.000</li>
        <li>Circunstancia histórica: Crísis del 73</li>
        <li>Rasgo caracteristico: Obseción por el éxito</li>
      </ul>  
        `);
        break;
      case this.edad >= 30 && this.edad <= 42:
        document.write(`
      <h2>Pertenece a Generación Y "millenials" 1981 - 1993 </h2>
      <ul>
        <li>Naciste en ${this.año_nacimiento}, tu edad es: ${this.edad} años</li>
        <li>El indice de poblacion fue de: 7.200.000</li>
        <li>Circunstancia histórica: Inicio de la digitalización</li>
        <li>Rasgo caracteristico: Frustración</li>
      </ul>  
        `);
        break;
      case this.edad >= 13 && this.edad <= 29:
        document.write(`
      <h2>Pertenece a la Generación Z  Generation 1994 - 2010 </h2>
      <ul>
        <li>Naciste en ${this.año_nacimiento}, tu edad es: ${this.edad} años</li>
        <li>El indice de poblacion fue de: 7.800.000</li>
        <li>Circunstancia histórica: Expansión masiva del Internet</li>
        <li>Rasgo caracteristico: Irreverencia</li>
      </ul>  
        `);
        break;
      default:
        document.write("<h3>Eres demasiado peque</h3>");
        break;
    }
  }
  es_mayor() {
    if (this.edad >= 18) {
      document.write(`<h4>Eres mayor de edad<h4>`);
    } else {
      document.write(`<h3>Eres menor de edad<h4>`);
    }
  }
  mostrar_datos() {
    document.write(`<h2> Tus datos son los siguientes<h2>
    <p>Nombre: ${this.nombre}</p>
    <p>DNI: ${this.dni}</p>
    <p>Sexo: ${this.obtener_sexo()}</p>
    <p>Peso: ${this.peso}</p>
    <p>Altura: ${this.altura}</p>
    `);
  }
  dni_random() {
    const dniRandom = Math.round(Math.random() * 100000000);
    document.write(`<p>Su dni aleatorio es: ${dniRandom}</p>`);
  }
}

const persona_1 = new Persona("Juan", 2, "33.333.333", "H", 78, 1.78);
persona_1.mostrar_generacion();
persona_1.es_mayor();
persona_1.mostrar_datos();
persona_1.dni_random();
