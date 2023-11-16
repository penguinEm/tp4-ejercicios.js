/* 7- Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un
contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá
crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto
(10).
Los métodos de la agenda serán los siguientes:

    --aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda
no puede almacenar más contactos indicar por pantalla.
    --existeContacto(Contacto): indica si el contacto pasado existe o no.
    --listarContactos(): Lista toda la agenda
    --buscarContacto(nombre): busca un contacto por su nombre y muestra su
teléfono.
    --eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se
ha eliminado o no por pantalla
    --agendaLlena(): indica si la agenda está llena.
    --huecosLibres(): indica cuántos contactos más podemos ingresar.
Crea un menú con opciones que serán seleccionadas por el usuario usando un
prompt, las salidas de las operaciones seleccionadas por el usuario se pueden
mostrar en pantalla y por consola. */

class Agenda {
  constructor() {
    this.contacto = [];
    this.capacidad_maxima = 10;
  }

  addContacto(nuevo_contacto, numero) {
    if (this.contacto.length < this.capacidad_maxima) {
      this.contacto.push(nuevo_contacto, numero);
    } else {
      document.write(`No puede ingresar mas contactos exedio el limite "${this.capacidad_maxima}"`);
    }
  }

  contactoRepetido(nuevo_contacto) {
    const repetido = this.contacto.includes(nuevo_contacto);
    if (repetido === true) {
      document.write(`El contacto ${nuevo_contacto} ya existe`);
    } else {
      document.write(`NO existe, puedes agendar a ${nuevo_contacto} `);
    }
  }

  listarAgenda() {
    if (this.contacto.length != 0) {
      document.write(`<h2> Lista de contactos </h2>
      <ul>`);
      for (let i = 0; i < this.contacto.length; i++) {
        document.write(`<li>${this.contacto[i]}</li>`);
      }
      document.write(`</ul>`);
    }
  }

  huecosLibres() {
    if (this.contacto.length === 10) {
      document.write(`<h3>La AGENDA ESTA LLENA</h3>`);
    } else {
      const huecosLibres = 10 - this.contacto.length;
      document.write(`<h2>La AGENDA tiene ${huecosLibres} espacios</h2>`);
    }
  }
}

const agenda1 = new Agenda();

let menuOpciones;
do {
  menuOpciones = prompt(`Ingrese el número de la opcion que va a ejecutar
  1. Añadir Contacto
  2. ¿Contacto repetido?
  3. Listar Contacto
  4. Ver huecos libres`);
  switch (menuOpciones) {
    case 1:
      agenda1.addContacto();
      break;

    case 2:
      agenda1.contactoRepetido();
      break;

    case 3:
      agenda1.contactoRepetido();
      break;

    case 4:
      agenda1.listarAgenda();
      break;

    case 5:
      agenda1.huecosLibres();
      break;

    default:
      document.write(`Ingreso una opcion no válida`);
      break;
  }
} while (menuOpciones !== 6);






