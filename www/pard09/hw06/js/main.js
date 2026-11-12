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

const shiftChar = (c, shift) => {
    // a helper function to shift one character inside the
    // alphabet based on the shift value and return the result
    const index = alphabet.indexOf(c);

    // characters outside of A-Z (spaces, punctuation, ...) are ignored = returned unchanged
    if (index === -1) {
        return c;
    }

    // ((x % 26) + 26) % 26 keeps the result in 0..25 even for negative shifts
    const newIndex = (((index + shift) % 26) + 26) % 26;
    return alphabet.charAt(newIndex);
};
const shiftString = (str, shift) => {
    // a helper function to shift one entire string inside the
    // alphabet based on the shift value and return the result
    return str
        .split('')
        .map((c) => shiftChar(c, shift))
        .join('');
};
const caesarDecipher = (cipherText, usedKey) => {
    // to decipher, we shift every letter back by the key that was used for encryption
    return shiftString(cipherText, -usedKey);
};

// albert einstein
console.log(caesarDecipher("MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG", 19));

// john archibald wheeler
console.log(caesarDecipher("YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW", 5));

// charles darwin
console.log(caesarDecipher("M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ", 12));

// ---------- UI ----------

const form = document.getElementById('decipher-form');
const cipherInput = document.getElementById('cipher-text');
const keyInput = document.getElementById('key');
const output = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (keyInput.value.trim() === '' || !Number.isInteger(Number(keyInput.value))) {
        output.textContent = 'Zadejte celočíselný klíč.';
        output.classList.add('error');
        return;
    }

    output.classList.remove('error');
    // the cipher assumes uppercase letters, so normalise the user's input first
    output.textContent = caesarDecipher(cipherInput.value.toUpperCase(), Number(keyInput.value));
});
