//Calculator
const btnNumber = document.getElementsByName('data-number');
const btnOperation = document.getElementsByName('data-operation');
const btnDot = document.querySelector('#btn-dot');
const btnEqual = document.querySelector('#btn-equal');
const btnAc = document.querySelector('#btn-ac');
const result = document.querySelector('#result');
const operationContainer = document.querySelector('.operations-container');

let opActual = '';
let opAnterior = '';
let operator = '';
const printNumber = (num) => {
	result.innerHTML += `${num}`;
	if (operator === '') {
		opAnterior += num;
	}
	if (operator !== '') {
		opActual += num;
	}
	parseFloat(num);
};
const printOperation = (op) => {
	if (opAnterior === '') return;
	if (operator !== '') return;
	else {
		operator = op;
	}
	if (op.innerHTML == 'X') {
		op = toLowerCase(op);
	}
	result.innerHTML += `<b class="operation-color">${op}</b>`;
};

const clearDisplay = () => {
	result.innerText = '';
	opAnterior = '';
	opActual = '';
	operator = '';
	operationContainer.textContent = '';
};

const updateDisplay = (res) => {
	opAnterior = res;
	operator = '';
	opActual = '';
	if (isNaN(res)) {
		result.innerHTML = `<b>ERROR</b>`;
		opAnterior = 0;
	} else {
		result.innerHTML = res;
	}
};

const updateResults = (op1, op2, operator, result) => {
	operationContainer.innerHTML += ` <p>${op1} ${operator} ${op2} = ${result}</p>`;
};

const calculate = (op1, op2, operator) => {
	let result = 0;
	op1 = parseFloat(op1);
	op2 = parseFloat(op2);
	if (operator === '+') result = op1 + op2;
	if (operator === '-') result = op1 - op2;
	if (operator === 'X') result = op1 * op2;
	if (operator === '/') result = op1 / op2;
	if (operator === '%') result = op1 % op2;
	result = parseFloat(result.toFixed(2));
	updateResults(op1, op2, operator, result);
	updateDisplay(result);
};

btnNumber.forEach((btn) =>
	btn.addEventListener('click', () => printNumber(btn.innerText))
);
btnOperation.forEach((btn) =>
	btn.addEventListener('click', () => printOperation(btn.innerText))
);

btnEqual.addEventListener('click', () => {
	calculate(opAnterior, opActual, operator);
});

btnAc.addEventListener('click', () => clearDisplay());
