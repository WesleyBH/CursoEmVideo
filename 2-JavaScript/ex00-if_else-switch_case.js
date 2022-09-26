/* console.log('Informe a sua nacionalidade');
let nac = 'US';
nac == 'BR'
	? console.log(`Sua Nacionalidade  é ${nac} e voce eh sofredor`)
	: console.log(`Sua Nacionalidade é ${nac} e voce eh ricaço meu consagrado!`);
*/

/* var idade = 71;
idade < 16
	? console.log(`Você tem ${idade} anos e não pode votar ainda`)
	: idade < 18 || idade > 70
	? console.log(`Você tem ${idade} anos e seu voto é opcional`)
	: console.log(`Você tem ${idade} anos e o seu voto é obrigatório`)
*/

var hora = new Date().getHours();
hora < 6 ? console.log('Madrugada') : hora < 12 ? console.log('Manhã') : hora < 18 ? console.log('Tarde') : console.log('Noite');

var dia = new Date().getDay();
switch (dia) {
	case 0:
		console.log('Domingo');
		break;
	case 1:
		console.log('Segunda');
		break;
	case 2:
		console.log('Terça');
		break;
	case 3:
		console.log('Quarta');
		break;
	case 4:
		console.log('Quinta');
		break;
	case 5:
		console.log('Sexta');
		break;
	case 6:
		console.log('Sábado');
		break;
	default:
		console.log('[ERRO] Dia inválido');
}
