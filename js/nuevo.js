// triangulo !!!!!!

for(var i = 1; i <= 22; i++){
	for(var j = 1; j <= 22; j++){
		for(var k = 1; k <= 22; k++){
			if((i * i) + (j * j) === (k * k)){
				console.log("(" + i + "," + j + "," + k + ")");
			}
		}
	}
}


