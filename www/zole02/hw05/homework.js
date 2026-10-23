/* HOMEWORK */

// 0) Pre-preparace: kontrola připojení skriptu
console.log('Ahoj světe');

// Kontejnery na stránce
const tasksContainer = document.querySelector('#tasks');
const resultsContainer = document.querySelector('#results');

// Pomocné funkce
const showResult = (text) => {
  resultsContainer.textContent = text;
};

const createTaskButton = (id, label, callback) => {
  const button = document.createElement('button');
  button.innerText = label;
  button.setAttribute('id', id);
  button.addEventListener('click', callback);
  tasksContainer.appendChild(button);
};

const round = (number) => Math.round(number * 10000) / 10000;

/**
 * 1) Pepe's age
 */
const pepesBirthYear = 2000;
const currentYear = new Date().getFullYear();
console.log('Pepa se narodil v roce ' + pepesBirthYear + ', takže je mu ' + (currentYear - pepesBirthYear) + ' let.');

/**
 * 2) WTF - teploty
 */
const celsiusValue = 20;
const fahrenheitValue = 68;
console.log(`${celsiusValue}°C = ${celsiusValue * 9 / 5 + 32}°F`);
console.log(`${fahrenheitValue}°F = ${(fahrenheitValue - 32) * 5 / 9}°C`);

/**
 * 3) Funkce + tlačítka
 */
const printPepesAge = (birthYear) => {
  const text = `Pepa se narodil v roce ${birthYear}, takže je mu ${new Date().getFullYear() - birthYear} let.`;
  console.log(text);
  return text;
};

const printCelsiusToFahrenheit = (celsius) => {
  const text = `${celsius}°C = ${round(celsius * 9 / 5 + 32)}°F`;
  console.log(text);
  return text;
};

const printFahrenheitToCelsius = (fahrenheit) => {
  const text = `${fahrenheit}°F = ${round((fahrenheit - 32) * 5 / 9)}°C`;
  console.log(text);
  return text;
};

// Zkušební volání v konzoli
printPepesAge(1990);
printPepesAge(2005);
printCelsiusToFahrenheit(0);
printCelsiusToFahrenheit(100);
printFahrenheitToCelsius(32);
printFahrenheitToCelsius(212);

createTaskButton('task-1', "Úloha 1 (Pepe's age)", () => {
  showResult(printPepesAge(2000));
});

createTaskButton('task-2-1', 'Úloha 2 (°C na °F)', () => {
  showResult(printCelsiusToFahrenheit(20));
});

createTaskButton('task-2-2', 'Úloha 2 (°F na °C)', () => {
  showResult(printFahrenheitToCelsius(68));
});

/**
 * 4) Podíl v procentech
 */
const getPercentage = (a, b) => {
  if (b === 0) {
    return 'Nelze dělit nulou.';
  }
  return `${a} je ${(a / b * 100).toFixed(2)}% z ${b}`;
};

createTaskButton('task-4-1', 'Úloha 4 (21 z 42)', () => {
  showResult(getPercentage(21, 42));
});

createTaskButton('task-4-2', 'Úloha 4 (dělení nulou)', () => {
  showResult(getPercentage(5, 0));
});

/**
 * 5) Kdo s koho
 */
const compareNumbers = (a, b) => {
  if (a > b) {
    return `${round(a)} je větší než ${round(b)}`;
  }
  if (a < b) {
    return `${round(b)} je větší než ${round(a)}`;
  }
  return `${round(a)} a ${round(b)} se rovnají`;
};

const compareCases = [
  { label: 'celá čísla', a: 3, b: 8 },
  { label: 'desetinná čísla', a: 3.7, b: 3.2 },
  { label: 'zlomky (1/3 a 1/4)', a: 1 / 3, b: 1 / 4 },
  { label: 'zlomek a desetinné číslo (1/2 a 0.5)', a: 1 / 2, b: 0.5 },
  { label: 'záporná čísla', a: -5, b: -2 }
];

compareCases.forEach((item, index) => {
  createTaskButton(`task-5-${index + 1}`, `Úloha 5 (${item.label})`, () => {
    showResult(compareNumbers(item.a, item.b));
  });
});

/**
 * 6) Násobky 13 do 730 včetně nuly
 */
const printMultiplesOf13 = () => {
  const multiples = [];
  for (let i = 0; i <= 730; i += 13) {
    multiples.push(i);
  }
  const text = multiples.join(', ');
  console.log(text);
  return text;
};

createTaskButton('task-6', 'Úloha 6 (násobky 13)', () => {
  showResult(printMultiplesOf13());
});

/**
 * 7) Obsah kruhu
 */
const getCircleArea = (radius) => Math.PI * radius ** 2;

createTaskButton('task-7-1', 'Úloha 7 (kruh r = 5)', () => {
  showResult(`Obsah kruhu s poloměrem 5 je ${getCircleArea(5).toFixed(2)}`);
});

createTaskButton('task-7-2', 'Úloha 7 (kruh r = 2.5)', () => {
  showResult(`Obsah kruhu s poloměrem 2.5 je ${getCircleArea(2.5).toFixed(2)}`);
});

/**
 * 8) Objem kuželu
 */
const getConeVolume = (height, radius) => Math.PI * radius ** 2 * height / 3;

createTaskButton('task-8-1', 'Úloha 8 (kužel v = 10, r = 3)', () => {
  showResult(`Objem kuželu (v = 10, r = 3) je ${getConeVolume(10, 3).toFixed(2)}`);
});

createTaskButton('task-8-2', 'Úloha 8 (kužel v = 4, r = 1.5)', () => {
  showResult(`Objem kuželu (v = 4, r = 1.5) je ${getConeVolume(4, 1.5).toFixed(2)}`);
});

/**
 * 9) Lze postavit trojúhelník?
 */
const isTriangle = (a, b, c) => {
  return a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;
};

const checkTriangle = (a, b, c) => {
  const valid = isTriangle(a, b, c);
  const text = `Strany a = ${a}, b = ${b}, c = ${c}: ${valid ? 'ano' : 'ne'} (${valid})`;
  console.log(text);
  showResult(text);
  return valid;
};

createTaskButton('task-9-1', 'Úloha 9 (3, 4, 5)', () => {
  checkTriangle(3, 4, 5);
});

createTaskButton('task-9-2', 'Úloha 9 (1, 2, 10)', () => {
  checkTriangle(1, 2, 10);
});

/**
 * 10) Heronův vzorec
 */
// krok 1 - funkce
const printTriangleArea = (a, b, c) => {
  // krok 1.1 - container pro výsledky vybraný selektorem
  const container = document.querySelector('#results');

  // krok 1.2 - validace pomocí funkce z úlohy 9
  if (!isTriangle(a, b, c)) {
    container.textContent = `Ze stran ${a}, ${b}, ${c} nelze postavit trojúhelník.`;
    return;
  }

  // krok 1.3 - výpočet podle Heronova vzorce
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  // krok 1.4 - výpis výsledku
  container.textContent = `Obsah trojúhelníku se stranami ${a}, ${b}, ${c} je ${area.toFixed(2)}`;
};

// krok 2 a 3 a 4 - tlačítka s callbackem, umístěná na stránku
createTaskButton('task-10-1', 'Úloha 10 (3, 4, 5)', () => {
  printTriangleArea(3, 4, 5);
});

createTaskButton('task-10-2', 'Úloha 10 (1, 2, 10)', () => {
  printTriangleArea(1, 2, 10);
});