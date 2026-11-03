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



const textInput = document.querySelector('input[name="text"]');
const keyInput = document.querySelector('input[name="key"]');
const decipherButton = document.querySelector('#decipher-button');

console.log(decipherButton);

decipherButton.addEventListener('click', () => {
    console.log('User clicked on submitButton')
    const text = textInput.value;
    const key = keyInput.value;
    console.log(textInput.value, keyInput.value);
    caesarDecipher(textInput.value, Number(keyInput.value))
    document.getElementById("result").textContent = `The deciphered message is\n ${result}`;




});

const shiftChar = (c, shift) => {
    // a helper function to shift one character inside the 
    // alphabet based on the shift value and return the result
};
const shiftString = (str, shift) => {
    // a helper function to shift one entire string inside the 
    // alphabet based on the shift value and return the result
};


//         index: 0123456789...25
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';


let result = "";
const caesarDecipher = (cipherText, usedKey) => {
    result = "";

    const alpLen = alphabet.length;
    var i = "";
    for (i in cipherText) {
        i = cipherText[i]
        let alpInd = alphabet.indexOf(i)

        if (Number(usedKey) < 0) {
            const index = (((alpInd + Number(usedKey)) % alpLen + alpLen) % alpLen);

            if (alpInd == -1) {
                result += i
            }

            else {
                result += alphabet.charAt(index);
            }
        }

        console.log(result);

        if (Number(usedKey) >= 0) {
            if (alpInd == -1) {
                result += i
            }
            else {
                const index = (alpInd + Number(usedKey)) % alpLen
                result += alphabet.charAt(index)
            }
        }

        // your implementation goes here
        // good to know: 
        //    str.indexOf(c) - get the index of the specified character in the string
        //    str.charAt(i) - get the character at the specified index in the string
        //    String.fromCharCode(x) - get the character based on ASCII value
        //    when the shifted character is out of bound, it goes back to the beginning and count on from there
    }
};

// albert einstein
caesarDecipher("MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG", 7); //19

// john archibald wheeler
caesarDecipher("YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW", 21); //5

// charles darwin
caesarDecipher("M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ", 14); 
