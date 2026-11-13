/**
 * Long live Sparta! Vytvořte funkci, která vyřeší Caesarovu šifru. Funkce dostane
 * na vstup zašifrovaný text a také hodnotu, která byla použita při šifrování, a pak
 * vrátí dešifrovaný text. Předpokládejte pouze anglickou abecedu s velkými
 * písmeny, ostatní znaky ignorujte. Poté v konzoli dešifrujte následující texty.
 */

// Abeceda, ve které posouváme znaky
//         index: 0123456789...
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Posun jednoho znaku v abecedě o hodnotu shift
const shiftChar = (c, shift) => {
  const index = alphabet.indexOf(c);

  // Znak, který není v abecedě (mezera, čárka, ...), vrátíme beze změny
  if (index === -1) {
    return c;
  }

  // Modulo zajistí návrat na začátek/konec abecedy (+ 26 kvůli záporným číslům)
  const newIndex = (((index + shift) % 26) + 26) % 26;
  return alphabet.charAt(newIndex);
};

// Posun celého řetězce o hodnotu shift
const shiftString = (str, shift) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += shiftChar(str.charAt(i), shift);
  }
  return result;
};

// Dešifrování Caesarovy šifry: posouváme zpět, tedy o -usedKey
const caesarDecipher = (cipherText, usedKey) => {
  return shiftString(cipherText.toUpperCase(), -usedKey);
};

// albert einstein
console.log(caesarDecipher("MPH MABGZL TKX BGYBGBMX: MAX NGBOXKLX TGW ANFTG LMNIBWBMR; TGW B'F GHM LNKX TUHNM MAX NGBOXKLX. - TEUXKM XBGLMXBG", 19));

// john archibald wheeler
console.log(caesarDecipher("YMJWJ NX ST QFB JCHJUY YMJ QFB YMFY YMJWJ NX ST QFB. - OTMS FWHMNGFQI BMJJQJW", 5));

// charles darwin
console.log(caesarDecipher("M YMZ ITA PMDQE FA IMEFQ AZQ TAGD AR FUYQ TME ZAF PUEOAHQDQP FTQ HMXGQ AR XURQ. ― OTMDXQE PMDIUZ", 12));


// ===== Uživatelské rozhraní =====

const cipherForm = document.querySelector('#cipher-form');
const cipherTextInput = document.querySelector('#cipher-text');
const cipherKeyInput = document.querySelector('#cipher-key');
const result = document.querySelector('#result');

cipherForm.addEventListener('submit', (event) => {
  // Zabráníme obnovení stránky po odeslání formuláře
  event.preventDefault();

  const cipherText = cipherTextInput.value;
  const key = parseInt(cipherKeyInput.value, 10);

  // Kontrola, že je klíč číslo
  if (Number.isNaN(key)) {
    result.textContent = 'Please enter a valid key (number).';
    return;
  }

  // Zobrazení dešifrovaného textu na určeném místě
  result.textContent = caesarDecipher(cipherText, key);
});