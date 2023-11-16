/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
● Una propiedad titular con el valor "Alex".
● Una propiedad saldo, teniendo como valor inicial 0.
● Un método ingresar() que permita añadir dinero a la cuenta, pasando la
cantidad como parámetro
● Un método extraer() que permita retirar la cantidad pasada como
parámetro.
● Un método informar() que retorne la información del estado de la cuenta.
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
mostrar la descripción del estado de la cuenta. */

const cuenta = {
  titular: "Alex",
  saldo: 0,

  //metodos
  ingresar: function (ingresar_dinero) {
    if (isNaN(ingresar_dinero) || ingresar_dinero <= 0) {
      alert(`Ingrese un monto valido a partir de $1`);
    } else {
      this.saldo = this.saldo + parseFloat(ingresar_dinero);
      console.log(`El sado ingresado es de ${ingresar_dinero} sus saldo actual es de $${this.saldo}`);
    }
  },
  extraer: function (extraer_dinero) {
    if (isNaN(extraer_dinero) || extraer_dinero <= 0 || extraer_dinero > this.saldo) {
      alert(`Ingrese un monto apropiado para extraer`);
    } else {
      this.saldo = this.saldo - parseFloat(extraer_dinero);
      console.log(`Retiró ${extraer_dinero} su saldo actual es de $${this.saldo}`);
    }
  },
  informar: function () {
    if (confirm(`Desea ver el total de su saldo`)) {
      document.write(`<h4>Alex tiene un saldo de $${this.saldo}`);
    }
  },
};


//esto
cuenta.ingresar(prompt(`Ingrese la cantidad de dinero deseada`));


//o
/* cuenta.extraer(prompt("Ingrese la cantidad de dinero que desea extraer")); */

cuenta.informar();
