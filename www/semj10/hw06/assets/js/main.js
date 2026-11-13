const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const shiftChar = (c, shift) => {
    if (!alphabet.includes(c)) {
        return c;
    }

    const currentIndex = alphabet.indexOf(c);
    let newIndex = (currentIndex - shift) % 26;
    
    if (newIndex < 0) {
        newIndex += 26;
    }

    return alphabet.charAt(newIndex);
};

const shiftString = (str, shift) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i).toUpperCase(); 
        result += shiftChar(char, shift);
    }
    return result;
};

const caesarDecipher = (cipherText, usedKey) => {
    return shiftString(cipherText, usedKey);
};

console.log(caesarDecipher("MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG", 19));
console.log(caesarDecipher("YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW", 5));
console.log(caesarDecipher("M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ", 12));

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("decipher-btn");
    const textInput = document.getElementById("cipher-text");
    const keyInput = document.getElementById("cipher-key");
    const outputDiv = document.getElementById("deciphered-output");

    btn.addEventListener("click", () => {
        const text = textInput.value;
        const key = parseInt(keyInput.value, 10);

        if (isNaN(key)) {
            outputDiv.textContent = "Please enter a valid numeric key.";
            return;
        }

        outputDiv.textContent = caesarDecipher(text, key);
    });
});