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
const pepeBirthYear = 1998;
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
const tempCelsius = 20;
const convertedToFahrenheit = (tempCelsius * 9) / 5 + 32;
console.log(`${tempCelsius}°C = ${convertedToFahrenheit}°F`);

const tempFahrenheit = 68;
const convertedToCelsius = ((tempFahrenheit - 32) * 5) / 9;
console.log(`${tempFahrenheit}°F = ${convertedToCelsius}°C`);


/**
 * 3) Funkce function fonction funktio. Vemte předchozí úlohy a udělejte z nich funkce. Tj. vytvoříte funkce, 
 * které přijímají argumenty, a na základě argumentů po zavolání vypíše výsledek na konzoli. 
 * Párkrát zavolejte tyto funkce s různými argumenty. V konzoli také vyzkoušejte, zda fungují vaše funkce. 
 */
// Solution here
const calculateAge = (birthYear) => {
    const age = new Date().getFullYear() - birthYear;
    console.log(`Pepe is ${age} years old.`);
};

const convertTemperature = (celsius, fahrenheit) => {
    const calcF = (celsius * 9) / 5 + 32;
    const calcC = ((fahrenheit - 32) * 5) / 9;
    console.log(`${celsius}°C = ${calcF}°F`);
    console.log(`${fahrenheit}°F = ${calcC}°C`);
};

calculateAge(1998);
calculateAge(2005);
convertTemperature(30, 86);

const tasks = document.querySelector('#tasks');
const results = document.querySelector('#results');

// Tlačítko pro úlohu 1
const buttonTask1 = document.createElement('button');
buttonTask1.innerText = "Úloha 1 (Pepe's age)";
buttonTask1.setAttribute('id', 'task-1');
buttonTask1.addEventListener('click', () => {
    calculateAge(1998);
});
tasks.appendChild(buttonTask1);

// Tlačítko pro úlohu 2
const buttonTask2 = document.createElement('button');
buttonTask2.innerText = "Úloha 2 (WTF)";
buttonTask2.setAttribute('id', 'task-2');
buttonTask2.addEventListener('click', () => {
    convertTemperature(20, 68);
});
tasks.appendChild(buttonTask2);


/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla. 
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro 
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2); 
 * Pozor na dělení nulou! 
 */
// Solution here
const calculatePercentage = (num1, num2) => {
    if (num2 === 0) {
        results.innerText = "Nelze dělit nulou!";
        return;
    }
    const percentage = ((num1 / num2) * 100).toFixed(2);
    results.innerText = `${num1} je ${percentage}% z ${num2}`;
};

const buttonTask4 = document.createElement('button');
buttonTask4.innerText = "Úloha 4 (%CENSORED%)";
buttonTask4.setAttribute('id', 'task-4');
buttonTask4.addEventListener('click', () => {
    calculatePercentage(21, 42);
});
tasks.appendChild(buttonTask4);


/**
 * 5) Kdo s koho. Vytvořte funkci, která vezme 2 číselné argumenty a vypíše, který z nich je větší, do předem vytvořeného 
 * místa na strácne. Pokud se čísla rovnají, vypište, že se rovnají. 
 */
// Solution here
const compareNumbers = (a, b) => {
    if (a > b) {
        results.innerText = `${a} je větší než ${b}`;
    } else if (b > a) {
        results.innerText = `${b} je větší než ${a}`;
    } else {
        results.innerText = `Čísla se rovnají (${a} a ${b})`;
    }
};

const buttonTask5_1 = document.createElement('button');
buttonTask5_1.innerText = "Úloha 5 (Celá čísla: 10, 5)";
buttonTask5_1.addEventListener('click', () => compareNumbers(10, 5));
tasks.appendChild(buttonTask5_1);

const buttonTask5_2 = document.createElement('button');
buttonTask5_2.innerText = "Úloha 5 (Desetinná: 3.14, 3.15)";
buttonTask5_2.addEventListener('click', () => compareNumbers(3.14, 3.15));
tasks.appendChild(buttonTask5_2);

const buttonTask5_3 = document.createElement('button');
buttonTask5_3.innerText = "Úloha 5 (Zlomky: 1/2, 2/4)";
buttonTask5_3.addEventListener('click', () => compareNumbers(1/2, 2/4));
tasks.appendChild(buttonTask5_3);


/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší 
 * nebo rovno 730, včetě nuly. Používejte for cyklus. 
 */
// Solution here
const printMultiplesOf13 = () => {
    let outputString = "";
    for (let i = 0; i <= 730; i += 13) {
        outputString += i + (i + 13 <= 730 ? ", " : "");
    }
    results.innerText = outputString;
};

const buttonTask6 = document.createElement('button');
buttonTask6.innerText = "Úloha 6 (Násobky 13)";
buttonTask6.setAttribute('id', 'task-6');
buttonTask6.addEventListener('click', () => {
    printMultiplesOf13();
});
tasks.appendChild(buttonTask6);


/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu. 
 */
// Solution here
const calculateCircleArea = (radius) => {
    const area = Math.PI * (radius * radius);
    results.innerText = `Obsah kružnice s poloměrem ${radius} je ${area.toFixed(2)}`;
};

const buttonTask7 = document.createElement('button');
buttonTask7.innerText = "Úloha 7 (Obsah kružnice)";
buttonTask7.setAttribute('id', 'task-7');
buttonTask7.addEventListener('click', () => {
    calculateCircleArea(5);
});
tasks.appendChild(buttonTask7);


/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr. 
 */
// Solution here
const calculateConeVolume = (height, radius) => {
    const volume = (1/3) * Math.PI * (radius * radius) * height;
    results.innerText = `Objem kužele s výškou ${height} a poloměrem ${radius} je ${volume.toFixed(2)}`;
};

const buttonTask8 = document.createElement('button');
buttonTask8.innerText = "Úloha 8 (Objem kužele)";
buttonTask8.setAttribute('id', 'task-8');
buttonTask8.addEventListener('click', () => {
    calculateConeVolume(10, 5);
});
tasks.appendChild(buttonTask8);


/** 
 * 9) Not sure if triangle, or just some random values. Vytvořte funkci, která rozhodne, zda se z 
 * dodaných 3 délek na argumentu funkce dá postavit trojúhelník, tj. vypíše tyto 3 délky stran a, b, a c
 * a výsledek buď ano/ne, true/yes nebo false/no. Z funkce vraťte hodnotu true/false
 */
// Solution here
const isValidTriangle = (a, b, c) => {
    const isValid = (a + b > c) && (a + c > b) && (b + c > a);
    results.innerText = `Strany: ${a}, ${b}, ${c}. Lze sestrojit? ${isValid ? 'Ano (true)' : 'Ne (false)'}`;
    return isValid;
};

const buttonTask9 = document.createElement('button');
buttonTask9.innerText = "Úloha 9 (Validace trojúhelníku)";
buttonTask9.setAttribute('id', 'task-9');
buttonTask9.addEventListener('click', () => {
    isValidTriangle(3, 4, 5);
});
tasks.appendChild(buttonTask9);


/**
 * 10) Heroic performance. Vytvořte funkci, která vypočte a vypíše obsah trojúhelníka podle Heronova vzorce, 
 * tj. funkce dostane délky všech 3 stran. Použijte přitom předchozí validaci v úloze č. 9, tj. počítejte pouze, 
 * když to má smysl. Hint: funkce pro odmocninu je Math.sqrt().
 */
// Solution here
// - krok 1 - vytvořte funkci
const calculateHeronArea = (a, b, c) => {
    // - krok 1.1 - pomocí selektoru vyberte container pro výpis výsledků a uložte ho do proměnné
    const resultsContainer = document.querySelector('#results');
    
    // - krok 1.2 - zvalidujte vstupní argumenty pomocí funkce z úlohy č. 9
    if (!isValidTriangle(a, b, c)) {
        // - v případě nevalidních hodnot vypište chybovou hlášku
        resultsContainer.innerText = "Zadané délky stran netvoří validní trojúhelník.";
        return; // funkci ukončete
    }
    
    // - v případě validních hodnot pokračujte s výpočtem
    // - krok 1.3 - spočítejte obsah trojúhelníku podle Heronovy vzorce a výsledek uložte do proměnné
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
    // - krok 1.4 - vypište výsledek na místo pro výpis výsledků
    resultsContainer.innerText = `Obsah trojúhelníku o stranách ${a}, ${b}, ${c} je ${area.toFixed(2)}`;
};

// - krok 2 - vytvořte tlačítko
const buttonTask10 = document.createElement('button');
buttonTask10.innerText = "Úloha 10 (Heronův vzorec)";
buttonTask10.setAttribute('id', 'task-10');

// - krok 3 - nabindujte na toto tlačítko callback
buttonTask10.addEventListener('click', () => {
    calculateHeronArea(3, 4, 5); // staticky zadané argumenty
});

// - krok 4 - tlačítko umístěte na stránku
tasks.appendChild(buttonTask10);
// - krok 5 - otestujte řešení klikáním na tlačítko (vyřešeno v prohlížeči)