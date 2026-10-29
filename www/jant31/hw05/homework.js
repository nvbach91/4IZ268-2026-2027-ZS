const tasks = document.querySelector('#tasks');
const results = document.querySelector('#results');

console.log('Ahoj světe');

const age = 25;
if (typeof age !== 'undefined') {
    console.log(`Popovi je ${age}`);
}

const fahrenheiht = 99;
const celsius = 24;

console.log(celsius * 9 / 5 + 32);
console.log((fahrenheiht - 32) * 5 / 9);

const helloWorld = () => {
    console.log('Ahoj světe');
    return 'Ahoj světe';
}

const pepasAge = (age) => {
    console.log(`Popovi je ${age}`);
    return `Popovi je ${age}`;
}

const toFahrenheit = (celsius) => {
    const result = celsius * 9 / 5 + 32;
    console.log(result);
    return result;
}

const toCelsius = (fahrenheiht) => {
    const result = (fahrenheiht - 32) * 5 / 9;
    console.log(result);
    return result;
}

helloWorld();
helloWorld();

pepasAge(22);
pepasAge(99);
pepasAge(32);

toFahrenheit(43);
toFahrenheit(120);
toFahrenheit(-2);

toCelsius(300);
toCelsius(60);
toCelsius(-10);

const buttonHello = document.createElement('button');
buttonHello.innerText = 'Say hello';
buttonHello.setAttribute('id', 'task-0');
buttonHello.addEventListener('click', () => {
    const resHello = document.createElement('div');
    resHello.innerText = helloWorld();
    results.appendChild(resHello);
});
tasks.appendChild(buttonHello);

const buttonPepa = document.createElement('button');
buttonPepa.innerText = 'vek pepy je?';
buttonPepa.setAttribute('id', 'task-1');
buttonPepa.addEventListener('click', () => {
    const resPepa = document.createElement('div');
    resPepa.innerText = pepasAge(22);
    results.appendChild(resPepa);
});
tasks.appendChild(buttonPepa);

const buttonTofahrnheit = document.createElement('button');
buttonTofahrnheit.innerText = 'Kolik je fahrnheitu kdyz je 22C?';
buttonTofahrnheit.setAttribute('id', 'task-2');
buttonTofahrnheit.addEventListener('click', () => {
    const resFahr = document.createElement('div');
    resFahr.innerText = toFahrenheit(22);
    results.appendChild(resFahr);
});
tasks.appendChild(buttonTofahrnheit);

const buttonToCelsius = document.createElement('button');
buttonToCelsius.innerText = 'Kolik je fahrnheitu kdyz je 22F?';
buttonToCelsius.setAttribute('id', 'task-3');
buttonToCelsius.addEventListener('click', () => {
    const resCels = document.createElement('div');
    resCels.innerText = toCelsius(22);
    results.appendChild(resCels);
});
tasks.appendChild(buttonToCelsius);

const percentage = (num1, num2) => {
    if (num2 === 0) return "Nulou nelze dělit";
    let percent = (num1 / num2) * 100;
    percent = percent.toFixed(2);
    return `${num1} je ${percent} % z ${num2}`;
}

const buttonPercentage = document.createElement('button');
buttonPercentage.innerText = 'Kolik procent je 38 z 89?';
buttonPercentage.setAttribute('id', 'task-4');
buttonPercentage.addEventListener('click', () => {
    const resPercentage = document.createElement('div');
    resPercentage.innerText = percentage(38, 89);
    results.appendChild(resPercentage);
});
tasks.appendChild(buttonPercentage);

const whoBigger = (num1, num2) => {
    if (num1 > num2) {
        return `cislo ${num1} je vetsi nez ${num2}`;
    } else if (num2 > num1) {
        return `cislo ${num2} je vetsi nez ${num1}`;
    } else {
        return `cisla jsou stejna`;
    }
}

const buttonWhoBigger1 = document.createElement('button');
buttonWhoBigger1.innerText = 'Ktere cislo je vetsi? 33, 88';
buttonWhoBigger1.setAttribute('id', 'task-5-1');
buttonWhoBigger1.addEventListener('click', () => {
    const resWhoBigger1 = document.createElement('div');
    resWhoBigger1.innerText = whoBigger(33, 88);
    results.appendChild(resWhoBigger1);
});
tasks.appendChild(buttonWhoBigger1);

const buttonWhoBigger2 = document.createElement('button');
buttonWhoBigger2.innerText = 'Ktere cislo je vetsi? 90, 10';
buttonWhoBigger2.setAttribute('id', 'task-5-2');
buttonWhoBigger2.addEventListener('click', () => {
    const resWhoBigger2 = document.createElement('div');
    resWhoBigger2.innerText = whoBigger(90, 10);
    results.appendChild(resWhoBigger2);
});
tasks.appendChild(buttonWhoBigger2);

const buttonWhoBigger3 = document.createElement('button');
buttonWhoBigger3.innerText = 'Ktere cislo je vetsi? 22, 22';
buttonWhoBigger3.setAttribute('id', 'task-5-3');
buttonWhoBigger3.addEventListener('click', () => {
    const resWhoBigger3 = document.createElement('div');
    resWhoBigger3.innerText = whoBigger(22, 22);
    results.appendChild(resWhoBigger3);
});
tasks.appendChild(buttonWhoBigger3);

const printMultiplesOf13 = () => {
    let output = "nasobky 13 do 730: ";
    for (let i = 0; i <= 730; i = i + 13) {
        output += i + " ";
    }
    return output;
}

const btnPattern = document.createElement('button');
btnPattern.innerText = 'Vypis nasobky 13';
btnPattern.setAttribute('id', 'task-6');
btnPattern.addEventListener('click', () => {
    const resPattern = document.createElement('div');
    resPattern.innerText = printMultiplesOf13();
    results.appendChild(resPattern);
});
tasks.appendChild(btnPattern);

const circleArea = (radius) => {
    if (radius < 0)
        return "polomer nemuze byt mensi nez 0";
    return Math.PI * Math.pow(radius, 2);
}

const btnCircleArea = document.createElement('button');
btnCircleArea.innerText = 'obsah kruznice, polomer 15';
btnCircleArea.setAttribute('id', 'task-7');
btnCircleArea.addEventListener('click', () => {
    const resCircleArea = document.createElement('div');
    resCircleArea.innerText = circleArea(15);
    results.appendChild(resCircleArea);
});
tasks.appendChild(btnCircleArea);

const coneVolume = (height, radius) => {
    if (radius < 0)
        return "polomer nemuze byt mensi nez 0";
    if (height < 0)
        return 'vyska musi byt vetsi nez 0';
    return (Math.PI * Math.pow(radius, 2) * height) / 3;
}

const btnConeVolume = document.createElement('button');
btnConeVolume.innerText = 'obsah kuzele, polomer 10, vyska 6';
btnConeVolume.setAttribute('id', 'task-8');
btnConeVolume.addEventListener('click', () => {
    const resConeVolume = document.createElement('div');
    resConeVolume.innerText = coneVolume(6, 10);
    results.appendChild(resConeVolume);
});
tasks.appendChild(btnConeVolume);

const isItTriangle = (a, b, c) => {
    if (a <= 0 || b <= 0 || c <= 0)
        return "toto nemuze byt trojuhelnik, strana nesmi byt nulova nebo zaporna";
    return (a + b > c) && (b + c > a) && (a + c > b);
}

const btnTriangle1 = document.createElement('button');
btnTriangle1.innerText = 'trojuhelnik 4,5,8';
btnTriangle1.setAttribute('id', 'task-9-1');
btnTriangle1.addEventListener('click', () => {
    const resTriangle1 = document.createElement('div');
    resTriangle1.innerText = `strany 4,5,8 tvori trojuhelnik: ${isItTriangle(4, 5, 8)}`;
    results.appendChild(resTriangle1);
});
tasks.appendChild(btnTriangle1);

const btnTriangle2 = document.createElement('button');
btnTriangle2.innerText = 'trojuhelnik 4,5,9';
btnTriangle2.setAttribute('id', 'task-9-2');
btnTriangle2.addEventListener('click', () => {
    const resTriangle2 = document.createElement('div');
    resTriangle2.innerText = `strany 4,5,9 tvori trojuhelnik: ${isItTriangle(4, 5, 9)}`;
    results.appendChild(resTriangle2);
});
tasks.appendChild(btnTriangle2);

const heronArea = (a, b, c) => {
    if (!isItTriangle(a, b, c))
        return "Neni to trojuhelnik nemuzu pocitat";
    const s = (a + b + c) / 2;
    const S = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return S;
}

const btnHeron1 = document.createElement('button');
btnHeron1.innerText = 'heron 4,5,9';
btnHeron1.setAttribute('id', 'task-10-1');
btnHeron1.addEventListener('click', () => {
    const resHeron = document.createElement('div');
    resHeron.innerText = `strany 4,5,9 obsah pomoci herona: ${heronArea(4, 5, 9)}`;
    results.appendChild(resHeron);
});
tasks.appendChild(btnHeron1);

const btnHeron2 = document.createElement('button');
btnHeron2.innerText = 'heron 4,5,8';
btnHeron2.setAttribute('id', 'task-10-2');
btnHeron2.addEventListener('click', () => {
    const resHeron = document.createElement('div');
    resHeron.innerText = `strany 4,5,8 obsah pomoci herona: ${heronArea(4, 5, 8)}`;
    results.appendChild(resHeron);
});
tasks.appendChild(btnHeron2);