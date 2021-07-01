function thoigian(){
	const second = document.querySelector('#seconds')
	let d = new Date();
	second.innerHTML = d.getSeconds();
	let seconds = second.innerHTML;

	const min = document.querySelector('#min')
	min.innerHTML = d.getMinutes();
	let mins = min.innerHTML;

	const hours = document.querySelector('#hourss')
	hours.innerHTML = d.getHours();
	let hourss = hours.innerHTML;
}
setInterval(thoigian,1000);
const xoay = document.querySelectorAll('.img-studio');
const xoay1 = document.querySelector('#onmou');
const holo = document.querySelector('.text-container');

