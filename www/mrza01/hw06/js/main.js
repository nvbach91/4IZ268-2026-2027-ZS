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


//POSUN CHAR
const shiftChar = (c, shift) => {
    const charIndex = alphabet.indexOf(c);
    if (charIndex === -1) {
        return c;
    }
    let shiftedIndex = charIndex - shift;
    if (shiftedIndex < 0) {
        shiftedIndex = shiftedIndex + alphabet.length;
    }
    return alphabet.charAt(shiftedIndex);
};


//POSUN STRING
const shiftString = (str, shift) => {
    let shiftedText = '';
    for (let i = 0; i < str.length; i++) {
        const currentChar = str.charAt(i);
        shiftedText += shiftChar(currentChar, shift);
    }
return shiftedText; 
};


//CAESAR DECIPHER
    // good to know: 
    //    str.indexOf(c) - get the index of the specified character in the string
    //    str.charAt(i) - get the character at the specified index in the string
    //    String.fromCharCode(x) - get the character based on ASCII value
    //    when the shifted character is out of bound, it goes back to the beginning and count on from there
const caesarDecipher = (cipherText, usedKey) => {
    const upperCaseText = cipherText.toUpperCase();
    const effectiveShift = usedKey % alphabet.length;
    const decipheredText = shiftString(upperCaseText, effectiveShift);
    console.log(decipheredText);
    return decipheredText;
};

// albert einstein
caesarDecipher("MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG", 19);

// john archibald wheeler
caesarDecipher("YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW", 5);

// charles darwin
caesarDecipher("M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ", 12);

//BUTTON
const keyInput = document.querySelector('#key');
const textInput = document.querySelector('#input');
const button = document.querySelector('#Decipher');
const outputDiv = document.querySelector('#output');
button.addEventListener('click', () => {
    const cipherText = textInput.value;
    const key = parseInt(keyInput.value, 10);
    if (cipherText === '' || isNaN(key)) {
        outputDiv.textContent = 'Enter valid key.'
        return;
    }
    const result = caesarDecipher(cipherText, key);
    outputDiv.textContent = result;
});
