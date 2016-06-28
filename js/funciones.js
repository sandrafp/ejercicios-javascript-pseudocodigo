//----------ejercicio 1---------------
function funciones_1(){
	var a = parseInt(prompt("ingrese numero 1"));
var b = parseInt(prompt("ingrese numero 2"));
var c = parseInt(prompt("ingrese numero 3"));

function mayor_o_menor(a,b,c){
	var numeroMayor;
	if(a > b && a > c){
		numeroMayor = a
	}else if ( b > a && b > c){
		numeroMayor = b
	}else {
		numeroMayor = c
	}
	return numeroMayor;
}
var numeroMayor = mayor_o_menor(a,b,c);
alert("el numero mayor es "+ numeroMayor);
}

//------------ejercicio 2-------------
function funciones_2(){
	var a = parseInt(prompt("ingrese numero 1"));
var b = parseInt(prompt("ingrese numero 2"));
var c = parseInt(prompt("ingrese numero 3"));

function mayor_o_menor(a,b,c){
	var numeroMayor;
	if(a < b && a < c){
		numeroMayor = a
	}else if ( b < a && b < c){
		numeroMayor = b
	}else {
		numeroMayor = c
	}
	return numeroMayor;
}
var numeroMayor = mayor_o_menor(a,b,c);
alert("el numero menor es "+ numeroMayor);
}

//----------ejercicio 3  ayuda de internet preguntar a blanca.
function funciones_3(){
	var numerosIngresados = []; //array vacio
 
numerosIngresados.push(prompt("Introduce el primer número: "));// .push me ingresa el valor al array
numerosIngresados.push(prompt("Introduce el segundo número: "));
numerosIngresados.push(prompt("Introduce el tercer número: "));
 
var ordenados = numerosIngresados.sort(function (a,b) { // creo una funcion con dos parametros 
    return a - b;
});
 
alert(ordenados);
}

//-----------------------ejercicio 5 -------------
//Realizar un programa que repite un texto cualquiera en número de veces que queramos, utilizando un “for”

function funciones_5(){
for(i = 0; i <=9 ; i++){
	var texto = "sandra";
	console.log(texto + "<br>");
}
}


