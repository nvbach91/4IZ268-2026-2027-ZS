/* HOMEWORK */
/**
 * 0) Pre-preparacion.
 * - Vytvořte HTML stránku s nadpisem h1 "JavaScript is awesome!" 
 * - Na stránce vytvořte místo pro umístění jednotlivých spouštěčů úkolů - tlačítek (tj. div, který má id s hodnotou "tasks" - <div id="tasks"></div>). 
 * - Na stránce vytvořte místo pro výpis výsledků úkolů (div, který má id s hodnotou "result" - <div id="results"></div>).
 * 
 * - Připojte tento homework.js soubor k vytvořené HTML stránce pomocí tagu <script> (viz LAB) a vyzkoušejte
 * console.log('Ahoj světe');
 */
console.log('Ahoj světe');


/**
 * 1) Pepe's age. Vypište na konzoli smysluplnou oznamovací větu s věkem Pepy, pokud znáte jeho rok narození, 
 * který je uložený v proměnné a pro výpis použijte zřetězení stringů nebo interpolaci. Pro názvy proměnných 
 * používejte smysluplnou angličtinu.
 */
// Solution here
const pepeBirthYear = 1990;
const currentYear = new Date().getFullYear();
const pepeAge = currentYear - pepeBirthYear;
console.log(`Pepe is ${pepeAge} years old.`);





/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak. 
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32. 
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9. 
 */
// Solution here
const temperatureInCelsius = 20;
const temperatureInFahrenheit = 68;
const convertedToFahrenheit = (temperatureInCelsius * 9) / 5 + 32;
const convertedToCelsius = ((temperatureInFahrenheit - 32) * 5) / 9;
console.log(`${temperatureInCelsius}°C = ${convertedToFahrenheit}°F`);
console.log(`${temperatureInFahrenheit}°F = ${convertedToCelsius}°C`);





/**
 * 3) Funkce function fonction funktio. Vemte předchozí úlohy a udělejte z nich funkce. Tj. vytvoříte funkce, 
 * které přijímají argumenty, a na základě argumentů po zavolání vypíše výsledek na konzoli. 
 * Párkrát zavolejte tyto funkce s různými argumenty. V konzoli také vyzkoušejte, zda fungují vaše funkce. 
 * 
 * Pro testování funkce:
 * - Pouze pomocí JavaScriptu (bez knihoven) vytvořte HTML tlačítko s názvem této úlohy, resp. co funkce dělá, a 
 * id s číslem úlohy <button id="task-1">Uloha 1 (Pepe's age)</button>, umístěte ho na stránku do předem vytvořeného 
 * místa <div id="tasks"></div> a pomocí posluchače události "click" nabindujte implementovanou funkci na toto tlačítko.
 * 
 * Výsledkem má být tlačítko, na které když kliknete, tak se provede to, co je implementováno ve funkci.
 *
 * Příklad vytvoření tlačítka s funkcí:
 * 
 * // deklarace a implementace funkce
 * const sayHello = () => {
 *   console.log('Hello');
 * };
 * 
 * // vytvoření tlačítka
 * const buttonSayHello = document.createElement('button');
 * // nastavení textu tlačítka
 * buttonSayHello.innerText = 'Say Hello';
 * // nastavení atributu id tlačítka
 * buttonSayHello.setAttribute('id', 'task-0');
 * // nabindování funkce na událost click tlačítka
 * buttonSayHello.addEventListener('click', () => {
 *   sayHello();
 * });
 * 
 * // výběr existujícího elementu na stránce s id="tasks"
 * const tasks = document.querySelector('#tasks');
 * // vložení vytvořeného tlačítka do vybraného elementu na stránce
 * tasks.appendChild(buttonSayHello);
 */
// Solution here
const tasksContainer = document.querySelector('#tasks');
const resultsContainer = document.querySelector('#results');

const createTaskButton = (id, label, callback) => {
  const button = document.createElement('button');
  button.innerText = label;
  button.setAttribute('id', id);
  button.addEventListener('click', () => {
    callback();
  });
  tasksContainer.appendChild(button);
};

const printResult = (text) => {
  const line = document.createElement('p');
  line.innerText = text;
  resultsContainer.appendChild(line);
};

const printPepeAge = (birthYear) => {
  const age = new Date().getFullYear() - birthYear;
  console.log(`Pepe is ${age} years old.`);
};

const celsiusToFahrenheit = (celsius) => {
  const fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`${celsius}°C = ${fahrenheit}°F`);
};

const fahrenheitToCelsius = (fahrenheit) => {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  console.log(`${fahrenheit}°F = ${celsius}°C`);
};

printPepeAge(1990);
printPepeAge(2000);
celsiusToFahrenheit(20);
celsiusToFahrenheit(-40);
fahrenheitToCelsius(68);
fahrenheitToCelsius(-40);

createTaskButton('task-1', 'Uloha 1 (Pepe\'s age)', () => printPepeAge(1990));
createTaskButton('task-2a', 'Uloha 2 (C -> F)', () => celsiusToFahrenheit(20));
createTaskButton('task-2b', 'Uloha 2 (F -> C)', () => fahrenheitToCelsius(68));





/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla. 
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro 
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2); 
 * Pozor na dělení nulou! 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
// Solution here
const printPercentage = (a, b) => {
  if (b === 0) {
    printResult('Nelze dělit nulou!');
    return;
  }
  const percentage = ((a / b) * 100).toFixed(2);
  printResult(`${a} je ${percentage}% z ${b}`);
};

createTaskButton('task-4a', 'Uloha 4 (21 z 42)', () => printPercentage(21, 42));
createTaskButton('task-4b', 'Uloha 4 (1 z 3)', () => printPercentage(1, 3));
createTaskButton('task-4c', 'Uloha 4 (dělení nulou)', () => printPercentage(5, 0));





/**
 * 5) Kdo s koho. Vytvořte funkci, která vezme 2 číselné argumenty a vypíše, který z nich je větší, do předem vytvořeného 
 * místa na strácne. Pokud se čísla rovnají, vypište, že se rovnají. 
 * 
 * Vyzkoušejte funkčnost pro celá čísla, desetinná čísla, zlomky, atd., tj. vytvoříte tlačítko s událostí pro každou
 * kombinaci argumentů a zkuste ji párkrát zavolat kliknutím na toto tlačítko. Tlačítka vytvářejte podle pokynu v 
 * úloze č. 3. Argumenty pro volání funkce zadávejte staticky.
 */
// Solution here
const printGreater = (a, b) => {
  if (a > b) {
    printResult(`${a} je větší než ${b}`);
  } else if (a < b) {
    printResult(`${b} je větší než ${a}`);
  } else {
    printResult(`${a} a ${b} se rovnají`);
  }
};

createTaskButton('task-5a', 'Uloha 5 (celá čísla)', () => printGreater(5, 10));
createTaskButton('task-5b', 'Uloha 5 (desetinná čísla)', () => printGreater(3.14, 2.71));
createTaskButton('task-5c', 'Uloha 5 (zlomky 1/3 a 2/5)', () => printGreater(1 / 3, 2 / 5));
createTaskButton('task-5d', 'Uloha 5 (rovnost 1/2 a 0.5)', () => printGreater(1 / 2, 0.5));





/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší 
 * nebo rovno 730, včetě nuly. Používejte for cyklus. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here
const printMultiplesOf13 = () => {
  const multiples = [];
  for (let i = 0; i <= 730; i += 13) {
    multiples.push(i);
  }
  printResult(multiples.join(', '));
};

createTaskButton('task-6', 'Uloha 6 (násobky 13)', printMultiplesOf13);





/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu. 
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
const printCircleArea = (radius) => {
  const area = Math.PI * radius * radius;
  printResult(`Obsah kruhu s poloměrem ${radius} je ${area.toFixed(2)}`);
};

createTaskButton('task-7a', 'Uloha 7 (r = 1)', () => printCircleArea(1));
createTaskButton('task-7b', 'Uloha 7 (r = 5)', () => printCircleArea(5));





/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
const printConeVolume = (height, radius) => {
  const volume = (Math.PI * radius * radius * height) / 3;
  printResult(`Objem kuželu s výškou ${height} a poloměrem ${radius} je ${volume.toFixed(2)}`);
};

createTaskButton('task-8a', 'Uloha 8 (výška 10, r = 3)', () => printConeVolume(10, 3));
createTaskButton('task-8b', 'Uloha 8 (výška 4, r = 2)', () => printConeVolume(4, 2));





/** 
 * 9) Not sure if triangle, or just some random values. Vytvořte funkci, která rozhodne, zda se z 
 * dodaných 3 délek na argumentu funkce dá postavit trojúhelník, tj. vypíše tyto 3 délky stran a, b, a c
 * a výsledek buď ano/ne, true/yes nebo false/no. Z funkce vraťte hodnotu true/false
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
const isTriangle = (a, b, c) => {
  const result = a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;
  printResult(`Strany a = ${a}, b = ${b}, c = ${c}: ${result ? 'ano' : 'ne'}`);
  return result;
};

createTaskButton('task-9a', 'Uloha 9 (3, 4, 5)', () => isTriangle(3, 4, 5));
createTaskButton('task-9b', 'Uloha 9 (1, 2, 3)', () => isTriangle(1, 2, 3));
createTaskButton('task-9c', 'Uloha 9 (1, 1, 10)', () => isTriangle(1, 1, 10));





/**
 * 10) Heroic performance. Vytvořte funkci, která vypočte a vypíše obsah trojúhelníka podle Heronova vzorce, 
 * tj. funkce dostane délky všech 3 stran. Použijte přitom předchozí validaci v úloze č. 9, tj. počítejte pouze, 
 * když to má smysl. Hint: funkce pro odmocninu je Math.sqrt().
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
// - krok 1 - vytvořte funkci
//   - krok 1.1 - pomocí selektoru vyberte container pro výpis výsledků a uložte ho do proměnné
//   - krok 1.2 - zvalidujte vstupní argumenty pomocí funkce z úlohy č. 9
//     - v případě nevalidních hodnot vypište chybovou hlášku na místo pro výpis výsledků a funkci ukončete
//     - v případě validních hodnot pokračujte s výpočtem
//   - krok 1.3 - spočítejte obsah trojúhelníku podle Heronovy vzorce a výsledek uložte do proměnné
//   - krok 1.4 - vypište výsledek na místo pro výpis výsledků
// - krok 2 - vytvořte tlačítko
// - krok 3 - nabindujte na toto tlačítko callback, ve kterém zavoláte implementovanou funkci pro výpočet a výpis výsledků
// - krok 4 - tlačítko umístěte na stránku
// - krok 5 - otestujte řešení klikáním na tlačítko
const printTriangleArea = (a, b, c) => {
  const results = document.querySelector('#results');
  if (!isTriangle(a, b, c)) {
    printResult('Chyba: z těchto délek nelze sestrojit trojúhelník.');
    return;
  }
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  results.appendChild(document.createElement('p')).innerText = `Obsah trojúhelníku (${a}, ${b}, ${c}) je ${area.toFixed(2)}`;
};

createTaskButton('task-10a', 'Uloha 10 (3, 4, 5)', () => printTriangleArea(3, 4, 5));
createTaskButton('task-10b', 'Uloha 10 (nevalidní 1, 2, 3)', () => printTriangleArea(1, 2, 3));
