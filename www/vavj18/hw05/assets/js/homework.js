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

// Pomocná funkce pro snadnější vytváření tlačítek
const createButton = (id, text, callback) => {
    const button = document.createElement('button');
    button.innerText = text;
    button.setAttribute('id', id);
    button.addEventListener('click', callback);
    document.querySelector('#tasks').appendChild(button);
};

// Pomocná funkce pro výpis na stránku
const printResult = (text) => {
    document.querySelector('#results').innerText = text;
};

/**
 * 1) Pepe's age. Vypište na konzoli smysluplnou oznamovací větu s věkem Pepy, pokud znáte jeho rok narození, 
 * který je uložený v proměnné a pro výpis použijte zřetězení stringů nebo interpolaci. Pro názvy proměnných 
 * používejte smysluplnou angličtinu.
 */
// Solution here
const pepesBirthYear = 2004;
const currentYear = new Date().getFullYear();
const pepesAge = currentYear - pepesBirthYear;
console.log(`Pepe is ${pepesAge} years old. He was born in ${pepesBirthYear}.`);


/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak. 
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32. 
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9. 
 */
// Solution here
const tempInCelsius = 20;
const tempInFahrenheit = (tempInCelsius * 9) / 5 + 32;
console.log(`${tempInCelsius}°C = ${tempInFahrenheit}°F`);

const tempInFahrenheit2 = 68;
const tempInCelsius2 = ((tempInFahrenheit2 - 32) * 5) / 9;
console.log(`${tempInFahrenheit2}°F = ${tempInCelsius2}°C`);


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
const calculateAge = (birthYear) => {
    const age = new Date().getFullYear() - birthYear;
    const resultText = `Pepe is ${age} years old. He was born in ${birthYear}.`;
    console.log(resultText);
    printResult(resultText); // Přidáno pro výpis i na stránku
};

const convertCelsiusToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9) / 5 + 32;
    const resultText = `${celsius}°C = ${fahrenheit}°F`;
    console.log(resultText);
    printResult(resultText); // Přidáno pro výpis i na stránku
};

const convertFahrenheitToCelsius = (fahrenheit) => {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    const resultText = `${fahrenheit}°F = ${celsius}°C`;
    console.log(resultText);
    printResult(resultText); // Přidáno pro výpis i na stránku
};

createButton('task-1', "Úloha 1 (Pepe's age)", () => calculateAge(2004));
createButton('task-2-1', "Úloha 2 (20°C na °F)", () => convertCelsiusToFahrenheit(20));
createButton('task-2-2', "Úloha 2 (68°F na °C)", () => convertFahrenheitToCelsius(68));


/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla. 
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro 
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2); 
 * Pozor na dělení nulou! 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
// Solution here
const calculatePercentage = (a, b) => {
    if (b === 0) {
        printResult("Chyba: Nelze dělit nulou!");
        return;
    }
    const result = ((a / b) * 100).toFixed(2);
    printResult(`${a} je ${result}% z ${b}.`);
};

createButton('task-4-1', 'Úloha 4 (Procenta: 21 z 42)', () => calculatePercentage(21, 42));
createButton('task-4-2', 'Úloha 4 (Dělení nulou)', () => calculatePercentage(21, 0));


/**
 * 5) Kdo s koho. Vytvořte funkci, která vezme 2 číselné argumenty a vypíše, který z nich je větší, do předem vytvořeného 
 * místa na strácne. Pokud se čísla rovnají, vypište, že se rovnají. 
 * 
 * Vyzkoušejte funkčnost pro celá čísla, desetinná čísla, zlomky, atd., tj. vytvoříte tlačítko s událostí pro každou
 * kombinaci argumentů a zkuste ji párkrát zavolat kliknutím na toto tlačítko. Tlačítka vytvářejte podle pokynu v 
 * úloze č. 3. Argumenty pro volání funkce zadávejte staticky.
 */
// Solution here
const compareNumbers = (a, b) => {
    if (a > b) {
        printResult(`Číslo ${a} je větší než ${b}.`);
    } else if (a < b) {
        printResult(`Číslo ${b} je větší než ${a}.`);
    } else {
        printResult(`Čísla ${a} a ${b} se rovnají.`);
    }
};

createButton('task-5-1', 'Úloha 5 (Celá: 10 vs 5)', () => compareNumbers(10, 5));
createButton('task-5-2', 'Úloha 5 (Desetinná: 3.14 vs 3.141)', () => compareNumbers(3.14, 3.141));
createButton('task-5-3', 'Úloha 5 (Zlomky: 1/2 vs 2/4)', () => compareNumbers(1/2, 2/4));
createButton('task-5-4', 'Úloha 5 (Shoda: 10 vs 10)', () => compareNumbers(10, 10));


/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší 
 * nebo rovno 730, včetě nuly. Používejte for cyklus. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here
const printMultiplesOf13 = () => {
    let resultText = '';
    for (let i = 0; i <= 730; i += 13) {
        resultText += i + (i + 13 <= 730 ? ', ' : '');
    }
    printResult(`Násobky 13: ${resultText}`);
};

createButton('task-6', 'Úloha 6 (Násobky 13)', printMultiplesOf13);


/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu. 
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
const calculateCircleArea = (radius) => {
    const area = Math.PI * Math.pow(radius, 2);
    printResult(`Obsah kružnice s poloměrem ${radius} je ${area.toFixed(2)}.`);
};

createButton('task-7', 'Úloha 7 (Obsah kružnice r=5)', () => calculateCircleArea(5));


/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
const calculateConeVolume = (height, radius) => {
    const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;
    printResult(`Objem kuželu (v=${height}, r=${radius}) je ${volume.toFixed(2)}.`);
};

createButton('task-8', 'Úloha 8 (Objem kuželu v=10, r=4)', () => calculateConeVolume(10, 4));


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
    const isValid = (a + b > c) && (a + c > b) && (b + c > a);
    printResult(`Strany: a=${a}, b=${b}, c=${c}. Lze postavit trojúhelník? ${isValid ? 'Ano (true)' : 'Ne (false)'}`);
    return isValid;
};

createButton('task-9-1', 'Úloha 9 (Validní trojúhelník 3,4,5)', () => isTriangle(3, 4, 5));
createButton('task-9-2', 'Úloha 9 (Nevalidní trojúhelník 1,2,10)', () => isTriangle(1, 2, 10));


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
const calculateHeroicTriangleArea = (a, b, c) => {
    // - krok 1.1 - pomocí selektoru vyberte container pro výpis výsledků a uložte ho do proměnné
    const resultsContainer = document.querySelector('#results');
    
    // - krok 1.2 - zvalidujte vstupní argumenty pomocí funkce z úlohy č. 9
    const isValid = (a + b > c) && (a + c > b) && (b + c > a); 
    
    if (!isValid) {
        // - v případě nevalidních hodnot vypište chybovou hlášku na místo pro výpis výsledků a funkci ukončete
        resultsContainer.innerText = `Chyba: Z délek ${a}, ${b}, ${c} nelze sestrojit trojúhelník.`;
        return;
    }
    
    // - v případě validních hodnot pokračujte s výpočtem
    // - krok 1.3 - spočítejte obsah trojúhelníku podle Heronovy vzorce a výsledek uložte do proměnné
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
    // - krok 1.4 - vypište výsledek na místo pro výpis výsledků
    resultsContainer.innerText = `Obsah trojúhelníka o stranách ${a}, ${b}, ${c} je ${area.toFixed(2)}.`;
};

// - krok 2 - vytvořte tlačítko
// - krok 3 - nabindujte na toto tlačítko callback, ve kterém zavoláte implementovanou funkci pro výpočet a výpis výsledků
// - krok 4 - tlačítko umístěte na stránku
createButton('task-10-1', 'Úloha 10 (Obsah Heronova trojuhelníku: 5, 5, 6)', () => calculateHeroicTriangleArea(5, 5, 6));
createButton('task-10-2', 'Úloha 10 (Neplatný Heronův trojuhelník: 1, 2, 8)', () => calculateHeroicTriangleArea(1, 2, 8));

// - krok 5 - otestujte řešení klikáním na tlačítko