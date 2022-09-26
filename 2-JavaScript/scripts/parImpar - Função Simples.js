function oddsEvens(number) {
	if (number % 2 === 0) {
		return `The number ${number} is EVEN!`;
	} else {
		return `The number ${number} is ODD!`;
	}
}

console.log(oddsEvens(4));
console.log(oddsEvens(9));

/* let result = oddsEvens(10);
console.log(result);
 */
