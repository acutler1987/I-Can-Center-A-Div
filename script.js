'use strict';

const hello = function () {
	console.log('Hello from script.js!');
};

const html = `
    <p>HELLO</p>
`;

const test = function () {
	document.getElementById('divone').insertAdjacentHTML('afterbegin', html);
};

document.getElementById('divone').addEventListener('mouseenter', test());
// document.getElementById('divone').addEventListener('mouseleave', test());

// document.getElementById('divtwo').addEventListener('mouseenter', test());
// document.getElementById('divtwo').addEventListener('mouseleave', test());

// document.getElementById('divthree').addEventListener('mouseenter', test());
// document.getElementById('divthree').addEventListener('mouseleave', test());
