//--------------------------------- ejercicio 1 ---------------------------------
function if_condicional_javascript(){
	var numero1 = 5;
	var numero2 = 8;

	if(5 < 8) { 
	    alert("numero1 no es mayor que numero2"); 
	}

	if(8 > 0){
	  alert("numero2 es positivo");
	}

	if(5 > 0){
	  alert("numero1 es negativo o distinto de cero");
	}

	if(numero2 < 8){
  alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
	}
}

//-------------------------- ejercicio 2 ------------------------------------
// El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores
// n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120

// Utilizando la estructura for, crear un script que calcule el factorial de un número entero.
function factorial(){
	var N = parseInt(prompt("ingrese numero entero"));
var operacion = 1;
function factorial(	N){
	for(i= 1; i <= N; i++){
	operacion = operacion * i;
	}
	return operacion;
}
var operacion = factorial(N);
alert("el factorial es " + operacion);
}

//------------------------------------------ejercicio 3-----------------------------------------


	
function algo(){
	var x = parseInt(prompt("ingrese el primer numero"));
	var y = parseInt(prompt("ingrese el segundo numero"));
	if(x > y){
	var operacion = (x + y) - (x - y);
	 alert("aqui entro");
	}else if(x === y){
	alert("los numeros son iguales, ingrese otro");
	}else{
	operacion = (x * y) + (x / y);
	}
	alert("el resultado es " + operacion);
	return operacion;
}


//----------------------------------ejercicio 4 -------------------------------------------------
// En un banco se procesan datos de las cuentas corrientes de sus clientes.
 // De cada cuenta corriente se conoce: número de cuenta, nombre del cliente y saldo actual.
 // El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta.

// Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:

// a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:

// Estado de la cuenta:

// 'Acreedor' si el saldo es >0.
//'Deudor' si el saldo es <0. 'Nulo' si el saldo es =0.
// b) La suma total de los saldos acreedores.







