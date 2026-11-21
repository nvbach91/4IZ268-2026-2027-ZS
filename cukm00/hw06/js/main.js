const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const shiftChar = (c, shift) => {
    const index = alphabet.indexOf(c);
    if (index === -1) {
        return c;
    }
    const shiftedIndex = (((index + shift) % alphabet.length) + alphabet.length) % alphabet.length;
    return alphabet.charAt(shiftedIndex);
};

const shiftString = (str, shift) => {
    let result = '';
    for (let i = 0; i < str.length; i += 1) {
        result += shiftChar(str.charAt(i), shift);
    }
    return result;
};

const caesarDecipher = (cipherText, usedKey) => {
    const decipheredText = shiftString(cipherText, -usedKey);
    console.log(decipheredText);
    return decipheredText;
};

caesarDecipher("MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG", 19);

caesarDecipher("YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW", 5);

caesarDecipher("M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ", 12);

const cipherForm = document.querySelector('#cipher-form');
const cipherTextInput = document.querySelector('#cipher-text');
const cipherKeyInput = document.querySelector('#cipher-key');
const decipheredOutput = document.querySelector('#deciphered-output');

cipherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const encryptedText = cipherTextInput.value;
    const key = Number(cipherKeyInput.value);

    if (!encryptedText || Number.isNaN(key) || cipherKeyInput.value === '') {
        decipheredOutput.innerText = 'Please enter both encrypted text and a valid numeric key.';
        return;
    }

    const deciphered = caesarDecipher(encryptedText, key);
    decipheredOutput.innerText = deciphered;
});