function convertirEnCelsius(fahrenheit) {
	let celsius = ((fahrenheit - 32) * 5) / 9;
	return Number(celsius);
}

console.log(convertirEnCelsius(100)); // Résultat : 37.7778
