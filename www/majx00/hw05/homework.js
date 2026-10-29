console.log("Hello, world!");

//1) Pepe's age
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


//2) WTF (wow, that's fun)

const calculateCelsius = document.querySelector('#celsia');
const calculateFahrenheit = document.querySelector('#fahrenheiht');

degreesButton.addEventListener('click', () => {

    const celsia = document.querySelector('#celsia').value;
    const CtoF = (celsia * 9/5) + 32;

    const fahrenheiht = document.querySelector('#fahrenheiht').value;
    const FtoC = (fahrenheiht - 32) * 5/9;
     
    }

const converthtml = document.querySelector('p#wtf');
converthtml.innerHTML = "Fahrenheiht = " + celsia + "°C";
converthtml.innerHTML = "Celsius = " + fahrenheiht + "°F";

)