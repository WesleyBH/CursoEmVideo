// eslint-disable-next-line no-unused-vars
function checkVal() {
	const currentYear = new Date().getFullYear();
	const birthYear = Number(document.getElementById('iyear').value);
	const sex = document.getElementsByName('sex');
	let result = document.getElementById('iresult');
	let age = currentYear - birthYear;
	let exp;
	let img = document.createElement('img');
	img.setAttribute('id', 'photo');

	if (birthYear.lenght == 0 || birthYear < 1900 || birthYear > currentYear) {
		result.innerHTML = `[ERROR] - CHECK THE DATA]`; //window.alert('[ERROR] - CHECK THE DATA')
	} else {
		if (sex[0].checked) {
			if (age < 11) {
				exp = 'boy';
				img.setAttribute('src', 'imgs/ex05-baby-m.png');
			} else if (age < 21) {
				exp = 'youngster';
				img.setAttribute('src', 'imgs/ex05-young-m.png');
			} else if (age < 51) {
				exp = 'male';
				img.setAttribute('src', 'imgs/ex05-adult-m.png');
			} else {
				exp = 'gentleman';
				img.setAttribute('src', 'imgs/ex05-old-m.png');
			}
		} else {
			if (age < 11) {
				exp = 'girl';
				img.setAttribute('src', 'imgs/ex05-baby-f.png');
			} else if (age < 21) {
				exp = 'young woman';
				img.setAttribute('src', 'imgs/ex05-young-f.png');
			} else if (age < 51) {
				exp = 'female';
				img.setAttribute('src', 'imgs/ex05-adult-f.png');
			} else {
				exp = 'lady';
				img.setAttribute('src', 'imgs/ex05-old-f.png');
			}
		}
		result.innerHTML = `<p>You're a ${age} year old ${exp}.</p>`;
		result.appendChild(img)
	}
}

/*

birthYear.length == 0 || birthYear < 1900
? window.alert('[ERROR] - CHECK THE DATA')
: sex[0].checked
	? (age < 11, exp = 'boy')
	? (age < 21, exp = 'youngster')
	: (age < 51, exp = 'male')
	: exp = 'gentleman'
sex[1].checked
	? (age < 11, exp = 'girl')
	? (age < 21, exp = 'young woman')
	: (age < 51, exp = 'female')
	: exp = ('lady');

const x = A ? B ? C ? "one" : "two" : "three" : "four";

if (A && B && C) return "one";
if (A && B) return "two";
if (A) return "three";

return "four"

*/