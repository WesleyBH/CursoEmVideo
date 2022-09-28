let values = [];

function add() {
	const number = document.getElementById('inumber');
	const numbers = document.getElementById('inumber').valueAsNumber;
	const results = document.getElementById('iresults');
	const list = document.getElementById('ilist');
	const itens = document.createElement('option');
	if (values.indexOf(numbers) != -1) {
		alert(`Number ${numbers} has already been registered!`);
	} else {
		values.push(numbers);
		list.appendChild(itens);
		itens.text += `Number ${numbers} has been added.`;
		results.innerText = '';
	}
	number.value = '';
	number.focus();
	event.preventDefault();
}

function results() {
	const results = document.getElementById('iresults');
	let sum = 0;
	let mean = 0;
	for (let i = 0; i < values.length; i++) {
		var max = Math.max(...values);
		var min = Math.min(...values);
		sum += values[i];
	}
	mean += sum / values.length;
	results.innerText = `${values.length} values were registered.`;
	results.innerText += `\n The highest value is ${max}.`;
	results.innerText += `\n The lowest value is ${min}.`;
	results.innerText += `\n The sum is ${sum}.`;
	results.innerText += `\n The mean is ${mean.toFixed(2)}.`;
}

/* Descobrir maior e menor com FOR
valores = []
let maior, menor = valores[0]
for (let pos in valores) {
    soma += valores[pos]
    if (valores[pos] > maior)
    maior = valores[pos]
    if (valores[pos] < menor)
    menor = valores[pos]
}
*/
