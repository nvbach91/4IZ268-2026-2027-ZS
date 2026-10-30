//0123456789012
//2109876543210
const text = 'Barrack Obama';
const textLength = text.length;
const character = text[2];
const foundTextIndex = text.lastIndexOf('a');

const partOne = text.slice(0, 7);
const partTwo = text.slice(8);
const remainingPart = text.slice(-5);

const replacedText = text.replace('Barrack', 'Michelle');
const replacedTextByRegularExpression = text.replace(/a/g, 'X');

const lowerCaseText = text.toLowerCase();
const upperCaseText = text.toUpperCase();

const tokens = text.split(' ');
const sentence = tokens.join('/');
const someTextWithWhiteSpaces = '   some text about  spaces   ';
const cleanedText = someTextWithWhiteSpaces.trim();


console.log({ text });

console.log({
    someTextWithWhiteSpaces,
    cleanedText,
    sentence,
    tokens,
    lowerCaseText,
    upperCaseText,
    replacedTextByRegularExpression,
    replacedText,
    remainingPart,
    partOne,
    partTwo,
    textLength,
    character,
    foundTextIndex,
});