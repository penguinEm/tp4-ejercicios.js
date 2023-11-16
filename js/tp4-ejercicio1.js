/* 1- Crea un objeto llamado auto que tenga algunas características como el color,
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
permitir encender y apagar el auto.
Output:
objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó */

const auto = {
  //propiedades
  color: "gris",
  marca: "Fiat",
  modelo: "2024",
  linea: "Sedan",
  motor: "V6",

  //métodos
  encender: function () {
    document.write(`<h4>Auto encendido</h4>`);
  },
  apagar: function () {
    document.write(`<h3>El auto se apagó</h3>`);
  },
};

auto.encender();
document.write("<hr>");
auto.apagar();

