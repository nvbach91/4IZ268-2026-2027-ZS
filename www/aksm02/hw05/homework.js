console.log("Hello, World!");

const tasks = document.querySelector("#tasks");
const results = document.querySelector("#results");

const createButton = (id, text, onClickCallback) => {
const button = document.createElement("button");
button.id = id;
button.textContent = text;
button.addEventListener("click", onClickCallback);
if (tasks) {
    tasks.appendChild(button);
}
return button;
};

const currentYear = new Date().getFullYear();
const pepeBirthYear = 1998;
const pepeAge = currentYear - pepeBirthYear;

console.log(`Pepe is ${pepeAge} years old.`);

const celsiusInput = 20;
const fahrenheitFromCelsius = (celsiusInput * 9) / 5 + 32;
console.log(`${celsiusInput}°C = ${fahrenheitFromCelsius}°F`);

const fahrenheitInput = 68;
const celsiusFromFahrenheit = ((fahrenheitInput - 32) * 5) / 9;
console.log(`${fahrenheitInput}°F = ${celsiusFromFahrenheit}°C`);

const showPepeAge = (birthYear) => {
    const age = new Date().getFullYear() - birthYear;
    const message = `Pepe is ${age} years old.`;
    console.log(message);
    if (results) results.innerText = message;
    return age;
};

const convertCelsiusToFahrenheit = (celsius) => {
    const fahrenheit = (celsius * 9) / 5 + 32;
    const message = `${celsius}°C = ${fahrenheit}°F`;
    console.log(message);
    if (results) results.innerText = message;
    return fahrenheit;
};

const convertFahrenheitToCelsius = (fahrenheit) => {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    const message = `${fahrenheit}°F = ${celsius}°C`;
    console.log(message);
    if (results) results.innerText = message;
    return celsius;
};

showPepeAge(1952);
showPepeAge(2015);
convertCelsiusToFahrenheit(0);
convertCelsiusToFahrenheit(100);
convertFahrenheitToCelsius(45);
convertFahrenheitToCelsius(250);

createButton('task-1', "Task 1 (Pepe's age)", () => {
    showPepeAge(pepeBirthYear);
});

createButton('task-2', "Task 2 (WTF: °C <-> °F)", () => {
    convertCelsiusToFahrenheit(20);
    convertFahrenheitToCelsius(68);
});

const calculatePercentage = (part, whole) => {
    if (whole === 0) {
        const errorMsg = 'Mistake: whole cannot be zero';
        if (results) results.innerText = errorMsg;
        return null;
    }
    const percentage = ((part / whole) * 100).toFixed(2);
    const message = `${part} is ${percentage}% of ${whole}`;
    console.log(message);
    if (results) results.innerText = message;
    return Number(percentage);
};

createButton('task-4', 'Task 4 (%CENSORED%)', () => {
    calculatePercentage(21, 42);
});

const compareNumbers = (a, b) => {
    let message = '';
    if (a > b) {
        message = `${a} is greater than ${b}.`;
    } else if (b > a) {
        message = `${b} is greater than ${a}.`;
    } else {
        message = `${a} and ${b} are equal.`;
    }
    console.log(message);
    if (results) results.innerText = message;
};

createButton('task-5-integers', 'Task 5 (Integers: 10 and 5)', () => {
    compareNumbers(10, 5);
});

createButton('task-5-decimals', 'Task 5 (Decimals: 3.14 and 3.1415)', () => {
    compareNumbers(3.14, 3.1415);
});

createButton('task-5-fractions', 'Task 5 (Fractions: 3/4 and 6/8)', () => {
    compareNumbers(3 / 4, 6 / 8);
});

const printMultiplesOfThirteen = () => {
    const multiples = [];
    for (let i = 0; i <= 730; i += 13) {
        multiples.push(i);
    }
    const output = multiples.join(', ');
    console.log(output);
    if (results) results.innerText = `Multiples of 13 up to 730:\n${output}`;
};

createButton('task-6', 'Task 6 (Multiples of 13)', () => {
    printMultiplesOfThirteen();
});

const calculateCircleArea = (radius) => {
    if (radius < 0) {
        const errorMsg = 'Radius of the circle cannot be negative';
        if (results) results.innerText = errorMsg;
        return null;
    }
    const area = (Math.PI * Math.pow(radius, 2)).toFixed(2);
    const message = `The area of the circle with radius r=${radius} is ${area}`;
    console.log(message);
    if (results) results.innerText = message;
    return Number(area);
};

createButton('task-7', 'Task 7 (Circle Area, r=5)', () => {
    calculateCircleArea(5);
});

const calculateConeVolume = (radius, height) => {
    if (radius < 0 || height < 0) {
        const errorMsg = 'The dimensions of the cone must be positive values';
        if (results) results.innerText = errorMsg;
        return null;
    }
    const volume = ((1 / 3) * Math.PI * Math.pow(radius, 2) * height).toFixed(2);
    const message = `The volume of the cone with radius r=${radius} and height h=${height} is ${volume}`;
    console.log(message);
    if (results) results.innerText = message;
    return Number(volume);
};

createButton('task-8', 'Task 8 (Cone Volume, r=3, h=8)', () => {
    calculateConeVolume(3, 8);
});


const isValidTriangle = (a, b, c) => {
    const isPossible = a > 0 && b > 0 && c > 0 &&
        a + b > c &&
        a + c > b &&
        b + c > a;

    const resultText = isPossible ? 'yes (true)' : 'no (false)';
    const message = `Sides [a=${a}, b=${b}, c=${c}] can form a triangle: ${resultText}`;

    console.log(message);
    if (results) results.innerText = message;

    return isPossible;
};

createButton('task-9', 'Task 9 (Triangle Validation: 3, 4, 5)', () => {
    isValidTriangle(3, 4, 5);
});

const calculateTriangleAreaHeron = (a, b, c) => {
    if (!isValidTriangle(a, b, c)) {
        const errorMsg = `Error: The sides [a=${a}, b=${b}, c=${c}] cannot form a valid triangle`;
        if (results) results.innerText = errorMsg;
        return null;
    }
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);
    const message = `The area of the triangle [a=${a}, b=${b}, c=${c}] according to Heron's formula is ${area}`;
    console.log(message);
    if (results) results.innerText = message;
    return Number(area);
};

createButton('task-10', 'Task 10 (Triangle Area: 3, 4, 5)', () => {
    calculateTriangleAreaHeron(3, 4, 5);
});