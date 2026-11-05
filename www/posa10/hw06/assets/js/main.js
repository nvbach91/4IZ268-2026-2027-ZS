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
    //const hh = alphabet.charAt(h).replace(c, alphabet.charAt((h + shift) % alphabet.length));
    const shiftedChar = alphabet.charAt((index - shift + alphabet.length) % alphabet.length);

    return shiftedChar;

};
console.log(shiftChar('M', 19));

const shiftString = (str, shift) => {
    // a helper function to shift one entire string inside the 
    // alphabet based on the shift value and return the result
    
    let result = '';
    for (let i = 0; i < str.length; i+=1) {
        result += shiftChar(str[i], shift);
    }
    return result;

};
console.log(shiftString('MPH', 19));

const caesarDecipher = (cipherText, usedKey) => {
    // your implementation goes here
    // good to know: 
    //    str.indexOf(c) - get the index of the specified character in the string
    //    str.charAt(i) - get the character at the specified index in the string
    //    String.fromCharCode(x) - get the character based on ASCII value
    //    when the shifted character is out of bound, it goes back to the beginning and count on from there
    

    let result = '';
    for (let i = 0; i < cipherText.length; i++) {
        const c = cipherText[i];
        if (alphabet.indexOf(c) !== -1) {
            result += shiftChar(c, usedKey);
        } else {
            result += c;
        }
    } return result;

}

console.log(caesarDecipher('MPH', 19));

// albert einstein
console.log(caesarDecipher("MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG", 19));

// john archibald wheeler
console.log(caesarDecipher("YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW", 5));

// charles darwin
console.log(caesarDecipher("M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ", 12));

const decipherButton = document.querySelector('button');
const keyUsed = document.querySelector('input[name="key-used"]');
const encryptedArea = document.querySelector('textarea');
const decipheredText = document.querySelector('#deciphered-text');
decipheredText.classList.add('text-area');
decipheredText.innerHTML = 'Decrypted text appears here...';
console.log(decipherButton, encryptedArea, keyUsed, decipheredText);

decipherButton.addEventListener('click', (e) => {
    e.preventDefault();
    const encryptedAreaValue = encryptedArea.value;
    const keyUsedValue = keyUsed.value;
    console.log(caesarDecipher(encryptedAreaValue, keyUsedValue));
    decipheredText.classList.remove('text-area');
    decipheredText.classList.add('text');
    decipheredText.innerHTML = `${caesarDecipher(encryptedAreaValue, keyUsedValue)}`;
});

