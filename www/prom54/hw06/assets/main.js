/**
 * Long live Sparta! Vytvořte funkci, která vyřeší Caesarovu širfu. Funkce dostane 
 * na vstup zašifrovaný text a také hodnotu, která byla použita při šifrování, a pak 
 * vrátí dešifrovaný text. Předpokládejte pouze anglickou abecedu s velkými 
 * písmeny, ostatní znaky ignorujte. Poté v konzoli dešifrujte/dešiftujte následující texty.
 * 
 * key used - encrypted text
 *       19 - MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG
 *        5 - YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW
 *       12 - M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ
 * 
 * Následně vytvořte uživatelské rozhraní, ve kterém bude možné zadat zmíněné dvě 
 * vstupní hodnoty (zašifrovaný text a použitý klíč) a po kliknutí na tlačítko 
 * "Decipher!" se na určeném místě zobrazí dešifrovaný text. Rozhraní také vhodně
 * nastylujte.
 */
//         index: 0123456789...
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Pomocná funkce pro posun jednoho znaku
const shiftChar = (c, shift) => {
    const index = alphabet.indexOf(c);
    // Pokud znak není v abecedě (mezery, interpunkce), vrátíme ho beze změny
    if (index === -1) {
        return c;
    }
    // Ošetření záporného posunu a přetočení abecedy
    const newIndex = (index - (shift % 26) + 26) % 26;
    return alphabet.charAt(newIndex);
};

// Pomocná funkce pro posun celého řetězce
const shiftString = (str, shift) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += shiftChar(str.charAt(i), shift);
    }
    return result;
};

// Hlavní dešifrovací funkce
const caesarDecipher = (cipherText, usedKey) => {
    return shiftString(cipherText, usedKey);
};

// --- Testy do konzole ze zadání ---
// Albert Einstein: TWO THINGS ARE INFINITE: THE UNIVERSE AND HUMAN STUPIDITY; AND I'M NOT SURE ABOUT THE UNIVERSE. - ALBERT EINSTEIN
console.log(caesarDecipher("MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG", 19));

// John Archibald Wheeler: THERE IS NO LAW EXCEPT THE LAW THAT THERE IS NO LAW. - JOHN ARCHIBALD WHEELER
console.log(caesarDecipher("YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW", 5));

// Charles Darwin: A MAN WHO DARES TO WASTE ONE HOUR OF TIME HAS NOT DISCOVERED THE VALUE OF LIFE. ― CHARLES DARWIN
console.log(caesarDecipher("M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ", 12));


// --- Propojení s uživatelským rozhraním ---
const cipherTextInput = document.querySelector('#cipher-text');
const keyInput = document.querySelector('#key');
const decipherBtn = document.querySelector('#decipher-btn');
const resultContainer = document.querySelector('#result');

decipherBtn.addEventListener('click', () => {
    const text = cipherTextInput.value;
    const key = parseInt(keyInput.value, 10);

    // Kontrola, zda uživatel zadal platný číselný klíč
    if (isNaN(key)) {
        resultContainer.textContent = 'Prosím zadejte platný číselný klíč.';
        return;
    }

    const decrypted = caesarDecipher(text, key);
    resultContainer.textContent = decrypted;
});