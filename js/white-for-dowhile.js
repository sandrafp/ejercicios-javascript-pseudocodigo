// si se cuantas veces hare la iteración es un FOR!!!!!


// ejeercicio 1
function do_1(){
	var total, i;
	total = 0;
	i = 10;

	while(i > 0){
		i--;
		total = total + parseInt(prompt("escriba su numero aquí, le quedan " + (i+1)));
	}
	alert("la suma es " + total);
}

function do_2(){
	var total = 0;
	for(i= 10; i > 0; i--){
		total = total + parseInt(prompt("escriba su numero aquí, le quedan " + (i)));
	}
	alert("la suma es " + total);

}
function do_3(){
	var total = 0;
	var i = 10; 
	do{
		i--;
		total = total + parseInt(prompt("escriba su numero aquí, le quedan " + (i + 1)));
	}while(i > 0)
	alert("la suma total es " + total);
}




//ejercicio 2 
// var total
// total = 0;
// i = 10;
// do{
// 	i--;
// 	total = total + parseInt(prompt("escriba su numero aquí, le quedan " + (i+1)));
// }while(i > 0);
// alert("la suma es " + total);

//ejercicio 3 siclo for 
// for(i = 10; i > 0 ; i--){
// 	total = total + parseInt(prompt("escriba su numero aquí, le quedan " + (i)));
// }
// alert("la suma es " + total)

//---------------------------------ejercicio 4 edad promedio --------------------------------------
function do_4(){
	var alumnos = parseInt(prompt("ingrese cantidad de alumnos"));
var rangoEdad = 0;
var promedio;
i = 0;

for(i=0; i < alumnos; i++){
	rangoEdad = rangoEdad + parseInt(prompt("ingrese promedio de edad"));
	promedio = rangoEdad / alumnos;
}
alert("el promedio de edades es " + promedio)
}


// while(i < alumnos){
// 	i++;
// 	rangoEdad = rangoEdad + parseInt(prompt("ingrese promedio de edad"));
// 	promedio = rangoEdad / alumnos;

// }
// alert("el promedio de edades es " + promedio)

// do{
// 	i++;
// 	rangoEdad = rangoEdad + parseInt(prompt("ingrese promedio de edad"));
// 	promedio = rangoEdad / alumnos;
// }while(i < alumnos)
// alert("el promedio de edades es " + promedio)

//ejercicio 5 numeros pares.
function do_5(){
	for (i = 0; i <= 100; i++){
	if (i % 2 === 0) {
		console.log(i);
	};
}
}

//ejercicio 6 triangulo hecho en clases buscar apuntes en cuaderno-----------
//------------ ejercicio 7 tabla de multiplicar ---------------
function do_7(){
	var NumeroIngresado = parseInt(prompt("ingrese un numero"));

for(i = 0 ; i <= 24; i++){
	var tabla = NumeroIngresado * i;
	document.write( NumeroIngresado +" x" + " " + i + "=" + " "+ tabla +"<br>");
}
}

//------------ejercicio 8 numero elevado a la N potencia ---- hecho en clases--------------
// potencia es el numero al que voy a elevar
// base es el numero que va a ser elevado
// total sera el resultado de la base elevado a la potencia
//leer el ejercicio;
function do_8(){
	var potencia, base, total; 
	base = parseInt(prompt("ingrese la base"));
	potencia = parseInt(prompt("ingrese la potencia"));
	total = base;  // la primera vez;
	for(i = 0; i < potencia-1; i++){
		// lo que quiero que cumpla lo hago aqui.
		total = total * base;
}
alert(base + " elevado a " + potencia + " es igual a " + total);

}
// ejercicio 8 si con solucion alternativa

// var potencia, base, total;
// do{
// 	base = parseInt(prompt("ingrese su numero base"));
// 	if(isNaN(base)){
// 		alert("lo ingresado no es un numero");
// 	}
// }while(isNaN(base))
// do{
// 	potencia = parseInt(prompt("ingrese su numero potencia"));
// 	if(isNaN(potencia)){
// 		alert("lo ingresado no es un numero");
// 	}
// }while(isNaN(potencia))

// total = base; //la primera vez ojo.
// for(i = 0; i < potencia-1; i++){
//  	// lo que quiero que cumpla lo hago aqui.
//  	total = total * base;
// }
// alert(base + " elevado a " + potencia + " es igual a " + total); 

//----------- calificaciones de alumnos.NO HAGO LO QUE EL EJERCICIO ME PIDE!!!! HELP-----------------
// Suponga que se tiene las calificaciones de un grupo de 40 alumnos.

// Realizar un algoritmo para calcular la calificación media y la calificación más baja de todo el grupo.
var alumnos = 5;
for(i=0; i < alumnos; i++){
	var notas = prompt("ingrese nota") / alumnos; 
}
alert("la media de notas es " + notas);

//-----------ejercicio 10 cubo y cuarta de un numero BUSCAR INFO.--------------------------------------------









 


