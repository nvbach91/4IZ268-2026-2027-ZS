console.log('Ahoj světe');

//úkol č.1
const birthYear = 2002;
const currentYear = 2026;
const age = currentYear - birthYear;

console.log("Pepovi je " + age + " let.");

//úkol č.2
const celsius = 20;
const fahrenheit = (celsius * 9) / 5 + 32;

const celsiusOutput = ((fahrenheit - 32) * 5) / 9;

console.log(celsius + "°C = " + fahrenheit + "°F resp. " + fahrenheit + "°F = " + celsiusOutput + "°C");

//úkol č.3
//pepa
const getPepaAge = (birthYear) => {
    const pepasAge = currentYear - birthYear;
    console.log("Pepovi je " + pepasAge + " let.");
};

const buttonPepasAge = document.createElement('button');
buttonPepasAge.innerText = "Úloha 1 (Pepův věk)";
buttonPepasAge.setAttribute('id', 'task-1');
buttonPepasAge.addEventListener('click', () => {
    getPepaAge(1652);
});

const task1 = document.querySelector('#tasks');
task1.appendChild(buttonPepasAge);

//stupně
const convertTemperature = (celsius) => {
    const fahrenheit = (celsius * 9) / 5 + 32;
    const celsiusOutput = ((fahrenheit - 32) * 5) / 9;
    console.log(celsius + "°C = " + fahrenheit + "°F resp. " + fahrenheit + "°F = " + celsiusOutput + "°C");
};

const buttonDegrees = document.createElement('button');
buttonDegrees.innerText = "Úloha 2 (stupně)";
buttonDegrees.setAttribute('id', 'task-2');
buttonDegrees.addEventListener('click', () => {
    convertTemperature(30);
});

const task2 = document.querySelector('#tasks');
task2.appendChild(buttonDegrees);

//úkol č.4

const calculatePercentage = (a, b) => {
    if (b === 0) {
        console.log("Nelze dělit nulou!");
        percentageContainer.innerText = "Nelze dělit nulou!";
    } else {
        const vysledek = (a / b) * 100;
        console.log(a + " je " + vysledek.toFixed(1) + "% z " + b);
        percentageContainer.innerText = a + " je " + vysledek.toFixed(1) + "% z " + b;
    }
};

const buttonPercentage = document.createElement('button');
buttonPercentage.innerText = "Úloha 4 (procenta)";
buttonPercentage.setAttribute('id', 'task-4');
buttonPercentage.addEventListener('click', () => {
    calculatePercentage(10, 7);
});

const percentageContainer = document.createElement('p');
document.querySelector('#results').appendChild(percentageContainer);

const percentageButton = document.querySelector('#tasks');
percentageButton.appendChild(buttonPercentage);

//úkol č.5

const compareContainer = document.createElement('p');
document.querySelector('#results').appendChild(compareContainer);

const compareNumbers = (a, b) => {
    if (a === b) {
        console.log("čísla " + a + " a " + b + " jsou stejná");
        compareContainer.innerText = "čísla " + a + " a " + b + " jsou stejná";
    } else if (a > b) {
        console.log(a + " je větší než " + b);
        compareContainer.innerText = a + " je větší než " + b;
    } else {
        console.log(a + " je menší než " + b);
        compareContainer.innerText = a + " je menší než " + b;
    }
};

const compareButton = document.querySelector('#tasks');

//celá čísla 
const buttonCompareWhole = document.createElement('button');
buttonCompareWhole.innerText = "Úloha 5 (celá čísla)";
buttonCompareWhole.setAttribute('id', 'task-5-whole');
buttonCompareWhole.addEventListener('click', () => {
    compareNumbers(15, 28);
});
compareButton.appendChild(buttonCompareWhole);

//desetinná čísla
const buttonCompareDecimal = document.createElement('button');
buttonCompareDecimal.innerText = "Úloha 5 (desetinná čísla)";
buttonCompareDecimal.setAttribute('id', 'task-5-decimal');
buttonCompareDecimal.addEventListener('click', () => {
    compareNumbers(5.8, 2.7);
});
compareButton.appendChild(buttonCompareDecimal);

//zlomky
const buttonCompareFractions = document.createElement('button');
buttonCompareFractions.innerText = "Úloha 5 (zlomky)";
buttonCompareFractions.setAttribute('id', 'task-5-fractions');
buttonCompareFractions.addEventListener('click', () => {
    compareNumbers(1 / 2, 3 / 4);
});
compareButton.appendChild(buttonCompareFractions);

// stejná čísla 
const buttonCompareEqual = document.createElement('button');
buttonCompareEqual.innerText = "Úloha 5 (rovnost)";
buttonCompareEqual.setAttribute('id', 'task-5-equal');
buttonCompareEqual.addEventListener('click', () => {
    compareNumbers(10, 10);
});
compareButton.appendChild(buttonCompareEqual);

//úkol č.6

const writeMultiple = () => {
    for (let i = 0; 13 * i <= 730; i++) {
        const multiple = 13 * i;
        console.log("násobky 13 jsou " + multiple);
    }
};

const buttonMultiple = document.createElement('button');
buttonMultiple.innerText = "Úloha 6 (násobky)";
buttonMultiple.setAttribute('id', 'task-6');
buttonMultiple.addEventListener('click', () => {
    writeMultiple();
});
const multipleButton = document.querySelector('#tasks');
multipleButton.appendChild(buttonMultiple);

//úkol č.7

const countCircle = (r) => {
    const countC = Math.PI * r * r;
    console.log("obsah kruhu je " + countC.toFixed(2));

};

const buttonCircle = document.createElement('button');
buttonCircle.innerText = "Úloha 7 (obsah kruhu)";
buttonCircle.setAttribute('id', 'task-7');
buttonCircle.addEventListener('click', () => {
    countCircle(2);
});

const circleButton = document.querySelector('#tasks');
circleButton.appendChild(buttonCircle);

//úkol č.8

const countVolume = (r, v) => {
    const countV = 1 / 3 * Math.PI * r * r * v;
    console.log("objem kuželu je " + countV.toFixed(2));

};

const buttonVolume = document.createElement('button');
buttonVolume.innerText = "Úloha 8 (objem kuželu)";
buttonVolume.setAttribute('id', 'task-8');
buttonVolume.addEventListener('click', () => {
    countVolume(2, 5);
});

const volumeButton = document.querySelector('#tasks');
volumeButton.appendChild(buttonVolume);



//úkol č.9

const isTriangle = (a, b, c, logMessage = true) => {
    if (a + b > c && a + c > b && b + c > a) {
        if (logMessage) {
            console.log("Ze stran o délkách " + a + "cm, " + b + "cm, " + c + "cm můžeme sestrojit trojúhelník.");
        }
        return true;
    } else {
        if (logMessage) {
            console.log("Ze stran o délkách " + a + "cm, " + b + "cm, " + c + "cm nelze sestrojit trojúhelník.");
        }
        return false;
    }
};

const buttonTriangle = document.createElement('button');
buttonTriangle.innerText = "Úloha 9 (sestrojení trojúhelníku)";
buttonTriangle.setAttribute('id', 'task-9');
buttonTriangle.addEventListener('click', () => {
    const result = isTriangle(2, 5, 4);
    console.log("Návratová hodnota: " + result);
});

const triangleButton = document.querySelector('#tasks');
triangleButton.appendChild(buttonTriangle);

//úkol č.10
const resultsContainer = document.querySelector('#results');

const calculateTriangleArea = (a, b, c) => {

    if (!isTriangle(a, b, c, false)) {
        console.log("Ze stran o délkách " + a + "cm, " + b + "cm, " + c + "cm " + " nelze sestrojit trojúhelník.");
        resultsContainer.innerText = ("Ze stran o délkách " + a + "cm, " + b + "cm, " + c + "cm " + " nelze sestrojit trojúhelník.");
        return;
    }

    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log("Obsah trojúhelníku o stranách " + a + "cm, " + b + "cm, " + c + "cm " + " je " + area.toFixed(2) + "cm.");
    resultsContainer.innerText = ("Obsah trojúhelníku o stranách " + a + "cm, " + b + "cm, " + c + "cm " + " je " + area.toFixed(2) + "cm.");
};

const buttonHero = document.createElement('button');
buttonHero.innerText = 'Úloha 10 (Heronův vzorec)';
buttonHero.setAttribute('id', 'task-10');
buttonHero.addEventListener('click', () => {
    calculateTriangleArea(3, 5, 5);
});


const tasksContainer = document.querySelector('#tasks');
tasksContainer.appendChild(buttonHero);