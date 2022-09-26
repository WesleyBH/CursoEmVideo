// RECURSIVIDADE && VARIÁVEL
let fac = function factorial(number) {
	if (number === 1) {
		return 1;
	} else {
		return number * factorial(number - 1);
	}
};

console.log(`The FACTORIAL of 5 is ${fac(5)}.`);
