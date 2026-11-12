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

const isLetter = (c) => {
    let check = false
    for (let i=0; i<alphabet.length; i++) {
        if (alphabet[i] === c) {
            check = true
        }
    }
    if (check===true) {
        return(true)
    }
    else {
        return(false)
    }
}

const shiftChar = (c, shift) => {
    if (isLetter(c)===true) {
        let index = alphabet.indexOf(c)
        shift=index-shift
        if (shift<0) {
         shift = shift + 26
     }
        let newChar = alphabet.charAt(shift)
        return(newChar)
    }
    else {
        return(c)
    }
};
const shiftString = (str, shift) => {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        let newChar = shiftChar(letter, shift)
        result += newChar;        
    }
    return(result)

};

console.log(isLetter("C"));
console.log(isLetter("-"));
console.log(shiftChar("A", 1));
console.log(shiftString("BIPK",1));
console.log(shiftString("MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG", 19));
console.log(shiftString("YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW", 5));
console.log(shiftString("M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ", 12));


const decipherButton = document.getElementById('decipher-button');
const textInput = document.getElementById('cipher-text');
const keyInput = document.getElementById('cipher-key');
const outputText = document.getElementById('output-text');

decipherButton.addEventListener('click', () => {
    const textToDecipher = textInput.value;
    const key = keyInput.value;

    const result = shiftString(textToDecipher, key);
    outputText.textContent = result;
});
