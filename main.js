'use strict';

const setBg = () => {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	document.body.style.backgroundColor = '#' + randomColor;
	color.innerHTML = 'Color is: ' + '#' + randomColor;
	console.log(`the color is: #${randomColor}`);
};

document.addEventListener('click', setBg);
setBg();
