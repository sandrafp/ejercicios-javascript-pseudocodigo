 

// ejercicio1
function ejercicio_uno(){
	function resultado (sumaUno, sumaDos){
	var sumaTotal;
	sumaTotal = +sumaUno + +sumaDos;
	return sumaTotal;
}
var sumaUno = prompt("por favor ingrese un numero", "");
var sumaDos = prompt("por favor ingrese un numero", "");
sumaTotal = resultado(sumaUno, sumaDos);
alert("la suma total es " + sumaTotal);
}


// ejercicio2
function ejercicio_dos(){
	function promedio_final(a, b, c){
	var resultado;
	resultado = (+a + +b + +c) / 3;
	return resultado;
}
var a1 = prompt("ingrese el primer numero", "");
var b2= prompt("ingrese el segundo numero", "");
var c2 = prompt("ingrese el tercer numero", "");
var resultado2 = promedio_final(a1, b2, c2);
alert("tu promedio final es " + resultado2);
}


// ejercicio3
function ejercicio_tres(){
	function area_triangulo(base, altura){
	var area;
	area = +base * +altura / 2;
	return area;
}
var base = prompt("ingrese su base", "");
var altura = prompt("ingrese la altura", "");
area = area_triangulo(base, altura);
alert("el area de tu triangulo es " + area);

}
// ejercicio4 galones de leche 
function ejercicio_cuatro(){
	function venta_leche(galones){
	var conversion = galones * 3.785;
	return conversion;
}
var galones = prompt("ingrese los galones vendidos");
var conversion = venta_leche(galones)
alert("hoy se vendieron " + conversion + " litros de leche")
}


// ejercicio5 sueldo 
function ejercicio_cinco(){
	function sueldo_por_hora(horas, valorHoras){
	var sueldo = horas * valorHoras;
	return sueldo
}
var horas = parseInt(prompt("introduzca horas trabajadas"));
var valorHoras = parseInt(prompt("valor de horas"));
var sueldo = sueldo_por_hora(horas, valorHoras);
alert("tu sueldo es " + sueldo);
}

// ejercicio6 conversion medidas de la tela
function ejercicio_seis(){
	var metros;
	var pulgadas;
	metros = prompt("por favor ingrese los metros", "");
	pulgadas = metros / 0.0254;
	alert("las pulgadas son: " + pulgadas);

function metros_a_pulgadas (metros) {
	var pulgadas;
	pulgadas = metros / 0.0254;
	return pulgadas;
}
var metros = prompt("por favor ingrese los metros", "");
var pulgadas = metros_a_pulgadas (metros);
}


// ejercicio7 pintura: la brocha gorda.
function ejercicio_siete(){
	function cobro_final(metros2, valor){
	var conversion = metros2 * valor;
	return conversion;
}
metros2 = parseInt(prompt("ingrese los metros trabajados"));
valor = parseInt(prompt("ingrese el valor de las hrs "));
conversion = cobro_final(metros2, valor);
alert("el valor estimado sera " + conversion)
}


//ejercicio8 autobuses
function ejercicio_ocho(){
	function curva_loca(km, valorKm){
	var boleto = km * valorKm;
	return boleto;
}
km = parseInt(prompt("kilometros recorridos"));
valorKm = parseInt(prompt("valor de kilometro"));
boleto = curva_loca(km, valorKm);
alert("el valor del boleto es " + boleto);
}


// ejercicio9 llamada telefonica.
function ejercicio_nueve(){
	function valor_llamada(tiempo, costo){
	var valor = tiempo * costo; 
	return valor;
}
tiempo = parseInt(prompt("el tiempo de su llamada fue (ingrese minutos)"));
costo = parseInt(prompt("costo de la llamada"));
valor = valor_llamada(tiempo, costo);
alert("el costo final de la llamada es " + valor)
}

// ejercicio10 "cama arena" no FUNCIONA CORRECTAMENTE.(preguntar a blanca)

function ejercicio_diez(){
	function cama_arena(tiempo, valorxhora, habitaciones){
	var precioFinal = tiempo * valorxhora * habitaciones;
	return precioFinal; 
}
tiempo =  parseInt(prompt("ingrese el tiempo exacto"));
valorxhora =  parseInt(prompt("ingrese el valor fijo de la hora"));
habitaciones =  parseInt(prompt("ingrese el numero de habitaciones"));
precioFinal = cama_arena(habitaciones, tiempo, valorxhora);
alert("el precio final es " + precioFinal);
}

