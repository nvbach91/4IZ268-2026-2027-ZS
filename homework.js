console.log('Ahoj světe');

const tasksContainer = document.querySelector('#tasks');
const resultsContainer = document.querySelector('#results');

const showResult = (text) => {
  resultsContainer.innerText = text;
};

const createTaskButton = (id, label, callback) => {
  const button = document.createElement('button');
  button.innerText = label;
  button.setAttribute('id', id);
  button.addEventListener('click', callback);
  tasksContainer.appendChild(button);
};

const askNumber = (message) => {
  const input = prompt(message);
  if (input === null) {
    return null;
  }
  const value = parseFloat(input.replace(',', '.'));
  if (Number.isNaN(value)) {
    console.log('Zadaná hodnota není číslo!');
    return null;
  }
  return value;
};

const getAge = (birthYear) => new Date().getFullYear() - birthYear;

const printPepeAge = (birthYear) => {
  console.log(`Pepe se narodil v roce ${birthYear}, takže mu je ${getAge(birthYear)} let.`);
};

createTaskButton('task-1', "Uloha 1 (Pepe's age)", () => {
  const birthYear = askNumber('Zadej rok narození Pepy:');
  if (birthYear !== null) {
    printPepeAge(birthYear);
  }
});

const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

createTaskButton('task-2a', 'Uloha 2 (°C na °F)', () => {
  const celsius = askNumber('Zadej teplotu v °C:');
  if (celsius !== null) {
    console.log(`${celsius}°C = ${celsiusToFahrenheit(celsius).toFixed(2)}°F`);
  }
});

createTaskButton('task-2b', 'Uloha 2 (°F na °C)', () => {
  const fahrenheit = askNumber('Zadej teplotu v °F:');
  if (fahrenheit !== null) {
    console.log(`${fahrenheit}°F = ${fahrenheitToCelsius(fahrenheit).toFixed(2)}°C`);
  }
});

console.log(getAge(2000));
console.log(getAge(1990));
console.log(getAge(1985));
console.log(celsiusToFahrenheit(20));
console.log(celsiusToFahrenheit(-5));
console.log(celsiusToFahrenheit(0));
console.log(fahrenheitToCelsius(68));
console.log(fahrenheitToCelsius(100));
console.log(fahrenheitToCelsius(32));

const divide = (a, b) => a / b;

const showPercentage = (a, b) => {
  if (b === 0) {
    showResult('Nelze dělit nulou!');
    return;
  }
  showResult(`${a} je ${(divide(a, b) * 100).toFixed(2)}% z ${b}`);
};

console.log(divide(21, 42));
console.log(divide(1, 3));

createTaskButton('task-4a', 'Uloha 4 (21 z 42)', () => showPercentage(21, 42));
createTaskButton('task-4b', 'Uloha 4 (1 z 3)', () => showPercentage(1, 3));
createTaskButton('task-4c', 'Uloha 4 (dělení nulou)', () => showPercentage(5, 0));

const compareNumbers = (a, b) => {
  if (a > b) {
    showResult(`${a} je větší než ${b}`);
  } else if (a < b) {
    showResult(`${b} je větší než ${a}`);
  } else {
    showResult(`${a} a ${b} se rovnají`);
  }
};

createTaskButton('task-5a', 'Uloha 5 (celá: 5, 8)', () => compareNumbers(5, 8));
createTaskButton('task-5b', 'Uloha 5 (desetinná: 3.14, 2.71)', () => compareNumbers(3.14, 2.71));
createTaskButton('task-5c', 'Uloha 5 (zlomky: 1/3, 2/5)', () => compareNumbers(1 / 3, 2 / 5));
createTaskButton('task-5d', 'Uloha 5 (rovnají se: 0.5, 1/2)', () => compareNumbers(0.5, 1 / 2));

const printMultiplesOf13 = () => {
  const multiples = [];
  for (let i = 0; i <= 730; i += 13) {
    multiples.push(i);
  }
  showResult(multiples.join(', '));
};

createTaskButton('task-6', 'Uloha 6 (násobky 13)', printMultiplesOf13);

const circleArea = (radius) => Math.PI * radius ** 2;

createTaskButton('task-7', 'Uloha 7 (obsah kruhu, r = 5)', () => {
  const radius = 5;
  showResult(`Obsah kruhu o poloměru ${radius} je ${circleArea(radius).toFixed(2)}`);
});

const coneVolume = (height, radius) => (Math.PI * radius ** 2 * height) / 3;

createTaskButton('task-8', 'Uloha 8 (objem kuželu, v = 10, r = 3)', () => {
  const height = 10;
  const radius = 3;
  showResult(
    `Objem kuželu s výškou ${height} a poloměrem ${radius} je ${coneVolume(height, radius).toFixed(2)}`
  );
});

const isTriangle = (a, b, c) =>
  a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;

const checkTriangle = (a, b, c) => {
  const result = isTriangle(a, b, c);
  showResult(`Strany a = ${a}, b = ${b}, c = ${c}: ${result ? 'ano' : 'ne'}`);
  return result;
};

createTaskButton('task-9a', 'Uloha 9 (3, 4, 5)', () => checkTriangle(3, 4, 5));
createTaskButton('task-9b', 'Uloha 9 (1, 2, 10)', () => checkTriangle(1, 2, 10));

const triangleArea = (a, b, c) => {
  const container = document.querySelector('#results');

  if (!isTriangle(a, b, c)) {
    container.innerText = `Z délek ${a}, ${b}, ${c} nelze sestrojit trojúhelník.`;
    return;
  }

  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  container.innerText = `Obsah trojúhelníku se stranami ${a}, ${b}, ${c} je ${area.toFixed(2)}`;
};

createTaskButton('task-10a', 'Uloha 10 (3, 4, 5)', () => triangleArea(3, 4, 5));
createTaskButton('task-10b', 'Uloha 10 (1, 2, 10)', () => triangleArea(1, 2, 10));
