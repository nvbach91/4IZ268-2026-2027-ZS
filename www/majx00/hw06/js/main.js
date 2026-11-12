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
    const index = alphabet.indexOf(c);

    if (index === -1) {
        return c;
    }
  

    //console.log(`index of ${c} is ${index}`);

    let newIndex = index - shift;

    //console.log(`index of ${c} is ${newIndex}`);

    if (newIndex < 0) {
        newIndex = 26 + newIndex;
    }
    
    return alphabet.charAt(newIndex);
    
    // a helper function to shift one character inside the 
    // alphabet based on the shift value and return the result
};
const shiftString = (str, shift) => {

    let result = '';

    for (let i = 0; i < str.length; i++) {
        const c = str.charAt(i);
        result += shiftChar(c, shift);
    }

    return result;
    // a helper function to shift one entire string inside the 
    // alphabet based on the shift value and return the result
};
const caesarDecipher = (cipherText, usedKey) => {

    return shiftString(cipherText, usedKey);


    // your implementation goes here
    // good to know: 
    //    str.indexOf(c) - get the index of the specified character in the string
    //    str.charAt(i) - get the character at the specified index in the string
    //    String.fromCharCode(x) - get the character based on ASCII value
    //    when the shifted character is out of bound, it goes back to the beginning and count on from there
};

// albert einstein
console.log(caesarDecipher("MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG", 19));

// john archibald wheeler
console.log(caesarDecipher("YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW", 5));

// charles darwin
console.log(caesarDecipher("M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ", 12));

//console.log(shiftChar('M', 19));
//console.log(shiftChar('U', 12));
//console.log(shiftChar("'", 12));

console.log(shiftString('MPH', 19));
console.log(shiftString("UF'E YADBTUZ' FUYQ.", 12));


const cipherTextInput = document.querySelector('#cipher-text');
const usedKeyInput = document.querySelector('#used-key');
const decipherButton = document.querySelector('#decipher-button');
const output = document.querySelector('#output');


decipherButton.addEventListener('click', () => {
    
    const cipherText = cipherTextInput.value;
    const usedKey = Number(usedKeyInput.value);

    
    const result = caesarDecipher(cipherText, usedKey);

    
    output.textContent = result;
});