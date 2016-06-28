// Haz un programa que sirva para dividir dos números.

// -¿Qué sucede si en lugar de dividir dos números, intentamos dividir dos textos?
// -¿Qué sucede si el divisor es el número 0?
//-----------------------------------------ejercicio 1 HACER QUE LA CONDICION SEA FALSA-----------------------------
function tipo_uno(){
	var numero1 = parseInt(prompt("ingrese numero 1"));
	var numero2 = parseInt(prompt("ingrese numero 2"));

function division(){
	 if(numero1 != parseInt){
	 	alert("porfavor ingrese un numero");
	 }else{
		var divi = numero1 / numero2;
	 }
	return divi;
}
divi = division();
alert("su division es " + divi);
}

//------------------------ejercicio 2------------------------------
// Haz un programa que funcione de la siguiente forma:

// El programa nos pregunta nuestro nombre.
// -El programa nos pregunta nuestra edad.
// -El programa da como resultado nuestro nombre y a continuación los días que hemos vivido hasta el momento (deberás multiplicar la edad por 365).

function tipo_dos(){
	var nombre =prompt("ingrese su nombre");
var edad = parseInt(prompt("ingrese su edad"));

function dias_vividos(nombre, edad){
	var dias = edad * 365;
	return dias;
}
dias = dias_vividos(nombre, edad);
alert("hola " + nombre + " sus dias vividos a la fecha son " + dias);
}


//-----------------------ejercicio 3 --------------------------------
// Haz un programa de que funcione de la siguiente forma:

// El programa nos pide nuestro nombre.
// El programa nos pide nuestro primer apellido.
// El programa nos pide en qué población vivimos.
// El programa presenta una pantalla aproximadamente igual a la siguiente:
// FormatoOutput
function tipo_tres(){
	var nombre = prompt("ingrese su nombre");
var primerApellido = prompt("ingrese su apellido");
var poblacion = prompt("su poblacion es");
alert("=================================" + "\n" + "hola " + nombre + primerApellido + "\n" + "adios habitante de " + poblacion + "\n" + "==================================");
}

//--------------------ejercicio 4 ----------------------
// var numeroInicial = parseInt(prompt("ingrese un numero "));
// var operacion = 0;
// var suma2;
// var resta;

function tipo_4(){
	function numeroCreciente(numeroInicial){
	var resultado = operacion + numeroInicial + 5;
	 suma2 = resultado + 21;
	 resta = suma2 - 4;


	operacion = resultado;
	return resultado;
}
resultado = numeroCreciente(numeroInicial);
alert("primer numero " + numeroInicial + "\n" + resultado + " " + suma2 + " " + resta)

}
//------------------ ejercicio 5 -------------------------------------------------------------------

function tipo_5(){
	var u = [];
	var v = [];
	u.push(parseFloat(prompt("ingrese un numero decimal")));
	u.push(parseFloat(prompt("ingrese un numero decimal")));
	v.push(parseFloat(prompt("ingrese un segundo numero decimal (EJEMPLO 4.6)")));
	v.push(parseFloat(prompt("ingrese un segundo numero decimal (EJEMPLO 4.6)")));
	var calculo;

	function escalar(){
		calculo = (u[0] * v[0] ) + (u[1] * v[1]);
		return calculo;
	}
	var calculo = escalar();
	alert("su numero es " + calculo);
}

//-------------------------------ejercicio 6 ----------------------------------
// Haz un programa que sirva para calcular el punto medio de un segmento.
// La fórmula para calcular el punto medio es la siguiente:
function tipo_6(){
	function coordenadas(coordenada1, coordenada2){
	var ope = [(coordenada1[0] + coordenada2[0])/2 , (coordenada1[1] + coordenada2[1]) / 2];
	return ope;
}

var coordenada1 = [];
var coordenada2 = [];
coordenada1.push(parseFloat(prompt("ingrese coordenada 1 x")));
coordenada1.push(parseFloat(prompt("ingrese coordenada 1 y")));
coordenada2.push(parseFloat(prompt("ingrese coordenada 2 x")));
coordenada2.push(parseFloat(prompt("ingrese coordenada 2 y")))

var ope = coordenadas(coordenada1,coordenada2);
alert("el resultado es " + ope);
}

//----------------------------ejercicio 7 ---------------------------------------------------------------
//Haz un programa que sirva para calcular el área del circulo buscar formula matematica.
//---------------------ejercicio 8 ---------------------------------------------------------------------
//corregir errores pero saber como hacerlo dentro de html!!!
       function tipo_8(){
       	var a,b;
       a = prompt("Escribe la base:");
       b = prompt("Escribe la altura:");
       alert("Área: "+ (a * b / 2));
       }

//-------------------------------ejercicio 9-------------------------------------------------------------
// Haz un programa de que sirva para calcular un determinante de 2º orden

// Para calcular un determinante de segundo orden tenemos la siguiente fórmula:

// Sea A una matriz cuadrada de orden 2,

function tipo_9(){
	var a= parseInt(prompt("ingrese primer cuadrante"));
	var b= parseInt(prompt("ingrese segundo cuadrante"));
	var c= parseInt(prompt("ingrese tercer cuadrante"));
	var d= parseInt(prompt("ingrese cuarto cuadrante"));
	alert("su determinante de segundo orden es " + ((a * c) - (b * d)));
}

//------------------------ejercicio 10 ---------------------------------------------
// Haz un programa igual al anterior,
// pero que presente los 4 elementos del determinante tabulados en 2 filas y 2 columnas.




     










