const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const shiftChar = (c, shift) => {
    // Získání indexu znaku v abecedě
    const index = alphabet.indexOf(c);
    
    // Pokud znak není v abecedě (mezery, interpunkce), vrátí se nezměněný
    if (index === -1) return c;
    
    // Výpočet nového indexu (dešifrování = posun zpět)
    let newIndex = (index - shift) % 26;
    
    // Pokud je index záporný, přesuneme se na konec abecedy
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
    // Vše převedeme na velká písmena, jak vyžaduje zadání
    return shiftString(cipherText.toUpperCase(), usedKey);
};

// Testy v konzoli (podle zadání)
console.log(caesarDecipher("MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG", 19));
console.log(caesarDecipher("YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW", 5));
console.log(caesarDecipher("M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ", 12));

// Napojení na uživatelské rozhraní
document.addEventListener('DOMContentLoaded', () => {
    const btnDecipher = document.getElementById('btn-decipher');
    const inputText = document.getElementById('cipher-text');
    const inputKey = document.getElementById('cipher-key');
    const outputText = document.getElementById('output-text');

    btnDecipher.addEventListener('click', () => {
        const text = inputText.value;
        const key = parseInt(inputKey.value, 10);

        if (isNaN(key)) {
            outputText.textContent = "Chyba: Zadejte platný číselný klíč.";
            return;
        }

        const decipheredResult = caesarDecipher(text, key);
        outputText.textContent = decipheredResult;
    });
});