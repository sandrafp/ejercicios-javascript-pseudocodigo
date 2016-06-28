//ejercicio 1 calculando DNI hecho en evaluacion
//--------ejercicio2 push----------
// Crear un array de elementos que contenga nombres y posteriormente agregar más elementos por medio del método “push”

function array_1(){
	var Nombres = ["sandra", "camila", "stephani", "dorys"];
	Nombres.push("susana");
	console.log(Nombres);
}

//-------ejercicio 3 --------------
//Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función alert()

function array_2(){

var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio","agosto", "septiembre", "octubre","noviembre", "diciembre"];
document.write(meses);

}
//-----------------------------ejercicio 4------------------------------ leer
//A partir del siguiente array que se proporciona:

// var valores = [true, 5, false, "hola", "adios", 2];

// Determinar cuál de los dos elementos de texto es mayor
// Utilizando exclusivamente los dos valores booleanos del array,
// determinar los operadores necesarios para obtener un resultado true y otro resultado false
// Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos.




// //------------------ejercicio 5 --------------------------
function array_5(){
	var numero = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var suma = 0;
function sumaTotal(){
for(i = 0; i < numero.length; i++){
	suma = suma + numero[i];
}
return suma;
}
sumaTotal();
alert(suma)
}




