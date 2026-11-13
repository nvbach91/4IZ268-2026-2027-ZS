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
console.log( alphabet.length );


const shiftChar = (c, shift) => {
    let charIdx = alphabet.indexOf( c );
    if( charIdx == -1 ) {
        return -1;
    }
    charIdx = (charIdx - shift + 26) % 26;
    return alphabet.charAt(charIdx);
};

const shiftString = (str, shift) => {
    let newStr = "";
    for( let i = 0; i < str.length; i++ ) {
        const ch = shiftChar(str[i], shift);
        if( ch == -1 ) {
            newStr += str[i];
        }
        else {
            newStr += ch;
        }
    }
    return newStr;
};
const caesarDecipher = (cipherText, usedKey) => {
    return shiftString( cipherText, usedKey );
};

// albert einstein
console.log( caesarDecipher("MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG", 19) );

// john archibald wheeler
console.log( caesarDecipher("YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW", 5) );

// charles darwin
console.log( caesarDecipher("M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ", 12) );


const button = document.querySelector( "#button" );
const textInput = document.querySelector( "#text-input" );
textInput.setAttribute( "placeholder", "Input text with capitalized letters only" );
const numberInput = document.querySelector( "#number-input" );
numberInput.setAttribute( "placeholder", "Input used key (numbers only)" );

button.addEventListener( "click", () => {
    console.log( caesarDecipher( textInput.value, numberInput.value ) );
});