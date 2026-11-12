const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const shiftChar = (c, shift) => {
    const index = alphabet.indexOf(c);
    if (index === -1) return c;
    
    let newIndex = (index - (shift % 26)) % 26;
    if (newIndex < 0) {
        newIndex += 26;
    }
    
    return alphabet.charAt(newIndex);
};

const shiftString = (str, shift) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += shiftChar(str.charAt(i), shift);
    }
    return result;
};

const caesarDecipher = (cipherText, usedKey) => {
    return shiftString(cipherText, usedKey);
};

console.log(caesarDecipher("MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG", 19));
console.log(caesarDecipher("YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW", 5));
console.log(caesarDecipher("M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ", 12));

window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('decipher-btn');
    const inputTxt = document.getElementById('cipher-text');
    const inputKey = document.getElementById('cipher-key');
    const output = document.getElementById('output');

    if (btn) {
        btn.addEventListener('click', () => {
            const text = inputTxt.value.toUpperCase(); 
            const key = parseInt(inputKey.value, 10);
            
            if (!isNaN(key)) {
                output.textContent = caesarDecipher(text, key);
            } else {
                output.textContent = "PROSÍM ZADEJTE PLATNÝ KLÍČ.";
            }
        });
    }
});