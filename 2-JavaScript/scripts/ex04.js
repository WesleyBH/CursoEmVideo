function load() {
	const msg = document.getElementById('imsg');
	const time = document.getElementById('itime');
	const day = document.getElementById('iday');
	const img = document.getElementById('iphoto');
	const hour = String(new Date().getHours()).padStart(2, '0');
	const mins = String(new Date().getMinutes()).padStart(2, '0');
	const secs = String(new Date().getSeconds()).padStart(2, '0');
	time.innerText = `${hour}:${mins}:${secs}`;
	
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const dayWeek = days[new Date().getDay()];
	const date = new Date().toLocaleDateString();
	day.innerText = `${dayWeek} - ${date}`

/* 	switch (dayWeek) {
		case 0:
			day.innerText = `Sunday - ${date}`;
			break;
		case 1:
			day.innerText = `Monday - ${date}`;
			break;
		case 2:
			day.innerText = `Tuesday - ${date}`;
			break;
		case 3:
			day.innerText = `Wednesday - ${date}`;
			break;
		case 4:
			day.innerText = `Thursday - ${date}`;
			break;
		case 5:
			day.innerText = `Friday - ${date}`;
			break;
		case 6:
			day.innerText = `Saturday - ${date}`;
			break;
		default:
			'[ERROR] Invalid Day';
	} */

	hour < 6
		? (img.src = 'imgs/ex04-late.jpg') ((document.body.style.background = '#0c0527') (msg.innerText = 'Good Night!🌙'))
		: hour < 12
		? (img.src = 'imgs/ex04-morning.jpg') ((document.body.style.background = '#e2cd9f') (msg.innerText = 'Good Morning!🌞'))
		: hour < 18
		? (img.src = 'imgs/ex04-afternoon.jpg') ((document.body.style.background = '#8f3e23') (msg.innerText = 'Good Afternoon!☀️'))
		: (img.src = 'imgs/ex04-night.jpg') ((document.body.style.background = 'midnightblue') (msg.innerText = 'Good Evening!⭐'));
}
setInterval(load, 1000);
