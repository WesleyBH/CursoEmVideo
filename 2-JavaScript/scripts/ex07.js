// eslint-disable-next-line no-unused-vars
function mult() {
	let number = document.getElementById('inumber').valueAsNumber;
	let result = document.getElementById('iresult');
	let product;

	result.innerText = '';

	for (let c = 1; c <= 10; c++) {
		product = number * c;
		let itens = document.createElement('option');
		itens.text += `${number} x ${c} = ${product}`;
		itens.value = `result${c}`
		result.appendChild(itens);
	}
	event.preventDefault();
}
