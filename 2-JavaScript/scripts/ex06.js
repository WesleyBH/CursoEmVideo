// eslint-disable-next-line no-unused-vars
function count() {
	let begin = document.getElementById('ibegin').valueAsNumber;
	let end = document.getElementById('iend').valueAsNumber;
	let step = document.getElementById('istep').valueAsNumber;
	let result = document.getElementById('iresult');

	result.innerHTML = 'Couting:<br>';

	if (step < 0) {
		step = step * -1;
		window.alert(`INVALID STEP! CONSIDERING STEP = ${step}`);
	} else if (step == 0) {
		step = 1;
		window.alert(`INVALID STEP! CONSIDERING STEP = 1`);
	}

	if (begin <= end) {
		if (step >= end) {
			result.innerHTML = `[ERROR] - STEP MUST BE LESS THAN END!`;
		} else {
			// CONTAGEM CRESCENTE
			/* 			while (begin < end) {
				result.innerHTML += ` ${begin} &#x1F449`;
				begin += step;
			} */
			for (let c = begin; c <= end; c += step) {
				result.innerHTML += ` ${c} &#x1F449`;
			}
			result.innerHTML += `\u{1F3C1}`;
		}
	} else {
		if (step >= begin) {
			result.innerHTML = `[ERROR] - STEP MUST BE LESS THAN BEGIN!`;
		} else {
			// CONTAGEM DECRESCENTE
			/* 			while (end < begin) {
				result.innerHTML += ` ${begin} &#x1F449`;
				begin -= step;
			} */
			for (let c = begin; c >= end; c -= step) {
				result.innerHTML += ` ${c} &#x1F449`;
			}
			result.innerHTML += `\u{1F3C1}`;
		}
	}
	event.preventDefault();
}

// eslint-disable-next-line no-unused-vars
function clean() {
	let result = document.getElementById('iresult');
	result.innerText = '';
}
