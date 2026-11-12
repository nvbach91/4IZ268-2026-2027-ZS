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
    const index = alphabet.indexOf(c); //c je nějaký char v alphabet, za něj se pak dosadí konkrétní char
    const newIndex = (index + shift + 26) % 26; //
    return alphabet.charAt(newIndex);
};
const shiftString = (str, shift) => {
    // a helper function to shift one entire string inside the 
    // alphabet based on the shift value and return the result
    let result = "";

    for(i = 0; i < str.length; i++) {
        const c = str.charAt(i);

        if(alphabet.indexOf(c) !== -1) {
            result += shiftChar(c, shift);
        } else {
            result += c;
        }
    }

    return result;
};
const caesarDecipher = (cipherText, usedKey) => {
    // your implementation goes here
    return shiftString(cipherText, -usedKey);
    // good to know: 
    //    str.indexOf(c) - get the index of the specified character in the string
    //    str.charAt(i) - get the character at the specified index in the string
    //    String.fromCharCode(x) - get the character based on ASCII value
    //    when the shifted character is out of bound, it goes back to the beginning and count on from there
};

function decipher() {
    const text = document.getElementById("cipherText").value;
    const key = Number(document.getElementById("key").value);

    document.getElementById("result").innerText =
        caesarDecipher(text, key);
}

// albert einstein
caesarDecipher("MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG", 19);

// john archibald wheeler
caesarDecipher("YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW", 5);

// charles darwin
caesarDecipher("M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ", 12);