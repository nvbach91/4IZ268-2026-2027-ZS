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
const pepesBirthYear = 1998;
const currentYear = 2026;
const pepesAge = currentYear - pepesBirthYear;
console.log(`Pepa se narodil v roce ${pepesBirthYear}, takže mu je ${pepesAge} let.`);



/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak. 
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32. 
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9. 
 */
// Solution here
const temperatureCelsius = 20;
const temperatureFahrenheit = 68;
const celsiusToFahrenheit = temperatureCelsius * 9 / 5 + 32;
const fahrenheitToCelsius = (temperatureFahrenheit - 32) * 5 / 9;
console.log(`${temperatureCelsius}°C = ${celsiusToFahrenheit}°F`);
console.log(`${temperatureFahrenheit}°F = ${fahrenheitToCelsius}°C`);



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
const printAge = (birthYear) => {
    const age = currentYear - birthYear;
    console.log(`Pepa se narodil v roce ${birthYear}, takže mu je ${age} let.`);
};

const printCelsiusToFahrenheit = (celsius) => {
    const fahrenheit = celsius * 9 / 5 + 32;
    console.log(`${celsius}°C = ${fahrenheit}°F`);
};

const printFahrenheitToCelsius = (fahrenheit) => {
    const celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`${fahrenheit}°F = ${celsius.toFixed(1)}°C`);
};

printAge(2000);
printAge(1985);
printCelsiusToFahrenheit(0);
printCelsiusToFahrenheit(37);
printFahrenheitToCelsius(100);
printFahrenheitToCelsius(32);

const tasks = document.querySelector('#tasks');
const results = document.querySelector('#results');

const createButton = (id, text, onClick) => {
    const button = document.createElement('button');
    button.innerText = text;
    button.setAttribute('id', id);
    button.addEventListener('click', onClick);
    tasks.appendChild(button);
};

createButton('task-1', "Úloha 1 (Pepe's age)", () => {
    printAge(1998);
});
createButton('task-2', 'Úloha 2 (°C na °F)', () => {
    printCelsiusToFahrenheit(20);
});
createButton('task-2-f', 'Úloha 2 (°F na °C)', () => {
    printFahrenheitToCelsius(68);
});



/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla. 
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro 
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2); 
 * Pozor na dělení nulou! 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
// Solution here
const getPercentage = (firstNumber, secondNumber) => {
    if (secondNumber === 0) {
        results.innerText = 'Nulou nelze dělit!';
        return;
    }
    const ratio = firstNumber / secondNumber;
    results.innerText = `${firstNumber} je ${(ratio * 100).toFixed(2)}% z ${secondNumber}`;
    return ratio;
};

createButton('task-4', 'Úloha 4 (21 z 42)', () => {
    getPercentage(21, 42);
});
createButton('task-4-zero', 'Úloha 4 (dělení nulou)', () => {
    getPercentage(5, 0);
});



/**
 * 5) Kdo s koho. Vytvořte funkci, která vezme 2 číselné argumenty a vypíše, který z nich je větší, do předem vytvořeného 
 * místa na strácne. Pokud se čísla rovnají, vypište, že se rovnají. 
 * 
 * Vyzkoušejte funkčnost pro celá čísla, desetinná čísla, zlomky, atd., tj. vytvoříte tlačítko s událostí pro každou
 * kombinaci argumentů a zkuste ji párkrát zavolat kliknutím na toto tlačítko. Tlačítka vytvářejte podle pokynu v 
 * úloze č. 3. Argumenty pro volání funkce zadávejte staticky.
 */
// Solution here
const compareNumbers = (firstNumber, secondNumber) => {
    if (firstNumber > secondNumber) {
        results.innerText = `${firstNumber} je větší než ${secondNumber}`;
    } else if (firstNumber < secondNumber) {
        results.innerText = `${secondNumber} je větší než ${firstNumber}`;
    } else {
        results.innerText = `${firstNumber} a ${secondNumber} se rovnají`;
    }
};

createButton('task-5-1', 'Úloha 5 (10 a 7)', () => {
    compareNumbers(10, 7);
});
createButton('task-5-2', 'Úloha 5 (2.5 a 2.75)', () => {
    compareNumbers(2.5, 2.75);
});
createButton('task-5-3', 'Úloha 5 (1/3 a 0.3)', () => {
    compareNumbers(1 / 3, 0.3);
});
createButton('task-5-4', 'Úloha 5 (4 a 8/2)', () => {
    compareNumbers(4, 8 / 2);
});



/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší 
 * nebo rovno 730, včetě nuly. Používejte for cyklus. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here
const printMultiplesOf13 = () => {
    let multiples = '';
    for (let i = 0; i <= 730; i += 13) {
        multiples += `${i} `;
    }
    results.innerText = multiples;
};

createButton('task-6', 'Úloha 6 (násobky 13)', () => {
    printMultiplesOf13();
});



/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu. 
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
const getCircleArea = (radius) => {
    const area = Math.PI * radius * radius;
    results.innerText = `Obsah kružnice s poloměrem ${radius} je ${area.toFixed(2)}`;
    return area;
};

createButton('task-7', 'Úloha 7 (obsah kružnice)', () => {
    getCircleArea(5);
});



/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
const getConeVolume = (height, radius) => {
    const volume = Math.PI * radius * radius * height / 3;
    results.innerText = `Objem kuželu s výškou ${height} a poloměrem ${radius} je ${volume.toFixed(2)}`;
    return volume;
};

createButton('task-8', 'Úloha 8 (objem kuželu)', () => {
    getConeVolume(10, 3);
});



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
    const result = a + b > c && a + c > b && b + c > a;
    results.innerText = `Strany ${a}, ${b}, ${c} - lze postavit trojúhelník: ${result ? 'ano' : 'ne'}`;
    return result;
};

createButton('task-9-1', 'Úloha 9 (3, 4, 5)', () => {
    isTriangle(3, 4, 5);
});
createButton('task-9-2', 'Úloha 9 (1, 2, 10)', () => {
    isTriangle(1, 2, 10);
});



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

const getTriangleArea = (a, b, c) => {
    if (!isTriangle(a, b, c)) {
        results.innerText = `Ze stran ${a}, ${b}, ${c} nelze postavit trojúhelník.`;
        return;
    }
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    results.innerText = `Obsah trojúhelníku se stranami ${a}, ${b}, ${c} je ${area.toFixed(2)}`;
    return area;
};

createButton('task-10-1', 'Úloha 10 (3, 4, 5)', () => {
    getTriangleArea(3, 4, 5);
});
createButton('task-10-2', 'Úloha 10 (1, 2, 10)', () => {
    getTriangleArea(1, 2, 10);
});
