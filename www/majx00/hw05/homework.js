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