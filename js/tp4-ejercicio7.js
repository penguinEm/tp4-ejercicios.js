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

  addContacto(nombre, numero) {
    if (this.contacto.length < this.capacidad_maxima) {
      this.contacto.push([nombre, numero]);
      alert(`Contacto "${nombre}" se agendo`);
    } else {
      alert(`No puede ingresar mas contactos excedio el limite "${this.capacidad_maxima}"`);
    }
  }

  contactoRepetido(nombre) {
    const contactoRepetido = this.contacto.some((item) => item[0] === nombre);
    if (contactoRepetido === true) {
      alert(`El contacto "${nombre}" ya existe`);
    } else {
      alert(`No existe, puedes agendar a "${nombre}" `);
    }
  }

  buscarContacto(nombre) {
    const buscarContacto = this.contacto.sime((item) => item[0] === nombre);
    if (buscarContacto === true) {
      alert(`El número de ${nombre[0]} es: ${nombre[1]}`);
    } else {
      alert(`El contacto es inexistente`);
    }
  }

  listarAgenda() {
    if (this.contacto.length !== 0) {
      document.write(`<h2> Lista de contactos </h2>
      <ul>`);
      for (let i = 0; i < this.contacto.length; i++) {
        document.write(`<li>Nombre - Celular: ${this.contacto[i]}</li>`);
      }
      document.write(`</ul>`);
    } else {
      alert("La agenda esta vacía");
    }
  }

  espaciosLibres() {
    if (this.contacto.length === 10) {
      alert(`La AGENDA ESTA LLENA`);
    } else {
      const espaciosLibres = this.capacidad_maxima - this.contacto.length;
      alert(`La AGENDA tiene "${espaciosLibres}" espacios`);
    }
  }
}

const agenda1 = new Agenda();

do {
  let menu_opciones = prompt(`Ingrese el número de la opcion que va a ejecutar
  1. Añadir Contacto
  2. ¿Contacto repetido?
  3. Buscar un número
  4. Listar Contacto
  5. Ver huecos libres`);

  switch (menu_opciones) {
    case "1":
      const nombre = prompt("Ingrese su nombre").toUpperCase();
      const numero = parseInt(prompt("Ingrese su numero telefónico"));

      if (!isNaN(nombre)) {
        alert("Ingrese su nombre correctamente");
      } else if (isNaN(numero)) {
        alert("El numero ingresado es incorrecto");
      } else {
        agenda1.addContacto(nombre, numero);
      }
      console.log(agenda1);
      break;

    case "2":
      const nombre_para_verificar = prompt(
        "Ingrese el nombre del contacto que desea verificar si existe"
      ).toUpperCase();
      if (!isNaN(nombre_para_verificar)) {
        alert("Ingrese un nombre válido para verificar");
      } else {
        agenda1.contactoRepetido(nombre_para_verificar);
      }
      break;

    case "3":
      const numero_buscado = prompt(`Ingrese el nombre del contacto que desea buscar`).toUpperCase;
      if (!isNaN(numero_buscado)) {
        alert("Ingrese un nombre válido para verificar");
      } else {
        agenda1.buscarContacto(numero_buscado);
      }

    case "4":
      agenda1.listarAgenda();
      break;

    case "5":
      agenda1.espaciosLibres();
      break;

    default:
      alert("Ingrese una opción válida");
      break;
  }
} while (confirm("Desea realizar otra oepración"));
