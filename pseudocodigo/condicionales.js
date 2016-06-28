function condicion_1(){
	function promedio(a, b, c) {
	var calculo;
	calculo = (+a + +b + +c) / 3;
	return calculo;
}
	var a = prompt("nota 1°", "");
	var b = prompt("nota 2°", "");
	var c = prompt("nota 3°", "");
	calculo = promedio(a, b, c);

	if (calculo >= 6) {
		alert("aprueba");
	} else {
		alert("reprobado");
	}
}
function condicion_2(){
	function numero_mayor (x, y)
	var numeroMayor;
	if (+x > +y){
		numeroMayor = +x;
	}else{
		numeroMayor = +y;
	}
	return numeroMayor;
}
var x = prompt("ingrese el numero", "");
var y = prompt("ingrese el segundo numero", "");
var numeroMayor = numero_mayor(x, y);
alert("el numero mayor es..." + numeroMayor);


}
function condicion_3(){
	function positivo_negativo (a){
	var identificando;
	if (+a < 0){
		alert("tu numero es negativo");
	}else{
		alert("tu numero es positivo");
	}
	return identificando;
}
var a = prompt("ingrese su numero", "");
identificando = positivo_negativo(a);

}

// // ejercicio 4 "el arapiento"
function condi_4(){
	var valorVestimenta = prompt("ingrese el valor de la prenda");
var descuento = valorVestimenta * 0.15;
var descuentoMenor = valorVestimenta * 0.8;
function vestimenta(valorVestimenta, descuento, descuentoMenor){
	if (valorVestimenta >= 2500){
		valorVestimenta = valorVestimenta - descuento;
	}else{
		valorVestimenta = valorVestimenta - descuentoMenor;
	}
	return valorVestimenta;
}
valorVestimenta = vestimenta(valorVestimenta, descuento, descuentoMenor);
alert("precio final del producto es " + valorVestimenta);

}
//ejercicio5 el mayor de los numeros 

function condi_5(){
	var a, b, c;
a = parseInt(prompt("ingrese primer numero"));
b = parseInt(prompt("ingrese primer numero"));
c = parseInt(prompt("ingrese primer numero"));

function numero_mayor(a, b, c){
	if(a > b && a > c){
		var respuesta = a
	}
	else if(b > a && b > c){
		respuesta = b;
	}
	else{
		respuesta = c;
	}
	return respuesta;
}
respuesta = numero_mayor(a, b, c);
alert("el numero mayor es " + respuesta)

}
// ejercicio 6 "banquetes"
function condi_6(){
	var valorUno = 95;
var valorDos = 85;
var valorTres = 75;
var personas = parseInt(prompt("ingrese el numero de personas"));

function promocion(personas){
	if(personas < 200){
		var presupuesto = personas * valorUno;
	}
	else if(personas >= 200 && personas < 300){
		presupuesto = personas * valorDos;
	}
	else /*(personas >= 300)*/{
		presupuesto = personas * valorTres;
	}
	return presupuesto;
}

var presupuesto = promocion(personas);
alert("tu presupuesto es " + presupuesto);

}

//ejercicio 7 "viaje escolar" 

function condi_7(){
	var alumnos = parseInt(prompt("ingrese el numero de alumnos"));

function promocion(alumnos){
	if(alumnos >= 100){
		var presupuesto = alumnos * 65;
		var cadaUno = presupuesto / alumnos;
	}
	else if(alumnos >= 50 && alumnos <= 99){
		presupuesto = alumnos * 70;
		var cadaUno = presupuesto / alumnos;
	}
	else if(alumnos >= 30 && alumnos <= 49){
		presupuesto = alumnos * 95;
		var cadaUno = presupuesto / alumnos;
	}
	else if(alumnos < 30){
		presupuesto = 4000;
		var cadaUno = presupuesto / alumnos;
	}
	return presupuesto;
}

presupuesto = promocion(alumnos);
cadaUno = presupuesto / alumnos;
alert("deberas pagar " + presupuesto +  "\n el valor a pagar por alumno es " + cadaUno);

}


//-------------------------------------------------------------------------------
//ejercicio 8 "compañia de autobuses" el valor asignado a,b,c debo incresarlo en numeros y no letras.
function condi_8(){
	var tiposDeAutos = ["a","b","c",];
var auto = (prompt("tipo de auto"));
var km = parseInt(prompt("ingrese cantidad de kilometros"));
var personas = parseInt(prompt("numero de personas"));

function valor_recorrido(){
	if (auto == tiposDeAutos[0] && personas >= 20) {
		var recorrido = 2 *  km * personas;
	}else if(auto == tiposDeAutos[0] && personas < 20) {
		recorrido = 2 * km * 20;
	}else if (auto == tiposDeAutos[1] && personas >= 20) {
		var recorrido = 2.5 *  km * personas;
	}else if (auto == tiposDeAutos[1] && personas < 20) {
		recorrido = 2.5 * km * 20;
	}else if (auto == tiposDeAutos[2] && personas >= 20) {
		var recorrido = 3 *  km * personas;
	}else if(auto == tiposDeAutos[2] && personas < 20) {
		recorrido = 3 * km * 20;
	}else {
		recorrido = 3 * km * personas;
	}
	return recorrido

}
recorrido = valor_recorrido();
alert("el valor del recorrido es " + recorrido)
}

//------------------------------------------------------------------------------------

//ejercicio 9 "el naufrago haburguesas" la misma logica del ejercicio anterior.

// s = 20;
// d = 25;
// t = 28;
// cantidad = parseInt(prompt("ingrese cantidad"));
// tipoDeHamburguesa = parseInt(prompt("ingrese tipo de hamburguesa"));

// function hamburguesas(tipoDeHamburguesa, s, d, t){
// 	if (tipoDeHamburguesa == s){
// 		 cobrar = s * cantidad;
// 	}
// 	else if(tipoDeHamburguesa == d){
// 		cobrar = d * cantidad;
// 	}
// 	else{
// 		cobrar = t * cantidad;
// 	}
// 	return cobrar;
// }
// cobrar = hamburguesas(tipoDeHamburguesa, s, d, t);
// alert("el total a pagar es " + cobrar);

//ejercicio 10 "el cometa"

// Fábricas “El cometa” produce artículos con claves (1, 2, 3, 4, 5 y 6). Se requiere un algoritmo para calcular los precios de venta, para esto hay que considerar lo siguiente:

// Costo de producción = materia prima + mano de obra + gastos de fabricación.
// Precio de venta = costo de producción + 45 % de costo de producción.
// El costo de la mano de obra se obtiene de la siguiente forma:

// para los productos con clave 3 o 4 se carga 75 % del costo de la materia prima; para los que tienen clave 1 y 5 se carga 80 %, y para los que tienen clave 2 o 6, 85 %.

// Para calcular el gasto de fabricación se considera lo siguiente:

// Si el artículo que se va a producir tiene claves 2 o 5, este gasto representa 30 % sobre el costo de la materia prima;
// Si las claves son 3 o 6, representa 35 %;
// Si las claves son 1 o 4, representa 28 %.
// La materia prima tiene el mismo costo para cualquier clave.

// Represente mediante el diagrama de flujo y el pseudocódigo

//fabrica de cometas ejercicio 10 lo tengo pendiente
// var Costodeproducción;
// var materiaPrima;
// var gastosDeFabricación;
// Costodeproducción = materiaPrima + manoDeObra + gastosDeFabricación;












 
