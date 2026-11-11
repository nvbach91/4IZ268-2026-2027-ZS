
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const shiftChar = (c, shift) => {
    // a helper function to shift one character inside the 
    // alphabet based on the shift value and return the result
    const index = alphabet.indexOf(c);
    if (index === -1) {
        return c; // Ignoruje znaky, které nejsou v abecedě (např. mezery, interpunkci)
    }
    // Dešifrování: posuneme se v abecedě zpět o hodnotu shift.
    // Použijeme modulo 26, abychom ošetřili záporné indexy.
    let newIndex = (index - (shift % 26) + 26) % 26;
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
    // your implementation goes here
    const decrypted = shiftString(cipherText, usedKey);
    console.log(`Key: ${usedKey} | Decrypted: ${decrypted}`);
    return decrypted;
};


const res1 = caesarDecipher("MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG", 19);


const res2 = caesarDecipher("YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW", 5);

const res3 = caesarDecipher("M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ", 12);


document.addEventListener('DOMContentLoaded', () => {
    const decipherBtn = document.getElementById('decipher-btn');
    const cipherInput = document.getElementById('cipher-text');
    const keyInput = document.getElementById('key-input');
    const outputDiv = document.getElementById('output-result');

    if (decipherBtn) {
        decipherBtn.addEventListener('click', () => {
            const text = cipherInput.value;
            const key = parseInt(keyInput.value, 10);

            if (isNaN(key)) {
                outputDiv.textContent = 'Please enter a valid numeric key.';
                return;
            }

            const deciphered = caesarDecipher(text, key);
            outputDiv.textContent = deciphered;
        });
    }
});