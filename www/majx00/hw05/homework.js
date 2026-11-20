console.log("Hello, world!");

//1) Pepe's age
/*
const form = document.querySelector('#ageForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
        const answer = () => { 
        console.log("Pepe's age is:", `${pepeAge}`); 
    
};

const bornYear = document.querySelector('#bornYear').value;

const pepeAge = 2026 - bornYear;

const answerhtml = document.querySelector('p');
answerhtml.innerHTML = "Pepe's age is: " + pepeAge;

answer();})
*/

//3) Funkce function fonction funktio.

const buttonPepeAge = document.createElement('button');
buttonPepeAge.innerText = "Uloha 1 (Pepe's age)";
buttonPepeAge.setAttribute('id', 'task-1');
buttonPepeAge.addEventListener('click', () => {
    const bornYear = document.querySelector('#bornYear').value;
    showPepeAge(bornYear);
});

const tasks = document.querySelector('#tasks');
tasks.appendChild(buttonPepeAge);

const showPepeAge = (bornYear) => {
  const pepeAge = 2026 - bornYear;
  console.log(`Pepe is ${pepeAge} years old.`);
};

showPepeAge(1990);


//2) WTF (wow, that's fun)

/*

const calculateCelsius = document.querySelector('#celsia');
const calculateFahrenheit = document.querySelector('#fahrenheiht');

calculateFahrenheit.addEventListener('click', () => {

    const celsia = document.querySelector('#wtfInput').value;
    const CtoF = (celsia * 9/5) + 32;

    console.log(`${celsia}`,"°C =", `${CtoF}`, "°F"); 
    
    const converthtml = document.querySelector('p#wtf');
    
    converthtml.innerHTML = "°C = " + CtoF + "°F";

});

calculateCelsius.addEventListener('click', () => {

    const fahrenheiht = document.querySelector('#wtfInput').value;
    const FtoC = (fahrenheiht - 32) * 5/9;

    console.log(`${fahrenheiht}`,"°F =", `${FtoC}`, "°C"); 
    
    const converthtml = document.querySelector('p#wtf');
    converthtml.innerHTML = "°F = " + FtoC + "°C";
    
});
*/

//3) Funkce function fonction funktio.

const convertCtoF = (celsia) => {
    const CtoF = (celsia * 9/5) + 32;
    console.log(`${celsia}`,"°C =", `${CtoF}`, "°F");
 };

 convertCtoF(20);



 const buttonCtoF = document.createElement('button');
 buttonCtoF.innerText = "Uloha 2 (CtoF)";
 buttonCtoF.setAttribute('id', 'task-2a');

 buttonCtoF.addEventListener('click', () => {
    const celsia = document.querySelector('#wtfInput').value;
    convertCtoF(celsia);
});
tasks.appendChild(buttonCtoF);

const convertFtoC = (fahrenheiht) => {
    const FtoC = (fahrenheiht - 32) * 5/9;
    console.log(`${fahrenheiht}`,"°F =", `${FtoC}`, "°C");
 };

 convertFtoC(68);


 const buttonFtoC = document.createElement('button');
 buttonFtoC.innerText = "Uloha 2 (FtoC)";
 buttonFtoC.setAttribute('id', 'task-2b');

 buttonFtoC.addEventListener('click', () => {
    const fahrenheiht = document.querySelector('#wtfInput').value;
    convertFtoC(fahrenheiht);
});
tasks.appendChild(buttonFtoC);


// 4) %CENSORED%.

const percentage = (a,b) => {
    if (b === 0) {
    return "error";}
    return ((a/b)*100).toFixed(2);

};
const percentageResult = percentage(21,42);
console.log(percentage(5, 0));
console.log(percentageResult);


const buttonPercentage = document.createElement('button');
buttonPercentage.innerText = "Uloha 4 (percentage)";
buttonPercentage.setAttribute('id', 'task-4');

buttonPercentage.addEventListener('click', () => {
    //const a = document.querySelector('#percentageA').value;
    //const b = document.querySelector('#percentageB').value;
    const result = percentage(a, b);
});

console.log(percentage(21,42));
tasks.appendChild(buttonPercentage);

// 5) Kdo s koho

/**
 * 5) Kdo s koho. Vytvořte funkci, která vezme 2 číselné argumenty a vypíše, který z nich je větší, do předem vytvořeného 
 * místa na strácne. Pokud se čísla rovnají, vypište, že se rovnají. 
 * 
 * Vyzkoušejte funkčnost pro celá čísla, desetinná čísla, zlomky, atd., tj. vytvoříte tlačítko s událostí pro každou
 * kombinaci argumentů a zkuste ji párkrát zavolat kliknutím na toto tlačítko. Tlačítka vytvářejte podle pokynu v 
 * úloze č. 3. Argumenty pro volání funkce zadávejte staticky.
 */
// Solution here


const compareNumbers = (a,b) => {
    const result = document.querySelector('#number');
     if (a === b ){
            result.innerHTML = `${a} is equal to ${b}`;
        } else if (a < b) {
            result.innerHTML = `${a} is less than ${b}`;
        } else {
            result.innerHTML = `${a} is greater than ${b}`;
        }
};

const buttonCompare = document.querySelector('#compare');

buttonCompare.addEventListener('click', () => {
    const firstnum = Number(document.querySelector('#a').value);
    const secondnum = Number(document.querySelector('#b').value);
    compareNumbers(firstnum, secondnum);
});



/**
 * 6) I can cleary see the pattern. Vytvořte funkci, která vypíše popořadě všechny násobky 13, které jsou menší 
 * nebo rovno 730, včetě nuly. Používejte for cyklus. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3.
 */
// Solution here
const buttonCompareStatic = document.createElement('button');
buttonCompareStatic.innerText = "Uloha 6 (multiples of 13)";
buttonCompareStatic.setAttribute('id', 'task-6');
buttonCompareStatic.addEventListener('click', () => {
    multiples();
});
tasks.appendChild(buttonCompareStatic);

const multiples = () => {
    let multiples13 = '';

    for (let i  = 0 ;i <= 730; i+=13) {
        multiples13 += `${i}, `;
    }
    console.log(multiples13);
    const multipleshtml = document.querySelector('#multiples');
    multipleshtml.innerHTML = multiples13;
}
multiples(); 


/**
 * 7) Around and about. Vytvořte funkci, která vypočte obsah kružnice podle dodaného poloměru v argumentu. 
 *
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here

const buttonCircleArea = document.createElement('button');
buttonCircleArea.innerText = "Uloha 7 (circle area)";
buttonCircleArea.setAttribute('id', 'task-7');
buttonCircleArea.addEventListener('click', () => {

    circleArea(3);
});
tasks.appendChild(buttonCircleArea);

const circleArea = (radius) => {
    const area = Math.PI * radius * radius;
    console.log(`Area of circle with radius ${radius} is: ${area.toFixed(2)}`);
    const areahtml = document.querySelector('#circleResult');
    areahtml.innerHTML = `Area of circle with radius ${radius} is: ${area.toFixed(2)}`;
}
const buttonCalculateArea = document.querySelector('#calculateArea');

buttonCalculateArea.addEventListener('click', () => {
    const radius = Number(document.querySelector('#radius').value);
    circleArea(radius);
});



/**
 * 8) Another dimension. Vytvořte funkci, která vypočte objem kuželu, pokud dostanete na argumentech výšku a poloměr. 
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here





/** 
 * 9) Not sure if triangle, or just some random values. Vytvořte funkci, která rozhodne, zda se z 
 * dodaných 3 délek na argumentu funkce dá postavit trojúhelník, tj. vypíše tyto 3 délky stran a, b, a c
 * a výsledek buď ano/ne, true/yes nebo false/no. Z funkce vraťte hodnotu true/false
 * 
 * Pro testování vytvořte tlačítko s touto funkcí podle pokynu v úloze č. 3. Argumenty pro volání funkce zadávejte 
 * staticky.
 */
// Solution here





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



