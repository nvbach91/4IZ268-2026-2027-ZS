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
const pepeBirthYear = 2000;
const currentYear = new Date().getFullYear();
console.log(`Pepe is ${currentYear - pepeBirthYear} years old.`);

/**
 * 2) WTF (wow, that's fun). Vypište na konzoli teplotu v Fahrenheiht, pokud znáte teplotu v Celsius, a také naopak. 
 * Formát výpisu je: 20°C =  68°F resp. 68°F = 20°C. Opět používejte proměnné. Výpočet probíhá takto:
 *     z C na F: vynásobit 9, vydělit 5 a přičíst 32. 
 *     z F na C: odečíst 32, vynásobit 5 a vydělit 9. 
 */
// Solution here
const celsiusValue = 20;
const fahrenheitValue = 68;
const convertedToFahrenheit = (celsiusValue * 9) / 5 + 32;
const convertedToCelsius = ((fahrenheitValue - 32) * 5) / 9;
console.log(`${celsiusValue}°C = ${convertedToFahrenheit}°F`);
console.log(`${fahrenheitValue}°F = ${convertedToCelsius}°C`);

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
const getPepeAge = (birthYear) => {
    const age = new Date().getFullYear() - birthYear;
    console.log(`Pepe is ${age} years old.`);
    return age;
};

const celsiusToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9) / 5 + 32;
    console.log(`${celsius}°C = ${fahrenheit}°F`);
    return fahrenheit;
};

const fahrenheitToCelsius = (fahrenheit) => {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    console.log(`${fahrenheit}°F = ${celsius}°C`);
    return celsius;
};

getPepeAge(1995);
getPepeAge(2005);
celsiusToFahrenheit(20);
fahrenheitToCelsius(68);

const tasks = document.querySelector('#tasks');

const buttonTask1 = document.createElement('button');
buttonTask1.innerText = "Uloha 1 (Pepe's age)";
buttonTask1.setAttribute('id', 'task-1');
buttonTask1.addEventListener('click', () => {
    getPepeAge(1995);
});
tasks.appendChild(buttonTask1);

const buttonTask2 = document.createElement('button');
buttonTask2.innerText = 'Uloha 2 (WTF)';
buttonTask2.setAttribute('id', 'task-2');
buttonTask2.addEventListener('click', () => {
    celsiusToFahrenheit(20);
    fahrenheitToCelsius(68);
});
tasks.appendChild(buttonTask2);

/**
 * 4) %CENSORED%. Vytvořte funkci, která vezme 2 číselné argumenty a vrátí podíl prvního čísla a druhého čísla. 
 * Výsledek vypište v procentech do předem vytvořeného místa na stránce pro výsledky, např. 21 je 50% z 42. Pro 
 * zkrácení / zaokrouhlení desetinných míst použijte funkci .toFixed(n). Např. var pi = 3.1415926535; pi.toFixed(2); 
 * Pozor na dělení nulou! 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3
 */
// Solution here
const getPercentage = (a, b) => {
    const results = document.querySelector('#results') || document.querySelector('#result');
    if (b === 0) {
        results.textContent = 'Nelze dělit nulou!';
        return;
    }
    const ratio = a / b;
    const percentage = (ratio * 100).toFixed(2);
    results.textContent = `${a} je ${percentage}% z ${b}`;
    return ratio;
};

const buttonTask4 = document.createElement('button');
buttonTask4.innerText = 'Uloha 4 (%CENSORED%)';
buttonTask4.setAttribute('id', 'task-4');
buttonTask4.addEventListener('click', () => {
    getPercentage(21, 42);
});
tasks.appendChild(buttonTask4);

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
    const results = document.querySelector('#results') || document.querySelector('#result');
    if (a > b) {
        results.textContent = `Číslo ${a} je větší než ${b}.`;
    } else if (b > a) {
        results.textContent = `Číslo ${b} je větší než ${a}.`;
    } else {
        results.textContent = `Čísla se rovnají (${a} = ${b}).`;
    }
};

const buttonTask5a = document.createElement('button');
buttonTask5a.innerText = 'Uloha 5 (celá čísla)';
buttonTask5a.setAttribute('id', 'task-5');
buttonTask5a.addEventListener('click', () => {
    compareNumbers(10, 5);
});
tasks.appendChild(buttonTask5a);

const buttonTask5b = document.createElement('button');
buttonTask5b.innerText = 'Uloha 5 (desetinná čísla)';
buttonTask5b.setAttribute('id', 'task-5-2');
buttonTask5b.addEventListener('click', () => {
    compareNumbers(2.5, 3.7);
});
tasks.appendChild(buttonTask5b);

const buttonTask5c = document.createElement('button');
buttonTask5c.innerText = 'Uloha 5 (zlomky)';
buttonTask5c.setAttribute('id', 'task-5-3');
buttonTask5c.addEventListener('click', () => {
    compareNumbers(1 / 4, 1 / 2);
});
tasks.appendChild(buttonTask5c);

const buttonTask5d = document.createElement('button');
buttonTask5d.innerText = 'Uloha 5 (rovnost)';
buttonTask5d.setAttribute('id', 'task-5-4');
buttonTask5d.addEventListener('click', () => {
    compareNumbers(7, 7);
});
tasks.appendChild(buttonTask5d);

/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší 
 * nebo rovno 730, včetě nuly. Používejte for cyklus. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here
const printMultiplesOf13 = () => {
    const results = document.querySelector('#results') || document.querySelector('#result');
    const multiples = [];
    for (let i = 0; i <= 730; i += 13) {
        multiples.push(i);
    }
    const output = multiples.join(', ');
    console.log(output);
    results.textContent = output;
};

const buttonTask6 = document.createElement('button');
buttonTask6.innerText = 'Uloha 6 (I can clearly see the pattern)';
buttonTask6.setAttribute('id', 'task-6');
buttonTask6.addEventListener('click', () => {
    printMultiplesOf13();
});
tasks.appendChild(buttonTask6);

/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu. 
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
const getCircleArea = (radius) => {
    const area = Math.PI * radius * radius;
    const results = document.querySelector('#results') || document.querySelector('#result');
    results.textContent = `Obsah kružnice s poloměrem ${radius} je ${area.toFixed(2)}`;
    return area;
};

const buttonTask7 = document.createElement('button');
buttonTask7.innerText = 'Uloha 7 (Around and about)';
buttonTask7.setAttribute('id', 'task-7');
buttonTask7.addEventListener('click', () => {
    getCircleArea(10);
});
tasks.appendChild(buttonTask7);

/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here
const getConeVolume = (height, radius) => {
    const volume = (1 / 3) * Math.PI * radius * radius * height;
    const results = document.querySelector('#results') || document.querySelector('#result');
    results.textContent = `Objem kuželu o výšce ${height} a poloměru ${radius} je ${volume.toFixed(2)}`;
    return volume;
};

const buttonTask8 = document.createElement('button');
buttonTask8.innerText = 'Uloha 8 (Another dimension)';
buttonTask8.setAttribute('id', 'task-8');
buttonTask8.addEventListener('click', () => {
    getConeVolume(10, 5);
});
tasks.appendChild(buttonTask8);

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
    const isValid = a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a;
    const results = document.querySelector('#results') || document.querySelector('#result');
    results.textContent = `Strany: a = ${a}, b = ${b}, c = ${c} - Lze sestrojit trojúhelník: ${isValid ? 'ano' : 'ne'}`;
    return isValid;
};

const buttonTask9 = document.createElement('button');
buttonTask9.innerText = 'Uloha 9 (Not sure if triangle)';
buttonTask9.setAttribute('id', 'task-9');
buttonTask9.addEventListener('click', () => {
    isTriangle(3, 4, 5);
});
tasks.appendChild(buttonTask9);

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
    const results = document.querySelector('#results') || document.querySelector('#result');
    if (!isTriangle(a, b, c)) {
        results.textContent = 'Zadané strany netvoří platný trojúhelník.';
        return;
    }
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    results.textContent = `Obsah trojúhelníku se stranami a = ${a}, b = ${b}, c = ${c} je ${area.toFixed(2)}`;
    return area;
};

const buttonTask10 = document.createElement('button');
buttonTask10.innerText = 'Uloha 10 (Heroic performance)';
buttonTask10.setAttribute('id', 'task-10');
buttonTask10.addEventListener('click', () => {
    getTriangleArea(3, 4, 5);
});
tasks.appendChild(buttonTask10);
