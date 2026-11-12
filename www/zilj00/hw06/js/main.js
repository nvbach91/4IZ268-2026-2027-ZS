const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const shiftChar = (c, shift) => {
    const index = alphabet.indexOf(c);
    if (index === -1) {
        return c;
    }
    const alphabetLength = alphabet.length;
    const shiftedIndex = (((index + shift) % alphabetLength) + alphabetLength) % alphabetLength;
    return alphabet.charAt(shiftedIndex);
};

const shiftString = (str, shift) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += shiftChar(str.charAt(i), shift);
    }
    return result;
};

const caesarDecipher = (cipherText, usedKey) => {
    return shiftString(cipherText, -usedKey);
};


const form = document.getElementById('cipher-form');
const cipherTextInput = document.getElementById('cipher-text');
const cipherKeyInput = document.getElementById('cipher-key');
const outputElement = document.getElementById('output');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = cipherTextInput.value;
    const key = parseInt(cipherKeyInput.value, 10) || 0;
    outputElement.textContent = caesarDecipher(text, key);
});

console.log(caesarDecipher("MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG", 19));
console.log(caesarDecipher("YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW", 5));
console.log(caesarDecipher("M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ", 12));
