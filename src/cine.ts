import "./styles.css";

/*
*Diseñar un algoritmo que recorra las
butacas de una sala de cine y determine
cuántas butacas desocupadas hay
* Suponga que para modelar este
problema, se utiliza un arreglo con
valores lógicos
* La presencia de un valor verdadero (true) en
el arreglo indica que la butaca está ocupada
* La presencia de un valor falso (false) en el
arreglo indica que la butaca está desocupada
*/

let arrayCine: boolean[] = new Array(
  true,
  false,
  false,
  true,
  true,
  false,
  false,
  true,
  false,
  false,
  false
);
let contadorTrue: number = 0;
let contadorFalse: number = 0;
for (let indice = 0; indice < arrayCine.length; indice++) {
  if (arrayCine[indice] === true) {
    contadorTrue = contadorTrue + 1;
  }
  if (arrayCine[indice] === false) {
    contadorFalse = contadorFalse + 1;
  }
}
console.log(`Hay ${contadorTrue} butacas ocupadas`);
console.log(`Hay ${contadorFalse} butacas desocupadas`);
